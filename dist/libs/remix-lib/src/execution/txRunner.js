'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxRunner = void 0;
const eventManager_1 = require("../eventManager");
class TxRunner {
    constructor(internalRunner, opt) {
        this.opt = opt || {};
        this.internalRunner = internalRunner;
        this.event = new eventManager_1.EventManager();
        this.pendingTxs = {};
        this.queusTxs = [];
    }
    rawRun(args, confirmationCb, gasEstimationForceSend, promptCb, cb) {
        run(this, args, args.timestamp || Date.now(), confirmationCb, gasEstimationForceSend, promptCb, cb);
    }
    execute(args, confirmationCb, gasEstimationForceSend, promptCb, callback) {
        let data = args.data;
        if (data.slice(0, 2) !== '0x') {
            data = '0x' + data;
        }
        this.internalRunner.execute(args, confirmationCb, gasEstimationForceSend, promptCb, callback);
    }
}
exports.TxRunner = TxRunner;
function run(self, tx, stamp, confirmationCb, gasEstimationForceSend = null, promptCb = null, callback = null) {
    if (Object.keys(self.pendingTxs).length) {
        return self.queusTxs.push({ tx, stamp, confirmationCb, gasEstimationForceSend, promptCb, callback });
    }
    self.pendingTxs[stamp] = tx;
    self.execute(tx, confirmationCb, gasEstimationForceSend, promptCb, function (error, result) {
        delete self.pendingTxs[stamp];
        if (callback && typeof callback === 'function')
            callback(error, result);
        if (self.queusTxs.length) {
            const next = self.queusTxs.pop();
            run(self, next.tx, next.stamp, next.confirmationCb, next.gasEstimationForceSend, next.promptCb, next.callback);
        }
    });
}
//# sourceMappingURL=txRunner.js.map