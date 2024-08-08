"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemixURLResolver = void 0;
const tslib_1 = require("tslib");
// eslint-disable-next-line no-unused-vars
const axios_1 = tslib_1.__importDefault(require("axios"));
const semver_1 = tslib_1.__importDefault(require("semver"));
const bzz_node_1 = require("@erebos/bzz-node");
class RemixURLResolver {
    constructor(getDependencies, gistToken, protocol = 'http:') {
        this.previouslyHandled = {};
        this.getDependencies = getDependencies;
        this.setGistToken(gistToken, protocol);
    }
    setGistToken(gistToken, protocol = 'http:') {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.gistAccessToken = gistToken || '';
            this.protocol = protocol;
        });
    }
    clearCache() {
        this.previouslyHandled = {};
    }
    /**
    * Handle an import statement based on github
    * @param root The root of the github import statement
    * @param filePath path of the file in github
    */
    handleGithubCall(root, filePath) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const regex = filePath.match(/blob\/([^/]+)\/(.*)/);
            let reference = 'master';
            if (regex) {
                // if we have /blob/master/+path we extract the branch name "master" and add it as a parameter to the github api
                // the ref can be branch name, tag, commit id
                reference = regex[1];
                filePath = filePath.replace(`blob/${reference}/`, '');
            }
            // eslint-disable-next-line no-useless-catch
            try {
                const req = `https://raw.githubusercontent.com/${root}/${reference}/${filePath}`;
                const response = yield axios_1.default.get(req, { transformResponse: [] });
                return { content: response.data, cleanUrl: root + '/' + filePath };
            }
            catch (e) {
                throw e;
            }
        });
    }
    /**
    * Handle an import statement based on http
    * @param url The url of the import statement
    * @param cleanUrl
    */
    handleHttp(url, cleanUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-useless-catch
            try {
                const response = yield axios_1.default.get(url, { transformResponse: [] });
                return { content: response.data, cleanUrl };
            }
            catch (e) {
                throw e;
            }
        });
    }
    /**
    * Handle an import statement based on https
    * @param url The url of the import statement
    * @param cleanUrl
    */
    handleHttps(url, cleanUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-useless-catch
            try {
                const response = yield axios_1.default.get(url, { transformResponse: [] });
                return { content: response.data, cleanUrl };
            }
            catch (e) {
                throw e;
            }
        });
    }
    handleSwarm(url, cleanUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-useless-catch
            try {
                const bzz = new bzz_node_1.BzzNode({ url: this.protocol + '//swarm-gateways.net' });
                const url = bzz.getDownloadURL(cleanUrl, { mode: 'raw' });
                const response = yield axios_1.default.get(url, { transformResponse: [] });
                return { content: response.data, cleanUrl };
            }
            catch (e) {
                throw e;
            }
        });
    }
    /**
    * Handle an import statement based on IPFS
    * @param url The url of the IPFS import statement
    */
    handleIPFS(url) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // replace ipfs:// with /ipfs/
            url = url.replace(/^ipfs:\/\/?/, 'ipfs/');
            // eslint-disable-next-line no-useless-catch
            try {
                const req = 'https://jqgt.remixproject.org/' + url;
                // If you don't find greeter.sol on ipfs gateway use local
                // const req = 'http://localhost:8080/' + url
                const response = yield axios_1.default.get(req, { transformResponse: [] });
                return { content: response.data, cleanUrl: url.replace('ipfs/', '') };
            }
            catch (e) {
                throw e;
            }
        });
    }
    /**
    * Handle an import statement based on NPM
    * @param url The url of the NPM import statement
    */
    handleNpmImport(url) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!url)
                throw new Error('url is empty');
            const isVersionned = semverRegex().exec(url.replace(/@/g, '@ ').replace(/\//g, ' /'));
            if (this.getDependencies && !isVersionned) {
                try {
                    const { deps, yarnLock, packageLock } = yield this.getDependencies();
                    let matchLength = 0;
                    let pkg;
                    if (deps) {
                        Object.keys(deps).map((dep) => {
                            const reg = new RegExp(dep + '/', 'g');
                            const match = url.match(reg);
                            if (match && match.length > 0 && matchLength < match[0].length) {
                                matchLength = match[0].length;
                                pkg = dep;
                            }
                        });
                        if (pkg) {
                            let version;
                            if (yarnLock) {
                                // yarn.lock
                                const regex = new RegExp(`"${pkg}@(.*)"`, 'g');
                                const yarnVersion = regex.exec(yarnLock);
                                if (yarnVersion && yarnVersion.length > 1) {
                                    version = yarnVersion[1];
                                }
                            }
                            if (!version && packageLock && packageLock['dependencies'] && packageLock['dependencies'][pkg] && packageLock['dependencies'][pkg]['version']) {
                                // package-lock.json
                                version = packageLock['dependencies'][pkg]['version'];
                            }
                            if (!version) {
                                // package.json
                                version = deps[pkg];
                            }
                            if (version) {
                                const versionSemver = semver_1.default.minVersion(version);
                                url = url.replace(pkg, `${pkg}@${versionSemver.version}`);
                            }
                        }
                    }
                }
                catch (e) {
                    console.log(e);
                }
            }
            const npm_urls = ["https://cdn.jsdelivr.net/npm/", "https://unpkg.com/"];
            process && process.env && process.env['NX_NPM_URL'] && npm_urls.unshift(process.env['NX_NPM_URL']);
            let content = null;
            // get response from all urls
            for (let i = 0; i < npm_urls.length; i++) {
                try {
                    const req = npm_urls[i] + url;
                    const response = yield axios_1.default.get(req, { transformResponse: [] });
                    content = response.data;
                    break;
                }
                catch (e) {
                    // try next url
                }
            }
            if (!content)
                throw new Error('Unable to load ' + url);
            return { content, cleanUrl: url };
        });
    }
    getHandlers() {
        return [
            {
                type: 'github',
                match: (url) => { return /^(https?:\/\/)?(www.)?github.com\/([^/]*\/[^/]*)\/(.*)/.exec(url); },
                handle: (match) => this.handleGithubCall(match[3], match[4])
            },
            {
                type: 'http',
                match: (url) => { return /^(http?:\/\/?(.*))$/.exec(url); },
                handle: (match) => this.handleHttp(match[1], match[2])
            },
            {
                type: 'https',
                match: (url) => { return /^(https?:\/\/?(.*))$/.exec(url); },
                handle: (match) => this.handleHttps(match[1], match[2])
            },
            {
                type: 'swarm',
                match: (url) => { return /^(bzz-raw?:\/\/?(.*))$/.exec(url); },
                handle: (match) => this.handleSwarm(match[1], match[2])
            },
            {
                type: 'ipfs',
                match: (url) => { return /^(ipfs:\/\/?.+)/.exec(url); },
                handle: (match) => this.handleIPFS(match[1])
            },
            {
                type: 'npm',
                match: (url) => { return /^[^/][^\n"?:*<>|]*$/g.exec(url); },
                handle: (match) => this.handleNpmImport(match[0])
            }
        ];
    }
    resolve(filePath, customHandlers, force) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let imported = this.previouslyHandled[filePath];
            if (!force && imported) {
                return imported;
            }
            const builtinHandlers = this.getHandlers();
            const handlers = customHandlers ? [...builtinHandlers, ...customHandlers] : [...builtinHandlers];
            const matchedHandler = handlers.filter(handler => handler.match(filePath));
            const handler = matchedHandler[0];
            const match = handler.match(filePath);
            const { content, cleanUrl } = yield handler.handle(match);
            imported = {
                content,
                cleanUrl: cleanUrl || filePath,
                type: handler.type
            };
            this.previouslyHandled[filePath] = imported;
            return imported;
        });
    }
}
exports.RemixURLResolver = RemixURLResolver;
// see npm semver-regex
function semverRegex() {
    return /(?<=^v?|\sv?)(?:(?:0|[1-9]\d{0,9}?)\.){2}(?:0|[1-9]\d{0,9})(?:-(?:--+)?(?:0|[1-9]\d*|\d*[a-z]+\d*)){0,100}(?=$| |\+|\.)(?:(?<=-\S+)(?:\.(?:--?|[\da-z-]*[a-z-]\d*|0|[1-9]\d*)){1,100}?)?(?!\.)(?:\+(?:[\da-z]\.?-?){1,100}?(?!\w))?(?!\+)/gi;
}
//# sourceMappingURL=resolve.js.map