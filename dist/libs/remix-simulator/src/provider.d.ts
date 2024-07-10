export interface JSONRPCRequestPayload {
    params: any[];
    method: string;
    id: number;
    jsonrpc: string;
}
export interface JSONRPCResponsePayload {
    result: any;
    id: number;
    jsonrpc: string;
}
export declare type JSONRPCResponseCallback = (err: Error, result?: JSONRPCResponsePayload) => void;
export declare type State = Record<string, string>;
export declare type ProviderOptions = {
    fork?: string;
    nodeUrl?: string;
    blockNumber?: number | 'latest';
    stateDb?: State;
    details?: boolean;
    blocks?: string[];
    coinbase?: string;
};
export declare class Provider {
    options: ProviderOptions;
    vmContext: any;
    Accounts: any;
    Transactions: any;
    methods: any;
    connected: boolean;
    initialized: boolean;
    pendingRequests: Array<any>;
    constructor(options?: ProviderOptions);
    init(): Promise<void>;
    _send(payload: JSONRPCRequestPayload, callback: (err: Error, result?: JSONRPCResponsePayload) => void): any;
    sendAsync(payload: JSONRPCRequestPayload, callback?: (err: Error, result?: JSONRPCResponsePayload) => void): Promise<JSONRPCResponsePayload>;
    send(payload: any, callback: any): void;
    request(payload: JSONRPCRequestPayload): Promise<any>;
    isConnected(): boolean;
    disconnect(): boolean;
    supportsSubscriptions(): boolean;
    on(type: any, cb: any): void;
}
export declare function extend(web3: any): void;
