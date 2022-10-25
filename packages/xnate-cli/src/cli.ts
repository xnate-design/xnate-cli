import * as os from 'os';
import * as path from 'path';
import * as dotenv from 'dotenv';
import minimist from 'minimist';
import fs from 'fs-extra';
import semver from 'semver';
import { Command } from 'commander';

import { log, logger } from './shared/logger';
import { init, genUi, devUi, buildUi } from './command';
const pkgConfig = require('../package.json');

const initCli = async () => {
  const { engines = {} } = pkgConfig;
  const pkgVersion = engines.node;
  const userHome = os.homedir();

  const args = minimist(process.argv.slice(2));
  const envPath = path.resolve(userHome, '.env');

  // check node version
  // check current os node version and pkgVersion
  if (!semver.satisfies(process.version, pkgVersion, { includePrerelease: true })) { 
    logger.error(`you are using Node ${process.version}, xnate-cli need is a node version above ${pkgVersion}`)
    process.exit(1);
  }

  // TODO: Debug mode

  // check environment variables
  if (await fs.pathExists(envPath)) {
    dotenv.config({
      path: envPath
    })
  }

}

const registerCommands = () => { 

  const program = new Command();
  program.version(`xnate-cli ${pkgConfig.version}`).usage('<command> [options]');

  program
    .command('init <app-name>')
    .description('generate a project from remote template')
    .option('-p, --packagePath <packagePath>', 'Customize the create project path')
    .option('-f, --force', 'Force overwrite existing directory files')
    .option('-T, --templatePath <templatePath>', 'Customize the template from remote repositories')
    .option('-c, --clone', 'Use git clone when fetching remote repositories')
    .action(init)

  program
    .command('gen:ui <app-name>')
    .description('Generates the UI for the specified component')
    .action(genUi)
  
  program
    .command('dev:ui')
    .description('Run xnate react ui component development')
    .action(devUi)
  
  program
    .command('build:ui')
    .description('Build xnate react ui component production')
    .action(buildUi)

  program.on('command:*', ([cmd]) => {
    log();
    logger.error(`UnKnow Command ${logger.cyan(cmd)}`);
    log();
    program.outputHelp();
    process.exit(1);
  });

  program.commands.forEach((c) => c.on('--help', () => console.log()));

  program
    .option('-d, --debug', 'Enable debug mode')
    .parse(process.argv)

}

export const cli = async () => {
  try {
    await initCli();
    registerCommands();
  } catch (err) {
    log(err)
    // logger.error(err)
  }
 }
