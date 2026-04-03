<h1 align="center">
  Интеграция Wildberries с Medusa
</h1>

<p align="center">
  Плагин для Medusa, который интегрирует ваш магазин с маркетплейсом <a href="https://www.wildberries.ru">Wildberries</a>
  <br/>
   <a href="https://github.com/gorgojs/medusa-plugins/blob/HEAD/packages/medusa-marketplace-wildberries/README.md">Read README in English ↗</a>
</p>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.13.3-blue?logo=medusa" alt="Medusa" />
  </a>
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Протестировано_с_Medusa-v2.13.5-green?logo=checkmarx" alt="Medusa" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_chat">
    <img src="https://img.shields.io/badge/Telegram-Чат_поддержки_плагина-0088cc?logo=telegram&style=social" alt="Чат поддержки плагина в Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_chat">
    <img src="https://img.shields.io/badge/Telegram-Чат_dev--сообщества_Medusa.js-0088cc?logo=telegram&style=social" alt="Чат сообщества разработчиков Medusa.js в Telegram" />
  </a>
</p>

## Статус

🚧 В разработке, подробнее см. [Roadmap](https://github.com/gorgojs/medusa-plugins/issues/102).

## Возможности

- 🧩  **Построен как провайдер поверх [`@gorgo/medusa-marketplace`](https://www.npmjs.com/package/@gorgo/medusa-marketplace)** с общей админ-панелью, событиями и workflow
- 🔄  **Синхронизация товаров** с Wildberries (создание, обновление, объединение)
- 📦  **Синхронизация заказов** с автоматическим созданием клиентов и заказов
- ⏱  **Плановая и ручная синхронизация** через админ-панель
- 📊  **Логирование событий** для всех операций синхронизации
- 🛠  **Админ UI** для управления маркетплейсами, доступами и настройками
- 🔑  **Управление API-ключом** через UI
- ⚙️  **Профили обмена** — настройка складов и схем FBS/FBO/DBS

## Требования

- Medusa v2 (`@medusajs/medusa` >= 2.13.3)  
- Основной плагин маркетплейса [`@gorgo/medusa-marketplace`](https://www.npmjs.com/package/@gorgo/medusa-marketplace)  
- Node.js >= 20  

## Установка

Установите основной плагин Marketplace и плагин-провайдер Wildberries:

```bash
npm install @gorgo/medusa-marketplace @gorgo/medusa-marketplace-wildberries
# или
yarn add @gorgo/medusa-marketplace @gorgo/medusa-marketplace-wildberries
```

## Настройка

Добавьте конфигурацию провайдера в файл `medusa-config.ts` приложения Medusa Admin:

```ts
// medusa-config.ts
import { gorgoPluginsInject } from '@gorgo/medusa-marketplace/exports'

module.exports = defineConfig({
  // ...
  // Регистрация плагинов
  plugins: [
    // ...
    // Регистрация плагина Wildberries (добавляет роуты и виджеты в админке)
    {
      resolve: "@gorgo/medusa-marketplace-wildberries",
      options: {},
    },
   // Регистрация основного плагина marketplace и объявление провайдера Wildberries
    {
      resolve: "@gorgo/medusa-marketplace",
      options: {
        providers: [
          {
            resolve: "@gorgo/medusa-marketplace-wildberries/providers/marketplace-wildberries",
            id: "wb", // Уникальный идентификатор экземпляра провайдера
            options: {},
          },
        ],
      },
    },
  ],
  // ...
  // Настройка Vite-плагина для внедрения marketplace-виджетов
  admin: {
    vite: (config) => {
      return {
        ...config,
        plugins: [
          gorgoPluginsInject({
            sources: [
              "@gorgo/medusa-marketplace",
              "@gorgo/medusa-marketplace-wildberries",
            ],
          }),
        ],
        /**
         * Параметры `optimizeDeps` и `resolve` необходимы, чтобы избежать дублирования
         * общих зависимостей (React, React Query, React Router) между Medusa admin и пакетами плагинов
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

Компоненты админ-интерфейса внедряются в Medusa Admin с помощью Vite-плагина.

**Параметры плагина `@gorgo/medusa-marketplace`:**

| Параметр              | Тип      | Обязательный | Описание                                                                                                             |
| --------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------------------------- |
| `providers`           | `array`  | Yes          | Список регистраций провайдеров маркетплейсов                                                                         |
| `providers[].resolve` | `string` | Yes          | Путь к модулю провайдера. Для Wildberries: `@gorgo/medusa-marketplace-wildberries/providers/marketplace-wildberries` |
| `providers[].id`      | `string` | Yes          | Уникальный идентификатор экземпляра провайдера (например, `wb` ), используется для различения нескольких подключений |
| `providers[].options` | `object` | No           | Опции уровня провайдера (для Wildberries не используются)                                                            |

**Параметры плагина `@gorgo/medusa-marketplace-wildberries`:**

Указание параметров на уровне регистрации плагина не требуеся. Все настройки маркетплейса (например, API-ключ) задаются отдельно для каждого подключения в Medusa Admin.

**Параметры плагина Vite `gorgoPluginsInject`:**

| Параметр  | Тип        | Описание                                                                                                                                                               |
| --------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sources` | `string[]` | Список пакетов Gorgo-плагинов, чьи расширения админ-интерфейса должны быть внедрены в Medusa Admin. Укажите все установленные `@gorgo/medusa-marketplace-*` NPM-пакеты |

## Разработка

Для генерации [клиента Wildberries OpenAPI](https://openapi-generator.tech/docs/installation/) требуется Docker. Чтобы сгенерировать клиент, выполните:

```bash
yarn
yarn openapi:pull  # загрузить актуальную схему Wildberries OpenAPI
yarn openapi:gen   # сгенерировать API-клиент
```

Клиент также автоматически пересобирается при запуске `yarn dev`.

## Лицензия

MIT

## Usage

This documentation describes how to manage Wildberries marketplace integrations from the Medusa admin panel.

### Manage Marketplaces

In this guide, you’ll learn how to manage marketplaces in the Medusa Admin.

#### View Marketplaces

Go to **Settings → Marketplaces** to see a table of all configured marketplace integrations.

![settings.marketplaces](image.png)

The table shows:

| Column            | Description                                          |
| ----------------- | ---------------------------------------------------- |
| **Title**         | The display name you gave to the marketplace.        |
| **Provider**      | The marketplace type (e.g. `wildberries`).           |
| **Sales Channel** | The Medusa sales channel linked to this marketplace. |
| **Status**        | Whether the marketplace is enabled or disabled.      |

---

#### Add Marketplace

1. Go to **Settings → Marketplaces**
2. Click **Add** to create a marketplace connection.
3. Fill in the form:
   - **Title** — a human-readable name for this marketplace connection (e.g. "Wildberries Main Store").
   - **Provider** — select `wildberries` from the dropdown.
   - **Sales Channel** — select the Medusa sales channel that products and orders for this marketplace will belong to.
   - **Enabled** — toggle whether this marketplace is active.
4. Click **Save** to create the marketplace.

![settings.marketplaces.add](image-2.png)

> After creation, configure the **Credentials** and **Exchange settings** sections before running a sync.

---

#### View Marketplace Details

Click on a marketplace in the list to open its detail page. The detail page is divided into several sections:

- **General** — title and enabled status.
- **Exchange Profiles** — warehouse and order type mappings.
- **Events** — a log of all sync operations for this marketplace.
- **Credentials** — your Wildberries API key (provided by the Wildberries provider widget).

![settings.marketplaces.[id]](image-3.png)

---

#### Edit Marketplace Details

1. On the marketplace detail page, find the **General** section.
2. Click the **Edit** (pencil) icon.
3. Update the **Title** or toggle **Enabled**.
4. Click **Save**.

![settings.marketplace.[id].edit](image-4.png)

---

### Manage Marketplace Credentials

In this guide, you’ll learn how to manage Wildberries credentials in the Medusa Admin.

#### Edit Marketplace Credentials

The **Credentials** section is provided by the `@gorgo/medusa-marketplace-wildberries` widget on the marketplace detail page.

1. Find the **Credentials** section on the marketplace detail page.
2. Your current API key is displayed in redacted form (first 4 and last 2 characters are shown).
3. Click the eye icon to reveal the full key, or the copy icon to copy it to the clipboard.
4. Click the **Edit** (pencil) icon to open the edit form.
5. Enter your [Wildberries API key](https://seller.wildberries.ru/supplier-settings/access-to-api) in the **API Key** field.
6. Click **Save**.

> Your API key is stored in the database and is never shown in plain text in the admin UI by default.

---

### Manage Marketplace Exchange Settings

In this guide, you’ll learn how to manage Wildberries credentials in the Medusa Admin.

#### Edit Marketplace Exchange Settings

Exchange settings map a **warehouse** to an **order type** (FBS, FBO, DBS, ...). It is required to sync orders.

1. Find the **Exchange settings** section on the marketplace detail page.
2. Click **Add** (or the edit icon on an existing profile).
3. Select:
   - **Warehouse** — choose from the list of warehouses fetched live from your Wildberries account.
   - **Order Type** — `FBS` (Fulfilled by Seller) or `FBO` (Fulfilled by Operator).
4. Click **Save**.

> The warehouse list is fetched from the Wildberries API using your configured API key. Make sure credentials are saved before adding an exchange profile.

---

### Sync Products

Products can be synced in both directions:

- **Export** — Medusa products are sent to Wildberries. New product cards are created for products without a Wildberries ID; existing cards are updated by nomenclature ID (`nmID`). If a product already has many variants on Wildberries, new variants are merged into the existing card.
- **Import** — Wildberries product data (nmID, imtID, size SKUs) is fetched and stored as metadata on your Medusa products and variants.

After a successful export or import, the following metadata fields are set on variants:

| Metadata key           | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| `wildberries_nmID`     | Nomenclature ID on Wildberries (variant identifier).  |
| `wildberries_imtID`    | Material ID on Wildberries (product card identifier). |
| `wildberries_sizeSkus` | Array of size SKUs.                                   |
| `wildberries_sizeID`   | Size identifier.                                      |
| `wildberries_error`    | Validation error from Wildberries, if any.            |

---

#### Manual Sync Products

1. On the marketplace detail page, click "Synchronize".
2. Choose "Products" from the dropdown.
3. The sync runs in the background. Check the **Events** section for progress and results.

---

#### Scheduled Sync Products

Products are automatically synced every day at midnight (UTC) via the `sync-marketplace-products` background job. No additional configuration is needed.

---

### Sync Orders

Orders are imported from Wildberries into Medusa. For each Wildberries order, a corresponding Medusa order and customer are created if they do not already exist. Duplicate orders are skipped automatically.

---

#### Manual Sync Orders

1. On the marketplace detail page, click "Synchronize".
2. Choose "Orders" from the dropdown.
3. The sync runs in the background. Check the **Events** section for progress and results.

---

#### Scheduled Sync Orders

Orders are automatically synced every day at midnight (UTC) via the `sync-marketplace-orders` background job. No additional configuration is needed.

---

#### Delete Marketplace

1. On the marketplace detail page, open the actions menu.
2. Click "Delete".
3. Confirm the deletion.

> Deleting a marketplace also permanently deletes all associated exchange profiles and events.

---

#### View Events

Go to **Settings → Marketplaces → Events** to see a log of all sync operations across all marketplaces. Events scoped to a single marketplace are also visible on its detail page.

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
- **Request data** — the full payload sent to or received from Wildberries (JSON).
- **Response data** — the full response from Wildberries (JSON), including any validation errors returned by the Wildberries API.

> Event details are useful for diagnosing sync failures. Validation errors for individual product cards are stored in the **Response data** field and also written back to the `wildberries_error` metadata field on the affected variants.
