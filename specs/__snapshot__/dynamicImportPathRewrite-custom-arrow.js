// CompilerOptions: {"module":"ESNext"}
// PluginConfig: {"dynamicImportPathRewrite":{"type":"custom","function":"x => Promise.reject(x)"}}
import { __dynamicImportTransform as __dynamicImportTransform } from "https://cdn.jsdelivr.net/npm/@magic-works/ttypescript-browser-like-import-transformer@1.4.1/es/ttsclib.min.js";
import { __UMDBindCheck as __UMDBindCheck } from "https://cdn.jsdelivr.net/npm/@magic-works/ttypescript-browser-like-import-transformer@1.4.1/es/ttsclib.min.js";
import { moduleSpecifierTransform as moduleSpecifierTransform } from "https://cdn.jsdelivr.net/npm/@magic-works/ttypescript-browser-like-import-transformer@1.4.1/es/ttsclib.min.js";
const __customImportHelper = 
// Static dynamic import
x // Static dynamic import
 => Promise.reject(x);
import { __customDynamicImportHelper as __customDynamicImportHelper } from "https://cdn.jsdelivr.net/npm/@magic-works/ttypescript-browser-like-import-transformer@1.4.1/es/ttsclib.min.js";
// Static dynamic import
Promise.resolve(globalThis.a);
import("./a.js");
import('https://example.com');
// dynamic dynamic import
const y = '';
__customImportHelper(y, __customDynamicImportHelper(__dynamicImportTransform, JSON.parse("{\"after\":true,\"dynamicImportPathRewrite\":{\"type\":\"custom\",\"function\":\"x => Promise.reject(x)\"}}"), __dynamicImportNative, __UMDBindCheck, moduleSpecifierTransform));
// invalid dynamic import (invalid currently)
__dynamicImport2Ary("@magic-works/ttypescript-browser-like-import-transformer: Transform rule for this dependencies found, but this dynamic import has more than 1 argument, transformer don't know how to transform that and keep it untouched.", y, 'second argument');
// Static dynamic import
function __dynamicImportNative(path) {
    return import(path);
}
// Static dynamic import
function __dynamicImport2Ary(reason, ...args) {
    console.warn(reason, ...args);
    return import(args[0], args[1]);
}
