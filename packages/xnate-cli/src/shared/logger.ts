import chalk from "chalk";
import { log } from "console";

export const logger = {
  info(text: string): void {
    log(text);
  },
  success(text: string): void {
    log(chalk.hex('#00c48f')(text));
  },
  warning(text: string) {
    log(chalk.hex('#ff9800')(text));
  },
  error(text: string) {
    log(chalk.hex('#f44336')(text));
  },
}

export { log } from 'console';