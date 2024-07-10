import { ethers } from 'ethers';
import { VmProxy } from './VmProxy';
import { VM } from '@ethereumjs/vm';
import { Common } from '@ethereumjs/common';
import { Trie } from '@ethereumjs/trie';
import { EVMStateManagerInterface } from '@ethereumjs/common';
import { Block } from '@ethereumjs/block';
import { TypedTransaction } from '@ethereumjs/tx';
import { State } from './provider';
/**
 * Options for constructing a {@link StateManager}.
 */
export interface DefaultStateManagerOpts {
    /**
     * A {@link Trie} instance
     */
    trie?: Trie;
    /**
     * Option to prefix codehashes in the database. This defaults to `true`.
     * If this is disabled, note that it is possible to corrupt the trie, by deploying code
     * which code is equal to the preimage of a trie-node.
     * E.g. by putting the code `0x80` into the empty trie, will lead to a corrupted trie.
     */
    prefixCodeHashes?: boolean;
}
export interface CustomEthersStateManagerOpts {
    provider: string | ethers.providers.StaticJsonRpcProvider | ethers.providers.JsonRpcProvider;
    blockTag: string;
    /**
     * A {@link Trie} instance
     */
    trie?: Trie;
}
export declare type CurrentVm = {
    vm: VM;
    web3vm: VmProxy;
    stateManager: EVMStateManagerInterface;
    common: Common;
};
export declare class VMCommon extends Common {
    /**
      * Always return the fork set at initialization
      */
    setHardforkBy(): string;
}
export declare class VMContext {
    currentFork: string;
    blockGasLimitDefault: number;
    blockGasLimit: number;
    blocks: Record<string, Block>;
    latestBlockNumber: string;
    blockByTxHash: Record<string, Block>;
    txByHash: Record<string, TypedTransaction>;
    currentVm: CurrentVm;
    web3vm: VmProxy;
    logsManager: any;
    exeResults: Record<string, TypedTransaction>;
    nodeUrl: string;
    blockNumber: number | 'latest';
    stateDb: State;
    rawBlocks: string[];
    serializedBlocks: Uint8Array[];
    constructor(fork?: string, nodeUrl?: string, blockNumber?: number | 'latest', stateDb?: State, blocksData?: string[]);
    init(): Promise<void>;
    createVm(hardfork: any): Promise<{
        vm: VM;
        web3vm: VmProxy;
        stateManager: EVMStateManagerInterface;
        common: VMCommon;
        blocks: Block[];
    }>;
    getCurrentFork(): string;
    web3(): VmProxy;
    vm(): VM;
    vmObject(): CurrentVm;
    addBlock(block: Block, genesis?: boolean, isCall?: boolean, web3vm?: VmProxy): void;
    trackTx(txHash: any, block: any, tx: any): void;
    trackExecResult(tx: any, execReult: any): void;
}
