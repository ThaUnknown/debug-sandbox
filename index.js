import { createRequire, register } from 'node:module'

// prevent exit
setInterval(() => {}, 100000)
// not quite a require, but close
globalThis.require = createRequire(import.meta.url)
// force enable native module imports on remote imports [INSECURE]
register('./importHooks.mjs', import.meta.url)
// import for remote packages
globalThis.npm = (pkg, opts) => import('https://esm.sh/' + pkg + '?target=node', opts)
