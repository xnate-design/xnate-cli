interface JestCommandOptions {
  watch?: boolean;
  watchAll?: boolean;
  clearCache?: boolean;
  component?: string;
}
export declare function jest(cmd: JestCommandOptions): Promise<void>;
export {};
