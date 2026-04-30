<p align="center">
  <a href="https://docs.gorgojs.com/medusa-plugins/apiship">
    <img alt="Medusa-ApiShip logo" src="https://raw.githubusercontent.com/gorgojs/medusa-plugins/refs/heads/main/assets/apiship-medusa-logo.png" width="270">
  </a>
</p>

<h1 align="center">
ApiShip Integration for Medusa
</h1>

<p align="center">
  <a href="https://docs.gorgojs.com/medusa-plugins/apiship">Documentation</a>
  <br/>
  A Medusa plugin that integrates the ApiShip delivery aggregator platform, giving your store access to dozens of delivery carriers with minimal configuration. Production-ready.
  <br/>
  <a href="https://github.com/gorgojs/medusa-plugins/blob/HEAD/packages/medusa-fulfillment-apiship/README.ru.md">Читать README на русском ↗</a>
</p>

<br/>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.13.0-blue?logo=medusa" alt="Medusa" />
  </a>
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Tested_with_Medusa-v2.14.1-green?logo=checkmarx" alt="Medusa" />
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

## Plugin Features

- **40+ Shipping Carriers**  
  Work with multiple carriers under direct contracts through a single integration.
- **Automatic Shipping Rate Calculation**  
  Considers package dimensions, weight, personal discounts, and carrier rates.
- **Pickup Point Delivery**  
  Select a pickup point from a list or on an interactive map.
- **One-Click Order Creation**  
  Create shipments in ApiShip directly from Medusa Admin, no manual data entry needed.
- **Shipment Documents Printing**  
  Labels, waybills, and other documents available in Medusa Admin.
- **Storefront Example**  
  A ready-to-use [Next.js storefront example](https://github.com/gorgojs/medusa-plugins/tree/main/examples/fulfillment-apiship/medusa-storefront) you can use as a reference.
- **Test Mode**  
  Simulate calculations and orders without affecting real data.
- **Detailed Logging**  
  Request and response logs for debugging and support in development mode.

## What is ApiShip?

<a href="https://apiship.com" target="_blank">ApiShip</a> is a Russian delivery aggregator platform that connects online stores to 40+ delivery services through a single API. Instead of integrating each carrier separately, ApiShip provides a unified interface for rate calculation, order creation, tracking, and document generation across all connected providers.

Popular delivery services available through ApiShip include CDEK, Yandex Delivery, Russian Post, Delovye Linii, PECOM, Boxberry, SberLogistics, DPD, and many more. You can browse the <a href="https://apiship.com/couriers" target="_blank">full list of delivery services</a> on the ApiShip website.

## 💬  Support & Community

Got questions or ideas about the plugin? Join the Telegram support chat — [@medusajs_apiship](https://t.me/medusajs_apiship)

Connect with other Medusa developers on Telegram — [@medusajs_chat](https://t.me/medusajs_chat)

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

## Documentation

The complete installation, configuration, and usage guide for this plugin is available on the [Gorgo documentation website](https://docs.gorgojs.com/medusa-plugins/apiship).

## License

Licensed under the [MIT License](LICENSE).
