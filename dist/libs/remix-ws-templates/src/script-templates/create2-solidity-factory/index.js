"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contractCreate2Factory = void 0;
const tslib_1 = require("tslib");
const contractCreate2Factory = (plugin) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield plugin.call('fileManager', 'writeFile', 'contracts/libs/create2-factory.sol', 
    // @ts-ignore
    (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./create2-factory.sol')))).default);
    yield plugin.call('fileManager', 'open', 'contracts/libs/create2-factory.sol');
});
exports.contractCreate2Factory = contractCreate2Factory;
//# sourceMappingURL=index.js.map