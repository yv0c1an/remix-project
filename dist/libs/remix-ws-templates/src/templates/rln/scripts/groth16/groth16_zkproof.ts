import { ethers, BigNumber } from 'ethers'
import { IncrementalMerkleTree } from "@zk-kit/incremental-merkle-tree"
import { poseidon } from "circomlibjs" // v0.0.8

import { ZqField } from 'ffjavascript'
const SNARK_FIELD_SIZE = BigInt('21888242871839275222246405745257275088548364400416034343698204186575808495617')

// Creates the finite field
const Fq = new ZqField(SNARK_FIELD_SIZE)

// eslint-disable-next-line @typescript-eslint/no-var-requires
const snarkjs = require('snarkjs');

const logger = {
  info: (...args) => console.log(...args),
  debug: (...args) => console.log(...args),
  error: (...args) => console.error(...args),
}

/**
 * Recovers secret from two shares
 * @param x1 signal hash of first message
 * @param x2 signal hash of second message
 * @param y1 yshare of first message
 * @param y2 yshare of second message
 * @returns identity secret
 */
function shamirRecovery(x1: bigint, x2: bigint, y1: bigint, y2: bigint): bigint {
  const slope = Fq.div(Fq.sub(y2, y1), Fq.sub(x2, x1))
  const privateKey = Fq.sub(y1, Fq.mul(slope, x1))

  return Fq.normalize(privateKey)
}

function hash(message: any): bigint {
  message = BigNumber.from(message).toTwos(256).toHexString()
  message = ethers.utils.zeroPad(message, 32)
  return BigInt(ethers.utils.keccak256(message)) >> BigInt(8)
}

function hashNullifier(message: any): bigint {
  return BigInt(ethers.utils.keccak256(message)) >> BigInt(8)
}

async function prove (signals, wasm, wtns, r1cs, zkey_final, vKey) {
  console.log('calculate')
  await snarkjs.wtns.calculate(signals, wasm, wtns);

  console.log('check')
  await snarkjs.wtns.check(r1cs, wtns, logger);

  console.log('prove')
  const { proof, publicSignals } = await snarkjs.groth16.prove(zkey_final, wtns);

  const verified = await snarkjs.groth16.verify(vKey, publicSignals, proof, logger);
  console.log('zk proof validity', verified);

  await remix.call('fileManager', 'writeFile', `zk/build/groth16/input-${Date.now()}.json`, JSON.stringify({
    _pA: [proof.pi_a[0], proof.pi_a[1]],
    _pB: [[proof.pi_b[0][1], proof.pi_b[0][0]], [proof.pi_b[1][1], proof.pi_b[1][0]]],
    _pC: [proof.pi_c[0], proof.pi_c[1]],
    _pubSignals: publicSignals,
  }, null, 2))

  console.log('proof done.')
  return {
    proof,
    x: publicSignals[3],
    y: publicSignals[0]
  }
}

(async () => {
  try {
    // @ts-ignore
    const r1csBuffer = await remix.call('fileManager', 'readFile', 'circuits/.bin/rln.r1cs', { encoding: null });
    // @ts-ignore
    const r1cs = new Uint8Array(r1csBuffer);
    // @ts-ignore
    await remix.call('circuit-compiler', 'compile', 'circuits/rln.circom');
    // @ts-ignore
    const wasmBuffer = await remix.call('fileManager', 'readFile', 'circuits/.bin/rln.wasm', { encoding: null });
    // @ts-ignore
    const wasm = new Uint8Array(wasmBuffer);

    const zkey_final = {
      type: "mem",
      data: new Uint8Array(await remix.call('fileManager', 'readFile', './zk/keys/groth16/zkey_final.txt', { encoding: null }))
    }
    const wtns = { type: "mem" };

    const vKey = JSON.parse(await remix.call('fileManager', 'readFile', './zk/keys/groth16/verification_key.json'))

    // build list of identity commitments
    const secrets = []
    const identityCommitments = []
    const rateCommitments = []
    const userMessageLimit = 0x2
    for (let k = 0; k < 2; k++) {
      const identitySecret = BigInt(ethers.utils.hexlify(ethers.utils.randomBytes(32)))
      secrets.push(identitySecret)

      const identityCommitment = poseidon([identitySecret])
      const rateCommitment = poseidon([identityCommitment, userMessageLimit])
      identityCommitments.push(identityCommitment)
      rateCommitments.push(rateCommitment)
    }

    let tree

    try {
      tree = new IncrementalMerkleTree(poseidon, 20, BigInt(0), 2, rateCommitments) // Binary tree.
    } catch (e) {
      console.error(e.message)
      return
    }

    const merkleproof1 = tree.createProof(0)

    const appId = 0xa
    const epoch = 0x1

    const signals1 = {
      identitySecret: secrets[0],
      userMessageLimit,
      messageId: 0x0,
      pathElements: merkleproof1.siblings,
      identityPathIndex: merkleproof1.pathIndices,
      x: 0xabcd, // hash(message)
      externalNullifier: 0xa // hash(epoch, appId)
    }
    const proof1 = await prove(signals1, wasm, wtns, r1cs, zkey_final, vKey)

    const signals2 = {
      identitySecret: secrets[0],
      userMessageLimit,
      messageId: 0x0,
      pathElements: merkleproof1.siblings,
      identityPathIndex: merkleproof1.pathIndices,
      x: 0xabce, // hash(message)
      externalNullifier: 0xa // hash(epoch, appId)
    }
    const proof2 = await prove(signals2, wasm, wtns, r1cs, zkey_final, vKey)

    const secret = shamirRecovery(BigInt(proof1.x), BigInt(proof2.x), BigInt(proof1.y), BigInt(proof2.y))

    console.log(secret.toString(10))
    console.log(Fq.normalize(secrets[0]))

    const templates = {
      groth16: await remix.call('fileManager', 'readFile', 'templates/groth16_verifier.sol.ejs')
    }
    const solidityContract = await snarkjs.zKey.exportSolidityVerifier(zkey_final, templates)

    await remix.call('fileManager', 'writeFile', './zk/build/groth16/zk_verifier.sol', solidityContract)
  } catch (e) {
    console.error(e.message)
  }
})()
