
import { ensureDirSync } from "fs-extra";
import { SRC_DIR } from "../shared/constant";

import { build as buildVite } from "vite";
import { resolveXnateConfig } from "../config/xnate.config";
import { getBuildConfig } from "../config/vite.config";
import { compileSite } from "../compiler/compilerSite";

export async function buildUi() {

  process.env.NODE_ENV === 'production';

  ensureDirSync(SRC_DIR);
  await compileSite();
  const xnateConfig = resolveXnateConfig();
  const buildConfig = getBuildConfig(xnateConfig);

  await buildVite(buildConfig);

}