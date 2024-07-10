"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitTestRunner = void 0;
const tslib_1 = require("tslib");
const async_1 = tslib_1.__importDefault(require("async"));
const compiler_1 = require("./compiler");
const deployer_1 = require("./deployer");
const testRunner_1 = require("./testRunner");
const events_1 = require("events");
const remix_simulator_1 = require("@remix-project/remix-simulator");
require('colors');
class UnitTestRunner {
    constructor() {
        this.event = new events_1.EventEmitter();
    }
    init(web3 = null, accounts = null) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.web3 = yield this.createWeb3Provider(web3);
            this.testsAccounts = accounts || (this.web3 && (yield this.web3.eth.getAccounts())) || [];
            this.accountsLibCode = (0, compiler_1.writeTestAccountsContract)(this.testsAccounts);
        });
    }
    createWeb3Provider(optWeb3) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const web3 = optWeb3;
            if (web3)
                (0, remix_simulator_1.extend)(web3);
            return web3;
        });
    }
    /**
     * @dev Run tests from source of a test contract file (used for IDE)
     * @param contractSources Sources of contract
     * @param compilerConfig current compiler configuration
     * @param testCallback Test callback
     * @param resultCallback Result Callback
     * @param finalCallback Final Callback
     * @param importFileCb Import file callback
     * @param opts Options
     */
    runTestSources(contractSources, newCompilerConfig, testCallback, resultCallback, deployCb, finalCallback, importFileCb, opts) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            opts = opts || {};
            const sourceASTs = {};
            if (opts.web3 || opts.accounts)
                this.init(opts.web3, opts.accounts);
            async_1.default.waterfall([
                (next) => {
                    (0, compiler_1.compileContractSources)(contractSources, newCompilerConfig, importFileCb, this, { accounts: this.testsAccounts, testFilePath: opts.testFilePath, event: this.event }, next);
                },
                (compilationResult, asts, next) => {
                    for (const filename in asts) {
                        if (filename.endsWith('_test.sol')) {
                            sourceASTs[filename] = asts[filename].ast;
                        }
                    }
                    (0, deployer_1.deployAll)(compilationResult, this.web3, this.testsAccounts, false, deployCb, (err, contracts) => {
                        if (err) {
                            // If contract deployment fails because of 'Out of Gas' error, try again with double gas
                            // This is temporary, should be removed when remix-tests will have a dedicated UI to
                            // accept deployment params from UI
                            if (err.message.includes('The contract code couldn\'t be stored, please check your gas limit')) {
                                (0, deployer_1.deployAll)(compilationResult, this.web3, this.testsAccounts, true, deployCb, (error, contracts) => {
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
                    for (const filename in compilationResult) {
                        if (!filename.endsWith('_test.sol')) {
                            continue;
                        }
                        Object.keys(compilationResult[filename]).forEach(contractName => {
                            contractsToTestDetails.push(compilationResult[filename][contractName]);
                            contractsToTest.push(contractName);
                        });
                    }
                    next(null, contractsToTest, contractsToTestDetails, contracts);
                },
                (contractsToTest, contractsToTestDetails, contracts, next) => {
                    let totalPassing = 0;
                    let totalFailing = 0;
                    let totalTime = 0;
                    const errors = [];
                    // eslint-disable-next-line handle-callback-err
                    const _testCallback = function (err, result) {
                        if (result.type === 'testFailure') {
                            errors.push(result);
                        }
                        testCallback(result);
                    };
                    const _resultsCallback = function (_err, result, cb) {
                        resultCallback(_err, result, () => { }); // eslint-disable-line @typescript-eslint/no-empty-function
                        totalPassing += result.passingNum;
                        totalFailing += result.failureNum;
                        totalTime += result.timePassed;
                        cb();
                    };
                    async_1.default.eachOfLimit(contractsToTest, 1, (contractName, index, cb) => {
                        const fileAST = sourceASTs[contracts[contractName]['filename']];
                        (0, testRunner_1.runTest)(contractName, contracts[contractName], contractsToTestDetails[index], fileAST, { accounts: this.testsAccounts, web3: this.web3 }, _testCallback, (err, result) => {
                            if (err) {
                                return cb(err);
                            }
                            _resultsCallback(null, result, cb);
                        });
                    }, function (err) {
                        if (err) {
                            return next(err);
                        }
                        const finalResults = {
                            totalPassing: 0,
                            totalFailing: 0,
                            totalTime: 0,
                            errors: []
                        };
                        finalResults.totalPassing = totalPassing || 0;
                        finalResults.totalFailing = totalFailing || 0;
                        finalResults.totalTime = totalTime || 0;
                        finalResults.errors = [];
                        errors.forEach((error, _index) => {
                            finalResults.errors.push({ context: error.context, value: error.value, message: error.errMsg });
                        });
                        next(null, finalResults);
                    });
                }
            ], finalCallback);
        });
    }
}
exports.UnitTestRunner = UnitTestRunner;
//# sourceMappingURL=runTestSources.js.map