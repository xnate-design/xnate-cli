"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBuildConfig = exports.getDevConfig = void 0;
var constant_1 = require("./../shared/constant");
var lodash_1 = require("lodash");
var plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
var vite_react_md_1 = __importDefault(require("@xnate-plugin/vite-react-md"));
var vite_plugin_html_1 = require("vite-plugin-html");
var constant_2 = require("../shared/constant");
var path_1 = require("path");
var getDevConfig = function (xnateConfig) {
    var defaultLanguage = (0, lodash_1.get)(xnateConfig, 'defaultLanguage');
    var host = (0, lodash_1.get)(xnateConfig, 'host');
    return {
        root: constant_2.SITE_DIR,
        resolve: {
            extensions: constant_2.VITE_RESOLVE_EXTENSIONS,
            alias: {
                '@config': constant_2.SITE_CONFIG,
                '@pc-routes': constant_2.SITE_PC_ROUTES,
                '@mobile-routes': constant_2.SITE_MOBILE_ROUTES,
            },
        },
        server: {
            port: (0, lodash_1.get)(xnateConfig, 'port'),
            host: host === 'localhost' ? '0.0.0.0' : host,
        },
        publicDir: constant_2.SITE_PUBLIC_PATH,
        plugins: [
            (0, plugin_react_1.default)(),
            (0, vite_react_md_1.default)({}),
            (0, vite_plugin_html_1.createHtmlPlugin)({
                inject: {
                    data: {
                        pcTitle: (0, lodash_1.get)(xnateConfig, "pc.title['".concat(defaultLanguage, "]")),
                        mobileTitle: (0, lodash_1.get)(xnateConfig, "mobile.title['".concat(defaultLanguage, "']")),
                        logo: (0, lodash_1.get)(xnateConfig, "logo"),
                    },
                },
            }),
        ],
        build: {
            rollupOptions: {
                input: {
                    main: (0, path_1.resolve)(constant_2.SITE_DIR, 'index.html'),
                    mobile: (0, path_1.resolve)(constant_2.SITE_DIR, 'mobile.html'),
                },
            },
        },
    };
};
exports.getDevConfig = getDevConfig;
var getBuildConfig = function (xnateConfig) {
    var devConfig = (0, exports.getDevConfig)(xnateConfig);
    return __assign(__assign({}, devConfig), { base: '/', build: {
            outDir: constant_1.SITE_OUTPUT_PATH,
            reportCompressedSize: false,
            emptyOutDir: true,
            cssTarget: 'chrome61',
            rollupOptions: {
                input: {
                    main: (0, path_1.resolve)(constant_2.SITE_DIR, 'index.html'),
                    mobile: (0, path_1.resolve)(constant_2.SITE_DIR, 'mobile.html'),
                }
            }
        } });
};
exports.getBuildConfig = getBuildConfig;
//# sourceMappingURL=vite.config.js.map