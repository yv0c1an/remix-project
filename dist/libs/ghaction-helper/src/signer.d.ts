import { ethers } from "ethers";
export declare class SignerWithAddress extends ethers.Signer {
    address: string;
    _signer: {
        provider: any;
        signTransaction: (transaction: any) => any;
        signMessage: (message: string) => any;
        sendTransaction: (transaction: any) => any;
        connect: (provider: any) => any;
        _signTypedData: (...params: any) => any;
    };
    provider: any;
    static create(signer: any): Promise<SignerWithAddress>;
    constructor(address: string, _signer: any);
    getAddress(): Promise<string>;
    signMessage(message: string): any;
    signTransaction(transaction: any): any;
    sendTransaction(transaction: any): any;
    connect(provider: any): SignerWithAddress;
    _signTypedData(...params: any): any;
    toJSON(): string;
}
