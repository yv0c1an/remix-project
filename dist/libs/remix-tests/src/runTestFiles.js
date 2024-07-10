"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTestFiles = void 0;
const tslib_1 = require("tslib");
const async_1 = tslib_1.__importDefault(require("async"));
const fileSystem_1 = tslib_1.__importDefault(require("./fileSystem"));
const testRunner_1 = require("./testRunner");
const colors_1 = tslib_1.__importDefault(require("colors"));
const util_1 = require("util");
const compiler_1 = require("./compiler");
const deployer_1 = require("./deployer");
/**
 * @dev run test contract files (used for CLI)
 * @param filepath Path of file
 * @param isDirectory True, if path is a directory
 * @param web3 Web3
 * @param finalCallback optional callback to run finally
 * @param opts Options
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function
function runTestFiles(filepath, isDirectory, web3, compilerConfig, finalCallback = () => { }, opts) {
    opts = opts || {};
    compilerConfig = compilerConfig || {};
    const sourceASTs = {};
    const printLog = (log) => {
        let formattedLog;
        if (typeof log[0] === 'string' && (log[0].includes('%s') || log[0].includes('%d'))) {
            formattedLog = (0, util_1.format)(log[0], ...log.slice(1));
        }
        else {
            formattedLog = log.join(' ');
        }
        signale.log(formattedLog);
    };
    const { Signale } = require('signale'); // eslint-disable-line
    // signale configuration
    const options = {
        types: {
            result: {
                badge: '\t✓',
                label: '',
                color: 'greenBright'
            },
            name: {
                badge: '\n\t◼',
                label: '',
                color: 'whiteBright'
            },
            log: {
                badge: '\t',
                label: '',
                color: 'white'
            },
            error: {
                badge: '\t✘',
                label: '',
                color: 'redBright'
            }
        }
    };
    const signale = new Signale(options);
    let accounts = opts['accounts'] || null;
    async_1.default.waterfall([
        function getAccountList(next) {
            if (accounts)
                return next(null);
            web3.eth.getAccounts()
                .then(_accounts => {
                accounts = _accounts;
                next(null);
            })
                .catch((_err) => next(null));
        },
        function compile(next) {
            (0, compiler_1.compileFileOrFiles)(filepath, isDirectory, { accounts }, compilerConfig, next);
        },
        function deployAllContracts(compilationResult, asts, next) {
            // Extract AST of test contract file source
            for (const filename in asts) {
                if (filename.endsWith('_test.sol')) {
                    sourceASTs[filename] = asts[filename].ast;
                }
            }
            (0, deployer_1.deployAll)(compilationResult, web3, accounts, false, null, (err, contracts) => {
                if (err) {
                    // If contract deployment fails because of 'Out of Gas' error, try again with double gas
                    // This is temporary, should be removed when remix-tests will have a dedicated UI to
                    // accept deployment params from UI
                    if (err.message.includes('The contract code couldn\'t be stored, please check your gas limit')) {
                        (0, deployer_1.deployAll)(compilationResult, web3, accounts, true, null, (error, contracts) => {
                            if (error)
                                next([{ message: 'contract deployment failed after trying twice: ' + error.innerError || error.message, severity: 'error' }]); // IDE expects errors in array
                            else
                                next(null, compilationResult, contracts);
                        });
                    }
                    else {
                        next([{ message: 'contract deployment failed: ' + err.innerError || err.message, severity: 'error' }]);
                    } // IDE expects errors in array
                }
                else {
                    next(null, compilationResult, contracts);
                }
            });
        },
        function determineTestContractsToRun(compilationResult, contracts, next) {
            const contractsToTest = [];
            const contractsToTestDetails = [];
            const gatherContractsFrom = function (filename) {
                if (!filename.endsWith('_test.sol')) {
                    return;
                }
                try {
                    Object.keys(compilationResult[filename]).forEach(contractName => {
                        contractsToTest.push(contractName);
                        contractsToTestDetails.push(compilationResult[filename][contractName]);
                    });
                }
                catch (e) {
                    console.error(e);
                }
            };
            if (isDirectory) {
                fileSystem_1.default.walkSync(filepath, (foundpath) => {
                    gatherContractsFrom(foundpath);
                });
            }
            else {
                gatherContractsFrom(filepath);
            }
            next(null, contractsToTest, contractsToTestDetails, contracts);
        },
        function runTests(contractsToTest, contractsToTestDetails, contracts, next) {
            let totalPassing = 0;
            let totalFailing = 0;
            let totalTime = 0;
            const _testCallback = function (err, result) {
                var _a, _b;
                if (err)
                    throw err;
                if (result.type === 'contract') {
                    signale.name(result.value);
                    console.log('\n');
                }
                else if (result.type === 'testPass') {
                    if ((_a = result === null || result === void 0 ? void 0 : result.hhLogs) === null || _a === void 0 ? void 0 : _a.length)
                        result.hhLogs.forEach(printLog);
                    signale.result(result.value.white);
                }
                else if (result.type === 'testFailure') {
                    if ((_b = result === null || result === void 0 ? void 0 : result.hhLogs) === null || _b === void 0 ? void 0 : _b.length)
                        result.hhLogs.forEach(printLog);
                    signale.error(result.value.white);
                    if (result.assertMethod) {
                        console.log(colors_1.default.green('\t    Expected value should be ' + result.assertMethod + ' to: ' + result.expected));
                        console.log(colors_1.default.red('\t    Received: ' + result.returned));
                    }
                    console.log(colors_1.default.red('\t    Message: ' + result.errMsg));
                    console.log('\n');
                }
            };
            const _resultsCallback = (_err, result, cb) => {
                totalPassing += result.passingNum;
                totalFailing += result.failureNum;
                totalTime += result.timePassed;
                cb();
            };
            async_1.default.eachOfLimit(contractsToTest, 1, (contractName, index, cb) => {
                try {
                    const fileAST = sourceASTs[contracts[contractName]['filename']];
                    (0, testRunner_1.runTest)(contractName, contracts[contractName], contractsToTestDetails[index], fileAST, { accounts, web3 }, _testCallback, (err, result) => {
                        if (err) {
                            console.log(err);
                            return cb(err);
                        }
                        _resultsCallback(null, result, cb);
                    });
                }
                catch (e) {
                    console.error(e);
                }
            }, function (err) {
                if (err) {
                    return next(err);
                }
                console.log('\n');
                console.log(colors_1.default.bold.underline('Tests Summary: '));
                if (totalPassing >= 0) {
                    console.log(colors_1.default.green('Passed: ' + totalPassing));
                }
                if (totalFailing >= 0) {
                    console.log(colors_1.default.red('Failed: ' + totalFailing));
                }
                console.log(colors_1.default.white('Time Taken: ' + totalTime + 's'));
                console.log('');
                next(null, totalPassing, totalFailing);
            });
        }
    ], finalCallback);
}
exports.runTestFiles = runTestFiles;
//# sourceMappingURL=runTestFiles.js.map