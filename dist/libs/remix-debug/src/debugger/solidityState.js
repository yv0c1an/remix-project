"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebuggerSolidityState = void 0;
const eventManager_1 = require("../eventManager");
const stateDecoder_1 = require("../solidity-decoder/stateDecoder");
const storageViewer_1 = require("../storage/storageViewer");
class DebuggerSolidityState {
    constructor(tx, _stepManager, _traceManager, _codeManager, _solidityProxy) {
        this.event = new eventManager_1.EventManager();
        this.storageResolver = null;
        this.stepManager = _stepManager;
        this.traceManager = _traceManager;
        this.codeManager = _codeManager;
        this.solidityProxy = _solidityProxy;
        this.stateVariablesByAddresses = {};
        this.tx = tx;
        this.decodeTimeout = null;
    }
    init(index) {
        if (index < 0) {
            return this.event.trigger('solidityStateMessage', ['invalid step index']);
        }
        if (this.stepManager.currentStepIndex !== index)
            return;
        if (!this.storageResolver) {
            return;
        }
        if (this.decodeTimeout) {
            window.clearTimeout(this.decodeTimeout);
        }
        this.event.trigger('solidityStateUpdating');
        this.decodeTimeout = setTimeout(() => {
            // necessary due to some states that can crash the debugger
            try {
                this.decode(index);
            }
            catch (err) {
                console.dir(err);
            }
        }, 1000);
    }
    reset() {
        this.stateVariablesByAddresses = {};
    }
    decode(index) {
        try {
            const address = this.traceManager.getCurrentCalledAddressAt(this.stepManager.currentStepIndex);
            if (this.stateVariablesByAddresses[address]) {
                return this.extractStateVariables(this.stateVariablesByAddresses[address], address);
            }
            this.solidityProxy.extractStateVariablesAt(index).then((stateVars) => {
                this.stateVariablesByAddresses[address] = stateVars;
                this.extractStateVariables(stateVars, address);
            }).catch((_error) => {
                this.event.trigger('solidityState', [{}]);
            });
        }
        catch (error) {
            return this.event.trigger('solidityState', [{}]);
        }
    }
    extractStateVariables(stateVars, address) {
        const storageViewer = new storageViewer_1.StorageViewer({ stepIndex: this.stepManager.currentStepIndex, tx: this.tx, address: address }, this.storageResolver, this.traceManager);
        (0, stateDecoder_1.decodeState)(stateVars, storageViewer).then((result) => {
            this.event.trigger('solidityStateMessage', ['']);
            if (result['error']) {
                return this.event.trigger('solidityStateMessage', [result['error']]);
            }
            this.event.trigger('solidityState', [result]);
        });
    }
}
exports.DebuggerSolidityState = DebuggerSolidityState;
//# sourceMappingURL=solidityState.js.map