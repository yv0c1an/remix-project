import { StorageViewer } from './storage/storageViewer';
/**
  * Ethdebugger is a wrapper around a few classes that helps debugging a transaction
  *
  * - TraceManager - Load / Analyze the trace and retrieve details of specific test
  * - CodeManager - Retrieve loaded byte code and help to resolve AST item from vmtrace index
  * - SolidityProxy - Basically used to extract state variable from AST
  * - Breakpoint Manager - Used to add / remove / jumpto breakpoint
  * - InternalCallTree - Used to retrieved local variables
  * - StorageResolver - Help resolving the storage across different steps
  *
  * @param {Map} opts  -  { function compilationResult } //
  */
export declare class Ethdebugger {
    compilationResult: any;
    web3: any;
    opts: any;
    event: any;
    tx: any;
    traceManager: any;
    codeManager: any;
    solidityProxy: any;
    storageResolver: any;
    callTree: any;
    breakpointManager: any;
    offsetToLineColumnConverter: any;
    constructor(opts: any);
    setManagers(): void;
    resolveStep(index: any): void;
    sourceLocationFromVMTraceIndex(address: any, stepIndex: any): Promise<any>;
    getValidSourceLocationFromVMTraceIndex(address: any, stepIndex: any): Promise<any>;
    sourceLocationFromInstructionIndex(address: any, instIndex: any, callback: any): Promise<any>;
    setBreakpointManager(breakpointManager: any): void;
    extractLocalsAt(step: any): any;
    decodeLocalVariableByIdAtCurrentStep(step: number, id: number): Promise<any>;
    decodeStateVariableByIdAtCurrentStep(step: number, id: number): Promise<any>;
    decodeLocalsAt(step: any, sourceLocation: any, callback: any): Promise<any>;
    extractStateAt(step: any): Promise<any>;
    decodeStateAt(step: any, stateVars: any, callback?: any): Promise<{}>;
    storageViewAt(step: any, address: any): StorageViewer;
    updateWeb3(web3: any): void;
    unLoad(): void;
    debug(tx: any): Promise<void>;
}
