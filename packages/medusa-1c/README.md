<h1 align="center">
  Medusa – 1C:Enterprise Integration
</h1>

<p align="center">
Sync products and orders between Medusa and 1C:Enterprise.
</p>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.8.0-blue?logo=medusa" alt="Medusa" />
  </a>
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Tested_with_Medusa-v2.10.2-green?logo=checkmarx" alt="Medusa" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_1c">
    <img src="https://img.shields.io/badge/Telegram-Medusa.js⊷1C_Support_Chat-0088cc?logo=telegram&style=social" alt="Medusa.js⊷1C on Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_chat">
    <img src="https://img.shields.io/badge/Telegram-Medusa.js_Dev_Community_Chat-0088cc?logo=telegram&style=social" alt="Medusa.js Chat on Telegram" />
  </a>
</p>

## Status

🚧 Work in progress, see the [Roadmap](#roadmap).  
A stable release is expected around September.

## 💬 Plugin Support Chat on Telegram

Join the [Medusa.js ⊷ 1C](https://t.me/medusajs_1c) community chat to discuss features and get support.

## 👥 Medusa.js Community Chat on Telegram

Join the [Medusa.js Chat](https://t.me/medusajs_chat) to connect with developers building on Medusa.

## Roadmap

- [x] Import products from 1C into Medusa (`import.xml`)
- [x] Import offers from 1C into Medusa (`offers.xml`)
- [ ] Sync inventory levels and prices between 1C and Medusa
- [ ] Import orders from 1C into Medusa (`orders.xml`)
- [ ] Export orders from Medusa to 1C
- [ ] Admin UI extension for synchronization status and controls
- [ ] Admin UI extension for journaling and audit logs
- [ ] Detailed documentation

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

## License

Licensed under the [MIT License](LICENSE).
