// CompilerOptions: {"module":"ESNext"}
// PluginConfig: {"importHelpers":"inline","dynamicImportPathRewrite":{"type":"custom","function":"(x, y) => y(x)"}}
const __customImportHelper = (x, y) => y(x);
__customImportHelper(x, __customDynamicImportHelper(__dynamicImportTransform, JSON.parse("{\"after\":true,\"importHelpers\":\"inline\",\"dynamicImportPathRewrite\":{\"type\":\"custom\",\"function\":\"(x, y) => y(x)\"}}"), __dynamicImportNative, __UMDBindCheck, moduleSpecifierTransform));
function __dynamicImportTransform(_path, config, dynamicImport, UMDBindCheck, _moduleSpecifierTransform) {
    if (typeof _path !== "string")
        _path = String(_path);
    const path = _path;
    const result = _moduleSpecifierTransform({
        config, path, queryWellknownUMD: () => void 0, parseRegExp: () => (console.warn("RegExp rule is not supported in runtime yet"), null), queryPackageVersion: () => null, getCompilerOptions: () => ({}), accessingImports: new Set("*"),
    });
    const header = `ttypescript-browser-like-import-transformer: Runtime transform error:`;
    switch (result.type) {
        case "noop": return dynamicImport(path);
        case "error":
            console.error(header, result.message, `raw specifier:`, path);
            return dynamicImport(path);
        case "rewrite": return dynamicImport(result.nextPath);
        case "umd": {
            const _ = (v) => { var _a; return UMDBindCheck(v, [], path, `${(_a = result.globalObject) !== null && _a !== void 0 ? _a : "globalThis"}.${result.target}`, false); };
            if (config.globalObject === "globalThis" || config.globalObject === undefined)
                return Promise.resolve(globalThis[result.target]).then(_);
            if (config.globalObject === "window")
                return Promise.resolve(window[result.target]).then(_);
            return Promise.reject(header + "Unreachable transform case");
        }
        default: unreachable(result);
    }
    function unreachable(_x) {
        throw new Error("Unreachable case" + _x);
    }
}
function __dynamicImportNative(path) {
    return import(path);
}
function __UMDBindCheck(mod, bindings, path, mappedName, hasESModuleInterop) {
    const head = `The requested module '${path}' (mapped as ${mappedName})`;
    const umdInvalid = `${head} doesn't provides a valid export object. This is likely to be a mistake. Did you forget to set ${mappedName}?`;
    if (mod === undefined) {
        mod = {};
        if (bindings.length === 0) {
            console.warn(umdInvalid);
        }
    }
    const modType = typeof mod;
    if ((modType !== "object" && modType !== "function") || mod === null) {
        throw new SyntaxError(`${head} provides an invalid export object. The provided record is type of ${modType}`);
    }
    if (hasESModuleInterop && bindings.toString() === "default" && mod.default === undefined) {
        throw new SyntaxError(umdInvalid);
    }
    for (const i of bindings) {
        if (!Object.hasOwnProperty.call(mod, i))
            throw new SyntaxError(`${head} does not provide an export named '${i}'`);
    }
    return mod;
}
function moduleSpecifierTransform(context, opt) {
    const { queryWellknownUMD } = context;
    const packageNameRegExp = /\$packageName\$/g;
    const versionRegExp = /\$version\$/g;
    const umdNameRegExp = /\$umdName\$/g;
    const subpathRegExp = /\$subpath\$/g;
    const message = {
        [392859]: "Failed to transform the path {0} to UMD import declaration.", [392861]: "Failed to query the package version of import {0}.", [392860]: "Failed to transform the path {0} to UMD import declaration. After applying the rule {1}, the result is an empty string.",
    };
    const noop = { type: "noop" };
    return self(context, opt);
    function self(...[context, opt = context.config.bareModuleRewrite || { type: "simple", enum: "umd" }]) {
        var _a, _b;
        const { path, config, parseRegExp, queryPackageVersion } = context;
        if (opt.type === "noop")
            return noop;
        if (isBrowserCompatibleModuleSpecifier(path)) {
            if (path === ".")
                return noop;
            if (config.appendExtensionName === false)
                return noop;
            if (config.appendExtensionNameForRemote !== true && isHTTPModuleSpecifier(path))
                return noop;
            const nextPath = appendExtensionName(path, config.appendExtensionName === true ? ".js" : (_a = config.appendExtensionName) !== null && _a !== void 0 ? _a : ".js");
            return { type: "rewrite", nextPath: nextPath };
        }
        const { sub, nspkg } = resolveNS(path);
        switch (opt.type) {
            case "simple": {
                const e = opt.enum;
                switch (e) {
                    case "snowpack": return { nextPath: `${(_b = config.webModulePath) !== null && _b !== void 0 ? _b : "/web_modules/"}${path}.js`, type: "rewrite" };
                    case "pikacdn":
                    case "unpkg": {
                        const a = "https://cdn.pika.dev/$packageName$@$version$$subpath$";
                        const b = "https://cdn.pika.dev/$packageName$$subpath$";
                        const c = "https://unpkg.com/$packageName$@$version$$subpath$?module";
                        const d = "https://unpkg.com/$packageName$$subpath$?module";
                        const isPika = e === "pikacdn";
                        return self(context, { type: "url", noVersion: isPika ? b : d, withVersion: isPika ? a : c });
                    }
                    case "umd":
                        const target = importPathToUMDName(path);
                        const { globalObject } = config;
                        if (!target)
                            return error(392859, path, "");
                        const nextOpt = {
                            type: "umd", target, globalObject, umdImportPath: void 0,
                        };
                        return self(context, nextOpt);
                    default: return unreachable("simple type");
                }
            }
            case "umd": {
                const [{ globalObject }, { umdImportPath }] = [config, opt];
                if (opt.treeshake && context.treeshakeProvider) {
                    context.treeshakeProvider(path, context.accessingImports, opt.treeshake, context.getCompilerOptions());
                    return { type: "umd", target: path, globalObject: opt.target, umdImportPath };
                }
                else {
                    if (opt.treeshake)
                        console.error("Tree shaking is not available at runtime.");
                    const target = importPathToUMDName(path);
                    if (!target)
                        return error(392859, path, "");
                    return { type: "umd", target, globalObject, umdImportPath };
                }
            }
            case "url": {
                const { noVersion, withVersion } = opt;
                const version = queryPackageVersion(path);
                let string = void 0;
                if (version && withVersion)
                    string = withVersion.replace(versionRegExp, version);
                if ((version && !withVersion && noVersion) || (!version && noVersion))
                    string = noVersion;
                if (string)
                    return {
                        type: "rewrite", nextPath: string.replace(packageNameRegExp, nspkg).replace(subpathRegExp, sub === undefined ? "" : "/" + sub),
                    };
                return unreachable("url case");
            }
            case "complex": {
                for (const [rule, ruleValue] of Object.entries(opt.config)) {
                    let regexp = undefined;
                    if (rule.startsWith("/")) {
                        regexp = parseRegExp(rule);
                        if (!regexp)
                            console.error("Might be an invalid regexp:", rule);
                    }
                    const matching = (regexp && path.match(regexp)) || rule === path;
                    if (!matching)
                        continue;
                    if (ruleValue.type !== "umd")
                        return self(context, ruleValue);
                    if (ruleValue.type === "umd" && ruleValue.treeshake)
                        return self(context, ruleValue);
                    const target = rule === path ? ruleValue.target : path.replace(regexp, ruleValue.target);
                    if (!target)
                        return error(392860, path, rule);
                    const umdName = importPathToUMDName(path);
                    const version = queryPackageVersion(path);
                    const { globalObject = config.globalObject, umdImportPath } = ruleValue;
                    if (!umdName && (target.match(umdNameRegExp) || (umdImportPath === null || umdImportPath === void 0 ? void 0 : umdImportPath.match(umdNameRegExp))))
                        return error(392859, path, rule);
                    if (!version && (target.match(versionRegExp) || (umdImportPath === null || umdImportPath === void 0 ? void 0 : umdImportPath.match(versionRegExp))))
                        return error(392861, path, rule);
                    const [nextTarget, nextUMDImportPath] = [target, umdImportPath || ""].map((x) => x.replace(packageNameRegExp, path).replace(umdNameRegExp, umdName).replace(versionRegExp, version));
                    return { type: "umd", target: nextTarget, globalObject, umdImportPath: nextUMDImportPath };
                }
                return noop;
            }
            default: return unreachable(" opt switch");
        }
    }
    function error(type, arg0, arg1) {
        return {
            type: "error", message: message[type].replace("{0}", arg0).replace("{1}", arg1), code: type, key: type.toString(),
        };
    }
    function unreachable(str) {
        throw new Error("Unreachable case at " + str);
    }
    function isBrowserCompatibleModuleSpecifier(path) {
        return isHTTPModuleSpecifier(path) || isLocalModuleSpecifier(path) || isDataOrBlobModuleSpecifier(path);
    }
    function isHTTPModuleSpecifier(path) {
        return path.startsWith("http://") || path.startsWith("https://");
    }
    function isLocalModuleSpecifier(path) {
        return path.startsWith(".") || path.startsWith("/");
    }
    function isDataOrBlobModuleSpecifier(path) {
        return path.startsWith("blob:") || path.startsWith("data:");
    }
    function appendExtensionName(path, expectedExt) {
        if (path.endsWith(expectedExt))
            return path;
        return path + expectedExt;
    }
    function resolveNS(path) {
        const [a, b, ...c] = path.split("/");
        if (b === undefined)
            return { nspkg: a, pkg: a };
        if (a.startsWith("@"))
            return { ns: a, pkg: b, sub: c.join("/"), nspkg: a + "/" + b };
        return { pkg: a, sub: [b, ...c].join("/"), nspkg: a };
    }
    function importPathToUMDName(path) {
        const predefined = queryWellknownUMD(path);
        if (predefined)
            return predefined;
        const { pkg, sub } = resolveNS(path);
        const pkgVar = toCase(pkg);
        const subVar = sub === null || sub === void 0 ? void 0 : sub.split("/").reduce((prev, curr) => {
            if (prev === null)
                return null;
            const cased = toCase(curr);
            if (!cased)
                return null;
            return [prev, cased].join(".");
        }, "");
        if (!pkgVar)
            return null;
        if (sub === null || sub === void 0 ? void 0 : sub.length)
            return subVar ? pkgVar + subVar : null;
        return pkgVar;
    }
    function toCase(s) {
        const reg = s.match(/[a-zA-Z0-9_]+/g);
        if (!reg)
            return null;
        const x = [...reg].join(" ");
        if (!x.length)
            return null;
        return x.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => index == 0 ? letter.toLowerCase() : letter.toUpperCase()).replace(/\s+/g, "");
    }
}
function __customDynamicImportHelper(_, c, d, u, m) {
    return (p) => _(p, c, d, u, m);
}
