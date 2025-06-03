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
Medusa Yandex Market Feed Plugin
</h1>

<p align="center">
A Medusa plugin that generates Yandex Market compatible XML product feeds.
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
    <img src="https://img.shields.io/badge/Tested_with_Medusa-v2.8.3-green?logo=checkmarx" alt="Medusa" />
  </a>
</p>

## Prerequisites

- Medusa server v2.7.0 or later
- Node.js v20 or later

## Installation

```bash
yarn add @medurajs/medusa-feed-yandex
# or
npm install @medurajs/medusa-feed-yandex
```

## Configuration

Add the provider configuration in your `medusa-config.js` file of the Medusa admin application:

```js
# ...
module.exports = defineConfig({
  # ...
  modules: [
    {
      resolve: "@medurajs/medusa-feed-yandex/modules/feed",
    },
    {
      resolve: "@medusajs/medusa/file",
      options: {
        providers: [
          {
            resolve: "@medusajs/medusa/file-local",
            id: "local",
            options: {
              upload_dir: "static",
              backend_url: "http://localhost:9000/static"
            },
          },
        ],
      },
    },
  ],
  plugins: [
    {
      resolve: "@medurajs/medusa-feed-yandex",
      options: {}
    }
  ],
})
```

>The plugin is currently tested and uses Medusa's local file module (file-local) to save generated XML feeds. This means that feed files are saved locally in the static directory.

## Usage

To access the feed plugin, open the Medusa Admin dashboard and go to Settings in the main sidebar menu.    
Within Settings, find the Feeds section under Extensions, where the plugin interface is located.  
![screenshot](https://github.com/user-attachments/assets/effa41a9-8b70-4952-b027-cb5af9586a7d)

The interface shows a list of all created feeds, showing important details such as feed titles, file names, accessible URLs, timestamps of the last export, current status, and export schedules.

Feed URLs follow this format, allowing you to access the generated XML files directly:  
`http://{YOUR_MEDUSA_DOMAIN}/feeds/{id}/{file name}.xml`

![screenshot](https://github.com/user-attachments/assets/413c5fca-23cc-4f19-b647-92049d0810d3)

Selecting a specific feed opens its detailed view, where you can review and edit feed metadata, access the feed file URL, configure or update export schedules, select which product categories to include in the feed, and modify associated shop information. The interface also includes a Launch now button for manually triggering feed generation whenever needed.  
![screenshot](https://github.com/user-attachments/assets/142f205e-0a5f-4bf8-a454-4bcf17c0a432)

## 💬 Support & Community on Telegram

Join the [Medusa Telegram community chat](https://t.me/medusajs_com) to discuss features, get support, and connect with developers building on Medusa.