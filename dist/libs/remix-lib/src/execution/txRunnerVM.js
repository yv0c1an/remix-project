'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxRunnerVM = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@ethereumjs/common");
const tx_1 = require("@ethereumjs/tx");
const block_1 = require("@ethereumjs/block");
const util_1 = require("@ethereumjs/util");
const eventManager_1 = require("../eventManager");
const logsManager_1 = require("./logsManager");
class TxRunnerVM {
    constructor(vmaccounts, api, getVMObject, blocks = []) {
        this.event = new eventManager_1.EventManager();
        this.logsManager = new logsManager_1.LogsManager();
        // has a default for now for backwards compatibility
        this.getVMObject = getVMObject;
        this.commonContext = this.getVMObject().common;
        this.pendingTxs = {};
        this.vmaccounts = vmaccounts;
        this.queusTxs = [];
        /*
          txHash is generated using the nonce,
          in order to have unique transaction hash, we need to keep using different nonce (in case of a call)
          so we increment this value after each call.
          For this to function we also need to skip nonce validation, in the vm: `{ skipNonce: true }`
        */
        this.nextNonceForCall = 0;
        const vm = this.getVMObject().vm;
        if (Array.isArray(blocks) && (blocks || []).length > 0) {
            const lastBlock = block_1.Block.fromRLPSerializedBlock(blocks[blocks.length - 1], { common: this.commonContext });
            this.blockParentHash = lastBlock.hash();
            this.blocks = blocks;
        }
        else {
            this.blockParentHash = vm.blockchain.genesisBlock.hash();
            this.blocks = [vm.blockchain.genesisBlock.serialize()];
        }
    }
    execute(args, confirmationCb, gasEstimationForceSend, promptCb, callback) {
        let data = args.data;
        if (data.slice(0, 2) !== '0x') {
            data = '0x' + data;
        }
        try {
            this.runInVm(args.from, args.to, data, args.value, args.gasLimit, args.useCall, callback);
        }
        catch (e) {
            callback(e, null);
        }
    }
    runInVm(from, to, data, value, gasLimit, useCall, callback) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let account;
            if (!from && useCall && Object.keys(this.vmaccounts).length) {
                from = Object.keys(this.vmaccounts)[0];
                account = this.vmaccounts[from];
            }
            else
                account = this.vmaccounts[from];
            if (!account) {
                return callback('Invalid account selected');
            }
            try {
                const res = yield this.getVMObject().stateManager.getAccount(util_1.Address.fromString(from));
                const EIP1559 = this.commonContext.hardfork() !== 'berlin'; // berlin is the only pre eip1559 fork that we handle.
                let tx;
                if (!EIP1559) {
                    tx = tx_1.LegacyTransaction.fromTxData({
                        nonce: useCall ? this.nextNonceForCall : res.nonce,
                        gasPrice: '0x1',
                        gasLimit: gasLimit,
                        to: to,
                        value: value,
                        data: (0, util_1.hexToBytes)(data)
                    }, { common: this.commonContext }).sign(account.privateKey);
                }
                else {
                    tx = tx_1.FeeMarketEIP1559Transaction.fromTxData({
                        nonce: useCall ? this.nextNonceForCall : res.nonce,
                        maxPriorityFeePerGas: '0x01',
                        maxFeePerGas: '0x7',
                        gasLimit: gasLimit,
                        to: to,
                        value: value,
                        data: (0, util_1.hexToBytes)(data)
                    }).sign(account.privateKey);
                }
                if (useCall)
                    this.nextNonceForCall++;
                const coinbases = ['0x0e9281e9c6a0808672eaba6bd1220e144c9bb07a', '0x8945a1288dc78a6d8952a92c77aee6730b414778', '0x94d76e24f818426ae84aa404140e8d5f60e10e7e'];
                const difficulties = [69762765929000, 70762765929000, 71762765929000];
                const difficulty = this.commonContext.consensusType() === common_1.ConsensusType.ProofOfStake ? 0 : difficulties[this.blocks.length % difficulties.length];
                const block = block_1.Block.fromBlockData({
                    header: {
                        timestamp: new Date().getTime() / 1000 | 0,
                        number: this.blocks.length,
                        coinbase: coinbases[this.blocks.length % coinbases.length],
                        difficulty,
                        gasLimit,
                        baseFeePerGas: EIP1559 ? '0x1' : undefined,
                        parentHash: this.blockParentHash
                    },
                    transactions: [tx]
                }, { common: this.commonContext });
                // standaloneTx represents a gas estimation call
                if (this.standaloneTx || useCall) {
                    const root = yield this.getVMObject().stateManager.getStateRoot();
                    this.runBlockInVm(tx, block, (err, result) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        yield this.getVMObject().stateManager.setStateRoot(root);
                        callback(err, result);
                    }));
                }
                else {
                    this.blockParentHash = block.hash();
                    this.runBlockInVm(tx, block, (err, result) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        if (!err) {
                            if (!useCall) {
                                this.getVMObject().vm.blockchain.putBlock(block);
                                this.blocks.push(block.serialize());
                            }
                        }
                        callback(err, result);
                    }));
                }
            }
            catch (e) {
                callback(e);
            }
        });
    }
    runTxInVm(tx, block, callback) {
        this.getVMObject().vm.runTx({ tx, skipNonce: true, skipBlockValidation: true, skipBalance: false }).then((result) => {
            callback(null, {
                result,
                transactionHash: (0, util_1.bytesToHex)(Buffer.from(tx.hash())),
                block,
                tx
            });
        }).catch(function (err) {
            callback(err);
        });
    }
    runBlockInVm(tx, block, callback) {
        this.getVMObject().vm.runBlock({ block: block, generate: true, skipNonce: true, skipBlockValidation: true, skipBalance: false }).then((results) => {
            const result = results.results[0];
            callback(null, {
                result,
                transactionHash: (0, util_1.bytesToHex)(Buffer.from(tx.hash())),
                block,
                tx
            });
        }).catch(function (err) {
            callback(err);
        });
    }
}
exports.TxRunnerVM = TxRunnerVM;
//# sourceMappingURL=txRunnerVM.js.map