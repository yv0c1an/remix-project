"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArtifactsByContractName = void 0;
const tslib_1 = require("tslib");
//@ts-ignore
const fs = tslib_1.__importStar(require("fs/promises"));
const path = tslib_1.__importStar(require("path"));
function getArtifactsByContractName(contractIdentifier) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        //@ts-ignore
        const contractArtifacts = yield fs.readdir(global.remixContractArtifactsPath);
        let contract;
        for (const artifactFile of contractArtifacts) {
            //@ts-ignore
            const artifact = yield fs.readFile(path.join(global.remixContractArtifactsPath, artifactFile), 'utf-8');
            const artifactJSON = JSON.parse(artifact);
            const contractFullPath = (Object.keys(artifactJSON.contracts)).find((contractName) => artifactJSON.contracts[contractName] && artifactJSON.contracts[contractName][contractIdentifier]);
            contract = contractFullPath ? artifactJSON.contracts[contractFullPath][contractIdentifier] : undefined;
            if (contract)
                break;
        }
        return contract;
    });
}
exports.getArtifactsByContractName = getArtifactsByContractName;
//# sourceMappingURL=artifacts-helper.js.map