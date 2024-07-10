"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extend = exports.Provider = void 0;
const tslib_1 = require("tslib");
const blocks_1 = require("./methods/blocks");
const logs_1 = require("./utils/logs");
const merge_1 = tslib_1.__importDefault(require("merge"));
const accounts_1 = require("./methods/accounts");
const filters_1 = require("./methods/filters");
const misc_1 = require("./methods/misc");
const net_1 = require("./methods/net");
const transactions_1 = require("./methods/transactions");
const debug_1 = require("./methods/debug");
const vm_context_1 = require("./vm-context");
const web3_1 = require("web3");
class Provider {
    constructor(options = {}) {
        this.options = options;
        this.connected = true;
        this.vmContext = new vm_context_1.VMContext(options['fork'], options['nodeUrl'], options['blockNumber'], options['stateDb'], options['blocks']);
        this.Accounts = new accounts_1.Web3Accounts(this.vmContext);
        this.Transactions = new transactions_1.Transactions(this.vmContext);
        this.methods = {};
        this.methods = (0, merge_1.default)(this.methods, this.Accounts.methods());
        this.methods = (0, merge_1.default)(this.methods, (new blocks_1.Blocks(this.vmContext, options)).methods());
        this.methods = (0, merge_1.default)(this.methods, (0, misc_1.methods)());
        this.methods = (0, merge_1.default)(this.methods, (new filters_1.Filters(this.vmContext)).methods());
        this.methods = (0, merge_1.default)(this.methods, (0, net_1.methods)());
        this.methods = (0, merge_1.default)(this.methods, this.Transactions.methods());
        this.methods = (0, merge_1.default)(this.methods, (new debug_1.Debug(this.vmContext)).methods());
    }
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.initialized = false;
            this.pendingRequests = [];
            yield this.vmContext.init();
            yield this.Accounts.resetAccounts();
            this.Transactions.init(this.Accounts.accounts, this.vmContext.serializedBlocks);
            this.initialized = true;
            if (this.pendingRequests.length > 0) {
                this.pendingRequests.map((req) => {
                    this.sendAsync(req.payload, req.callback);
                });
                this.pendingRequests = [];
            }
        });
    }
    _send(payload, callback) {
        // log.info('payload method is ', payload.method) // commented because, this floods the IDE console
        if (!this.initialized) {
            this.pendingRequests.push({ payload, callback });
            return;
        }
        const method = this.methods[payload.method];
        if (this.options.details) {
            (0, logs_1.info)(payload);
        }
        if (method) {
            return method.call(method, payload, (err, result) => {
                if (this.options.details) {
                    (0, logs_1.info)(err);
                    (0, logs_1.info)(result);
                }
                if (err) {
                    return callback(err);
                }
                const response = { id: payload.id, jsonrpc: '2.0', result: result };
                callback(null, response);
            });
        }
        callback(new Error('unknown method ' + payload.method));
    }
    sendAsync(payload, callback) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const cb = (err, result) => {
                    if (typeof callback === 'function') {
                        return callback(err, result);
                    }
                    if (err) {
                        return reject(err);
                    }
                    return resolve(result);
                };
                this._send(payload, cb);
            });
        });
    }
    send(payload, callback) {
        this.sendAsync(payload, callback);
    }
    request(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ret = yield this.sendAsync(payload);
            return ret.result;
        });
    }
    isConnected() {
        return true;
    }
    disconnect() {
        return false;
    }
    supportsSubscriptions() {
        return true;
    }
    on(type, cb) {
        this.vmContext.logsManager.addListener(type, cb);
    }
}
exports.Provider = Provider;
function extend(web3) {
    if (!web3.remix) {
        web3.registerPlugin(new Web3TestPlugin());
    }
}
exports.extend = extend;
class Web3TestPlugin extends web3_1.Web3PluginBase {
    constructor() {
        super(...arguments);
        this.pluginNamespace = 'remix';
    }
    getExecutionResultFromSimulator(transactionHash) {
        return this.requestManager.send({
            method: 'eth_getExecutionResultFromSimulator',
            params: [transactionHash]
        });
    }
    getHHLogsForTx(transactionHash) {
        return this.requestManager.send({
            method: 'eth_getHHLogsForTx',
            params: [transactionHash]
        });
    }
    getHashFromTagBySimulator(timestamp) {
        return this.requestManager.send({
            method: 'eth_getHashFromTagBySimulator',
            params: [timestamp]
        });
    }
    registerCallId(id) {
        return this.requestManager.send({
            method: 'eth_registerCallId',
            params: [id]
        });
    }
    getStateDb() {
        return this.requestManager.send({
            method: 'eth_getStateDb',
            params: []
        });
    }
    getBlocksData() {
        return this.requestManager.send({
            method: 'eth_getBlocksData',
            params: []
        });
    }
}
//# sourceMappingURL=provider.js.map