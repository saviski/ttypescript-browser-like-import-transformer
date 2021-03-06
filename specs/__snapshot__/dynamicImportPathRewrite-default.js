// CompilerOptions: {"module":"ESNext"}
// PluginConfig: {}
// Static dynamic import
Promise.resolve(globalThis["a"]);
import("./a.js");
import('https://example.com');
// dynamic dynamic import
const y = '';
__dynamicImportTransform(y, JSON.parse("{\"after\":true}"), __dynamicImportNative, __UMDBindCheck, moduleSpecifierTransform);
// invalid dynamic import (invalid currently)
__dynamicImport2Ary("@magic-works/ttypescript-browser-like-import-transformer: Transform rule for this dependencies found, but this dynamic import has more than 1 argument, transformer don't know how to transform that and keep it untouched.", y, 'second argument');
// Static dynamic import
function __dynamicImportNative(path) {
    return import(path);
} //example.com')
// Static dynamic import
function __dynamicImport2Ary(reason, ...args) {
    console.warn(reason, ...args);
    return import(args[0], args[1]);
}
import { __dynamicImportTransform as __dynamicImportTransform, __UMDBindCheck as __UMDBindCheck, moduleSpecifierTransform as moduleSpecifierTransform } from "https://cdn.jsdelivr.net/npm/@magic-works/ttypescript-browser-like-import-transformer@2.0.2/es/ttsclib.min.js";
