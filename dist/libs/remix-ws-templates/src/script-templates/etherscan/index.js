"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.etherscanScripts = void 0;
const tslib_1 = require("tslib");
const etherscanScripts = (plugin) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield plugin.call('fileManager', 'writeFile', 'scripts/etherscan/verifyScript.ts', 
    // @ts-ignore
    (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./verifyScript.ts')))).default);
    yield plugin.call('fileManager', 'open', 'scripts/etherscan/verifyScript.ts');
    yield plugin.call('fileManager', 'writeFile', 'scripts/etherscan/receiptGuidScript.ts', 
    // @ts-ignore
    (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./receiptGuidScript.ts')))).default);
    yield plugin.call('fileManager', 'open', 'scripts/etherscan/receiptGuidScript.ts');
});
exports.etherscanScripts = etherscanScripts;
//# sourceMappingURL=index.js.map