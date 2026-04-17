<p align="center">
  <a href="https://www.medusajs.com">
    <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/59018053/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    <img alt="Medusa logo" src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    </picture>
  </a>
  
</p>

<h1 align="center">
Yandex Market YML Feed Generator for Medusa
</h1>

<p align="center">
  A Medusa plugin that generates a product feed in <a href="https://yandex.com/support/direct/feeds/requirements-yml.html">YML (Yandex Market Language)</a> format.
  <br/>
  <a href="https://docs.gorgojs.com/medusa-plugins/yandex-yml-feed">Documentation ↗</a>
  <br/>
  <a href="https://github.com/gorgojs/medusa-plugins/blob/HEAD/packages/medusa-feed-yandex/README.ru.md">Читать README на русском ↗</a>
</p>

<br/>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.8.0-blue?logo=medusa" alt="Medusa" />
  </a>
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Tested_with_Medusa-v2.13.6-green?logo=checkmarx" alt="Medusa" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_yandex">
    <img src="https://img.shields.io/badge/Telegram-Medusa.js⊷Yandex_Support_Chat-0088cc?logo=telegram&style=social" alt="Medusa.js⊷Yandex on Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_chat">
    <img src="https://img.shields.io/badge/Telegram-Medusa.js_Dev_Community_Chat-0088cc?logo=telegram&style=social" alt="Medusa.js Chat on Telegram" />
  </a>
</p>

## Plugin Features

- **YML Feed Export**  
  Generate product feeds in Yandex Market YML format.
- **Feed URL Access**  
  Easily retrieve feed URLs for integration with Yandex Market.
- **Admin UI**  
  Manage feeds directly from the Medusa Admin panel.
- **Scheduled Generation**  
  Automatic feed exports at configurable intervals.
- **Category Filtering**  
  Select specific product categories for export.
- **Manual Generation**  
  Trigger feed generation on demand.
- **File Module Integration**  
  Uses Medusa File Module with built-in provider support.

## What is YML?

<a href="https://yandex.com/support/direct/feeds/requirements-yml.html" target="_blank">YML (Yandex Market Language)</a> is an XML-based format used by Yandex Market and Yandex Direct for product data feeds. It's the standard way to list your products on Yandex Market, one of the largest e-commerce marketplaces in Eastern Europe and Central Asia.

## 💬  Support & Community

Got questions or ideas about the plugin? Join the Telegram support chat — [@medusajs_yandex](https://t.me/medusajs_yandex)

Connect with other Medusa developers on Telegram — [@medusajs_chat](https://t.me/medusajs_chat)

## Requirements

- Medusa server v2.8.0 or later
- Node.js v20 or later

## Installation

```bash
yarn add @gorgo/medusa-feed-yandex
# or
npm install @gorgo/medusa-feed-yandex
```

## Documentation

The complete installation, configuration, and usage guide for this plugin is available on the [Gorgo documentation website](https://docs.gorgojs.com/medusa-plugins/yandex-yml-feed).

## License

Licensed under the [MIT License](LICENSE).
