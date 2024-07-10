
  
## What's RLN?

 Welcome to the Remix Circom ZKP RLN Workspace.

RLN is a zero-knowledge gadget that enables spam prevention in anonymous environments.
To learn more on RLN and how it works - check out [documentation](https://rate-limiting-nullifier.github.io/rln-docs/).

The workspace comprises two main directories:

### circuits: Contains sample semaphore contracts. These can be compiled to generate a witness using 'Circom ZKP Compiler' plugin.

### scripts: Provides a sample script designed for a trusted setup using snarkjs. This script also aids in generating Solidity code, which is essential for on-chain deployment.

### first steps:

#### 1) compile the semaphore circuit using the remix circom compiler. This will generate artifacts.

#### 2) execute the file `run_setup.ts`:

This step generate a verification key that can be used for generating proof, it will also generate a Solidity contract for on-chain verification.

Note that this section should only be used for development purposes as this way of running the setup is heavily centralized (although some pieces of this script can be used to achieve that).

This generates a verification key (`./zk/build/verification_key.json`) and artifacts from the setup (`./zk/build/zk_setup.txt`).

#### 3) execute the file `run_verification.ts`:

This script:

- create a list of identity commitments and add it to a `IncrementalMerkleTree`. The tree is used to generate a merkle proof that a specified identity is actually in the tree (see`tree.createProof(0)`).

- generate a witness and a proof of execution with `messageId`equal to 0.

- generate a witness and a proof of execution with `messageId`equal to 0.

- generating 2 proofs (two different messages) with the same `messageId` reveal the two points of the polynomial necessary to deduct the `identitySecret` (using `shamirRecovery`).
