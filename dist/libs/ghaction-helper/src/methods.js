"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContractFactory = exports.getContractAt = exports.getSigner = exports.getSigners = exports.getContractFactoryFromArtifact = exports.getContractAtFromArtifact = void 0;
const tslib_1 = require("tslib");
// @ts-ignore
const ethers_1 = require("ethers");
const remix_simulator_1 = require("@remix-project/remix-simulator");
const artifacts_helper_1 = require("./artifacts-helper");
const signer_1 = require("./signer");
const web3_1 = tslib_1.__importDefault(require("web3"));
const providerConfig = {
    fork: global.fork || null,
    nodeUrl: global.nodeUrl || null,
    blockNumber: global.blockNumber || null
};
const config = { defaultTransactionType: '0x0' };
global.remixProvider = new remix_simulator_1.Provider(providerConfig);
global.remixProvider.init();
global.web3Provider = new ethers_1.ethers.providers.Web3Provider(global.remixProvider);
global.provider = global.web3Provider;
global.ethereum = global.web3Provider;
global.web3 = new web3_1.default(global.web3Provider);
global.web3.eth.setConfig(config);
const isFactoryOptions = (signerOrOptions) => {
    if (!signerOrOptions || signerOrOptions === undefined || signerOrOptions instanceof ethers_1.ethers.Signer)
        return false;
    return true;
};
const isArtifact = (artifact) => {
    const { contractName, sourceName, abi, bytecode, deployedBytecode, linkReferences, deployedLinkReferences, } = artifact;
    return (typeof contractName === "string" &&
        typeof sourceName === "string" &&
        Array.isArray(abi) &&
        typeof bytecode === "string" &&
        typeof deployedBytecode === "string" &&
        linkReferences !== undefined &&
        deployedLinkReferences !== undefined);
};
function linkBytecode(artifact, libraries) {
    let bytecode = artifact.bytecode;
    for (const { sourceName, libraryName, address } of libraries) {
        const linkReferences = artifact.linkReferences[sourceName][libraryName];
        for (const { start, length } of linkReferences) {
            bytecode =
                bytecode.substr(0, 2 + start * 2) +
                    address.substr(2) +
                    bytecode.substr(2 + (start + length) * 2);
        }
    }
    return bytecode;
}
const collectLibrariesAndLink = (artifact, libraries) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const neededLibraries = [];
    for (const [sourceName, sourceLibraries] of Object.entries(artifact.linkReferences)) {
        // @ts-ignore
        for (const libName of Object.keys(sourceLibraries)) {
            neededLibraries.push({ sourceName, libName });
        }
    }
    const linksToApply = new Map();
    for (const [linkedLibraryName, linkedLibraryAddress] of Object.entries(libraries)) {
        // @ts-ignore
        if (!ethers_1.ethers.utils.isAddress(linkedLibraryAddress)) {
            throw new Error(`You tried to link the contract ${artifact.contractName} with the library ${linkedLibraryName}, but provided this invalid address: ${linkedLibraryAddress}`);
        }
        const matchingNeededLibraries = neededLibraries.filter((lib) => {
            return (lib.libName === linkedLibraryName ||
                `${lib.sourceName}:${lib.libName}` === linkedLibraryName);
        });
        if (matchingNeededLibraries.length === 0) {
            let detailedMessage;
            if (neededLibraries.length > 0) {
                const libraryFQNames = neededLibraries
                    .map((lib) => `${lib.sourceName}:${lib.libName}`)
                    .map((x) => `* ${x}`)
                    .join("\n");
                detailedMessage = `The libraries needed are:
      ${libraryFQNames}`;
            }
            else {
                detailedMessage = "This contract doesn't need linking any libraries.";
            }
            throw new Error(`You tried to link the contract ${artifact.contractName} with ${linkedLibraryName}, which is not one of its libraries.
      ${detailedMessage}`);
        }
        if (matchingNeededLibraries.length > 1) {
            const matchingNeededLibrariesFQNs = matchingNeededLibraries
                .map(({ sourceName, libName }) => `${sourceName}:${libName}`)
                .map((x) => `* ${x}`)
                .join("\n");
            throw new Error(`The library name ${linkedLibraryName} is ambiguous for the contract ${artifact.contractName}.
        It may resolve to one of the following libraries:
        ${matchingNeededLibrariesFQNs}
        To fix this, choose one of these fully qualified library names and replace where appropriate.`);
        }
        const [neededLibrary] = matchingNeededLibraries;
        const neededLibraryFQN = `${neededLibrary.sourceName}:${neededLibrary.libName}`;
        // The only way for this library to be already mapped is
        // for it to be given twice in the libraries user input:
        // once as a library name and another as a fully qualified library name.
        if (linksToApply.has(neededLibraryFQN)) {
            throw new Error(`The library names ${neededLibrary.libName} and ${neededLibraryFQN} refer to the same library and were given as two separate library links.
        Remove one of them and review your library links before proceeding.`);
        }
        linksToApply.set(neededLibraryFQN, {
            sourceName: neededLibrary.sourceName,
            libraryName: neededLibrary.libName,
            address: linkedLibraryAddress,
        });
    }
    if (linksToApply.size < neededLibraries.length) {
        const missingLibraries = neededLibraries
            .map((lib) => `${lib.sourceName}:${lib.libName}`)
            .filter((libFQName) => !linksToApply.has(libFQName))
            .map((x) => `* ${x}`)
            .join("\n");
        throw new Error(`The contract ${artifact.contractName} is missing links for the following libraries:
      ${missingLibraries}`);
    }
    // @ts-ignore
    return linkBytecode(artifact, [...linksToApply.values()]);
});
// Convert output.contracts.<filename>.<contractName> in Artifact object compatible form
const resultToArtifact = (result) => {
    const { fullyQualifiedName, artefact } = result;
    return {
        contractName: fullyQualifiedName.split(':')[1],
        sourceName: fullyQualifiedName.split(':')[0],
        abi: artefact.abi,
        bytecode: artefact.evm.bytecode.object,
        deployedBytecode: artefact.evm.deployedBytecode.object,
        linkReferences: artefact.evm.bytecode.linkReferences,
        deployedLinkReferences: artefact.evm.deployedBytecode.linkReferences
    };
};
const getContractFactory = (contractNameOrABI, bytecode, signerOrOptions = null) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (bytecode && contractNameOrABI) {
        //@ts-ignore
        return new ethers_1.ethers.ContractFactory(contractNameOrABI, bytecode, signerOrOptions || web3Provider.getSigner());
    }
    else if (typeof contractNameOrABI === 'string') {
        const contract = yield (0, artifacts_helper_1.getArtifactsByContractName)(contractNameOrABI);
        if (contract) {
            //@ts-ignore
            return new ethers_1.ethers.ContractFactory(contract.abi, contract.evm.bytecode.object, signerOrOptions || web3Provider.getSigner());
        }
        else {
            throw new Error('Contract artifacts not found');
        }
    }
    else {
        throw new Error('Invalid contract name or ABI provided');
    }
});
exports.getContractFactory = getContractFactory;
const getContractAt = (contractNameOrABI, address, signer = null) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const provider = web3Provider;
    if (typeof contractNameOrABI === 'string') {
        const result = yield (0, artifacts_helper_1.getArtifactsByContractName)(contractNameOrABI);
        if (result) {
            return new ethers_1.ethers.Contract(address, result.abi, signer || provider.getSigner());
        }
        else {
            throw new Error('Contract artifacts not found');
        }
    }
    else {
        return new ethers_1.ethers.Contract(address, contractNameOrABI, signer || provider.getSigner());
    }
});
exports.getContractAt = getContractAt;
const getSigner = (address) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const provider = web3Provider;
    const signer = provider.getSigner(address);
    return signer_1.SignerWithAddress.create(signer);
});
exports.getSigner = getSigner;
const getSigners = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const provider = web3Provider;
    const accounts = yield provider.listAccounts();
    return yield Promise.all(accounts.map((account) => getSigner(account)));
});
exports.getSigners = getSigners;
const getContractFactoryFromArtifact = (artifact, signerOrOptions) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let libraries = {};
    let signer;
    if (!isArtifact(artifact)) {
        throw new Error(`You are trying to create a contract factory from an artifact, but you have not passed a valid artifact parameter.`);
    }
    if (isFactoryOptions(signerOrOptions)) {
        signer = signerOrOptions.signer;
        libraries = (_a = signerOrOptions.libraries) !== null && _a !== void 0 ? _a : {};
    }
    else {
        signer = signerOrOptions;
    }
    if (artifact.bytecode === "0x") {
        throw new Error(`You are trying to create a contract factory for the contract ${artifact.contractName}, which is abstract and can't be deployed.
If you want to call a contract using ${artifact.contractName} as its interface use the "getContractAt" function instead.`);
    }
    const linkedBytecode = yield collectLibrariesAndLink(artifact, libraries);
    //@ts-ignore
    return new ethers_1.ethers.ContractFactory(artifact.abi, linkedBytecode || artifact.bytecode, signer || web3Provider.getSigner());
});
exports.getContractFactoryFromArtifact = getContractFactoryFromArtifact;
const getContractAtFromArtifact = (artifact, address, signerOrOptions = null) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (!isArtifact(artifact)) {
        throw new Error(`You are trying to create a contract factory from an artifact, but you have not passed a valid artifact parameter.`);
    }
    return yield getContractAt(artifact.abi, address, signerOrOptions);
});
exports.getContractAtFromArtifact = getContractAtFromArtifact;
//# sourceMappingURL=methods.js.map