<p align="center">
  <a href="https://docs.gorgojs.com/medusa-plugins/t-kassa">
    <img alt="Medusa-T-Kassa logo" src="https://raw.githubusercontent.com/gorgojs/medusa-plugins/refs/heads/main/assets/tkassa-medusa-logo.png" width="270">
  </a>
</p>

<h1 align="center">
T-Kassa Payments by T-Bank for Medusa
</h1>

<p align="center">
  A Medusa plugin that provides T-Kassa payments by T-Bank. Production-ready.
  <br/>
  <a href="https://docs.gorgojs.com/medusa-plugins/t-kassa">Documentation ↗</a>
  <br/>
  <a href="https://github.com/gorgojs/medusa-plugins/blob/HEAD/packages/medusa-payment-tkassa/README.ru.md">Читать README на русском ↗</a>
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
  <a href="https://t.me/medusajs_tkassa">
    <img src="https://img.shields.io/badge/Telegram-Medusa.js⊷T--Kassa_Support_Chat-0088cc?logo=telegram&style=social" alt="Medusa.js⊷1C on Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_chat">
    <img src="https://img.shields.io/badge/Telegram-Medusa.js_Dev_Community_Chat-0088cc?logo=telegram&style=social" alt="Medusa.js Chat on Telegram" />
  </a>
</p>


## Plugin Features

- **Full Integration with T-Kassa**  
  Connect your store to T-Kassa for secure and reliable payments.
- **Receipt Generation**  
  Online receipts compliant with Federal Law No. 54 (FFD 1.05 and 1.2).
- **One-Step & Two-Step Payments**  
  Autocapture or authorization/hold payment flows.
- **Refunds & Cancellations**  
  Full refund and order cancellation support.
- **Webhook Notifications**  
  Real-time payment status updates with signature verification.
- **Detailed Logging**  
  Request and response logs for debugging and support in development mode.
- **Storefront Example**  
  A complete <a href="https://github.com/gorgojs/medusa-plugins/tree/main/examples/payment-tkassa/medusa-storefront" target="_blank">Next.js storefront</a> ready to use as a reference.

## What is T-Kassa?

T-Kassa is an internet acquiring service by T-Bank (formerly Tinkoff Bank), one of Russia's largest digital banks. It lets online stores accept card payments, SBP (Faster Payments System), T-Pay, SberPay, Alfa Pay, Mir Pay, and more. Learn more at the <a href="https://www.tbank.ru/business/online-payments/internet-acquiring/" target="_blank">T-Bank website</a>.

## 💬  Support & Community

Got questions or ideas about the plugin? Join the Telegram support chat — [@medusajs_tkassa](https://t.me/medusajs_tkassa)

Connect with other Medusa developers on Telegram — [@medusajs_chat](https://t.me/medusajs_chat)

## Requirements

- Medusa v2.7.0 or later
- Node.js v20 or later
- A T-Business account with T-Kassa internet acquiring – [sign in or create one](https://www.tbank.ru/kassa/?utm_source=partners_sme&utm_medium=prt.utl&utm_campaign=business.int_acquiring.7-3S975SBSY&partnerId=7-3S975SBSY&agentId=5-B6HGU9OD&agentSsoId=1316b7dd-3a90-4167-9d35-37910431a19c)

## Installation

```bash
yarn add @gorgo/medusa-payment-tkassa
# or
npm install @gorgo/medusa-payment-tkassa
```

## Documentation

The complete installation, configuration, and usage guide for this plugin is available on the [Gorgo documentation website](https://docs.gorgojs.com/medusa-plugins/t-kassa).

## License

Licensed under the [MIT License](LICENSE).
