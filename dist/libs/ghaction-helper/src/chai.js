"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chai = void 0;
const tslib_1 = require("tslib");
const chai = tslib_1.__importStar(require("chai"));
exports.chai = chai;
// @ts-ignore
const chai_1 = require("@ethereum-waffle/chai");
chai.use(chai_1.waffleChai);
// @ts-ignore
tslib_1.__exportStar(require("chai"), exports);
//# sourceMappingURL=chai.js.map