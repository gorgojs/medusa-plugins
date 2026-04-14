<p align="center">
  <a href="https://www.medusajs.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/1bb06efa-98f4-4515-b6a1-e3dd37ed8e79">
      <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/1bb06efa-98f4-4515-b6a1-e3dd37ed8e79">
      <img alt="Medusa-ApiShip logo" src="https://github.com/user-attachments/assets/1bb06efa-98f4-4515-b6a1-e3dd37ed8e79" height="120">
    </picture>
  </a>
</p>

<h1 align="center">
ApiShip Fulfillment for Medusa
</h1>

<p align="center">
  A Medusa plugin that integrates the ApiShip delivery services platform, giving your store access to dozens of delivery carriers with minimal configuration.
  <br/>
  <a href="https://docs.gorgojs.com/medusa-plugins/apiship">Documentation ↗</a>
  <br/>
  <a href="https://github.com/gorgojs/medusa-plugins/blob/HEAD/packages/medusa-fulfillment-apiship/README.ru.md">Читать README на русском ↗</a>
</p>

<br/>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.13.0-blue?logo=medusa" alt="Medusa" />
  </a>
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Tested_with_Medusa-v2.13.6-green?logo=checkmarx" alt="Medusa" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_apiship">
    <img src="https://img.shields.io/badge/Telegram-Medusa.js⊷ApiShip_Support_Chat-0088cc?logo=telegram&style=social" alt="Medusa.js⊷ApiShip on Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_chat">
    <img src="https://img.shields.io/badge/Telegram-Medusa.js_Dev_Community_Chat-0088cc?logo=telegram&style=social" alt="Medusa.js Chat on Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://static.gorgojs.com/videos/apiship/apiship-1776095804.mp4">
    <img src="https://static.gorgojs.com/videos/apiship/apiship-play-button-1776166893.webp" alt="Watch the ApiShip plugin demo video" width="100%" style="border-radius: 8px; max-width: 720px;">
  </a>
</p>

## What is ApiShip?

<a href="https://apiship.com" target="_blank">ApiShip</a> is a Russian delivery aggregator platform that connects online stores to 40+ delivery services through a single API. Instead of integrating each carrier separately, ApiShip provides a unified interface for rate calculation, order creation, tracking, and document generation across all connected providers.

Popular delivery services available through ApiShip include CDEK, Yandex Delivery, Russian Post, Delovye Linii, PECOM, Boxberry, SberLogistics, DPD, and many more. You can browse the <a href="https://apiship.com/couriers" target="_blank">full list of delivery services</a> on the ApiShip website.

## Plugin Features

- ✅  **Complete integration** with ApiShip
- 💰  **Shipping rate calculation** in checkout
- 📍  **Pickup point delivery** with list and interactive map selection
- 🧾  **Automatic order creation** in ApiShip with selected tariff and pickup point
- 🏷️  **Shipment documents retrieval**, including labels and waybills
- ⚙️  **Test mode** for simulating calculations  
- 🔍  **Detailed logging** for monitoring, debugging, and support

## 💬  ApiShip Plugin Support Chat

Got questions or ideas for new plugin features?  
Join the Telegram chat – [@medusajs_apiship](https://t.me/medusajs_apiship)

## 👥  Medusa.js Community Chat

Connect with other Medusa developers on Telegram – [@medusajs_chat](https://t.me/medusajs_chat)

## Requirements

- Medusa v2.13.0 or later
- Node.js v20 or later
- An ApiShip account - [sign in or create one](https://a.apiship.ru)

## Installation

```bash
yarn add @gorgo/medusa-payment-apiship
# or
npm install @gorgo/medusa-payment-apiship
```

## 📘  Documentation

The complete installation, configuration, and usage guide for this plugin is available on the [Gorgo documentation website](https://docs.gorgojs.com/medusa-plugins/apiship).

## License

Licensed under the [MIT License](LICENSE).
