"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ethers = void 0;
const tslib_1 = require("tslib");
// @ts-nocheck
const ethers_1 = require("ethers");
Object.defineProperty(exports, "ethers", { enumerable: true, get: function () { return ethers_1.ethers; } });
const hhEtherMethods = tslib_1.__importStar(require("./methods"));
for (const method in hhEtherMethods)
    Object.defineProperty(ethers_1.ethers, method, { value: hhEtherMethods[method] });
tslib_1.__exportStar(require("ethers"), exports);
//# sourceMappingURL=ethers.js.map