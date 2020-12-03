import Plugin, { Tree } from 'broccoli-plugin';
import Package from './package';
export interface Import {
    path: string;
    package: Package;
    specifier: string;
    isDynamic: boolean;
}
export default class Analyzer extends Plugin {
    private modules;
    private paths;
    private parse;
    constructor(inputTree: Tree);
    readonly imports: Import[];
    build(): Promise<void>;
    removeImports(relativePath: string): void;
    updateImports(relativePath: string, source: string): void;
    private parseImports;
}
