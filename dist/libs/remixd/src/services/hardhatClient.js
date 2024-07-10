"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HardhatClient = void 0;
const tslib_1 = require("tslib");
const plugin_1 = require("@remixproject/plugin");
const chokidar = tslib_1.__importStar(require("chokidar"));
const utils = tslib_1.__importStar(require("../utils"));
const fs = tslib_1.__importStar(require("fs-extra"));
const path_1 = require("path");
const { spawn } = require('child_process'); // eslint-disable-line
class HardhatClient extends plugin_1.PluginClient {
    constructor(readOnly = false) {
        super();
        this.readOnly = readOnly;
        this.methods = ['compile', 'sync'];
        this.onActivation = () => {
            console.log('Hardhat plugin activated');
            this.call('terminal', 'log', { type: 'log', value: 'Hardhat plugin activated' });
            this.startListening();
        };
    }
    setWebSocket(websocket) {
        this.websocket = websocket;
        this.websocket.addEventListener('close', () => {
            this.warnLog = false;
            if (this.watcher)
                this.watcher.close();
        });
    }
    sharedFolder(currentSharedFolder) {
        this.currentSharedFolder = currentSharedFolder;
        this.buildPath = utils.absolutePath('artifacts/contracts', this.currentSharedFolder);
    }
    startListening() {
        if (fs.existsSync(this.buildPath)) {
            this.listenOnHardhatCompilation();
        }
        else {
            console.log('If you are using Hardhat, run `npx hardhat compile` or run the compilation with `Enable Hardhat Compilation` checked from the Remix IDE.');
            this.listenOnHardHatFolder();
        }
    }
    compile(configPath) {
        return new Promise((resolve, reject) => {
            if (this.readOnly) {
                const errMsg = '[Hardhat Compilation]: Cannot compile in read-only mode';
                return reject(new Error(errMsg));
            }
            const cmd = `npx hardhat compile --config ${utils.normalizePath(configPath)}`;
            const options = { cwd: this.currentSharedFolder, shell: true };
            const child = spawn(cmd, options);
            let result = '';
            let error = '';
            child.stdout.on('data', (data) => {
                const msg = `[Hardhat Compilation]: ${data.toString()}`;
                console.log('\x1b[32m%s\x1b[0m', msg);
                result += msg + '\n';
            });
            child.stderr.on('data', (err) => {
                error += `[Hardhat Compilation]: ${err.toString()} \n`;
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
        if (!fs.existsSync(this.buildPath)) {
            this.listenOnHardHatFolder();
            return false;
        }
        return true;
    }
    processArtifact() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.checkPath())
                return;
            // resolving the files
            const folderFiles = yield fs.readdir(this.buildPath);
            const targetsSynced = [];
            // name of folders are file names
            for (const file of folderFiles) { // ["artifacts/contracts/Greeter.sol/"]
                const contractFilePath = (0, path_1.join)(this.buildPath, file);
                const stat = yield fs.stat(contractFilePath);
                if (!stat.isDirectory())
                    continue;
                const files = yield fs.readdir(contractFilePath);
                const compilationResult = {
                    input: {},
                    output: {
                        contracts: {},
                        sources: {}
                    },
                    solcVersion: null,
                    target: null
                };
                for (const file of files) {
                    if (file.endsWith('.dbg.json')) { // "artifacts/contracts/Greeter.sol/Greeter.dbg.json"
                        const stdFile = file.replace('.dbg.json', '.json');
                        const contentStd = yield fs.readFile((0, path_1.join)(contractFilePath, stdFile), { encoding: 'utf-8' });
                        const contentDbg = yield fs.readFile((0, path_1.join)(contractFilePath, file), { encoding: 'utf-8' });
                        const jsonDbg = JSON.parse(contentDbg);
                        const jsonStd = JSON.parse(contentStd);
                        compilationResult.target = jsonStd.sourceName;
                        targetsSynced.push(compilationResult.target);
                        const path = (0, path_1.join)(contractFilePath, jsonDbg.buildInfo);
                        const content = yield fs.readFile(path, { encoding: 'utf-8' });
                        yield this.feedContractArtifactFile(content, compilationResult);
                    }
                    if (compilationResult.target) {
                        // we are only interested in the contracts that are in the target of the compilation
                        compilationResult.output = Object.assign(Object.assign({}, compilationResult.output), { contracts: { [compilationResult.target]: compilationResult.output.contracts[compilationResult.target] } });
                        this.emit('compilationFinished', compilationResult.target, { sources: compilationResult.input }, 'soljson', compilationResult.output, compilationResult.solcVersion);
                    }
                }
            }
            clearTimeout(this.logTimeout);
            this.logTimeout = setTimeout(() => {
                this.call('terminal', 'log', { value: 'receiving compilation result from Hardhat. Select a file to populate the contract interaction interface.', type: 'log' });
                if (targetsSynced.length) {
                    console.log(`Processing artifacts for files: ${[...new Set(targetsSynced)].join(', ')}`);
                    // @ts-ignore
                    this.call('terminal', 'log', { type: 'log', value: `synced with Hardhat: ${[...new Set(targetsSynced)].join(', ')}` });
                }
                else {
                    console.log('No artifacts to process');
                    // @ts-ignore
                    this.call('terminal', 'log', { type: 'log', value: 'No artifacts from Hardhat to process' });
                }
            }, 1000);
        });
    }
    listenOnHardHatFolder() {
        console.log('Hardhat artifacts folder doesn\'t exist... waiting for the compilation.');
        try {
            if (this.watcher)
                this.watcher.close();
            this.watcher = chokidar.watch(this.currentSharedFolder, { depth: 2, ignorePermissionErrors: true, ignoreInitial: true });
            // watch for new folders
            this.watcher.on('addDir', () => {
                if (fs.existsSync(this.buildPath)) {
                    this.listenOnHardhatCompilation();
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    triggerProcessArtifact() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // prevent multiple calls
            clearTimeout(this.processingTimeout);
            this.processingTimeout = setTimeout(() => tslib_1.__awaiter(this, void 0, void 0, function* () { return yield this.processArtifact(); }), 1000);
        });
    }
    listenOnHardhatCompilation() {
        try {
            console.log('listening on Hardhat compilation...');
            if (this.watcher)
                this.watcher.close();
            this.watcher = chokidar.watch(this.buildPath, { depth: 1, ignorePermissionErrors: true, ignoreInitial: true });
            this.watcher.on('change', () => tslib_1.__awaiter(this, void 0, void 0, function* () { return yield this.triggerProcessArtifact(); }));
            this.watcher.on('add', () => tslib_1.__awaiter(this, void 0, void 0, function* () { return yield this.triggerProcessArtifact(); }));
            // process the artifact on activation
            this.processArtifact();
        }
        catch (e) {
            console.log(e);
        }
    }
    sync() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('syncing from Hardhat');
            this.processArtifact();
        });
    }
    feedContractArtifactFile(artifactContent, compilationResultPart) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const contentJSON = JSON.parse(artifactContent);
            compilationResultPart.solcVersion = contentJSON.solcVersion;
            for (const file in contentJSON.input.sources) {
                const source = contentJSON.input.sources[file];
                const absPath = (0, path_1.join)(this.currentSharedFolder, file);
                if (fs.existsSync(absPath)) { // if not that is a lib
                    const contentOnDisk = yield fs.readFile(absPath, { encoding: 'utf-8' });
                    if (contentOnDisk === source.content) {
                        compilationResultPart.input[file] = source;
                        compilationResultPart.output['sources'][file] = contentJSON.output.sources[file];
                        compilationResultPart.output['contracts'][file] = contentJSON.output.contracts[file];
                        if (contentJSON.output.errors && contentJSON.output.errors.length) {
                            compilationResultPart.output['errors'] = contentJSON.output.errors.filter(error => error.sourceLocation.file === file);
                        }
                    }
                }
            }
        });
    }
}
exports.HardhatClient = HardhatClient;
//# sourceMappingURL=hardhatClient.js.map