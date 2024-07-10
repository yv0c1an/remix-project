export interface ICompilerApi {
    currentFile: string;
    compilationDetails: {
        contractMap: {
            file: string;
        } | Record<string, any>;
        contractsDetails: Record<string, any>;
        target?: string;
    };
    compileErrors: any;
    compileTabLogic: any;
    configurationSettings: ConfigurationSettings;
    getCompilerQueryParameters: () => ConfigurationSettings;
    setCompilerQueryParameters: (ConfigurationSettings?: any) => void;
    getAppParameter: (value: string) => Promise<any>;
    setAppParameter: (name: string, value: string | boolean) => void;
    getFileManagerMode: () => string;
    setCompilerConfig: (settings: any) => void;
    getCompilationResult: () => any;
    onCurrentFileChanged: (fileName: string) => void;
    onSetWorkspace: (isLocalhost: boolean, workspaceName: string) => void;
    onFileRemoved: (path: string) => void;
    onNoFileSelected: () => void;
    onCompilationFinished: (contractsDetails: any, contractMap: any) => void;
    onSessionSwitched: () => void;
    onContentChanged: () => void;
    onFileClosed: (name: string) => void;
    resolveContentAndSave: (url: string) => Promise<string>;
    fileExists: (file: string) => Promise<boolean>;
    writeFile: (file: string, content: any) => Promise<void>;
    readFile: (file: string) => Promise<string>;
    open: (file: string) => void;
    saveCurrentFile: () => void;
    runScriptAfterCompilation: (fileName: string) => void;
    logToTerminal: (log: terminalLog) => void;
    compileWithHardhat: (configPath: string) => Promise<string>;
    compileWithTruffle: (configPath: string) => Promise<string>;
    statusChanged: (data: {
        key: string;
        title?: string;
        type?: string;
    }) => void;
    emit?: (key: string, ...payload: any) => void;
    setSolJsonBinData: (binData: iSolJsonBinData) => void;
    solJsonBinData: iSolJsonBinData;
}
export interface iSolJsonBinDataBuild {
    path: string;
    version: string;
    build: string;
    prerelease: string;
    longVersion: string;
    binURL: string;
    wasmURL: string;
    isDownloaded: boolean;
}
export interface iSolJsonBinData {
    baseURLWasm: string;
    baseURLBin: string;
    wasmList: iSolJsonBinDataBuild[];
    binList: iSolJsonBinDataBuild[];
    selectorList: iSolJsonBinDataBuild[];
}
export declare type terminalLog = {
    type: 'info' | 'error' | 'warning' | 'log';
    value: string;
};
export interface ConfigurationSettings {
    version: string;
    evmVersion: string;
    language: string;
    optimize: boolean;
    runs: string;
}
