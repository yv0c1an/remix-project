/* global ethereum */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.VMContext = exports.VMCommon = void 0;
const tslib_1 = require("tslib");
const remix_lib_1 = require("@remix-project/remix-lib");
const util_1 = require("@ethereumjs/util");
const keccak_1 = require("ethereum-cryptography/keccak");
const rlp_1 = require("rlp");
const ethers_1 = require("ethers");
const remix_lib_2 = require("@remix-project/remix-lib");
const { LogsManager } = remix_lib_2.execution;
const VmProxy_1 = require("./VmProxy");
const vm_1 = require("@ethereumjs/vm");
const common_1 = require("@ethereumjs/common");
const trie_1 = require("@ethereumjs/trie");
const statemanager_1 = require("@ethereumjs/statemanager");
const evm_1 = require("@ethereumjs/evm");
const blockchain_1 = require("@ethereumjs/blockchain");
const block_1 = require("@ethereumjs/block");
const web3_utils_1 = require("web3-utils");
/*
  extend vm state manager and instantiate VM
*/
class StateManagerCommonStorageDump extends statemanager_1.DefaultStateManager {
    constructor(opts = {}) {
        super(opts);
        this.keyHashes = {};
    }
    getDb() {
        // @ts-ignore
        return this._trie.database().db;
    }
    putContractStorage(address, key, value) {
        this.keyHashes[(0, util_1.bytesToHex)(remix_lib_1.hash.keccak(key))] = (0, util_1.bytesToHex)(key);
        return super.putContractStorage(address, key, value);
    }
    shallowCopy() {
        const copyState = new StateManagerCommonStorageDump({
            trie: this._trie.shallowCopy(false),
        });
        copyState.keyHashes = this.keyHashes;
        return copyState;
    }
    dumpStorage(address) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.flush();
            const account = yield this.getAccount(address);
            if (!account) {
                throw new Error(`dumpStorage f() can only be called for an existing account`);
            }
            return new Promise((resolve, reject) => {
                try {
                    const trie = this._getStorageTrie(address, account);
                    const storage = {};
                    const stream = trie.createReadStream();
                    stream.on('data', (val) => {
                        const value = (0, rlp_1.decode)(val.value);
                        storage[(0, util_1.bytesToHex)(val.key)] = {
                            key: this.keyHashes[(0, util_1.bytesToHex)(val.key)],
                            value: (0, util_1.bytesToHex)(value)
                        };
                    });
                    stream.on('end', () => {
                        resolve(storage);
                    });
                    stream.on('error', (e) => {
                        reject(e);
                    });
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
}
class CustomEthersStateManager extends StateManagerCommonStorageDump {
    constructor(opts) {
        super(opts);
        if (typeof opts.provider === 'string') {
            this.provider = new ethers_1.ethers.providers.StaticJsonRpcProvider(opts.provider);
        }
        else if (opts.provider instanceof ethers_1.ethers.providers.JsonRpcProvider) {
            this.provider = opts.provider;
        }
        else {
            throw new Error(`valid JsonRpcProvider or url required; got ${opts.provider}`);
        }
        this.blockTag = opts.blockTag;
    }
    /**
     * Sets the new block tag used when querying the provider and clears the
     * internal cache.
     * @param blockTag - the new block tag to use when querying the provider
     */
    setBlockTag(blockTag) {
        this.blockTag = blockTag === 'earliest' ? blockTag : (0, util_1.bigIntToHex)(blockTag);
    }
    shallowCopy() {
        const newState = new CustomEthersStateManager({
            provider: this.provider,
            blockTag: this.blockTag,
            trie: this._trie.shallowCopy(false),
        });
        return newState;
    }
    /**
     * Gets the code corresponding to the provided `address`.
     * @param address - Address to get the `code` for
     * @returns {Promise<Buffer>} - Resolves with the code corresponding to the provided address.
     * Returns an empty `Buffer` if the account has no associated code.
     */
    getContractCode(address) {
        const _super = Object.create(null, {
            getContractCode: { get: () => super.getContractCode },
            putContractCode: { get: () => super.putContractCode }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const code = yield _super.getContractCode.call(this, address);
            if (code && code.length > 0)
                return code;
            else {
                const code = (0, util_1.toBytes)(yield this.provider.getCode(address.toString(), this.blockTag));
                yield _super.putContractCode.call(this, address, code);
                return code;
            }
        });
    }
    /**
     * Gets the storage value associated with the provided `address` and `key`. This method returns
     * the shortest representation of the stored value.
     * @param address -  Address of the account to get the storage for
     * @param key - Key in the account's storage to get the value for. Must be 32 bytes long.
     * @returns {Promise<Buffer>} - The storage value for the account
     * corresponding to the provided address at the provided key.
     * If this does not exist an empty `Buffer` is returned.
     */
    getContractStorage(address, key) {
        const _super = Object.create(null, {
            getContractStorage: { get: () => super.getContractStorage },
            putContractStorage: { get: () => super.putContractStorage }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let storage = yield _super.getContractStorage.call(this, address, key);
            if (storage && storage.length > 0)
                return storage;
            else {
                storage = (0, util_1.toBytes)(yield this.provider.getStorageAt(address.toString(), (0, util_1.bytesToBigInt)(key), this.blockTag));
                yield _super.putContractStorage.call(this, address, key, storage);
                return storage;
            }
        });
    }
    /**
     * Checks if an `account` exists at `address`
     * @param address - Address of the `account` to check
     */
    accountExists(address) {
        const _super = Object.create(null, {
            getAccount: { get: () => super.getAccount },
            putAccount: { get: () => super.putAccount }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const account = yield _super.getAccount.call(this, address);
            if (!account.isEmpty())
                return true;
            // Get merkle proof for `address` from provider
            const proof = yield this.provider.send('eth_getProof', [address.toString(), [], this.blockTag]);
            const proofBuf = proof.accountProof.map((proofNode) => (0, util_1.toBytes)(proofNode));
            const trie = new trie_1.Trie({ useKeyHashing: true });
            const verified = yield trie.verifyProof(Buffer.from((0, keccak_1.keccak256)(proofBuf[0])), address.bytes, proofBuf);
            if (verified) {
                const codeHash = proof.codeHash === '0x0000000000000000000000000000000000000000000000000000000000000000' ? '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470' : proof.codeHash;
                const account = util_1.Account.fromAccountData({
                    balance: BigInt(proof.balance),
                    nonce: BigInt(proof.nonce),
                    codeHash: (0, web3_utils_1.hexToBytes)(codeHash)
                    // storageRoot: toBuffer([]), // we have to remove this in order to force the creation of the Trie in the local state.
                });
                _super.putAccount.call(this, address, account);
            }
            // if not verified (i.e. verifyProof returns null), account does not exist
            return verified === null ? false : true;
        });
    }
    /**
     * Retrieves an account from the provider and stores in the local trie
     * @param address Address of account to be retrieved from provider
     * @private
     */
    getAccountFromProvider(address) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let accountData;
            try {
                accountData = yield this.provider.send('eth_getProof', [
                    address.toString(),
                    [],
                    this.blockTag,
                ]);
            }
            catch (e) {
                console.log(e);
            }
            let account;
            if (!accountData) {
                account = util_1.Account.fromAccountData({
                    balance: BigInt(0),
                    nonce: BigInt(0),
                    codeHash: (0, web3_utils_1.hexToBytes)('0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470')
                });
            }
            else {
                const codeHash = accountData.codeHash === '0x0000000000000000000000000000000000000000000000000000000000000000' ? '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470' : accountData.codeHash;
                account = util_1.Account.fromAccountData({
                    balance: BigInt(accountData.balance),
                    nonce: BigInt(accountData.nonce),
                    codeHash: (0, web3_utils_1.hexToBytes)(codeHash)
                    // storageRoot: toBuffer([]), // we have to remove this in order to force the creation of the Trie in the local state.
                });
            }
            return account;
        });
    }
}
class VMCommon extends common_1.Common {
    /**
      * Always return the fork set at initialization
      */
    setHardforkBy() {
        return this._hardfork;
    }
}
exports.VMCommon = VMCommon;
/*
  trigger contextChanged, web3EndpointChanged
*/
class VMContext {
    constructor(fork, nodeUrl, blockNumber, stateDb, blocksData) {
        this.blockGasLimitDefault = 4300000;
        this.blockGasLimit = this.blockGasLimitDefault;
        this.currentFork = fork || 'cancun';
        this.nodeUrl = nodeUrl;
        this.stateDb = stateDb;
        this.blockNumber = blockNumber;
        this.blocks = {};
        this.latestBlockNumber = "0x0";
        this.blockByTxHash = {};
        this.txByHash = {};
        this.exeResults = {};
        this.logsManager = new LogsManager();
        this.rawBlocks = blocksData;
        this.serializedBlocks = [];
    }
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.currentVm = yield this.createVm(this.currentFork);
        });
    }
    createVm(hardfork) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let stateManager;
            if (this.nodeUrl) {
                let block = this.blockNumber;
                if (this.blockNumber === 'latest') {
                    const provider = new ethers_1.ethers.providers.StaticJsonRpcProvider(this.nodeUrl);
                    block = yield provider.getBlockNumber();
                    stateManager = new CustomEthersStateManager({
                        provider: this.nodeUrl,
                        blockTag: '0x' + block.toString(16)
                    });
                    this.blockNumber = block;
                }
                else {
                    stateManager = new CustomEthersStateManager({
                        provider: this.nodeUrl,
                        blockTag: '0x' + block.toString(16)
                    });
                }
            }
            else {
                const db = this.stateDb ? new Map(Object.entries(this.stateDb).map(([k, v]) => [k, (0, web3_utils_1.hexToBytes)(v)])) : new Map();
                const mapDb = new util_1.MapDB(db);
                const trie = yield trie_1.Trie.create({ useKeyHashing: true, db: mapDb, useRootPersistence: true });
                stateManager = new StateManagerCommonStorageDump({ trie });
            }
            const consensusType = hardfork === 'berlin' || hardfork === 'london' ? common_1.ConsensusType.ProofOfWork : common_1.ConsensusType.ProofOfStake;
            const difficulty = consensusType === common_1.ConsensusType.ProofOfStake ? 0 : 69762765929000;
            const common = new VMCommon({ chain: 'mainnet', hardfork });
            const blocks = (this.rawBlocks || []).map(block => {
                const serializedBlock = (0, web3_utils_1.hexToBytes)(block);
                this.serializedBlocks.push(serializedBlock);
                return block_1.Block.fromRLPSerializedBlock(serializedBlock, { common });
            });
            const genesisBlock = blocks.length > 0 && (blocks[0] || {}).isGenesis ? blocks[0] : block_1.Block.fromBlockData({
                header: {
                    timestamp: (new Date().getTime() / 1000 | 0),
                    number: 0,
                    coinbase: '0x0e9281e9c6a0808672eaba6bd1220e144c9bb07a',
                    difficulty,
                    gasLimit: 8000000
                }
            }, { common });
            const blockchain = yield blockchain_1.Blockchain.create({ common, validateBlocks: false, validateConsensus: false, genesisBlock });
            const evm = yield evm_1.EVM.create({ common, allowUnlimitedContractSize: true, stateManager, blockchain });
            const vm = yield vm_1.VM.create({
                common,
                activatePrecompiles: true,
                stateManager,
                blockchain,
                evm
            });
            // VmProxy and VMContext are very intricated.
            // VmProxy is used to track the EVM execution (to listen on opcode execution, in order for instance to generate the VM trace)
            const web3vm = new VmProxy_1.VmProxy(this);
            web3vm.setVM(vm);
            this.addBlock(genesisBlock, true);
            if (blocks.length > 0)
                blocks.splice(0, 1);
            for (const block of blocks) {
                yield blockchain.putBlock(block);
                this.addBlock(block, false, false, web3vm);
            }
            return { vm, web3vm, stateManager, common, blocks };
        });
    }
    getCurrentFork() {
        return this.currentFork;
    }
    web3() {
        return this.currentVm.web3vm;
    }
    vm() {
        return this.currentVm.vm;
    }
    vmObject() {
        return this.currentVm;
    }
    addBlock(block, genesis, isCall, web3vm) {
        let blockNumber = (0, util_1.bigIntToHex)(block.header.number);
        if (blockNumber === '0x') {
            blockNumber = '0x0';
        }
        this.blocks[(0, util_1.bytesToHex)(block.hash())] = block;
        this.blocks[blockNumber] = block;
        this.latestBlockNumber = blockNumber;
        if (!isCall && !genesis && web3vm)
            this.logsManager.checkBlock(blockNumber, block, web3vm);
        if (!isCall && !genesis && !web3vm)
            this.logsManager.checkBlock(blockNumber, block, this.web3());
    }
    trackTx(txHash, block, tx) {
        this.blockByTxHash[txHash] = block;
        this.txByHash[txHash] = tx;
    }
    trackExecResult(tx, execReult) {
        this.exeResults[tx] = execReult;
    }
}
exports.VMContext = VMContext;
//# sourceMappingURL=vm-context.js.map