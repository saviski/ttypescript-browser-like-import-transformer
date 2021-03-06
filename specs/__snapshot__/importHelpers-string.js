// CompilerOptions: {"module":"ESNext"}
// PluginConfig: {"importHelpers":"/polyfill/ttsc-helper.js","dynamicImportPathRewrite":{"type":"custom","function":"(x, y) => y(x)"}}
const __customImportHelper = (x, y) => y(x);
__customImportHelper(x, __customDynamicImportHelper(__dynamicImportTransform, JSON.parse("{\"after\":true,\"importHelpers\":\"/polyfill/ttsc-helper.js\",\"dynamicImportPathRewrite\":{\"type\":\"custom\",\"function\":\"(x, y) => y(x)\"}}"), __dynamicImportNative, __UMDBindCheck, moduleSpecifierTransform));
function __dynamicImportNative(path) {
    return import(path);
}
import { __dynamicImportTransform as __dynamicImportTransform, __UMDBindCheck as __UMDBindCheck, moduleSpecifierTransform as moduleSpecifierTransform, __customDynamicImportHelper as __customDynamicImportHelper } from "/polyfill/ttsc-helper.js";
