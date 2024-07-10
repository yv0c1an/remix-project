"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const commander_1 = require("commander");
const web3_1 = tslib_1.__importDefault(require("web3"));
const path_1 = tslib_1.__importDefault(require("path"));
const axios_1 = tslib_1.__importDefault(require("axios"));
const runTestFiles_1 = require("./runTestFiles");
const fileSystem_1 = tslib_1.__importDefault(require("./fileSystem"));
const remix_simulator_1 = require("@remix-project/remix-simulator");
const logger_1 = tslib_1.__importDefault(require("./logger"));
const colors_1 = tslib_1.__importDefault(require("colors"));
const logger = new logger_1.default();
const log = logger.logger;
const commander = new commander_1.Command();
// parse verbosity
function mapVerbosity(v) {
    const levels = {
        '0': 'error',
        '1': 'warn',
        '2': 'info',
        '3': 'verbose',
        '4': 'debug',
        '5': 'silly'
    };
    return levels[v];
}
function mapOptimize(v) {
    const optimize = {
        true: true,
        false: false
    };
    return optimize[v];
}
const version = require('../package.json').version; // eslint-disable-line
commander.version(version);
commander.command('version').description('output the version number').action(function () {
    console.log(version);
});
commander.command('help').description('output usage information').action(function () {
    commander.help();
});
// get current version
commander
    .option('-c, --compiler <string>', 'set compiler version (e.g: 0.6.1, 0.7.1 etc)')
    .option('-e, --evm <string>', 'set EVM version (e.g: petersburg, istanbul etc)')
    .option('-o, --optimize <bool>', 'enable/disable optimization', mapOptimize)
    .option('-r, --runs <number>', 'set runs (e.g: 150, 250 etc)')
    .option('-v, --verbose <level>', 'set verbosity level (0 to 5)', mapVerbosity)
    .option('-f, --fork <string>', 'set hard fork (e.g: istanbul, berlin etc. See full list of hard forks here: https://github.com/ethereumjs/ethereumjs-monorepo/tree/master/packages/common/src/hardforks)')
    .option('-n, --nodeUrl <string>', 'set node url (e.g: https://mainnet.infura.io/v3/your-api-key)')
    .option('-b, --blockNumber <string>', 'set block number (e.g: 123456)')
    .option('-k, --killProcess <bool>', 'kill process when tests fail')
    .argument('file_path', 'path to test file or directory')
    .action((file_path) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const options = commander.opts();
    // Check if path exists
    if (!fileSystem_1.default.existsSync(file_path)) {
        log.error(file_path + ' not found');
        process.exit(1);
    }
    // Check if path is for a directory
    const isDirectory = fileSystem_1.default.lstatSync(file_path).isDirectory();
    // If path is for a file, file name must have `_test.sol` suffix
    if (!isDirectory && !file_path.endsWith('_test.sol')) {
        log.error('Test filename should end with "_test.sol"');
        process.exit(1);
    }
    // Console message
    console.log(colors_1.default.bold('\n\t👁\t:: Running tests using remix-tests ::\t👁\n'));
    // Set logger verbosity
    if (options.verbose) {
        logger.setVerbosity(options.verbose);
        log.info('verbosity level set to ' + options.verbose.blue);
    }
    const compilerConfig = {};
    if (options.compiler) {
        const compVersion = options.compiler;
        const baseURL = 'https://binaries.soliditylang.org/wasm/';
        const response = yield axios_1.default.get(baseURL + 'list.json');
        const { releases, latestRelease } = response.data;
        const compString = releases ? releases[compVersion] : null;
        if (!compString) {
            log.error(`No compiler found in releases with version ${compVersion}`);
            process.exit(1);
        }
        else {
            compilerConfig.currentCompilerUrl = compString.replace('soljson-', '').replace('.js', '');
            log.info(`Compiler version set to ${compVersion}. Latest version is ${latestRelease}`);
        }
    }
    if (options.evm) {
        compilerConfig.evmVersion = options.evm;
        log.info(`EVM set to ${compilerConfig.evmVersion}`);
    }
    if (options.optimize) {
        compilerConfig.optimize = options.optimize;
        log.info(`Optimization is ${compilerConfig.optimize ? 'enabled' : 'disabled'}`);
    }
    if (options.runs) {
        if (!options.optimize) {
            log.error('Optimization should be enabled for runs');
            process.exit(1);
        }
        compilerConfig.runs = options.runs;
        log.info(`Runs set to ${compilerConfig.runs}`);
    }
    if (options.fork && options.nodeUrl) {
        log.info('Using hard fork ' + colors_1.default.green(options.fork) + ' and node url ' + colors_1.default.blue(options.nodeUrl));
    }
    const providerConfig = {
        fork: options.fork || null,
        nodeUrl: options.nodeUrl || null,
        blockNumber: options.blockNumber || null
    };
    const provider = new remix_simulator_1.Provider(providerConfig);
    yield provider.init();
    const web3 = new web3_1.default(provider);
    (0, remix_simulator_1.extend)(web3);
    (0, runTestFiles_1.runTestFiles)(path_1.default.resolve(file_path), isDirectory, web3, compilerConfig, (error, totalPassing, totalFailing) => {
        if (error)
            process.exit(1);
        if (totalFailing > 0 && options.killProcess)
            process.exit(1);
    });
}));
if (!process.argv.slice(2).length) {
    log.error('Please specify a file or directory path');
    process.exit(1);
}
commander.parse(process.argv);
//# sourceMappingURL=run.js.map