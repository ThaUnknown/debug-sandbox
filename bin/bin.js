import { fork } from 'node:child_process'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

// make sure new process runs with inspect and network imports
process.execArgv.push('--inspect', '--enable-source-maps')
fork(resolve(dirname(fileURLToPath(import.meta.url)), '..', 'index.js'), ['--enable-source-maps'])
