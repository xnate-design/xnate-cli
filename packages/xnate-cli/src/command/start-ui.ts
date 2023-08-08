import { log } from 'console';
import execa from 'execa';
import { resolve } from 'path';
import { logger } from '../shared/logger';

const CWD = process.cwd();
const XNATE_UI = resolve(CWD, './docs');

export async function startUi() {
  process.env.NODE_ENV = 'development';
  process.env.DEBUG = 'true';
  try {
    const subprocess = execa('pnpm', ['dev'], { cwd: XNATE_UI });
    subprocess.stdout?.pipe(process.stdout);
    const { stdout } = await subprocess;
    console.log('child output:', stdout);
  } catch (error) {
    log(error);
  }
}
