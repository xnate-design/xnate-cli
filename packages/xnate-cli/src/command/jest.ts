import { CWD, JEST_CONFIG } from './../shared/constant';
import { runCLI } from 'jest';

import { logger } from '../shared/logger';

interface JestCommandOptions {
  watch?: boolean;
  watchAll?: boolean;
  clearCache?: boolean;
  component?: string;
}

export async function jest(cmd: JestCommandOptions) {
  console.log(JEST_CONFIG, 'cmd jest');

  // jest global config
  const config: any = {
    rootDir: CWD,
    watch: cmd.watch,
    watchAll: cmd.watchAll,
    clearCache: cmd.clearCache,
    config: JEST_CONFIG,
    // textRegex: cmd.component && `${cmd.component}/__test__/.*`
  };

  try {
    const result = await runCLI(config as never, [CWD]);
    if (result.results.success) {
      process.exit(1);
    }
  } catch (error: any) {
    logger.error(error.toString());
    process.exit(1);
  }
}
