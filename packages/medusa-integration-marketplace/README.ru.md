<h1 align="center">
  Medusa integration Core
</h1>

<p align="center">
  Core-плагин для создания интеграций с Medusa.
  <br/>
  <a href="https://github.com/gorgojs/medusa-plugins/blob/HEAD/packages/medusa-integration/README.md">Read README in English ↗</a>
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

`@gorgo/medusa-integration` предоставляет единую основу для подключения интеграций (Wildberries, Ozon, Yandex Market и др.) к Medusa через архитектуру провайдеров.

Плагин берет на себя общую инфраструктуру, позволяя реализовывать каждую интеграцию как изолированный провайдер.

## Статус

🚧 В разработке, см. [Roadmap](https://github.com/gorgojs/medusa-plugins/issues/102).

## Возможности

- 🧩 **Архитектура на основе провайдеров** для нескольких интеграций  
- 🔌 **Подключаемые провайдеры** — Wildberries, Ozon, Yandex Market и др.  
- 🛠 **Общая админ-панель** для управления интеграциями, доступами и синхронизацией  
- 🔄 **Workflow синхронизации** для товаров, заказов и других сущностей  
- 📊 **Система событий** с полным логированием операций синхронизации  
- 🗄 **Единый слой данных** для работы с интеграциями  
- 🖥 **Расширяемый интерфейс админки** с помощью виджетов для настройки интеграций  
- ⚙️ **Расширяемые workflow** для кастомной бизнес-логики  

## 🏗 Архитектура

Плагин реализует модель провайдеров:

- Core-плагин → определяет инфраструктуру  
- Провайдеры → реализуют логику конкретных интеграций  

```txt
@gorgo/medusa-integration
  ├── core (workflows, jobs, API routes, admin UI, ...)
  ├── provider: ozon
  ├── provider: yandex-market
  ├── provider: wildberries
  └── provider: ...
```

## Существующие провайдеры

Провайдеры интеграций, построенные поверх core-плагина:

- Ozon - [@gorgo/medusa-integration-ozon](https://www.npmjs.com/package/@gorgo/medusa-integration-ozon)
- Yandex Market - [@gorgo/medusa-integration-yandex-market](https://www.npmjs.com/package/@gorgo/medusa-integration-yandex-market)
- Wildberries - [@gorgo/medusa-integration-wildberries](https://www.npmjs.com/package/@gorgo/medusa-integration-wildberries)

## Требования

- Medusa v2.13.3 или выше
- Node.js v20 или выше  

## Установка

```bash
npm install @gorgo/medusa-integration
# или
yarn add @gorgo/medusa-integration
```

Затем установите и настройте [провайдеры](#существующие-провайдеры).

## Конфигурация

Добавьте конфигурацию в файл `medusa-config.ts` вашего приложения Medusa Admin:

```ts
// medusa-config.ts
import { gorgoPluginsInject } from '@gorgo/medusa-integration/exports'

module.exports = defineConfig({
  // ...
  // Регистрация плагинов
  plugins: [
    // ...
    // Регистрация core-плагина integration и объявление провайдера Wildberries
    {
      resolve: "@gorgo/medusa-integration",
      options: {
        providers: [
          // ...
        ],
      },
    },
  ],
  // ...
  // Настройка Vite-плагина для внедрения integration-виджетов
  admin: {
    vite: (config) => {
      return {
        ...config,
        plugins: [
          gorgoPluginsInject({
            sources: [
              "@gorgo/medusa-integration",
              // ...
            ],
          }),
        ],
        /**
         * Параметры `optimizeDeps` и `resolve` необходимы, чтобы избежать дублирования
         * общих зависимостей (React, React Query, React Router) между Medusa admin и пакетами плагинов
         */
        optimizeDeps: {
          exclude: ["@gorgo/medusa-integration"],
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

**Параметры плагина `@gorgo/medusa-integration`:**

| Параметр              | Тип      | Обязательный | Описание                                                                                           |
| --------------------- | -------- | ------------ | -------------------------------------------------------------------------------------------------- |
| `providers`           | `array`  | Yes          | Список регистраций провайдеров интеграций                                                          |
| `providers[].resolve` | `string` | Yes          | Путь к модулю провайдера                                                                           |
| `providers[].id`      | `string` | Yes          | Уникальный идентификатор экземпляра провайдера, используется для различения нескольких подключений |
| `providers[].options` | `object` | No           | Параметры уровня провайдера                                                                        |


**Параметры плагина Vite `gorgoPluginsInject`:**

| Параметр  | Тип        | Описание                                                                                                                                                               |
| --------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sources` | `string[]` | Список пакетов Gorgo-плагинов, чьи расширения админ-интерфейса должны быть внедрены в Medusa Admin. Укажите все установленные `@gorgo/medusa-integration-*` NPM-пакеты |

## Лицензия

MIT
