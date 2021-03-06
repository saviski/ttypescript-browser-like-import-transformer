<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [config](./config.md) &gt; [PluginConfigs](./config.pluginconfigs.md)

## PluginConfigs interface

Config of this transformer

<b>Signature:</b>

```typescript
export interface PluginConfigs 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [appendExtensionName](./config.pluginconfigs.appendextensionname.md) | <code>string &#124; boolean</code> | Add '.js' extension for local import path. |
|  [appendExtensionNameForRemote](./config.pluginconfigs.appendextensionnameforremote.md) | <code>boolean</code> | Also append extension '.js' to http:// or https:// URLs. |
|  [bareModuleRewrite](./config.pluginconfigs.baremodulerewrite.md) | <code>Exclude&lt;BareModuleRewriteObject, BareModuleRewriteUMD&gt; &amp; Record&lt;string, BareModuleRewriteObject&gt;</code> | The transformation rule. Specify how this transformer will handle your imports. |
|  [dynamicImportPathRewrite](./config.pluginconfigs.dynamicimportpathrewrite.md) | <code>false &#124; 'auto' &#124; DynamicImportPathRewriteCustom</code> | Config how to rewrite dynamic import. |
|  [globalObject](./config.pluginconfigs.globalobject.md) | <code>string</code> | When using UMD import, this option indicates what global object will be used to find the UMD variables. |
|  [importHelpers](./config.pluginconfigs.importhelpers.md) | <code>'inline' &#124; 'auto' &#124; 'cdn' &#124; 'node' &#124; string</code> | Import emit helpers (e.g. <code>\__UMDBindCheck</code>, <code>\__dynamicImportTransform</code>, etc..) from ttsclib (a local file in this package). |
|  [importMap](./config.pluginconfigs.importmap.md) | <code>ImportMapResolution &#124; ImportMapCustomResolution</code> | Use import map as the transform rules. (This has the highest priority.) |
|  [safeAccess](./config.pluginconfigs.safeaccess.md) | <code>string</code> | Use property access syntax to access UMD variable |
|  [webModulePath](./config.pluginconfigs.webmodulepath.md) | <code>string</code> | Used in snowpack. web\_modules module path |

