export declare type StepDetail = {
    depth: number;
    gas: number | string;
    gasCost: number;
    memory: number[];
    op: string;
    pc: number;
    stack: number[];
};
/**
 * Tree representing internal jump into function.
 * Triggers `callTreeReady` event when tree is ready
 * Triggers `callTreeBuildFailed` event when tree fails to build
 */
export declare class InternalCallTree {
    includeLocalVariables: any;
    debugWithGeneratedSources: any;
    event: any;
    solidityProxy: any;
    traceManager: any;
    sourceLocationTracker: any;
    scopes: any;
    scopeStarts: any;
    functionCallStack: any;
    functionDefinitionsByScope: any;
    variableDeclarationByFile: any;
    functionDefinitionByFile: any;
    astWalker: any;
    reducedTrace: any;
    locationAndOpcodePerVMTraceIndex: {
        [Key: number]: any;
    };
    gasCostPerLine: any;
    offsetToLineColumnConverter: any;
    pendingConstructorExecutionAt: number;
    pendingConstructorId: number;
    pendingConstructor: any;
    constructorsStartExecution: any;
    variables: {
        [Key: number]: any;
    };
    /**
      * constructor
      *
      * @param {Object} debuggerEvent  - event declared by the debugger (EthDebugger)
      * @param {Object} traceManager  - trace manager
      * @param {Object} solidityProxy  - solidity proxy
      * @param {Object} codeManager  - code manager
      * @param {Object} opts  - { includeLocalVariables, debugWithGeneratedSources }
      */
    constructor(debuggerEvent: any, traceManager: any, solidityProxy: any, codeManager: any, opts: any, offsetToLineColumnConverter?: any);
    /**
      * reset tree
      *
      */
    reset(): void;
    /**
      * find the scope given @arg vmTraceIndex
      *
      * @param {Int} vmtraceIndex  - index on the vm trace
      */
    findScope(vmtraceIndex: any): any;
    parentScope(scopeId: any): any;
    findScopeId(vmtraceIndex: any): any;
    retrieveFunctionsStack(vmtraceIndex: any): any[];
    extractSourceLocation(step: number, address?: string): Promise<any>;
    extractValidSourceLocation(step: number, address?: string): Promise<any>;
    getValidSourceLocationFromVMTraceIndexFromCache(address: string, step: number, contracts: any): Promise<any>;
    getGasCostPerLine(file: number, line: number): Promise<any>;
    getLocalVariableById(id: number): any;
}
