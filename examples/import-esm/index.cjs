// This is example for import ESM module in CJS module
// Usage: node --experimental-require-module index.cjs

const { randomNumber } = require("./lib.mjs");

console.log(randomNumber());
