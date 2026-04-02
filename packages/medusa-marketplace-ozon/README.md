<h1 align="center">
  Ozon Integration for Medusa
</h1>

<p align="center">
  A Medusa plugin that integrates your store with the <a href="https://www.ozon.ru/">Ozon</a> marketplace
  <br/>
  <a href="https://github.com/gorgojs/medusa-plugins/blob/HEAD/packages/medusa-marketplace-ozon/README.ru.md">Читать README на русском ↗</a>
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

## Status

🚧 Work in progress, see the [Roadmap](https://github.com/gorgojs/medusa-plugins/issues/102).

## Features

- 🧩  **Built as a provider on top of [`@gorgo/medusa-marketplace`](https://www.npmjs.com/package/@gorgo/medusa-marketplace)** with shared admin UI, events & workflows
- 🔄  **Product sync**  with Ozon (create, update, merge)  
- 📦  **Order sync** with automatic customer & order creation  
- ⏱  **Scheduled & manual sync** from admin
- 📊  **Event logging** for all sync operations  
- 🛠  **Admin UI** for managing marketplaces, credentials & configs
- 🔑  **API key management** via admin  
- ⚙️  **Exchange profiles** — configure warehouse & FBO/realFBS mappings

## Requirements

- Medusa v2.13.3 or later
- Node.js v20 or later
- [@gorgo/medusa-marketplace](https://www.npmjs.com/package/@gorgo/medusa-marketplace) core plugin

## Installation

Install both the Marketplace core plugin and the Ozon provider:

```bash
npm install @gorgo/medusa-marketplace @gorgo/medusa-marketplace-ozon
# or
yarn add @gorgo/medusa-marketplace @gorgo/medusa-marketplace-ozon
```

## Configuration

Add the provider configuration in your `medusa-config.ts` file of the Medusa Admin application:

```ts
// medusa-config.ts
import { gorgoPluginsInject } from '@gorgo/medusa-marketplace/exports'

module.exports = defineConfig({
  // ...
  // Register plugins
  plugins: [
    // ...
    // Register the Ozon plugin (registers admin routes and widgets)
    {
      resolve: "@gorgo/medusa-marketplace-ozon",
      options: {},
    },
    // Register the marketplace core plugin and declare Ozon as a provider
    {
      resolve: "@gorgo/medusa-marketplace",
      options: {
        providers: [
          {
            resolve: "@gorgo/medusa-marketplace-ozon/providers/marketplace-ozon",
            id: "ozon", // Unique identifier for this provider instance
            options: {},
          },
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
              "@gorgo/medusa-marketplace-ozon",
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

| Option                | Type     | Required | Description                                                                                                                |
| --------------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| `providers`           | `array`  | Yes      | List of marketplace provider registrations                                                                                |
| `providers[].resolve` | `string` | Yes      | Path to the provider module. For Ozon: `"@gorgo/medusa-marketplace-ozon/providers/marketplace-ozon"` |
| `providers[].id`      | `string` | Yes      | A unique identifier for this provider instance (e.g. `"ozon"`). Used to distinguish multiple provider instances             |
| `providers[].options` | `object` | No       | Provider-level options (unused for Ozon)                                                                           |

**`@gorgo/medusa-marketplace-ozon` plugin options:**

No options are required at the plugin level. All marketplace-specific settings (such as the API key) are configured per-marketplace instance in the admin UI.

**`gorgoPluginsInject` Vite-plugin options:**

| Option    | Type       | Description                                                                                                                                                           |
| --------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sources` | `string[]` | List of Gorgo plugin packages whose admin extensions should be injected into the Medusa admin. Include every `@gorgo/medusa-marketplace-*` plugin you have installed |

## Development

Docker is required for generating the [Ozon OpenAPI client](https://openapi-generator.tech/docs/installation/). To (re)generate the client, run:

```bash
yarn
yarn openapi:pull  # download the latest Ozon OpenAPI schema
yarn openapi:gen   # generate the API client
```

The client is also regenerated automatically on `yarn dev`.

## License

MIT

## Usage

This documentation describes how to manage Ozon marketplace integrations from the Medusa admin panel.

### Manage Marketplaces

In this guide, you’ll learn how to manage marketplaces in the Medusa Admin.

#### View Marketplaces

Go to **Settings → Marketplaces** to see a table of all configured marketplace integrations.

![settings.marketplaces](../../www/docs/public/static/marketplace-ozon/image.png)

The table shows:

| Column            | Description                                          |
| ----------------- | ---------------------------------------------------- |
| **Title**         | The display name you gave to the marketplace        |
| **Provider**      | The marketplace type (e.g. `ozon`)           |
| **Sales Channel** | The Medusa sales channel linked to this marketplace |
| **Status**        | Whether the marketplace is enabled or disabled      |

---

#### Add Marketplace

1. Go to **Settings → Marketplaces**
2. Click **Add** to create a marketplace connection.
3. Fill in the form:
   - **Title** — a human-readable name for this marketplace connection (e.g. "Ozon Main Store").
   - **Provider** — select `mp_ozon_ozon` from the dropdown.
   - **Sales Channel** — select the Medusa sales channel that products and orders for this marketplace will belong to.
   - **Enabled** — toggle whether this marketplace is active.
4. Click **Save** to create the marketplace.

![settings.marketplaces.add](../../www/docs/public/static/marketplace-ozon/image-2.png)

> After creation, configure the **Credentials** and **Exchange settings** sections before running a sync.

---

#### View Marketplace Details

Click on a marketplace in the list to open its detail page. The detail page is divided into several sections:

- **General** — title and enabled status.
- **Exchange Profiles** — warehouse and order type mappings.
- **Events** — a log of all sync operations for this marketplace.
- **Credentials** — your Ozon API key and Client ID (provided by the Ozon provider widget).

![settings.marketplaces.[id]](../../www/docs/public/static/marketplace-ozon/image-3.png)

---

#### Edit Marketplace Details

1. On the marketplace detail page, find the **General** section.
2. Click the **Edit** (pencil) icon.
3. Update the **Title** or toggle **Enabled**.
4. Click **Save**.

![settings.marketplace.[id].edit](../../www/docs/public/static/marketplace-ozon/image-4.png)

---

### Manage Marketplace Credentials

In this guide, you’ll learn how to manage Ozon credentials in the Medusa Admin.

#### Edit Marketplace Credentials

The **Credentials** section is provided by the `@gorgo/medusa-marketplace-ozon` widget on the marketplace detail page.

1. Find the **Credentials** section on the marketplace detail page.
2. Your current API key is displayed in redacted form (first 4 and last 2 characters are shown).
3. Click the eye icon to reveal the full key, or the copy icon to copy it to the clipboard.
4. Click the **Edit** (pencil) icon to open the edit form.
5. Enter your [Ozon API key](https://seller.ozon.ru/app/settings/api-keys) in the **API Key** field.
6. Enter your **Client ID** in the **Client ID** field (you can find it in your Ozon seller account).
7. Click **Save**.

![settings.marketplace.[id].credentials.edit](../../www/docs/public/static/marketplace-ozon/image-5.png)

> Your API key and Client ID are stored in the database and are never shown in plain text in the admin UI by default.

---

### Manage Marketplace Exchange Settings

In this guide, you’ll learn how to manage Ozon exchange settings in the Medusa Admin.

#### Edit Marketplace Exchange Settings

Exchange settings map a **warehouse** to an **order type** (realFBS, FBO). It is required to sync orders.

1. Find the **Exchange settings** section on the marketplace detail page.
2. Click **Add** (or the edit icon on an existing profile).
3. Select:
   - **Warehouse** — choose from the list of warehouses fetched live from your Ozon account.
   - **Order Type** — `realFBS` (Fulfilled by Seller) or `FBO` (Fulfilled by Operator).
4. Click **Save**.

![settings.marketplace.[id].exchange-profile.edit](../../www/docs/public/static/marketplace-ozon/image-6.png)

> The warehouse list is fetched from the Ozon API using your configured API key. Make sure credentials are saved before adding an exchange profile.

---

### Manage Category Mapping

In this guide, you’ll learn how to manage category and attribute mappings between Medusa and Ozon in the Medusa Admin.

#### Create category mapping

1. In the **Category mapping** section, click **Add**.
2. In the **Create Category Mapping** modal:
   - Choose a **Medusa Category** that should be exported to Ozon.
   - Select an **Ozon Category**.
   - Select an **Ozon Subcategory**.
3. After selecting the Ozon subcategory, the **Attributes Mapping** section for that subcategory is loaded.
4. Configure the attribute mappings as needed.
5. Click **Save**.

![settings.marketplace.[id].category-mapping.add](../../www/docs/public/static/marketplace-ozon/image-7.png)

#### Edit category mapping

1. Go to **Settings → Marketplaces** and select your Ozon marketplace.
2. In the **Category mapping** table, find the mapping you want to update.
3. Click the **...** actions menu in that row.
4. Choose **Edit**.
5. In the edit modal, update:
   - The **Medusa Category**, **Ozon Category**, or **Ozon Subcategory**, if needed.
   - The **Attributes Mapping** configuration, including source Medusa fields, default values, and value processing strategies.
6. Click **Save** to apply your changes.

![settings.marketplace.[id].category-mapping.edit](../../www/docs/public/static/marketplace-ozon/image-8.png)

You can also add mappings for optional attributes by clicking **Add rule** in the attributes section.

> When the marketplace is enabled, only products that belong to mapped Medusa categories are exported to Ozon, and their payloads are built using the configured category and attribute mappings.

---

### Sync products

Products can be synced in both directions:

- **Export** — Medusa products are sent to Ozon. For products that match your category mapping rules, variants are transformed into Ozon offers with identifiers, prices, dimensions, barcodes, images, VAT, and other mapped attributes.
- **Import** — Ozon product attributes are fetched by offer ID and merged into your Medusa products and variants as metadata.

After a successful import, the following metadata fields can be set:

| Metadata key                          | Description                                             |
| ------------------------------------- | ------------------------------------------------------- |
| `variant.metadata.ozon_product_id`    | Ozon offer identifier stored on the variant.           |
| `product.metadata.ozon_type_id`       | Ozon product type identifier stored on the product.    |
| `variant.metadata.ozon_barcodes`      | Array of barcodes returned from Ozon for the variant.  |

---

#### Manual Sync Products

1. On the marketplace detail page, click "Synchronize".
2. Choose "Products" from the dropdown.
3. The sync runs in the background. Check the **Events** section for progress and results.

![settings.marketplace.[id].sync-products](../../www/docs/public/static/marketplace-ozon/image-9.png)

---

#### Scheduled Sync Products

Products are automatically synced every day at midnight (UTC) via the `sync-marketplace-products` background job. No additional configuration is needed.

---

### Sync Orders

Orders are imported from Ozon into Medusa. For each Ozon order, a corresponding Medusa order and customer are created if they do not already exist. Duplicate orders are skipped automatically.

---

#### Manual Sync Orders

1. On the marketplace detail page, click "Synchronize".
2. Choose "Orders" from the dropdown.
3. The sync runs in the background. Check the **Events** section for progress and results.

![settings.marketplace.[id].sync-orders](../../www/docs/public/static/marketplace-ozon/image-9.png)

---

#### Scheduled Sync Orders

Orders are automatically synced every day at midnight (UTC) via the `sync-marketplace-orders` background job. No additional configuration is needed.

---

#### Delete Marketplace

1. On the marketplace detail page, open the actions menu.
2. Click "Delete".
3. Confirm the deletion.

![settings.marketplace.[id].sync-orders](../../www/docs/public/static/marketplace-ozon/image-10.png)

> Deleting a marketplace also permanently deletes all associated exchange profiles and events.

---

#### View Events

Go to **Settings → Marketplaces → Events** to see a log of all sync operations across all marketplaces. Events scoped to a single marketplace are also visible on its detail page.

![settings.marketplace.[id].events](../../www/docs/public/static/marketplace-ozon/image-11.png)

The events list shows:

| Column        | Description                                                                                |
| ------------- | ------------------------------------------------------------------------------------------ |
| **Direction** | `Medusa → Marketplace` (export) or `Marketplace → Medusa` (import).                        |
| **Entity**    | What was synced: `PRODUCT`, `PRODUCT_MEDIA`, `PRODUCT_PRICE`, `PRODUCT_STOCK`, or `ORDER`. |
| **Action**    | The operation performed: `CREATE`, `UPDATE`, or `DELETE`.                                  |
| **Started**   | When the sync operation began.                                                             |
| **Finished**  | When the sync operation completed.                                                         |

---

#### View Event Details

Click on any event in the events list to open its detail view. This shows:

- **Correlation ID** — groups related events from the same sync run.
- **Direction**, **Entity type**, and **Action**.
- **Started at** / **Finished at** timestamps.
- **Request data** — the full payload sent to or received from Ozon (JSON).
- **Response data** — the full response from Ozon (JSON), including any validation errors returned by the Ozon API.

![settings.marketplace.[id].events](../../www/docs/public/static/marketplace-ozon/image-12.png)

> Event details are useful for diagnosing sync failures. Validation errors for individual product cards are stored in the **Response data** field and also written back to the `ozon_error` metadata field on the affected variants.
