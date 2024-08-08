'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceAnalyser = void 0;
const tslib_1 = require("tslib");
const remix_lib_1 = require("@remix-project/remix-lib");
const util_1 = require("@ethereumjs/util");
const { toHexPaddedString } = remix_lib_1.util;
const traceHelper = tslib_1.__importStar(require("./traceHelper"));
class TraceAnalyser {
    constructor(_cache) {
        this.traceCache = _cache;
        this.trace = null;
    }
    analyse(trace, tx) {
        this.trace = trace;
        this.traceCache.pushStoreChanges(0, tx.to);
        let context = {
            storageContext: [tx.to],
            currentCallIndex: 0,
            lastCallIndex: 0
        };
        const callStack = [tx.to];
        this.traceCache.pushCall(trace[0], 0, callStack[0], callStack.slice(0));
        if (traceHelper.isContractCreation(tx.to)) {
            this.traceCache.pushContractCreation(tx.to, tx.input);
        }
        this.buildCalldata(0, this.trace[0], tx, true);
        for (let k = 0; k < this.trace.length; k++) {
            const step = this.trace[k];
            this.buildMemory(k, step);
            context = this.buildDepth(k, step, tx, callStack, context);
            context = this.buildStorage(k, step, context);
            this.buildReturnValues(k, step);
        }
        return true;
    }
    buildReturnValues(index, step) {
        if (traceHelper.isReturnInstruction(step)) {
            let offset = 2 * parseInt(toHexPaddedString(step.stack[step.stack.length - 1]), 16);
            const size = 2 * parseInt(toHexPaddedString(step.stack[step.stack.length - 2]), 16);
            const memory = this.trace[this.traceCache.memoryChanges[this.traceCache.memoryChanges.length - 1]].memory;
            const noOfReturnParams = size / 64;
            const memoryInString = memory.join('');
            const returnParamsObj = [];
            for (let i = 0; i < noOfReturnParams; i++) {
                returnParamsObj.push('0x' + memoryInString.substring(offset, offset + 64));
                offset += 64;
            }
            this.traceCache.pushReturnValue(index, returnParamsObj);
        }
        if (traceHelper.isReturnInstruction(step) || traceHelper.isStopInstruction(step) || traceHelper.isRevertInstruction(step)) {
            this.traceCache.pushStopIndex(index, this.traceCache.currentCall.call.address);
        }
        try {
            if (parseInt(step.gas) - parseInt(step.gasCost) <= 0 || step.error === 'OutOfGas') {
                this.traceCache.pushOutOfGasIndex(index, this.traceCache.currentCall.call.address);
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    buildCalldata(index, step, tx, newContext) {
        let calldata = '';
        if (index === 0) {
            calldata = tx.input;
            this.traceCache.pushCallDataChanges(index, calldata);
        }
        else if (!newContext) {
            const lastCall = this.traceCache.callsData[this.traceCache.callDataChanges[this.traceCache.callDataChanges.length - 2]];
            this.traceCache.pushCallDataChanges(index + 1, lastCall);
        }
        else {
            const memory = this.trace[this.traceCache.memoryChanges[this.traceCache.memoryChanges.length - 1]].memory;
            const callStep = this.trace[index];
            const stack = callStep.stack;
            let offset = 0;
            let size = 0;
            if (callStep.op === 'DELEGATECALL') {
                offset = 2 * parseInt(toHexPaddedString(stack[stack.length - 3]), 16);
                size = 2 * parseInt(toHexPaddedString(stack[stack.length - 4]), 16);
            }
            else {
                offset = 2 * parseInt(toHexPaddedString(stack[stack.length - 4]), 16);
                size = 2 * parseInt(toHexPaddedString(stack[stack.length - 5]), 16);
            }
            calldata = (0, util_1.bytesToHex)(memory).replace('0x', '').substring(offset, offset + size);
            this.traceCache.pushCallDataChanges(index + 1, calldata);
        }
    }
    buildMemory(index, step) {
        if (step.memory) {
            this.traceCache.pushMemoryChanges(index);
        }
    }
    buildStorage(index, step, context) {
        if (traceHelper.newContextStorage(step) && !traceHelper.isCallToPrecompiledContract(index, this.trace)) {
            const calledAddress = traceHelper.resolveCalledAddress(index, this.trace);
            if (calledAddress) {
                context.storageContext.push(calledAddress);
            }
            else {
                console.log('unable to build storage changes. ' + index + ' does not match with a CALL. storage changes will be corrupted');
            }
            this.traceCache.pushStoreChanges(index + 1, context.storageContext[context.storageContext.length - 1]);
        }
        else if (traceHelper.isSSTOREInstruction(step)) {
            this.traceCache.pushStoreChanges(index + 1, context.storageContext[context.storageContext.length - 1], toHexPaddedString(step.stack[step.stack.length - 1]), toHexPaddedString(step.stack[step.stack.length - 2]));
        }
        else if (traceHelper.isReturnInstruction(step) || traceHelper.isStopInstruction(step)) {
            context.storageContext.pop();
            this.traceCache.pushStoreChanges(index + 1, context.storageContext[context.storageContext.length - 1]);
        }
        else if (traceHelper.isRevertInstruction(step)) {
            context.storageContext.pop();
            this.traceCache.resetStoreChanges();
        }
        return context;
    }
    buildDepth(index, step, tx, callStack, context) {
        if (traceHelper.isCallInstruction(step) && !traceHelper.isCallToPrecompiledContract(index, this.trace)) {
            let newAddress;
            if (traceHelper.isCreateInstruction(step)) {
                newAddress = traceHelper.contractCreationToken(index);
                callStack.push(newAddress);
                const lastMemoryChange = this.traceCache.memoryChanges[this.traceCache.memoryChanges.length - 1];
                this.traceCache.pushContractCreationFromMemory(index, newAddress, this.trace, lastMemoryChange);
            }
            else {
                newAddress = traceHelper.resolveCalledAddress(index, this.trace);
                if (newAddress) {
                    callStack.push(newAddress);
                }
                else {
                    console.log('unable to build depth changes. ' + index + ' does not match with a CALL. depth changes will be corrupted');
                }
            }
            this.traceCache.pushCall(step, index + 1, newAddress, callStack.slice(0));
            this.buildCalldata(index, step, tx, true);
            this.traceCache.pushSteps(index, context.currentCallIndex);
            context.lastCallIndex = context.currentCallIndex;
            context.currentCallIndex = 0;
        }
        else if (traceHelper.isReturnInstruction(step) || traceHelper.isStopInstruction(step) || step.error || step.invalidDepthChange) {
            if (index < this.trace.length) {
                callStack.pop();
                this.traceCache.pushCall(step, index + 1, null, callStack.slice(0), step.error || step.invalidDepthChange);
                this.buildCalldata(index, step, tx, false);
                this.traceCache.pushSteps(index, context.currentCallIndex);
                context.currentCallIndex = context.lastCallIndex + 1;
            }
        }
        else {
            this.traceCache.pushSteps(index, context.currentCallIndex);
            context.currentCallIndex++;
        }
        return context;
    }
}
exports.TraceAnalyser = TraceAnalyser;
//# sourceMappingURL=traceAnalyser.js.map