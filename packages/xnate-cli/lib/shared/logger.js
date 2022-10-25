"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.logger = void 0;
var chalk_1 = __importDefault(require("chalk"));
var console_1 = require("console");
exports.logger = {
    info: function (text) {
        (0, console_1.log)(text);
    },
    success: function (text) {
        (0, console_1.log)(chalk_1.default.hex('#00c48f')(text));
    },
    warning: function (text) {
        (0, console_1.log)(chalk_1.default.hex('#ff9800')(text));
    },
    error: function (text) {
        (0, console_1.log)(chalk_1.default.hex('#f44336')(text));
    },
    cyan: function (text) {
        (0, console_1.log)(chalk_1.default.cyan(text));
    }
};
var console_2 = require("console");
Object.defineProperty(exports, "log", { enumerable: true, get: function () { return console_2.log; } });
//# sourceMappingURL=logger.js.map