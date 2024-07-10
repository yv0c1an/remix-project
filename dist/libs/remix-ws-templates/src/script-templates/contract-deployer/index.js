"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contractDeployerScripts = void 0;
const tslib_1 = require("tslib");
const contractDeployerScripts = (plugin) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield plugin.call('fileManager', 'writeFile', 'scripts/contract-deployer/create2-factory-deploy.ts', 
    // @ts-ignore
    (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./create2-factory-deploy.ts')))).default);
    yield plugin.call('fileManager', 'open', 'scripts/contract-deployer/create2-factory-deploy.ts');
    yield plugin.call('fileManager', 'writeFile', 'scripts/contract-deployer/basic-contract-deploy.ts', 
    // @ts-ignore
    (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./basic-contract-deploy.ts')))).default);
    yield plugin.call('fileManager', 'open', 'scripts/contract-deployer/basic-contract-deploy.ts');
});
exports.contractDeployerScripts = contractDeployerScripts;
//# sourceMappingURL=index.js.map