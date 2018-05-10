export interface PublishManifest {
    description?: string;
    author?: string;
    entry: string;
    files: {
        [name: string]: (string | Uint8Array);
    };
}
export declare class Arc {
    static publish(manifest: PublishManifest): void;
    static publishJSModule(javascript: string): void;
}
