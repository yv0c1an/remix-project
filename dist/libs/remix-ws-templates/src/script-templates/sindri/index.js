"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sindriScripts = void 0;
const tslib_1 = require("tslib");
const getWorkspaceFilesByPath = (plugin, pathRegex = null) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const filesByPath = {};
    const workspace = yield plugin.call('fileManager', 'copyFolderToJson', '/');
    const childQueue = Object.entries(workspace);
    while (childQueue.length > 0) {
        const [path, child] = childQueue.pop();
        if ('content' in child && (pathRegex === null || pathRegex.test(path))) {
            filesByPath[path] = new File([child.content], path);
        }
        if ('children' in child) {
            childQueue.push(...Object.entries(child.children));
        }
    }
    return filesByPath;
});
const sindriScripts = (plugin) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    // Load in all of the Sindri or circuit-related files in the workspace.
    const existingFilesByPath = yield getWorkspaceFilesByPath(plugin, /sindri|\.circom$/i);
    const writeIfNotExists = (path, content) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        if (!(path in existingFilesByPath)) {
            yield plugin.call('fileManager', 'writeFile', path, content);
        }
    });
    // Write out all of the static files if they don't exist.
    // @ts-ignore
    yield writeIfNotExists('.sindriignore', (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./.sindriignore')))).default);
    // @ts-ignore
    yield writeIfNotExists('scripts/sindri/README.md', (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./README.md')))).default);
    // @ts-ignore
    yield writeIfNotExists('scripts/sindri/run_compile.ts', (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./run_compile.ts')))).default);
    // @ts-ignore
    yield writeIfNotExists('scripts/sindri/run_prove.ts', (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./run_prove.ts')))).default);
    // @ts-ignore
    yield writeIfNotExists('scripts/sindri/utils.ts', (yield Promise.resolve().then(() => tslib_1.__importStar(require('!!raw-loader!./utils.ts')))).default);
    // Only write out the `sindri.json` file if it doesn't already exist.
    if (!('sindri.json' in existingFilesByPath)) {
        // @ts-ignore
        const sindriManifest = (yield Promise.resolve().then(() => tslib_1.__importStar(require('./sindri.json')))).default;
        // TODO: We can try to infer the circuit framework here from the project contents.
        // For now, we only support Circom.
        // Infer manifest properties from the existing files in the workspace.
        if (sindriManifest.circuitType === 'circom') {
            // Try to find the best `.circom` source file to use as the main component.
            // First, we limit ourselves to `.circom` files.
            const circomPathsAndContents = yield Promise.all(Object.entries(existingFilesByPath)
                .filter(([path]) => /\.circom$/i.test(path))
                .map(([path, file]) => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return [path, yield file.text()]; })));
            // Now we apply some heuristics to find the "best" file.
            const circomCircuitPath = circomPathsAndContents
                .map(([path, content]) => {
                var _a;
                return ({
                    content,
                    hasMainComponent: !!/^[ \t\f]*component[ \t\f]+main[^\n\r]*;[ \t\f]*$/m.test(content),
                    // These files are the entrypoints to the Remix Circom templates, so we give them a boost if there are multiple main components.
                    isTemplateEntrypoint: !!['calculate_hash.circom', 'rln.circom', 'semaphore.circom'].includes((_a = path.split('/').pop()) !== null && _a !== void 0 ? _a : ''),
                    path,
                });
            })
                .sort((a, b) => {
                if (a.hasMainComponent !== b.hasMainComponent)
                    return +b.hasMainComponent - +a.hasMainComponent;
                if (a.isTemplateEntrypoint !== b.isTemplateEntrypoint)
                    return +b.isTemplateEntrypoint - +a.isTemplateEntrypoint;
                return a.path.localeCompare(b.path);
            })
                .map(({ path }) => path)[0] || './circuit.circom';
            sindriManifest.circuitPath = circomCircuitPath;
        }
        // Derive the circuit name from the workspace name.
        const { name: workspaceName } = yield plugin.call('filePanel', 'getCurrentWorkspace');
        sindriManifest.name =
            workspaceName
                .replace(/\s*-+\s*\d*$/, '')
                .replace(/[^a-zA-Z0-9]+/g, '-')
                .replace(/^[^a-zA-Z]+/, '')
                .toLowerCase() || `my-${sindriManifest.circuitType}-circuit`;
        // Write out the modified manifest file.
        writeIfNotExists('sindri.json', JSON.stringify(sindriManifest, null, 2));
    }
    // Open the README file in the editor.
    yield plugin.call('doc-viewer', 'viewDocs', ["scripts/sindri/README.md"]);
    plugin.call('tabs', 'focus', 'doc-viewer');
});
exports.sindriScripts = sindriScripts;
//# sourceMappingURL=index.js.map