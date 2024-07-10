'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolidityProxy = void 0;
const tslib_1 = require("tslib");
const remix_lib_1 = require("@remix-project/remix-lib");
const traceHelper_1 = require("../trace/traceHelper");
const stateDecoder_1 = require("./stateDecoder");
const astHelper_1 = require("./astHelper");
class SolidityProxy {
    constructor({ getCurrentCalledAddressAt, getCode, compilationResult }) {
        this.cache = new Cache();
        this.getCurrentCalledAddressAt = getCurrentCalledAddressAt;
        this.getCode = getCode;
        this.compilationResult = compilationResult;
    }
    /**
      * reset the cache and apply a new @arg compilationResult
      *
      */
    reset() {
        this.cache.reset();
    }
    /**
      * retrieve the compiled contract name at the @arg vmTraceIndex (cached)
      *
      * @param {Int} vmTraceIndex  - index in the vm trave where to resolve the executed contract name
      * @return {Object} a contract object
      */
    contractObjectAt(vmTraceIndex) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const address = this.getCurrentCalledAddressAt(vmTraceIndex);
            return this.contractObjectAtAddress(address);
        });
    }
    /**
      * retrieve the compiled contract name at the @arg address (cached)
      *
      * @param {String} address  - address of a contract
      * @return {Object} a contract object
      */
    contractObjectAtAddress(address) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.cache.contractObjectByAddress[address]) {
                return this.cache.contractObjectByAddress[address];
            }
            const code = yield this.getCode(address);
            const compilationResult = yield this.compilationResult(address);
            const contract = contractObjectFromCode(compilationResult.data.contracts, code.bytecode, address);
            this.cache.contractObjectByAddress[address] = contract;
            return contract;
        });
    }
    /**
      * extract the state variables of the given compiled @arg address (cached)
      *
      * @param {String} address - address of the contract to retrieve state variables from
      * @return {Object} - returns state variables of @args address
      */
    extractStatesDefinitions(address) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const compilationResult = yield this.compilationResult(address);
            if (!this.cache.contractDeclarations[address]) {
                this.cache.contractDeclarations[address] = (0, astHelper_1.extractContractDefinitions)(compilationResult.data.sources);
            }
            if (!this.cache.statesDefinitions[address]) {
                this.cache.statesDefinitions[address] = (0, astHelper_1.extractStatesDefinitions)(compilationResult.data.sources, this.cache.contractDeclarations[address]);
            }
            return this.cache.statesDefinitions[address];
        });
    }
    /**
      * extract the state variables of the given compiled @arg contractName (cached)
      *
      * @param {String} contractName  - name of the contract to retrieve state variables from
      * @param {String} address  - contract address
      * @return {Object} - returns state variables of @args contractName
      */
    extractStateVariables(contractName, address) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.cache.stateVariablesByContractName[contractName]) {
                const compilationResult = yield this.compilationResult(address);
                this.cache.stateVariablesByContractName[contractName] = (0, stateDecoder_1.extractStateVariables)(contractName, compilationResult.data.sources);
            }
            return this.cache.stateVariablesByContractName[contractName];
        });
    }
    /**
      * extract the state variables of the given compiled @arg vmtraceIndex (cached)
      *
      * @param {Int} vmTraceIndex  - index in the vm trave where to resolve the state variables
      * @param {String} address  - contract address
      * @return {Object} - returns state variables of @args vmTraceIndex
      */
    extractStateVariablesAt(vmtraceIndex, address) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const contract = yield this.contractObjectAt(vmtraceIndex);
            return yield this.extractStateVariables(contract.name, address);
        });
    }
    /**
      * get the AST of the file declare in the @arg sourceLocation
      *
      * @param {Object} sourceLocation  - source location containing the 'file' to retrieve the AST from
      * @param {Object} generatedSources  - compiler generated sources
      * @param {String} address  - contract address
      * @return {Object} - AST of the current file
      */
    ast(sourceLocation, generatedSources, address) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const compilationResult = yield this.compilationResult(address);
            const file = this.fileNameFromIndex(sourceLocation.file, compilationResult.data);
            if (!file && generatedSources && generatedSources.length) {
                for (const source of generatedSources) {
                    if (source.id === sourceLocation.file)
                        return source.ast;
                }
            }
            else if (compilationResult.data.sources && compilationResult.data.sources[file]) {
                return compilationResult.data.sources[file].ast;
            }
            return null;
        });
    }
    /**
     * get the filename referring to the index from the compilation result
     *
     * @param {Int} index  - index of the filename
     * @param {Object} compilationResult  - current compilation result
     * @return {String} - filename
     */
    fileNameFromIndex(index, compilationResult) {
        return Object.keys(compilationResult.contracts)[index];
    }
}
exports.SolidityProxy = SolidityProxy;
function contractObjectFromCode(contracts, code, address) {
    const isCreation = (0, traceHelper_1.isContractCreation)(address);
    for (const file in contracts) {
        for (const contract in contracts[file]) {
            const bytecode = isCreation ? contracts[file][contract].evm.bytecode.object : contracts[file][contract].evm.deployedBytecode.object;
            if (remix_lib_1.util.compareByteCode(code, '0x' + bytecode)) {
                return { name: contract, contract: contracts[file][contract] };
            }
        }
    }
    return null;
}
class Cache {
    constructor() {
        this.reset();
    }
    reset() {
        this.contractObjectByAddress = {};
        this.stateVariablesByContractName = {};
        this.contractDeclarations = {};
        this.statesDefinitions = {};
    }
}
//# sourceMappingURL=solidityProxy.js.map