/// { safeAccess: false, bareModuleRewrite: { '/(.+)/': { type: 'umd', target: '$1' } }, globalObject: 'globalThis.__deps__' }
import x from '__proto__.constructor.constructor.call(null, "eval(\'alert()\')")'
console.log(x)
