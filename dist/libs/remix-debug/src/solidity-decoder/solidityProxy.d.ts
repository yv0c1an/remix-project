export declare class SolidityProxy {
    cache: any;
    getCurrentCalledAddressAt: any;
    getCode: any;
    sources: any;
    contracts: any;
    compilationResult: any;
    sourcesCode: any;
    constructor({ getCurrentCalledAddressAt, getCode, compilationResult }: {
        getCurrentCalledAddressAt: any;
        getCode: any;
        compilationResult: any;
    });
    /**
      * reset the cache and apply a new @arg compilationResult
      *
      */
    reset(): void;
    /**
      * retrieve the compiled contract name at the @arg vmTraceIndex (cached)
      *
      * @param {Int} vmTraceIndex  - index in the vm trave where to resolve the executed contract name
      * @return {Object} a contract object
      */
    contractObjectAt(vmTraceIndex: number): Promise<any>;
    /**
      * retrieve the compiled contract name at the @arg address (cached)
      *
      * @param {String} address  - address of a contract
      * @return {Object} a contract object
      */
    contractObjectAtAddress(address: string): Promise<any>;
    /**
      * extract the state variables of the given compiled @arg address (cached)
      *
      * @param {String} address - address of the contract to retrieve state variables from
      * @return {Object} - returns state variables of @args address
      */
    extractStatesDefinitions(address: string): Promise<any>;
    /**
      * extract the state variables of the given compiled @arg contractName (cached)
      *
      * @param {String} contractName  - name of the contract to retrieve state variables from
      * @param {String} address  - contract address
      * @return {Object} - returns state variables of @args contractName
      */
    extractStateVariables(contractName: any, address: any): Promise<any>;
    /**
      * extract the state variables of the given compiled @arg vmtraceIndex (cached)
      *
      * @param {Int} vmTraceIndex  - index in the vm trave where to resolve the state variables
      * @param {String} address  - contract address
      * @return {Object} - returns state variables of @args vmTraceIndex
      */
    extractStateVariablesAt(vmtraceIndex: any, address: any): Promise<any>;
    /**
      * get the AST of the file declare in the @arg sourceLocation
      *
      * @param {Object} sourceLocation  - source location containing the 'file' to retrieve the AST from
      * @param {Object} generatedSources  - compiler generated sources
      * @param {String} address  - contract address
      * @return {Object} - AST of the current file
      */
    ast(sourceLocation: any, generatedSources: any, address: any): Promise<any>;
    /**
     * get the filename referring to the index from the compilation result
     *
     * @param {Int} index  - index of the filename
     * @param {Object} compilationResult  - current compilation result
     * @return {String} - filename
     */
    fileNameFromIndex(index: any, compilationResult: any): string;
}
