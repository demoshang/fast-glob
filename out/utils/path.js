"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([*?|(){}[\]]|^!|[@+!](?=\())/g;
/**
 * Designed to work only with simple paths: `dir\\file`.
 */
function unixify(filepath) {
    return filepath.replace(/\\/g, '/');
}
exports.unixify = unixify;
function makeAbsolute(cwd, filepath) {
    return path.resolve(cwd, filepath);
}
exports.makeAbsolute = makeAbsolute;
function escape(pattern) {
    return pattern.replace(UNESCAPED_GLOB_SYMBOLS_RE, '\\$2');
}
exports.escape = escape;
