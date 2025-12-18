<p align="center">
  <a href="https://www.medusajs.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/1c5291d8-b708-4337-8776-fb81d7b5cf9c">
      <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/1c5291d8-b708-4337-8776-fb81d7b5cf9c">
      <img alt="Medusa-T-Kassa logo" src="https://github.com/user-attachments/assets/1c5291d8-b708-4337-8776-fb81d7b5cf9c" height="120">
    </picture>
  </a>
  
</p>

<h1 align="center">
T-Kassa Payments for Medusa
</h1>

<p align="center">
  A Medusa plugin that provides T-Kassa payments.
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
    <img src="https://img.shields.io/badge/Tested_with_Medusa-v2.12.3-green?logo=checkmarx" alt="Medusa" />
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


## Features

- 🔗  **Seamless integration** with the T-Kassa payment system
- 🧾  **Receipt generation** compliant with Federal Law No. 54, supporting FFD 1.05 and 1.2 formats
- 1️⃣  **One-step** (autocapture) and  **2️⃣  two-step** (authorization/hold) payment flows
- 🔄  **Full refund** and **order cancellation** support
- 🔔  **Webhook support** for real-time payment status updates
- 🛡  **Webhook verification** for enhanced security
- 🔍  **Detailed logging** for debugging

## 💬  T-Kassa Plugin Support Chat

Got questions or ideas for new plugin features?  
Join the Telegram chat – [@medusajs_tkassa](https://t.me/medusajs_tkassa)

## 👥  Medusa.js Community Chat

Connect with other Medusa developers on Telegram – [@medusajs_chat](https://t.me/medusajs_chat)

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

## 📘  Documentation

The complete installation, configuration, and usage guide for this plugin is available on the [Gorgo documentation website](https://docs.gorgojs.com/medusa-plugins/t-kassa).

## License

Licensed under the [MIT License](LICENSE).
