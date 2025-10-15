<h1 align="center">
  Medusa Marketplace Core
</h1>

<p align="center">
  Core-плагин для создания интеграций с маркетплейсами в Medusa.
  <br/>
  <a href="https://github.com/gorgojs/medusa-plugins/blob/HEAD/packages/medusa-marketplace/README.md">Read README in English ↗</a>
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
    <img src="https://img.shields.io/badge/Telegram-Plugin_Support_Chat-0088cc?logo=telegram&style=social" alt="Чат поддержки плагина в Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_chat">
    <img src="https://img.shields.io/badge/Telegram-Medusa.js_Dev_Community_Chat-0088cc?logo=telegram&style=social" alt="Чат сообщества разработчиков Medusa.js в Telegram" />
  </a>
</p>

## Обзор

`@gorgo/medusa-marketplace` предоставляет единую основу для подключения маркетплейсов (Wildberries, Ozon, Yandex Market и др.) к Medusa через архитектуру провайдеров.

Плагин берет на себя общую инфраструктуру, позволяя реализовывать каждый маркетплейс как изолированный провайдер.

## Статус

🚧 В разработке, см. [Roadmap](https://github.com/gorgojs/medusa-plugins/issues/102).

## Возможности

- 🧩 **Архитектура на основе провайдеров** для интеграции нескольких маркетплейсов  
- 🔌 **Подключаемые провайдеры** — Wildberries, Ozon, Yandex Market и др.  
- 🛠 **Общая админ-панель** для управления маркетплейсами, доступами и синхронизацией  
- 🔄 **Workflow синхронизации** для товаров, заказов и других сущностей  
- 📊 **Система событий** с полным логированием операций синхронизации  
- 🗄 **Единый слой данных** для работы с маркетплейсами  
- 🖥 **Расширяемый интерфейс админки** с помощью виджетов для настройки маркетплейсов  
- ⚙️ **Расширяемые workflow** для кастомной бизнес-логики  

## 🏗 Архитектура

Плагин реализует модель провайдеров:

- Core-плагин → определяет инфраструктуру  
- Провайдеры → реализуют логику конкретных маркетплейсов  

```txt
@gorgo/medusa-marketplace
  ├── core (workflows, jobs, API routes, admin UI, ...)
  ├── provider: ozon
  ├── provider: yandex-market
  ├── provider: wildberries
  └── provider: ...
```

## Существующие провайдеры

Провайдеры маркетплейсов, построенные поверх core-плагина:

- Ozon - [@gorgo/medusa-marketplace-ozon](https://www.npmjs.com/package/@gorgo/medusa-marketplace-ozon)
- Yandex Market - [@gorgo/medusa-marketplace-yandex-market](https://www.npmjs.com/package/@gorgo/medusa-marketplace-yandex-market)
- Wildberries - [@gorgo/medusa-marketplace-wildberries](https://www.npmjs.com/package/@gorgo/medusa-marketplace-wildberries)

## Требования

- Medusa v2.13.3 или выше
- Node.js v20 или выше  

## Установка

```bash
npm install @gorgo/medusa-marketplace
# или
yarn add @gorgo/medusa-marketplace
```

Затем установите и настройте [провайдеры](#существующие-провайдеры).

## Конфигурация

Добавьте конфигурацию в файл `medusa-config.ts` вашего приложения Medusa Admin:

```ts
// medusa-config.ts
import { gorgoPluginsInject } from '@gorgo/medusa-marketplace/exports'

module.exports = defineConfig({
  // ...
  // Регистрация плагинов
  plugins: [
    // ...
    // Регистрация core-плагина marketplace и объявление провайдера Wildberries
    {
      resolve: "@gorgo/medusa-marketplace",
      options: {
        providers: [
          // ...
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
              // ...
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

| Параметр              | Тип      | Обязательный | Описание                                                                                           |
| --------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------- |
| `providers`           | `array`  | Yes          | Список регистраций провайдеров маркетплейсов                                                       |
| `providers[].resolve` | `string` | Yes          | Путь к модулю провайдера                                                                           |
| `providers[].id`      | `string` | Yes          | Уникальный идентификатор экземпляра провайдера, используется для различения нескольких подключений |
| `providers[].options` | `object` | No           | Параметры уровня провайдера                                                                        |


**Параметры плагина Vite `gorgoPluginsInject`:**

| Параметр  | Тип        | Описание                                                                                                                                                               |
| --------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sources` | `string[]` | Список пакетов Gorgo-плагинов, чьи расширения админ-интерфейса должны быть внедрены в Medusa Admin. Укажите все установленные `@gorgo/medusa-marketplace-*` NPM-пакеты |

## Лицензия

MIT
