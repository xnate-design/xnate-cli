'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.cli = void 0;
var os = __importStar(require('os'));
var path = __importStar(require('path'));
var dotenv = __importStar(require('dotenv'));
var minimist_1 = __importDefault(require('minimist'));
var fs_extra_1 = __importDefault(require('fs-extra'));
var semver_1 = __importDefault(require('semver'));
var commander_1 = require('commander');
var logger_1 = require('./shared/logger');
var command_1 = require('./command');
// eslint-disable-next-line @typescript-eslint/no-var-requires
var pkgConfig = require('../package.json');
var initCli = function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, engines, pkgVersion, userHome, args, envPath;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          (_a = pkgConfig.engines), (engines = _a === void 0 ? {} : _a);
          pkgVersion = engines.node;
          userHome = os.homedir();
          args = (0, minimist_1.default)(process.argv.slice(2));
          envPath = path.resolve(userHome, '.env');
          // check node version
          // check current os node version and pkgVersion
          if (!semver_1.default.satisfies(process.version, pkgVersion, { includePrerelease: true })) {
            logger_1.logger.error(
              'you are using Node '
                .concat(process.version, ', xnate-cli need is a node version above ')
                .concat(pkgVersion),
            );
            process.exit(1);
          }
          return [4 /*yield*/, fs_extra_1.default.pathExists(envPath)];
        case 1:
          // TODO: Debug mode
          // check environment variables
          if (_b.sent()) {
            dotenv.config({
              path: envPath,
            });
          }
          return [2 /*return*/];
      }
    });
  });
};
var registerCommands = function () {
  var program = new commander_1.Command();
  program.version('xnate-cli '.concat(pkgConfig.version)).usage('<command> [options]');
  program
    .command('init <app-name>')
    .description('generate a project from remote template')
    .option('-p, --packagePath <packagePath>', 'Customize the create project path')
    .option('-f, --force', 'Force overwrite existing directory files')
    .option('-T, --templatePath <templatePath>', 'Customize the template from remote repositories')
    .option('-c, --clone', 'Use git clone when fetching remote repositories')
    .action(command_1.init);
  program
    .command('gen:ui <app-name>')
    .description('Generates the UI for the specified component')
    .action(command_1.genUi);
  program.command('dev:ui').description('Run xnate react ui component development').action(command_1.devUi);
  program.command('start:ui').description('Run xnate react ui component development').action(command_1.startUi);
  program.command('build:ui').description('Build xnate react ui component production').action(command_1.buildUi);
  program
    .command('jest')
    .description('Run jest in working directory')
    .option('-w, --watch', 'Watch files for changes and return tests related to changed files')
    .option('-wa, --watchAll', 'Watch files for changes and return all tests when something changed')
    .option('-c, --component <componentName>', 'Test a specific component')
    .option('-cc, --clearCache', 'Clear the test cache')
    .action(command_1.jest);
  program.on('command:*', function (_a) {
    var _b = __read(_a, 1),
      cmd = _b[0];
    (0, logger_1.log)();
    logger_1.logger.error('UnKnow Command '.concat(logger_1.logger.cyan(cmd)));
    (0, logger_1.log)();
    program.outputHelp();
    process.exit(1);
  });
  program.commands.forEach(function (c) {
    return c.on('--help', function () {
      return console.log();
    });
  });
  program.option('-d, --debug', 'Enable debug mode').parse(process.argv);
};
var cli = function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var err_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2, , 3]);
          return [4 /*yield*/, initCli()];
        case 1:
          _a.sent();
          registerCommands();
          return [3 /*break*/, 3];
        case 2:
          err_1 = _a.sent();
          (0, logger_1.log)(err_1);
          return [3 /*break*/, 3];
        case 3:
          return [2 /*return*/];
      }
    });
  });
};
exports.cli = cli;
//# sourceMappingURL=cli.js.map
