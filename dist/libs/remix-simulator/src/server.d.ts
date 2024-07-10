import { ProviderOptions } from './provider';
export declare type CliOptions = {
    rpc?: boolean;
    port: number;
    ip: string;
};
export declare class Server {
    provider: any;
    constructor(options?: ProviderOptions);
    start(cliOptions: CliOptions): Promise<void>;
}
