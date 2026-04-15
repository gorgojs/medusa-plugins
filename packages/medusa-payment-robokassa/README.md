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
  A Medusa plugin that provides Robokassa payments. Production-ready.
  <br/>
  <a href="https://docs.gorgojs.com/medusa-plugins/robokassa">Documentation ↗</a>
  <br/>
  <a href="https://github.com/gorgojs/medusa-plugins/blob/HEAD/packages/medusa-payment-robokassa/README.ru.md">Читать README на русском ↗</a>
</p>

<br/>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.7.0-blue?logo=medusa" alt="Medusa" />
  </a>
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Tested_with_Medusa-v2.13.6-green?logo=checkmarx" alt="Medusa" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_robokassa">
    <img src="https://img.shields.io/badge/Telegram-Medusa.js⊷Robokassa_Support_Chat-0088cc?logo=telegram&style=social" alt="Medusa.js⊷Robokassa on Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_chat">
    <img src="https://img.shields.io/badge/Telegram-Medusa.js_Dev_Community_Chat-0088cc?logo=telegram&style=social" alt="Medusa.js Chat on Telegram" />
  </a>
</p>

## Plugin Features

- **Full Integration with Robokassa**  
  Connect your store to Robokassa for secure and reliable payments.
- **Receipt Generation**  
  Online receipts compliant with Federal Law No. 54.
- **One-Step & Two-Step Payments**  
  Autocapture or authorization/hold payment flows.
- **Refunds & Cancellations**  
  Refund and order cancellation support.
- **Webhook Notifications**  
  Real-time payment status updates with signature verification.
- **Test Mode**  
  Simulate payments without real charges.
- **Detailed Logging**  
  Request and response logs for debugging and support in development mode.
- **Storefront Example**  
  A complete <a href="https://github.com/gorgojs/medusa-plugins/tree/main/examples/payment-robokassa/medusa-storefront" target="_blank">Next.js storefront</a> ready to use as a reference.

## What is Robokassa?

<a href="https://robokassa.com" target="_blank">Robokassa</a> is a Russian payment aggregator that supports bank cards, e-wallets, mobile payments, SBP, and other methods. It's widely used by small and mid-size online stores in Russia for its simple integration and broad payment method coverage.

## 💬  Support & Community

Got questions or ideas about the plugin? Join the Telegram support chat — [@medusajs_robokassa](https://t.me/medusajs_robokassa)

Connect with other Medusa developers on Telegram — [@medusajs_chat](https://t.me/medusajs_chat)

## Requirements

- Medusa v2.7.0 or later
- Node.js v20 or later
- A Robokassa account – [sign in or create one](https://login.robokassa.ru/reg?promoCode=gorgo) 

## Installation

```bash
yarn add @gorgo/medusa-payment-robokassa
# or
npm install @gorgo/medusa-payment-robokassa
```

## Documentation

The complete installation, configuration, and usage guide for this plugin is available on the [Gorgo documentation website](https://docs.gorgojs.com/medusa-plugins/robokassa).

## License

Licensed under the [MIT License](LICENSE).
