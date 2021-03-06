// CompilerOptions: {"module":"ESNext"}
// PluginConfig: {}
const a = __UMDBindCheck(globalThis["a"], ["default"], "a", "globalThis.a", false).default;
const b = __UMDBindCheck(globalThis["b"], ["default"], "b", "globalThis.b", false).default;
const { c, d } = __UMDBindCheck(globalThis["b"], ["c", "d"], "b", "globalThis.b", false);
const e = __UMDBindCheck(globalThis["c"], [], "c", "globalThis.c", false);
const { c_1, d_1 } = __UMDBindCheck(globalThis["b"], ["c", "d"], "b", "globalThis.b", false);
export { c_1 as c, d_1 as d };
const e_1 = __UMDBindCheck(globalThis["c"], [], "c", "globalThis.c", false);
export { e_1 as e };
console.log('Should run after all imports', a, b, c, d, e, a1, b1, c1, d1, e1, a2, b2, c2, d2, e2);
"import \"d\" is eliminated because it expected to have no side effects in UMD transform.";
// relative import without ext name
import a1 from "./a.js";
import b1, { c1, d1 } from "./b.js";
import * as e1 from "/c.js";
import "./d.js";
// browser style import
import a2 from 'http://example.com/';
import b2, { c2, d2 } from 'https://example.com';
import * as e2 from 'http://example.com/';
import 'http://example.com/';
const x = 1;
export { x };
// relative import without ext name
export { c1, d1 } from "./b.js";
export * as e1 from "./c.js";
// browser style import
export { c2, d2 } from 'http://example.com/';
export * as e2 from 'http://example.com/';
import { __UMDBindCheck as __UMDBindCheck } from "https://cdn.jsdelivr.net/npm/@magic-works/ttypescript-browser-like-import-transformer@2.0.2/es/ttsclib.min.js";
