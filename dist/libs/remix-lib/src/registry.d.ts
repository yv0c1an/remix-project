declare type registryEntry = {
    api: any;
    name: string;
};
export declare class Registry {
    private static instance;
    private state;
    private constructor();
    static getInstance(): Registry;
    put(entry: registryEntry): any;
    get(name: string): registryEntry;
}
export {};
