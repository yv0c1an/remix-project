"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoundryClient = void 0;
const tslib_1 = require("tslib");
const plugin_1 = require("@remixproject/plugin");
const chokidar = tslib_1.__importStar(require("chokidar"));
const utils = tslib_1.__importStar(require("../utils"));
const fs = tslib_1.__importStar(require("fs-extra"));
const path_1 = require("path");
const { spawn } = require('child_process'); // eslint-disable-line
class FoundryClient extends plugin_1.PluginClient {
    constructor(readOnly = false) {
        super();
        this.readOnly = readOnly;
        this.methods = ['compile', 'sync'];
        this.onActivation = () => {
            console.log('Foundry plugin activated');
            this.call('terminal', 'log', { type: 'log', value: 'Foundry plugin activated' });
            this.startListening();
        };
    }
    setWebSocket(websocket) {
        this.websocket = websocket;
        this.websocket.addEventListener('close', () => {
            this.warnlog = false;
            if (this.watcher)
                this.watcher.close();
        });
    }
    sharedFolder(currentSharedFolder) {
        this.currentSharedFolder = currentSharedFolder;
        this.buildPath = utils.absolutePath('out', this.currentSharedFolder);
        this.cachePath = utils.absolutePath('cache', this.currentSharedFolder);
    }
    startListening() {
        if (fs.existsSync(this.buildPath) && fs.existsSync(this.cachePath)) {
            this.listenOnFoundryCompilation();
        }
        else {
            this.listenOnFoundryFolder();
        }
    }
    listenOnFoundryFolder() {
        console.log('Foundry out folder doesn\'t exist... waiting for the compilation.');
        try {
            if (this.watcher)
                this.watcher.close();
            this.watcher = chokidar.watch(this.currentSharedFolder, { depth: 1, ignorePermissionErrors: true, ignoreInitial: true });
            // watch for new folders
            this.watcher.on('addDir', () => {
                if (fs.existsSync(this.buildPath) && fs.existsSync(this.cachePath)) {
                    this.listenOnFoundryCompilation();
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    compile() {
        return new Promise((resolve, reject) => {
            if (this.readOnly) {
                const errMsg = '[Foundry Compilation]: Cannot compile in read-only mode';
                return reject(new Error(errMsg));
            }
            const cmd = `forge build`;
            const options = { cwd: this.currentSharedFolder, shell: true };
            const child = spawn(cmd, options);
            let result = '';
            let error = '';
            child.stdout.on('data', (data) => {
                const msg = `[Foundry Compilation]: ${data.toString()}`;
                console.log('\x1b[32m%s\x1b[0m', msg);
                result += msg + '\n';
            });
            child.stderr.on('data', (err) => {
                error += `[Foundry Compilation]: ${err.toString()} \n`;
            });
            child.on('close', () => {
                if (error && result)
                    resolve(error + result);
                else if (error)
                    reject(error);
                else
                    resolve(result);
            });
        });
    }
    checkPath() {
        if (!fs.existsSync(this.buildPath) || !fs.existsSync(this.cachePath)) {
            this.listenOnFoundryFolder();
            return false;
        }
        if (!fs.existsSync((0, path_1.join)(this.cachePath, 'solidity-files-cache.json')))
            return false;
        return true;
    }
    processArtifact() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.checkPath())
                return;
            const folderFiles = yield fs.readdir(this.buildPath); // "out" folder
            try {
                const cache = JSON.parse(yield fs.readFile((0, path_1.join)(this.cachePath, 'solidity-files-cache.json'), { encoding: 'utf-8' }));
                // name of folders are file names
                for (const file of folderFiles) {
                    const path = (0, path_1.join)(this.buildPath, file); // out/Counter.sol/
                    const compilationResult = {
                        input: {},
                        output: {
                            contracts: {},
                            sources: {}
                        },
                        inputSources: { sources: {}, target: '' },
                        solcVersion: null,
                        compilationTarget: null
                    };
                    compilationResult.inputSources.target = file;
                    yield this.readContract(path, compilationResult, cache);
                    this.emit('compilationFinished', compilationResult.compilationTarget, { sources: compilationResult.input }, 'soljson', compilationResult.output, compilationResult.solcVersion);
                }
                clearTimeout(this.logTimeout);
                this.logTimeout = setTimeout(() => {
                    // @ts-ignore
                    this.call('terminal', 'log', { type: 'log', value: `receiving compilation result from Foundry. Select a file to populate the contract interaction interface.` });
                    console.log('Syncing compilation result from Foundry');
                }, 1000);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    triggerProcessArtifact() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // prevent multiple calls
            clearTimeout(this.processingTimeout);
            this.processingTimeout = setTimeout(() => tslib_1.__awaiter(this, void 0, void 0, function* () { return yield this.processArtifact(); }), 1000);
        });
    }
    listenOnFoundryCompilation() {
        try {
            if (this.watcher)
                this.watcher.close();
            this.watcher = chokidar.watch(this.cachePath, { depth: 0, ignorePermissionErrors: true, ignoreInitial: true });
            this.watcher.on('change', () => tslib_1.__awaiter(this, void 0, void 0, function* () { return yield this.triggerProcessArtifact(); }));
            this.watcher.on('add', () => tslib_1.__awaiter(this, void 0, void 0, function* () { return yield this.triggerProcessArtifact(); }));
            // process the artifact on activation
            this.triggerProcessArtifact();
        }
        catch (e) {
            console.log(e);
        }
    }
    readContract(contractFolder, compilationResultPart, cache) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const files = yield fs.readdir(contractFolder);
            for (const file of files) {
                const path = (0, path_1.join)(contractFolder, file);
                const content = yield fs.readFile(path, { encoding: 'utf-8' });
                compilationResultPart.inputSources.sources[file] = { content };
                yield this.feedContractArtifactFile(file, content, compilationResultPart, cache);
            }
        });
    }
    feedContractArtifactFile(path, content, compilationResultPart, cache) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const contentJSON = JSON.parse(content);
            const contractName = (0, path_1.basename)(path).replace('.json', '');
            let sourcePath = '';
            if ((_b = (_a = contentJSON === null || contentJSON === void 0 ? void 0 : contentJSON.metadata) === null || _a === void 0 ? void 0 : _a.settings) === null || _b === void 0 ? void 0 : _b.compilationTarget) {
                for (const key in contentJSON.metadata.settings.compilationTarget) {
                    if (contentJSON.metadata.settings.compilationTarget[key] === contractName) {
                        sourcePath = key;
                        break;
                    }
                }
            }
            if (!sourcePath)
                return;
            const currentCache = cache.files[sourcePath];
            if (!currentCache.artifacts[contractName])
                return;
            // extract source and version
            const metadata = contentJSON.metadata;
            if (metadata.compiler && metadata.compiler.version) {
                compilationResultPart.solcVersion = metadata.compiler.version;
            }
            else {
                compilationResultPart.solcVersion = '';
                console.log('\x1b[32m%s\x1b[0m', 'compiler version not found, please update Foundry to the latest version.');
            }
            if (metadata.sources) {
                for (const path in metadata.sources) {
                    const absPath = utils.absolutePath(path, this.currentSharedFolder);
                    try {
                        const content = yield fs.readFile(absPath, { encoding: 'utf-8' });
                        compilationResultPart.input[path] = { content };
                    }
                    catch (e) {
                        compilationResultPart.input[path] = { content: '' };
                    }
                }
            }
            else {
                console.log('\x1b[32m%s\x1b[0m', 'sources input not found, please update Foundry to the latest version.');
            }
            compilationResultPart.compilationTarget = sourcePath;
            // extract data
            if (!compilationResultPart.output['sources'][sourcePath])
                compilationResultPart.output['sources'][sourcePath] = {};
            compilationResultPart.output['sources'][sourcePath] = {
                ast: contentJSON['ast'],
                id: contentJSON['id']
            };
            if (!compilationResultPart.output['contracts'][sourcePath])
                compilationResultPart.output['contracts'][sourcePath] = {};
            contentJSON.bytecode.object = contentJSON.bytecode.object.replace('0x', '');
            contentJSON.deployedBytecode.object = contentJSON.deployedBytecode.object.replace('0x', '');
            compilationResultPart.output['contracts'][sourcePath][contractName] = {
                abi: contentJSON.abi,
                evm: {
                    bytecode: contentJSON.bytecode,
                    deployedBytecode: contentJSON.deployedBytecode,
                    methodIdentifiers: contentJSON.methodIdentifiers
                }
            };
        });
    }
    sync() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('syncing Foundry with Remix...');
            this.processArtifact();
        });
    }
}
exports.FoundryClient = FoundryClient;
//# sourceMappingURL=foundryClient.js.map