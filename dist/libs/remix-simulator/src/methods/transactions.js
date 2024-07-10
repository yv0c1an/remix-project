"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
const tslib_1 = require("tslib");
const web3_utils_1 = require("web3-utils");
const util_1 = require("@ethereumjs/util");
const txProcess_1 = require("./txProcess");
const remix_lib_1 = require("@remix-project/remix-lib");
const ethers_1 = require("ethers");
const TxRunnerVM = remix_lib_1.execution.TxRunnerVM;
const TxRunner = remix_lib_1.execution.TxRunner;
class Transactions {
    constructor(vmContext) {
        this.TX_INDEX = '0x0'; // currently there's always only 1 tx per block, so the transaction index will always be 0x0
        this.vmContext = vmContext;
        this.tags = {};
    }
    init(accounts, blocksData) {
        this.accounts = accounts;
        const api = {
            logMessage: (msg) => {
            },
            logHtmlMessage: (msg) => {
            },
            config: {
                getUnpersistedProperty: (key) => {
                    return true;
                },
                get: () => {
                    return true;
                }
            },
            detectNetwork: (cb) => {
                cb();
            },
            personalMode: () => {
                return false;
            }
        };
        this.txRunnerVMInstance = new TxRunnerVM(accounts, api, _ => this.vmContext.vmObject(), blocksData);
        this.txRunnerInstance = new TxRunner(this.txRunnerVMInstance, {});
        this.txRunnerInstance.vmaccounts = accounts;
    }
    methods() {
        return {
            eth_sendTransaction: this.eth_sendTransaction.bind(this),
            eth_getTransactionReceipt: this.eth_getTransactionReceipt.bind(this),
            eth_getCode: this.eth_getCode.bind(this),
            eth_call: this.eth_call.bind(this),
            eth_estimateGas: this.eth_estimateGas.bind(this),
            eth_getTransactionCount: this.eth_getTransactionCount.bind(this),
            eth_getTransactionByHash: this.eth_getTransactionByHash.bind(this),
            eth_getTransactionByBlockHashAndIndex: this.eth_getTransactionByBlockHashAndIndex.bind(this),
            eth_getTransactionByBlockNumberAndIndex: this.eth_getTransactionByBlockNumberAndIndex.bind(this),
            eth_getExecutionResultFromSimulator: this.eth_getExecutionResultFromSimulator.bind(this),
            eth_getHHLogsForTx: this.eth_getHHLogsForTx.bind(this),
            eth_getHashFromTagBySimulator: this.eth_getHashFromTagBySimulator.bind(this),
            eth_registerCallId: this.eth_registerCallId.bind(this),
            eth_getStateDb: this.eth_getStateDb.bind(this),
            eth_getBlocksData: this.eth_getBlocksData.bind(this)
        };
    }
    eth_sendTransaction(payload, cb) {
        // from might be lowercased address (web3)
        if (payload.params && payload.params.length > 0 && payload.params[0].from) {
            payload.params[0].from = (0, util_1.toChecksumAddress)(payload.params[0].from);
        }
        (0, txProcess_1.processTx)(this.txRunnerInstance, payload, false, (error, result) => {
            if (!error && result) {
                this.vmContext.addBlock(result.block);
                const hash = (0, util_1.bytesToHex)(result.tx.hash());
                this.vmContext.trackTx(hash, result.block, result.tx);
                const returnValue = `${(0, util_1.bytesToHex)(result.result.execResult.returnValue) || '0x0'}`;
                const execResult = {
                    exceptionError: result.result.execResult.exceptionError,
                    executionGasUsed: result.result.execResult.executionGasUsed,
                    gas: result.result.execResult.gas,
                    gasRefund: result.result.execResult.gasRefund,
                    logs: result.result.execResult.logs,
                    returnValue
                };
                this.vmContext.trackExecResult(hash, execResult);
                return cb(null, result.transactionHash);
            }
            cb(error);
        });
    }
    eth_getExecutionResultFromSimulator(payload, cb) {
        const txHash = payload.params[0];
        cb(null, this.vmContext.exeResults[txHash]);
    }
    eth_getHHLogsForTx(payload, cb) {
        const txHash = payload.params[0];
        cb(null, this.vmContext.currentVm.web3vm.hhLogs[txHash] ? this.vmContext.currentVm.web3vm.hhLogs[txHash] : []);
    }
    eth_getTransactionReceipt(payload, cb) {
        this.vmContext.web3().eth.getTransactionReceipt(payload.params[0], (error, receipt) => {
            if (error) {
                return cb(error);
            }
            const txBlock = this.vmContext.blockByTxHash[receipt.hash];
            const logs = this.vmContext.logsManager.getLogsByTxHash(receipt.hash);
            const r = {
                transactionHash: receipt.hash,
                transactionIndex: this.TX_INDEX,
                blockHash: (0, util_1.bytesToHex)(txBlock.hash()),
                blockNumber: (0, util_1.bigIntToHex)(txBlock.header.number),
                gasUsed: receipt.gasUsed,
                cumulativeGasUsed: receipt.gasUsed,
                contractAddress: receipt.contractAddress,
                logs,
                status: receipt.status,
                to: receipt.to
            };
            if (r.blockNumber === '0x') {
                r.blockNumber = '0x0';
            }
            cb(null, r);
        });
    }
    eth_estimateGas(payload, cb) {
        // from might be lowercased address (web3)
        if (payload.params && payload.params.length > 0 && payload.params[0].from) {
            payload.params[0].from = (0, util_1.toChecksumAddress)(payload.params[0].from);
        }
        if (payload.params && payload.params.length > 0 && payload.params[0].to) {
            payload.params[0].to = (0, util_1.toChecksumAddress)(payload.params[0].to);
        }
        payload.params[0].gas = 10000000 * 10;
        this.vmContext.web3().recordVMSteps(false);
        this.txRunnerInstance.internalRunner.standaloneTx = true;
        (0, txProcess_1.processTx)(this.txRunnerInstance, payload, true, (error, value) => {
            var _a, _b;
            this.txRunnerInstance.internalRunner.standaloneTx = false;
            this.vmContext.web3().recordVMSteps(true);
            if (error)
                return cb(error);
            const result = value.result;
            if (((_a = result.receipt) === null || _a === void 0 ? void 0 : _a.status) === '0x0' || ((_b = result.receipt) === null || _b === void 0 ? void 0 : _b.status) === 0) {
                try {
                    const msg = `${(0, util_1.bytesToHex)(result.execResult.returnValue) || '0x00'}`;
                    const abiCoder = new ethers_1.ethers.utils.AbiCoder();
                    const reason = abiCoder.decode(['string'], '0x' + msg.slice(10))[0];
                    return cb('revert ' + reason);
                }
                catch (e) {
                    return cb(e.message);
                }
            }
            if (result.execResult && result.execResult.exceptionError && result.execResult.exceptionError.errorType === 'EvmError') {
                return cb(result.execResult.exceptionError.error);
            }
            let gasUsed = Number((0, web3_utils_1.toNumber)(result.execResult.executionGasUsed));
            if (result.execResult.gasRefund) {
                gasUsed += Number((0, web3_utils_1.toNumber)(result.execResult.gasRefund));
            }
            gasUsed = gasUsed + Number((0, web3_utils_1.toNumber)(value.tx.getBaseFee()));
            cb(null, Math.ceil(gasUsed + (15 * gasUsed) / 100));
        });
    }
    eth_getCode(payload, cb) {
        const address = payload.params[0];
        this.vmContext.web3().eth.getCode(address, (error, result) => {
            if (error) {
                console.dir('error getting code');
                console.dir(error);
            }
            cb(error, result);
        });
    }
    eth_registerCallId(payload, cb) {
        this.comingCallId = payload.params[0];
        cb();
    }
    eth_getStateDb(_, cb) {
        const run = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.vmContext.currentVm.stateManager._getCodeDB) {
                return cb(null, yield this.vmContext.currentVm.stateManager._getCodeDB());
            }
            throw new Error('current state does not support "getStateDetails"');
        });
        run();
    }
    eth_getBlocksData(_, cb) {
        cb(null, {
            blocks: this.txRunnerVMInstance.blocks,
            latestBlockNumber: this.txRunnerVMInstance.blocks.length - 1
        });
    }
    eth_call(payload, cb) {
        // from might be lowercased address (web3)
        if (payload.params && payload.params.length > 0 && payload.params[0].from) {
            payload.params[0].from = (0, util_1.toChecksumAddress)(payload.params[0].from);
        }
        if (payload.params && payload.params.length > 0 && payload.params[0].to) {
            payload.params[0].to = (0, util_1.toChecksumAddress)(payload.params[0].to);
        }
        payload.params[0].value = undefined;
        const tag = payload.params[0].timestamp;
        (0, txProcess_1.processTx)(this.txRunnerInstance, payload, true, (error, result) => {
            if (!error && result) {
                this.vmContext.addBlock(result.block, null, true);
                const hash = (0, util_1.bytesToHex)(result.tx.hash());
                this.vmContext.trackTx(hash, result.block, result.tx);
                const returnValue = `${(0, util_1.bytesToHex)(result.result.execResult.returnValue) || '0x0'}`;
                const execResult = {
                    exceptionError: result.result.execResult.exceptionError,
                    executionGasUsed: result.result.execResult.executionGasUsed,
                    gas: result.result.execResult.gas,
                    gasRefund: result.result.execResult.gasRefund,
                    logs: result.result.execResult.logs,
                    returnValue: returnValue
                };
                // calls are not supposed to return a transaction hash. we do this for keeping track of it and allowing debugging calls.
                // either the tag is specified as a timestamp in a tx or the caller should call registerCallId before calling the call.
                if (tag)
                    this.tags[tag] = result.transactionHash;
                else if (this.comingCallId) {
                    this.tags[this.comingCallId] = result.transactionHash;
                    this.comingCallId = null;
                }
                this.vmContext.trackExecResult(hash, execResult);
                return cb(null, returnValue);
            }
            cb(error);
        });
    }
    eth_getHashFromTagBySimulator(payload, cb) {
        return cb(null, this.tags[payload.params[0]]);
    }
    eth_getTransactionCount(payload, cb) {
        const address = payload.params[0];
        this.vmContext.vm().stateManager.getAccount(util_1.Address.fromString(address)).then((account) => {
            const nonce = (0, web3_utils_1.toBigInt)(account.nonce).toString(10);
            cb(null, nonce);
        }).catch((error) => {
            cb(error);
        });
    }
    eth_getTransactionByHash(payload, cb) {
        const address = payload.params[0];
        this.vmContext.web3().eth.getTransactionReceipt(address, (error, receipt) => {
            if (error) {
                return cb(error);
            }
            const txBlock = this.vmContext.blockByTxHash[receipt.transactionHash];
            const tx = this.vmContext.txByHash[receipt.transactionHash];
            // TODO: params to add later
            const r = {
                blockHash: (0, util_1.bytesToHex)(txBlock.hash()),
                blockNumber: (0, util_1.bigIntToHex)(txBlock.header.number),
                from: receipt.from,
                gas: (0, web3_utils_1.toHex)(BigInt(receipt.gas)),
                chainId: '0xd05',
                // 'gasPrice': '2000000000000', // 0x123
                gasPrice: '0x4a817c800',
                hash: receipt.transactionHash,
                input: receipt.input,
                nonce: (0, util_1.bigIntToHex)(tx.nonce),
                transactionIndex: this.TX_INDEX,
                value: (0, util_1.bigIntToHex)(tx.value)
                // "value":"0xf3dbb76162000" // 4290000000000000
                // "v": "0x25", // 37
                // "r": "0x1b5e176d927f8e9ab405058b2d2457392da3e20f328b16ddabcebc33eaac5fea",
                // "s": "0x4ba69724e8f69de52f0125ad8b3c5c2cef33019bac3249e2c0a2192766d1721c"
            };
            if (receipt.to) {
                r['to'] = receipt.to;
            }
            if (r.value === '0x') {
                r.value = '0x0';
            }
            if (r.blockNumber === '0x') {
                r.blockNumber = '0x0';
            }
            cb(null, r);
        });
    }
    eth_getTransactionByBlockHashAndIndex(payload, cb) {
        const txIndex = payload.params[1];
        const txBlock = this.vmContext.blocks[payload.params[0]];
        const txHash = (0, util_1.bytesToHex)(txBlock.transactions[(0, web3_utils_1.toNumber)(txIndex)].hash());
        this.vmContext.web3().eth.getTransactionReceipt(txHash, (error, receipt) => {
            if (error) {
                return cb(error);
            }
            const tx = this.vmContext.txByHash[receipt.transactionHash];
            // TODO: params to add later
            const r = {
                blockHash: (0, util_1.bytesToHex)(txBlock.hash()),
                blockNumber: (0, util_1.bigIntToHex)(txBlock.header.number),
                from: receipt.from,
                gas: (0, web3_utils_1.toHex)(BigInt(receipt.gas)),
                chainId: '0xd05',
                // 'gasPrice': '2000000000000', // 0x123
                gasPrice: '0x4a817c800',
                hash: receipt.transactionHash,
                input: receipt.input,
                nonce: (0, util_1.bigIntToHex)(tx.nonce),
                transactionIndex: this.TX_INDEX,
                value: receipt.value
                // "value":"0xf3dbb76162000" // 4290000000000000
                // "v": "0x25", // 37
                // "r": "0x1b5e176d927f8e9ab405058b2d2457392da3e20f328b16ddabcebc33eaac5fea",
                // "s": "0x4ba69724e8f69de52f0125ad8b3c5c2cef33019bac3249e2c0a2192766d1721c"
            };
            if (receipt.to) {
                r['to'] = receipt.to;
            }
            if (r.value === '0x') {
                r.value = '0x0';
            }
            cb(null, r);
        });
    }
    eth_getTransactionByBlockNumberAndIndex(payload, cb) {
        const txIndex = payload.params[1];
        const txBlock = this.vmContext.blocks[payload.params[0]];
        const txHash = (0, util_1.bytesToHex)(txBlock.transactions[(0, web3_utils_1.toNumber)(txIndex)].hash());
        this.vmContext.web3().eth.getTransactionReceipt(txHash, (error, receipt) => {
            if (error) {
                return cb(error);
            }
            const tx = this.vmContext.txByHash[receipt.transactionHash];
            // TODO: params to add later
            const r = {
                blockHash: (0, util_1.bytesToHex)(txBlock.hash()),
                blockNumber: (0, util_1.bigIntToHex)(txBlock.header.number),
                from: receipt.from,
                gas: (0, web3_utils_1.toHex)(BigInt(receipt.gas)),
                // 'gasPrice': '2000000000000', // 0x123
                chainId: '0xd05',
                gasPrice: '0x4a817c800',
                hash: receipt.transactionHash,
                input: receipt.input,
                nonce: (0, util_1.bigIntToHex)(tx.nonce),
                transactionIndex: this.TX_INDEX,
                value: receipt.value
                // "value":"0xf3dbb76162000" // 4290000000000000
                // "v": "0x25", // 37
                // "r": "0x1b5e176d927f8e9ab405058b2d2457392da3e20f328b16ddabcebc33eaac5fea",
                // "s": "0x4ba69724e8f69de52f0125ad8b3c5c2cef33019bac3249e2c0a2192766d1721c"
            };
            if (receipt.to) {
                r['to'] = receipt.to;
            }
            if (r.value === '0x') {
                r.value = '0x0';
            }
            cb(null, r);
        });
    }
}
exports.Transactions = Transactions;
//# sourceMappingURL=transactions.js.map