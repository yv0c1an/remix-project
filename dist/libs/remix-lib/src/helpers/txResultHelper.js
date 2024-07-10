'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.resultToRemixTx = void 0;
const util_1 = require("@ethereumjs/util");
const ethjs_util_1 = require("ethjs-util");
const bn_js_1 = require("bn.js");
const web3_validator_1 = require("web3-validator");
function convertToPrefixedHex(input) {
    if (input === undefined || input === null || (0, ethjs_util_1.isHexString)(input)) {
        return input;
    }
    if ((input.constructor && input.constructor.name === 'BigNumber')
        || bn_js_1.BN.isBN(input)
        || (0, web3_validator_1.isBigInt)(input)
        || typeof input === 'number') {
        return '0x' + input.toString(16);
    }
    try {
        return (0, util_1.bytesToHex)(input);
    }
    catch (e) {
        console.log(e);
    }
    try {
        // BigNumber
        return '0x' + input.toString(16);
    }
    catch (e) {
        console.log(e);
    }
    return input;
}
/*
 txResult.result can be 3 different things:
 - VM call or tx: ethereumjs-vm result object
 - Node transaction: object returned from eth.getTransactionReceipt()
 - Node call: return value from function call (not an object)

 Also, VM results use BN and Buffers, Node results use hex strings/ints,
 So we need to normalize the values to prefixed hex strings
*/
function resultToRemixTx(txResult, execResult) {
    const { receipt, transactionHash, result } = txResult;
    const { status, gasUsed, contractAddress } = receipt;
    let returnValue, errorMessage;
    if ((0, ethjs_util_1.isHexString)(result)) {
        returnValue = result;
    }
    else if (execResult !== undefined) {
        returnValue = execResult.returnValue;
        errorMessage = execResult.exceptionError;
    }
    return {
        transactionHash,
        status: convertToPrefixedHex(status),
        gasUsed: convertToPrefixedHex(gasUsed),
        error: errorMessage,
        return: returnValue ? convertToPrefixedHex(returnValue) : undefined,
        createdAddress: convertToPrefixedHex(contractAddress)
    };
}
exports.resultToRemixTx = resultToRemixTx;
//# sourceMappingURL=txResultHelper.js.map