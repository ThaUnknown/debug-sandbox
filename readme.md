# Debug Sandbox

Install:
```sh
npm i debug-sandbox -g
``` 

Spawns a Node.js sandbox process with an attached debugger to inspect via Chromium.

Useful for quickly checking how some code runs in a Chromium console, with source definions etc.

Runs as an ESM module in strict mode, with require defined globally, additionally includes a global `npm` function for importing modules you might not have installed localy via [esm.sh](https://esm.sh), ex:
```js
const tinyRest = await npm('tiny-rest')
```
Note that this is widely insecure, and could potentially be used to attack the target device, as this package additionally enables the importing of native node modules. Read more in the [official Node.js documentation](https://nodejs.org/api/esm.html#https-and-http-imports).
These modules are sourcemapped with functional breakpoints.

You can also import non-JS files this way via:
```js
const packageInfo = await npm('tiny-rest/package.json', { with: { type: 'json' }})
```

Usage:
```sh
$ sbx
```

Recommended Chromium extensions which auto-launches an inspect window when a Node.js inspect process is detected is [NiM](https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj).