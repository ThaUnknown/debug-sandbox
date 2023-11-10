import { fork } from 'node:child_process'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

// make sure new process runs with inspect and network imports
process.execArgv.push('--inspect')
process.execArgv.push('--experimental-network-imports')
fork(resolve(dirname(fileURLToPath(import.meta.url)), '..', 'index.js'), ['--experimental-network-imports'])
