import { fork } from 'node:child_process'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// make sure new process runs with inspect
process.execArgv.push('--inspect')
process.execArgv.push('--experimental-network-imports')
fork(resolve(__dirname, '..', 'index.js'), ['--experimental-network-imports'])
