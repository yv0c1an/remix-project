"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertIsString = exports.assertIsArray = exports.assertIsBuffer = exports.assertIsHexString = exports.rlphash = exports.ripemd160FromArray = exports.ripemd160FromString = exports.ripemd160 = exports.sha256FromArray = exports.sha256FromString = exports.sha256 = exports.keccakFromArray = exports.keccakFromHexString = exports.keccakFromString = exports.keccak256 = exports.keccak = void 0;
const keccak_1 = require("ethereum-cryptography/keccak");
const createHash = require('create-hash');
const rlp_1 = require("rlp");
const util_1 = require("@ethereumjs/util");
/**
 * Creates Keccak hash of a Uint8Array input
 * @param a The input data (Uint8Array)
 * @param bits (number = 256) The Keccak width
 */
const keccak = function (a, bits = 256) {
    switch (bits) {
        case 224: {
            return (0, util_1.toBytes)((0, keccak_1.keccak224)(Buffer.from(a)));
        }
        case 256: {
            return (0, util_1.toBytes)((0, keccak_1.keccak256)(Buffer.from(a)));
        }
        case 384: {
            return (0, util_1.toBytes)((0, keccak_1.keccak384)(Buffer.from(a)));
        }
        case 512: {
            return (0, util_1.toBytes)((0, keccak_1.keccak512)(Buffer.from(a)));
        }
        default: {
            throw new Error(`Invalid algorithm: keccak${bits}`);
        }
    }
};
exports.keccak = keccak;
/**
 * Creates Keccak-256 hash of the input, alias for keccak(a, 256).
 * @param a The input data (Buffer)
 */
const keccak256 = function (a) {
    return (0, exports.keccak)(a);
};
exports.keccak256 = keccak256;
/**
 * Creates Keccak hash of a utf-8 string input
 * @param a The input data (String)
 * @param bits (number = 256) The Keccak width
 */
const keccakFromString = function (a, bits = 256) {
    (0, exports.assertIsString)(a);
    const buf = Buffer.from(a, 'utf8');
    return (0, exports.keccak)(buf, bits);
};
exports.keccakFromString = keccakFromString;
/**
 * Creates Keccak hash of an 0x-prefixed string input
 * @param a The input data (String)
 * @param bits (number = 256) The Keccak width
 */
const keccakFromHexString = function (a, bits = 256) {
    (0, exports.assertIsHexString)(a);
    return (0, exports.keccak)(Buffer.from((0, util_1.toBytes)(a)), bits);
};
exports.keccakFromHexString = keccakFromHexString;
/**
 * Creates Keccak hash of a number array input
 * @param a The input data (number[])
 * @param bits (number = 256) The Keccak width
 */
const keccakFromArray = function (a, bits = 256) {
    (0, exports.assertIsArray)(a);
    return (0, exports.keccak)(Buffer.from((0, util_1.toBytes)(a)), bits);
};
exports.keccakFromArray = keccakFromArray;
/**
 * Creates SHA256 hash of an input.
 * @param  a The input data (Buffer|Array|String)
 */
const _sha256 = function (a) {
    a = (0, util_1.toBytes)(a);
    return createHash('sha256')
        .update(a)
        .digest();
};
/**
 * Creates SHA256 hash of a Buffer input.
 * @param a The input data (Buffer)
 */
const sha256 = function (a) {
    (0, exports.assertIsBuffer)(a);
    return _sha256(a);
};
exports.sha256 = sha256;
/**
 * Creates SHA256 hash of a string input.
 * @param a The input data (string)
 */
const sha256FromString = function (a) {
    (0, exports.assertIsString)(a);
    return _sha256(a);
};
exports.sha256FromString = sha256FromString;
/**
 * Creates SHA256 hash of a number[] input.
 * @param a The input data (number[])
 */
const sha256FromArray = function (a) {
    (0, exports.assertIsArray)(a);
    return _sha256(a);
};
exports.sha256FromArray = sha256FromArray;
/**
 * Creates RIPEMD160 hash of the input.
 * @param a The input data (Buffer|Array|String|Number)
 * @param padded Whether it should be padded to 256 bits or not
 */
const _ripemd160 = function (a, padded) {
    a = (0, util_1.toBytes)(a);
    const hash = createHash('rmd160')
        .update(a)
        .digest();
    if (padded === true) {
        return Buffer.from((0, util_1.setLengthLeft)(hash, 32));
    }
    else {
        return hash;
    }
};
/**
 * Creates RIPEMD160 hash of a Buffer input.
 * @param a The input data (Buffer)
 * @param padded Whether it should be padded to 256 bits or not
 */
const ripemd160 = function (a, padded) {
    (0, exports.assertIsBuffer)(a);
    return _ripemd160(a, padded);
};
exports.ripemd160 = ripemd160;
/**
 * Creates RIPEMD160 hash of a string input.
 * @param a The input data (String)
 * @param padded Whether it should be padded to 256 bits or not
 */
const ripemd160FromString = function (a, padded) {
    (0, exports.assertIsString)(a);
    return _ripemd160(a, padded);
};
exports.ripemd160FromString = ripemd160FromString;
/**
 * Creates RIPEMD160 hash of a number[] input.
 * @param a The input data (number[])
 * @param padded Whether it should be padded to 256 bits or not
 */
const ripemd160FromArray = function (a, padded) {
    (0, exports.assertIsArray)(a);
    return _ripemd160(a, padded);
};
exports.ripemd160FromArray = ripemd160FromArray;
/**
 * Creates SHA-3 hash of the RLP encoded version of the input.
 * @param a The input data
 */
const rlphash = function (a) {
    return Buffer.from((0, exports.keccak)(Buffer.from((0, rlp_1.encode)(a))));
};
exports.rlphash = rlphash;
/**
 * Throws if a string is not hex prefixed
 * @param {string} input string to check hex prefix of
 */
const assertIsHexString = function (input) {
    if (!(0, util_1.isHexString)(input)) {
        const msg = `This method only supports 0x-prefixed hex strings but input was: ${input}`;
        throw new Error(msg);
    }
};
exports.assertIsHexString = assertIsHexString;
/**
 * Throws if input is not a buffer
 * @param {Buffer} input value to check
 */
const assertIsBuffer = function (input) {
    if (!Buffer.isBuffer(input)) {
        const msg = `This method only supports Buffer but input was: ${input}`;
        throw new Error(msg);
    }
};
exports.assertIsBuffer = assertIsBuffer;
/**
 * Throws if input is not an array
 * @param {number[]} input value to check
 */
const assertIsArray = function (input) {
    if (!Array.isArray(input)) {
        const msg = `This method only supports number arrays but input was: ${input}`;
        throw new Error(msg);
    }
};
exports.assertIsArray = assertIsArray;
/**
 * Throws if input is not a string
 * @param {string} input value to check
 */
const assertIsString = function (input) {
    if (typeof input !== 'string') {
        const msg = `This method only supports strings but input was: ${input}`;
        throw new Error(msg);
    }
};
exports.assertIsString = assertIsString;
//# sourceMappingURL=hash.js.map