import { fork } from 'node:child_process'

// make sure new process runs with inspect
process.execArgv.push('--inspect')
fork('./index.js')
