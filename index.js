import Module from 'node:module'

// prevent exit
setInterval(() => {}, 100000)
// not quite a require, but close
globalThis.require = Module.createRequire(import.meta.url)
// import for remote packages
globalThis.esm = pkg => import('https://esm.sh/' + pkg)
