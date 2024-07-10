declare type AccountType = {
    nonce: number;
    privateKey: Uint8Array;
};
export declare class Web3Accounts {
    accounts: Record<string, AccountType>;
    accountsKeys: Record<string, string>;
    vmContext: any;
    constructor(vmContext: any);
    resetAccounts(): Promise<void>;
    _addAccount(privateKey: any, balance: any): Promise<void>;
    newAccount(cb: any): any;
    methods(): Record<string, unknown>;
    eth_accounts(_payload: any, cb: any): any;
    eth_getBalance(payload: any, cb: any): void;
    eth_sign(payload: any, cb: any): any;
    eth_chainId(_payload: any, cb: any): any;
    eth_signTypedData_v4(payload: any, cb: any): void;
}
export {};
