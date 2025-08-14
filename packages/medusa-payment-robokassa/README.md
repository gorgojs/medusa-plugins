<p align="center">
  <a href="https://www.medusajs.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/119f3faf-da2e-476e-bf08-6e557de689b6">
      <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/119f3faf-da2e-476e-bf08-6e557de689b6">
      <img alt="Medusa-Robokassa logo" src="https://github.com/user-attachments/assets/119f3faf-da2e-476e-bf08-6e557de689b6" height="120">
    </picture>
  </a>
  
</p>

<h1 align="center">
Robokassa Payments for Medusa
</h1>

<p align="center">
A Medusa plugin that provides Robokassa payments.
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
    <img src="https://img.shields.io/badge/Tested_with_Medusa-v2.9.0-green?logo=checkmarx" alt="Medusa" />
  </a>
</p>

## Prerequisites

- Medusa server v2.7.0 or later
- Node.js v20 or later
- Robokassa account

## Installation

```bash
yarn add @gorgo/medusa-payment-robokassa
# or
npm install @gorgo/medusa-payment-robokassa
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
            resolve: "@gorgo/medusa-payment-robokassa/providers/payment-robokassa",
            id: "robokassa",
            options: {
              merchantLogin: process.env.ROBOKASSA_MERCHANT_LOGIN,
              hashAlgorithm: process.env.ROBOKASSA_HASH_ALGORITHM,
              password1: process.env.ROBOKASSA_PASSWORD_1,
              password2: process.env.ROBOKASSA_PASSWORD_2,
              testPassword1: process.env.ROBOKASSA_TEST_PASSWORD_1,
              testPassword2: process.env.ROBOKASSA_TEST_PASSWORD_2,
              capture: false,  // default is true
              isTest: true,  // default is false
            },
          }   
        ]
      }
    }
  ]
})
```

Add environment variables with your shop identifier `merchantLogin`, hash calculation algorithm `hashAlgorithm`, secret passwords `password1`, `password2`, and secret passwords for testing `testPassword1`, `testPassword2`:

```
ROBOKASSA_MERCHANT_LOGIN=test-shop
ROBOKASSA_HASH_ALGORITHM=md5
ROBOKASSA_PASSWORD_1=supersecret
ROBOKASSA_PASSWORD_2=supersecret
ROBOKASSA_TEST_PASSWORD_1=supersecret
ROBOKASSA_TEST_PASSWORD_2=supersecret
```

> `ROBOKASSA_HASH_ALGORITHM` must be one of the following values corresponding to the value in the Robokassa account: `md5`, `sha1`, `sha256`, `sha384`, `sha512` or `ripemd160` (note, an error occurs for `ripemd160` on the provider's side)

Under shop settings in your Robokassa account, set the **Method of sending data to Result Url** to `GET` or `POST` and supply a **Result Url** in the following format:

```
https://{YOUR_MEDUSA_DOMAIN}/hooks/payment/robokassa_robokassa
```

## Storefront Integration

Make the necessary changes to your Medusa storefront.
You can refer to the modifications made in the [Medusa Next.js Starter Template](https://github.com/medusajs/nextjs-starter-medusa), which are located in the [`examples/medusa-storefront`](https://github.com/gorgojs/medusa-gorgo/tree/main/examples/payment-robokassa/medusa-storefront) directory.

To view the specific changes, visit the [comparison page](https://github.com/gorgojs/medusa-plugins/compare/%40gorgo/medusa-payment-robokassa%400.0.1...main) and explore the differencies under the `examples/payment-robokassa/medusa-storefront` dirrectory. Or run diff in the terminal:

```bash
git clone https://github.com/gorgojs/medusa-plugins
cd medusa-plugins
git diff @gorgo/medusa-payment-robokassa@0.0.1...main -- examples/payment-robokassa/medusa-storefront
```

## Development

Find documentation on bootstrapping a development environment [here](https://github.com/gorgojs/medusa-plugins/tree/main/examples/payment-robokassa).

## 💬 Support & Community on Telegram

Join the [Medusa Telegram community chat](https://t.me/medusajs_chat) to discuss features, get support, and connect with developers building on Medusa.

## License

Licensed under the [MIT License](LICENSE).
