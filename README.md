# Welcome to modern-nodejs-2024 👋

> Modern Node.js 2024 setup is a comprehensive guide to the latest features and capabilities of Node.js 18+. This setup includes built-in support for fetch, native `.env` file reading, and simplified testing with `node:test`. It also introduces the permission model, task runner with `node --run`, and importing ESM modules from CJS.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

[![ITMan - Master the 2024 Node.js Development: Key Updates Features from 18 to 22](https://i.ytimg.com/vi/HeuLPpc3x04/hqdefault.jpg)](https://www.youtube.com/watch?v=HeuLPpc3x04)

## Table of Contents

- [Pre-requisites](#pre-requisites)
- [Usage](#usage)
- [Features](#features)
  - [Node Fetch Without Polyfill](#node-fetch-without-polyfill)
  - [Read .env File Natively](#read-env-file-natively)
  - [Testing with `node:test`](#testing-with-nodetest)
  - [Task runner with `node --run`](#task-runner-with-node-run)
  - [Permission model](#permission-model)
  - [Import ESM modules from CJS](#import-esm-modules-from-cjs)
- [Resources and Examples](#resources-and-examples)
- [Author](#author)
- [Show your support](#show-your-support)
- [📝 License](#📝-license)

## Pre-requisites

- [Schniz/fnm: 🚀 Fast and simple Node.js version manager, built in Rust](https://github.com/Schniz/fnm) or any similar Node.js version manager.
- [pnpm: Fast, disk space efficient package manager](https://pnpm.io/)

## Usage

```bash
pnpm install
```

## Features

### Node Fetch Without Polyfill

```sh
cd examples/fetch
node index.js
```

[![Node Fetch built-in in NodeJs 18](https://i.gyazo.com/4aedf45ff0747307dd231c4940711cbd.gif)](https://gyazo.com/4aedf45ff0747307dd231c4940711cbd)

### Read .env File Natively

Seamless `.env` file support right out of the box.

```sh
cd examples/dotenv
node --env-file=.env.local index.js
```

[![Read .env file  with NodeJs 20](https://i.gyazo.com/69fc0f7279ba4946b51f4e686be0a0ff.gif)](https://gyazo.com/69fc0f7279ba4946b51f4e686be0a0ff)

### Testing with `node:test`

Perform simplified testing with the native `node:test` library.

```sh
cd examples/test-runner
node --test
```

[![Node runner with NodeJs 20](https://i.gyazo.com/ba01f3bbcce55a1da1118eedabac5dec.gif)](https://gyazo.com/ba01f3bbcce55a1da1118eedabac5dec)

### Task runner with `node --run`

```sh
cd examples/task-runner
node --run start
```

[![Task runner with NodeJs 22](https://i.gyazo.com/9f95d9e7399bab3bb9422c051f89defc.gif)](https://gyazo.com/9f95d9e7399bab3bb9422c051f89defc)

### Permission model

```sh
cd examples/permission-model
node --experimental-permission index.js
```

[![experimental-permission with NodeJs 22](https://i.gyazo.com/908b473c571103b7aecba6725c0025cb.gif)](https://gyazo.com/908b473c571103b7aecba6725c0025cb)

### Import ESM modules from CJS

```sh
cd examples/import-esm
node --experimental-require-module index.cjs
```

[![Import ESM with NodeJs 22](https://i.gyazo.com/52a555700892cd7c246debb7d6d1324c.gif)](https://gyazo.com/52a555700892cd7c246debb7d6d1324c)

## Resources and Examples

Please check the [`examples`](./examples/) folder for more detail and references resources.

Other resources:

- [What's new in Node js v22](https://youtu.be/eZfLkVDJPTg)
- [NodeJs can do WHAT now?](https://youtube.com/shorts/J3W3s5O9wAs)

## Pre-commit

This project uses [pre-commit](https://pre-commit.com/) to enforce code quality. Please install it before committing.

```bash
pre-commit install
```

## Author

👤 **Dung Huynh Duc <dung@productsway.com>**

- Github: [@jellydn](https://github.com/jellydn)

## Show your support

Give a ⭐️ if this project helped you!

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)

## 📝 License

Copyright © 2024 [Dung Huynh Duc <dung@productsway.com>](https://github.com/jellydn).<br />
This project is [MIT](https://github.com/jellydn/modern-nodejs-2024/blob/master/LICENSE) licensed.
