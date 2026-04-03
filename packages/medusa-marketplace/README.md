<h1 align="center">
  Medusa Marketplace Core
</h1>

<p align="center">
  Core plugin for building marketplace integrations in Medusa.
  <br/>
  <a href="https://github.com/gorgojs/medusa-plugins/blob/HEAD/packages/medusa-marketplace/README.ru.md">Читать README на русском ↗</a>
</p>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.13.3-blue?logo=medusa" alt="Medusa" />
  </a>
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Tested_with_Medusa-v2.13.5-green?logo=checkmarx" alt="Medusa" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_chat">
    <img src="https://img.shields.io/badge/Telegram-Plugin_Support_Chat-0088cc?logo=telegram&style=social" alt="Plugin support chat on Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_chat">
    <img src="https://img.shields.io/badge/Telegram-Medusa.js_Dev_Community_Chat-0088cc?logo=telegram&style=social" alt="Medusa.js Chat on Telegram" />
  </a>
</p>

## Overview

`@gorgo/medusa-marketplace` provides a unified foundation for connecting marketplaces (Wildberries, Ozon, Yandex Market, etc.) to Medusa through a provider-based architecture.

It handles the common infrastructure so each marketplace can be implemented as an isolated provider.

## Status

🚧 Work in progress, see the [Roadmap](https://github.com/gorgojs/medusa-plugins/issues/102).

## Features

- 🧩  **Provider-based architecture** for integrating multiple marketplaces
- 🔌  **Pluggable providers** - Wildberries, Ozon, Yandex Market, etc.
- 🛠  **Shared admin UI** for managing marketplaces, credentials, and sync
- 🔄  **Sync workflows** for products, orders, and other entities
- 📊  **Event system** with full logging of sync operations
- 🗄  **Unified data layer** for marketplace interactions
- 🖥  **Extensible admin UI** with widgets for managing marketplace-specific settings
- ⚙️  **Extensible workflows** for custom business logic

## 🏗 Architecture

The plugin introduces a provider model:

- Core plugin → defines infrastructure  
- Providers → implement marketplace-specific logic  

```txt
@gorgo/medusa-marketplace
  ├── core (workflows, jobs, API routes, admin UI, ...)
  ├── provider: ozon
  ├── provider: yandex-market
  ├── provider: wildberries
  └── provider: ...
```

## Existing Providers

Marketplace providers built on top of the core plugin:

- Ozon - [@gorgo/medusa-marketplace-ozon](https://www.npmjs.com/package/@gorgo/medusa-marketplace-ozon)
- Yandex Market - [@gorgo/medusa-marketplace-yandex-market](https://www.npmjs.com/package/@gorgo/medusa-marketplace-yandex-market)
- Wildberries - [@gorgo/medusa-marketplace-wildberries](https://www.npmjs.com/package/@gorgo/medusa-marketplace-wildberries)

## Requirements

- Medusa v2.13.3 or later
- Node.js v20 or later

## Installation

```bash
npm install @gorgo/medusa-marketplace
# or
yarn add @gorgo/medusa-marketplace
```

Then install and configure the [providers](#existing-providers).

## Configuration

Add the configuration to your `medusa-config.ts` file in the Medusa Admin application:

```ts
// medusa-config.ts
import { gorgoPluginsInject } from '@gorgo/medusa-marketplace/exports'

module.exports = defineConfig({
  // ...
  // Register plugins
  plugins: [
    // ...
    // Register the marketplace core plugin and declare providers
    {
      resolve: "@gorgo/medusa-marketplace",
      options: {
        providers: [
          // ... declare providers
        ],
      },
    },
  ],
  // ...
  // Configure Vite plugin for marketplace widgets injection
  admin: {
    vite: (config) => {
      return {
        ...config,
        plugins: [
          gorgoPluginsInject({
            sources: [
              "@gorgo/medusa-marketplace",
              // ...
            ],
          }),
        ],
        /**
         * The `optimizeDeps` and `resolve` entries are required to ensure
         * that shared dependencies (React, React Query, React Router) are not duplicated
         * between the host Medusa admin and the plugin packages
         */
        optimizeDeps: {
          exclude: ["@gorgo/medusa-marketplace"],
        },
        resolve: {
          alias: [
            { find: /^react$/, replacement: require.resolve("react") },
            { find: /^react-dom$/, replacement: require.resolve("react-dom") },
            { find: /^@tanstack\/react-query$/, replacement: require.resolve("@tanstack/react-query") },
            { find: /^react-router-dom$/, replacement: require.resolve("react-router-dom") },
          ],
          dedupe: ["react", "react-dom", "@tanstack/react-query", "react-router-dom"],
          preserveSymlinks: false,
        },
      }
    },
  },
})
```

The admin UI components are injected into the Medusa admin via a Vite plugin. 

**`@gorgo/medusa-marketplace` plugin options:**

| Option                | Type     | Required | Description                                                                                     |
| --------------------- | -------- | -------- | ----------------------------------------------------------------------------------------------- |
| `providers`           | `array`  | Yes      | List of marketplace provider registrations                                                      |
| `providers[].resolve` | `string` | Yes      | Path to the provider module                                                                     |
| `providers[].id`      | `string` | Yes      | A unique identifier for this provider instance. Used to distinguish multiple provider instances |
| `providers[].options` | `object` | No       | Provider-level options                                                                          |

**`gorgoPluginsInject` Vite-plugin options:**

| Option    | Type       | Description                                                                                                                                                          |
| --------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sources` | `string[]` | List of Gorgo plugin packages whose admin extensions should be injected into the Medusa admin. Include every `@gorgo/medusa-marketplace-*` plugin you have installed |

## License

MIT
