import { RunTxResult } from '@ethereumjs/vm';
import { LegacyTransaction } from '@ethereumjs/tx';
import { Block } from '@ethereumjs/block';
import type { Transaction as InternalTransaction } from './txRunner';
export declare type VMexecutionResult = {
    result: RunTxResult;
    transactionHash: string;
    block: Block;
    tx: LegacyTransaction;
};
export declare type VMExecutionCallBack = (error: string | Error, result?: VMexecutionResult) => void;
export declare class TxRunnerVM {
    event: any;
    blockNumber: any;
    pendingTxs: any;
    vmaccounts: any;
    queusTxs: any;
    blocks: Uint8Array[];
    logsManager: any;
    commonContext: any;
    blockParentHash: any;
    nextNonceForCall: number;
    standaloneTx: boolean;
    getVMObject: () => any;
    constructor(vmaccounts: any, api: any, getVMObject: any, blocks?: Uint8Array[]);
    execute(args: InternalTransaction, confirmationCb: any, gasEstimationForceSend: any, promptCb: any, callback: VMExecutionCallBack): void;
    runInVm(from: string, to: string, data: string, value: string, gasLimit: number, useCall: boolean, callback: VMExecutionCallBack): Promise<void>;
    runTxInVm(tx: any, block: any, callback: any): void;
    runBlockInVm(tx: any, block: any, callback: any): void;
}
