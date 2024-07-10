'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringify = exports.toInt = void 0;
const bn_js_1 = require("bn.js");
const util_1 = require("@ethereumjs/util");
const web3_validator_1 = require("web3-validator");
function toInt(h) {
    if (h.indexOf && h.indexOf('0x') === 0) {
        return (new bn_js_1.BN(h.replace('0x', ''), 16)).toString(10);
    }
    else if ((h.constructor && h.constructor.name === 'BigNumber') || bn_js_1.BN.isBN(h) || (0, web3_validator_1.isBigInt)(h)) {
        return h.toString(10);
    }
    return h;
}
exports.toInt = toInt;
exports.stringify = convertToString;
function convertToString(v) {
    try {
        if (v instanceof Array) {
            const ret = [];
            for (const k in v) {
                ret.push(convertToString(v[k]));
            }
            return ret;
        }
        else if (bn_js_1.BN.isBN(v) || (v.constructor && v.constructor.name === 'BigNumber') || (0, web3_validator_1.isBigInt)(v)) {
            return v.toString(10);
        }
        else if (v._isBigNumber) {
            return toInt(v._hex);
        }
        else if (v._isBuffer) {
            return (0, util_1.bytesToHex)(v);
        }
        else if (typeof v === 'object') {
            const retObject = {};
            for (const i in v) {
                retObject[i] = convertToString(v[i]);
            }
            return retObject;
        }
        else {
            return v;
        }
    }
    catch (e) {
        console.log(e);
        return v;
    }
}
//# sourceMappingURL=typeConversion.js.map