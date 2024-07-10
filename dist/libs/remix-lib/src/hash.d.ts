import { Input } from 'rlp';
/**
 * Creates Keccak hash of a Uint8Array input
 * @param a The input data (Uint8Array)
 * @param bits (number = 256) The Keccak width
 */
export declare const keccak: (a: Uint8Array, bits?: number) => Uint8Array;
/**
 * Creates Keccak-256 hash of the input, alias for keccak(a, 256).
 * @param a The input data (Buffer)
 */
export declare const keccak256: (a: Buffer) => Uint8Array;
/**
 * Creates Keccak hash of a utf-8 string input
 * @param a The input data (String)
 * @param bits (number = 256) The Keccak width
 */
export declare const keccakFromString: (a: string, bits?: number) => Uint8Array;
/**
 * Creates Keccak hash of an 0x-prefixed string input
 * @param a The input data (String)
 * @param bits (number = 256) The Keccak width
 */
export declare const keccakFromHexString: (a: string, bits?: number) => Uint8Array;
/**
 * Creates Keccak hash of a number array input
 * @param a The input data (number[])
 * @param bits (number = 256) The Keccak width
 */
export declare const keccakFromArray: (a: number[], bits?: number) => Uint8Array;
/**
 * Creates SHA256 hash of a Buffer input.
 * @param a The input data (Buffer)
 */
export declare const sha256: (a: Buffer) => Buffer;
/**
 * Creates SHA256 hash of a string input.
 * @param a The input data (string)
 */
export declare const sha256FromString: (a: string) => Buffer;
/**
 * Creates SHA256 hash of a number[] input.
 * @param a The input data (number[])
 */
export declare const sha256FromArray: (a: number[]) => Buffer;
/**
 * Creates RIPEMD160 hash of a Buffer input.
 * @param a The input data (Buffer)
 * @param padded Whether it should be padded to 256 bits or not
 */
export declare const ripemd160: (a: Buffer, padded: boolean) => Buffer;
/**
 * Creates RIPEMD160 hash of a string input.
 * @param a The input data (String)
 * @param padded Whether it should be padded to 256 bits or not
 */
export declare const ripemd160FromString: (a: string, padded: boolean) => Buffer;
/**
 * Creates RIPEMD160 hash of a number[] input.
 * @param a The input data (number[])
 * @param padded Whether it should be padded to 256 bits or not
 */
export declare const ripemd160FromArray: (a: number[], padded: boolean) => Buffer;
/**
 * Creates SHA-3 hash of the RLP encoded version of the input.
 * @param a The input data
 */
export declare const rlphash: (a: Input) => Buffer;
/**
 * Throws if a string is not hex prefixed
 * @param {string} input string to check hex prefix of
 */
export declare const assertIsHexString: (input: string) => void;
/**
 * Throws if input is not a buffer
 * @param {Buffer} input value to check
 */
export declare const assertIsBuffer: (input: Buffer) => void;
/**
 * Throws if input is not an array
 * @param {number[]} input value to check
 */
export declare const assertIsArray: (input: number[]) => void;
/**
 * Throws if input is not a string
 * @param {string} input value to check
 */
export declare const assertIsString: (input: string) => void;
