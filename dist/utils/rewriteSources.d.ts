import { Project } from "../model";
export declare class RewriteSourcesContext {
    project: Project;
    processedFiles: any;
    logLn: (s: string) => void;
    createFile: (content: ArrayBuffer | string, type: string) => string;
    constructor(project: Project);
}
export declare function rewriteJS(context: RewriteSourcesContext, jsFileName: string): string;
export declare function rewriteHTML(context: RewriteSourcesContext, htmlFileName: string): string;