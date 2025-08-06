<h1 align="center">
  Medusa – 1C:Enterprise Integration
</h1>

<p align="center">
Sync products and orders between Medusa and 1C:Enterprise.
</p>

<p align="center">
  <a href="https://t.me/medusajs_com">
    <img src="https://img.shields.io/badge/Telegram-Join_Medusa_Community_Chat-0088cc?logo=telegram&style=social" alt="Join on Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.8.0-blue?logo=medusa" alt="Medusa" />
  </a>
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Tested_with_Medusa-v2.8.8-green?logo=checkmarx" alt="Medusa" />
  </a>
</p>

## Prerequisites

- Medusa server v2.8.0 or later
- Node.js v20 or later

## Installation

```bash
yarn add @gorgo/medusa-1c
# or
npm install @gorgo/medusa-1c
```

## Configuration

Add the provider configuration in your `medusa-config.js` file of the Medusa admin application:

```js
# ...
module.exports = defineConfig({
  # to be done...
})
```

## Development

Find documentation on bootstrapping a development environment [here](https://github.com/gorgojs/medusa-plugins/tree/main/examples/1c).

## 💬 Support & Community on Telegram

Join the [Medusa Telegram community chat](https://t.me/medusajs_chat) to discuss features, get support, and connect with developers building on Medusa.

## License

Licensed under the [MIT License](LICENSE).
