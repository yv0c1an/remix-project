// eslint-disable-next-line @typescript-eslint/no-var-requires
const snarkjs = require('snarkjs');

(async () => {
  try {
    // @ts-ignore
    await remix.call('circuit-compiler', 'generateR1cs', 'circuits/calculate_hash.circom');

    const ptau_final = "https://ipfs-cluster.ethdevops.io/ipfs/QmTiT4eiYz5KF7gQrDsgfCSTRv3wBPYJ4bRN1MmTRshpnW";
    // @ts-ignore
    const r1csBuffer = await remix.call('fileManager', 'readFile', 'circuits/.bin/calculate_hash.r1cs', { encoding: null });
    // @ts-ignore
    const r1cs = new Uint8Array(r1csBuffer);
    const zkey_final = { type: "mem" };

    console.log('plonk setup')
    await snarkjs.plonk.setup(r1cs, ptau_final, zkey_final)

    console.log('exportVerificationKey')
    const vKey = await snarkjs.zKey.exportVerificationKey(zkey_final)

    console.log('save zkey_final')
    await remix.call('fileManager', 'writeFile', './zk/keys/plonk/zkey_final.txt', JSON.stringify(Array.from(((zkey_final as any).data))))

    console.log('save verification key')
    await remix.call('fileManager', 'writeFile', './zk/keys/plonk/verification_key.json', JSON.stringify(vKey, null, 2))

    console.log('setup done')
  } catch (e) {
    console.error(e.message)
  }
})()