# Welcome to modern-nodejs-2024 👋
> Modern Node.js 2024 setup is a comprehensive guide to the latest features and capabilities of Node.js 18+. This setup includes built-in support for fetch, native `.env` file reading, and simplified testing with `node:test`. It also introduces the permission model, task runner with `node --run`, and importing ESM modules from CJS. 

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents
  - [Installation](#installation)
  - [Features](#features)
    - [Node Fetch Without Polyfill](#node-fetch-without-polyfill)
    - [Read .env File Natively](#read-env-file-natively)
    - [Testing with `node:test`](#testing-with-nodetest)
    - [Permission model](#permission-model)
    - [Task runner with `node --run`](#task-runner-with-node-run)
    - [Import ESM modules from CJS](#import-esm-modules-from-cjs)
  - [Resources and Examples](#resources-and-examples)
  - [Author](#author)
  - [Show your support](#show-your-support)
  - [📝 License](#📝-license)


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


### Read .env File Natively

Seamless `.env` file support right out of the box.

```sh
cd examples/dotenv
node --env-file=.env.local index.js
```

### Testing with `node:test`

Perform simplified testing with the native `node:test` library.

```sh
cd examples/test-runner
node --test
```

### Permission model

```sh
cd examples/permission-model
node --experimental-permission index.mjs
```

### Task runner with `node --run`

```sh
cd examples/task-runner
node --run start
```

### Import ESM modules from CJS

```sh
cd examples/import-esm
node --experimental-require-module index.cjs
```

## Resources and Examples

Please check the [`examples`](./examples/) folder for more detail and references resources.

## Author

👤 **Dung Huynh Duc <dung@productsway.com>**

-   Github: [@jelydn](https://github.com/jelydn)

## Show your support

Give a ⭐️ if this project helped you!

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)

## 📝 License

Copyright © 2024 [Dung Huynh Duc <dung@productsway.com>](https://github.com/jelydn).<br />
This project is [MIT](https://github.com/jelydn/modern-nodejs-2024/blob/master/LICENSE) licensed.

