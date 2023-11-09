# Debug Sandbox

Spawns a Node.js sandbox process with an attached debugger to inspect via Chromium.

Useful for quickly checking how some code runs in a Chromium console, with source definions etc.

Runs as an ESM module in strict mode, with require defined globally, additionally includes a global `esm` function for importing modules you might not have installed localy via [esm.sh](https://esm.sh)
```js
const tinyRest = await esm('tiny-rest')
```

Usage:
```bash
sbx
```

Recommended Chromium extensions which auto-launches an inspect window when a Node.js inspect process is detected is [NiM](https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj).