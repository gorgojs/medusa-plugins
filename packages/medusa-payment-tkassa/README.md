<p align="center">
  <a href="https://www.medusajs.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/21d1bce5-d168-41ed-a2af-87aa0d4b6b5e">
      <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/21d1bce5-d168-41ed-a2af-87aa0d4b6b5e">
      <img alt="Medusa-TKassa logo" src="https://github.com/user-attachments/assets/21d1bce5-d168-41ed-a2af-87aa0d4b6b5e" height="120">
    </picture>
  </a>
  
</p>

<h1 align="center">
TKassa Payments for Medusa
</h1>

<p align="center">
A Medusa plugin that provides TKassa payments.
</p>

<p align="center">
  <a href="https://t.me/medusajs_com">
    <img src="https://img.shields.io/badge/Telegram-Join_Medusa_Community_Chat-0088cc?logo=telegram&style=social" alt="Join on Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.7.0-blue?logo=medusa" alt="Medusa" />
  </a>
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Tested_with_Medusa-v2.8.5-green?logo=checkmarx" alt="Medusa" />
  </a>
</p>

## Prerequisites

- Medusa server v2.7.0 or later
- Node.js v20 or later
- TKassa account

## Installation

```bash
yarn add @gorgo/medusa-payment-tkassa
# or
npm install @gorgo/medusa-payment-tkassa
```

## Configuration

Add the provider configuration in your `medusa-config.js` file of the Medusa admin application:

```js
# ...
module.exports = defineConfig({
  # ...
  modules: [
    {
      resolve: "@medusajs/medusa/payment",
      options: {
        providers: [
          {
            resolve: "@gorgo/medusa-payment-tkassa/providers/payment-tkassa",
            id: "tkassa",
            options: {
              terminalKey: process.env.TKASSA_TERMINAL_KEY,
              password: process.env.TKASSA_PASSWORD,
              capture: true
            },
          }   
        ]
      }
    }
  ]
})
```

Add environment variables with your shop identifier `TerminalKey` and secret `Password`:

```
TKASSA_TERMINAL_KEY=123456789
TKASSA_PASSWORD=supersecret
```

Under terminal settings in your TBank account, set notifications to “Via HTTP protocol” and supply a callback URL in the following format:

```
https://{YOUR_MEDUSA_DOMAIN}/hooks/payment/tkassa_tkassa
```

## Storefront Integration

Make the necessary changes to your Medusa storefront.
You can refer to the modifications made in the [Medusa Next.js Starter Template](https://github.com/medusajs/nextjs-starter-medusa), which are located in the [`examples/medusa-storefront`](https://github.com/gorgojs/medusa-gorgo/tree/main/examples/payment-tkassa/medusa-storefront) directory.

To view the specific changes, visit the [comparison page](https://github.com/gorgojs/medusa-gorgo/compare/%40gorgo/medusa-payment-tkassa%400.0.1...main) and explore the differencies under the `examples/payment-tkassa/medusa-storefront` dirrectory. Or run diff in the terminal:

```bash
git clone https://github.com/gorgojs/medusa-gorgo
cd medusa-gorgo
git diff @gorgo/medusa-payment-tkassa@0.0.1...main -- examples/payment-tkassa/medusa-storefront
```

## Development

Find documentation on bootstrapping a development environment [here](https://github.com/gorgojs/medusa-gorgo/tree/main/examples/payment-tkassa).

## 💬 Support & Community on Telegram

Join the [Medusa Telegram community chat](https://t.me/medusajs_com) to discuss features, get support, and connect with developers building on Medusa.

## License

Licensed under the [MIT License](LICENSE).