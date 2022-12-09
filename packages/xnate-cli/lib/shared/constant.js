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
Object.defineProperty(exports, '__esModule', { value: true });
exports.SITE_CONFIG =
  exports.SITE_MOBILE_ROUTES =
  exports.SITE_PC_ROUTES =
  exports.SITE_PC_DIR =
  exports.SITE_DIR =
  exports.SITE_PUBLIC_PATH =
  exports.SITE_OUTPUT_PATH =
  exports.SITE =
  exports.CLI_PACKAGE_JSON =
  exports.UI_PACKAGE_JSON =
  exports.GENERATORS_DIR =
  exports.TESTS_DIR_NAME =
  exports.DIR_INDEX =
  exports.DOCS_DIR_NAME =
  exports.LOCALE_DIR_NAME =
  exports.EXAMPLE_DIR_NAME =
  exports.STYLE_DIR_NAME =
  exports.PUBLIC_DIR_INDEXES =
  exports.SCRIPTS_EXTENSIONS =
  exports.VITE_RESOLVE_EXTENSIONS =
  exports.ESLINT_EXTENSIONS =
  exports.ROOT_PAGES_DIR =
  exports.ROOT_DOCS_DIR =
  exports.TYPES_DIR =
  exports.UMD_DIR =
  exports.LIB_DIR =
  exports.ES_DIR =
  exports.SRC_DIR_COMPONENTS =
  exports.SRC_DIR =
  exports.XNATE_CONFIG =
  exports.CWD =
  exports.DEPENDENCIES_PATH =
  exports.NPM_NAME =
  exports.DEFAULT_CLI_HOME =
    void 0;
var path = __importStar(require('path'));
exports.DEFAULT_CLI_HOME = '.xnate-cli';
exports.NPM_NAME = '@xnate-cli/core';
exports.DEPENDENCIES_PATH = 'dependencies';
exports.CWD = process.cwd();
exports.XNATE_CONFIG = path.resolve(exports.CWD, 'xnate.config.js');
exports.SRC_DIR = path.resolve(exports.CWD, 'src');
exports.SRC_DIR_COMPONENTS = path.resolve(exports.CWD, 'src');
exports.ES_DIR = path.resolve(exports.CWD, 'es');
exports.LIB_DIR = path.resolve(exports.CWD, 'lib');
exports.UMD_DIR = path.resolve(exports.CWD, 'umd');
exports.TYPES_DIR = path.resolve(exports.CWD, 'types');
exports.ROOT_DOCS_DIR = path.resolve(exports.CWD, 'docs');
exports.ROOT_PAGES_DIR = path.resolve(exports.CWD, 'pages');
exports.ESLINT_EXTENSIONS = ['.ts', '.js', '.mjs', '.tsx', '.jsx'];
exports.VITE_RESOLVE_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js', '.less', '.css'];
exports.SCRIPTS_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js'];
exports.PUBLIC_DIR_INDEXES = ['index.tsx', 'index.tsx', 'index.ts', 'index.jsx', 'index.js'];
exports.STYLE_DIR_NAME = 'style';
exports.EXAMPLE_DIR_NAME = 'example';
exports.LOCALE_DIR_NAME = 'locale';
exports.DOCS_DIR_NAME = 'docs';
exports.DIR_INDEX = 'index.tsx';
exports.TESTS_DIR_NAME = '__tests__';
exports.GENERATORS_DIR = path.resolve(__dirname, '../generators');
exports.UI_PACKAGE_JSON = path.resolve(exports.CWD, 'package.json');
exports.CLI_PACKAGE_JSON = path.resolve(__dirname, '../../package.json');
exports.SITE = path.resolve(__dirname, '../../site');
exports.SITE_OUTPUT_PATH = path.resolve(exports.CWD, 'build');
exports.SITE_PUBLIC_PATH = path.resolve(exports.CWD, 'public');
exports.SITE_DIR = path.resolve(exports.CWD, '.xnate/site');
exports.SITE_PC_DIR = path.resolve(exports.CWD, '.xnate/site/pc');
exports.SITE_PC_ROUTES = path.resolve(exports.CWD, '.xnate/pc.routes.ts');
exports.SITE_MOBILE_ROUTES = path.resolve(exports.CWD, '.xnate/mobile.routes.ts');
exports.SITE_CONFIG = path.resolve(exports.CWD, '.xnate/site.config.json');
//# sourceMappingURL=constant.js.map
