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

- Medusa v2.13.3 или выше
- Node.js v20 или выше
- Core-плагин [@gorgo/medusa-marketplace](https://www.npmjs.com/package/@gorgo/medusa-marketplace)  

## Установка

Установите core-плагин Marketplace и плагин-провайдер Wildberries:

```bash
npm install @gorgo/medusa-marketplace @gorgo/medusa-marketplace-wildberries
# или
yarn add @gorgo/medusa-marketplace @gorgo/medusa-marketplace-wildberries
```

## Конфигурация

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
   // Регистрация core-плагина marketplace и объявление провайдера Wildberries
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
| `providers[].options` | `object` | No           | Параметры уровня провайдера (для Wildberries не используются)                                                            |

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

## Использование

Данная документация описывает управление интеграциями с маркетплейсом Wildberries из панели администратора Medusa.

### Управление маркетплейсами

В этом руководстве вы узнаете, как управлять маркетплейсами в панели администратора Medusa.

#### Просмотр маркетплейсов

Перейдите в **Настройки → Маркетплейсы**, чтобы увидеть таблицу всех настроенных интеграций с маркетплейсами.

![settings.marketplaces](../../www/docs/public/static/marketplace-wildberries/image.png)

В таблице отображается:

| Column            | Описание                                                      |
| ----------------- | ------------------------------------------------------------- |
| **Title**         | Отображаемое имя, которое вы присвоили маркетплейсу           |
| **Provider**      | Тип маркетплейса (например, `wildberries`)                    |
| **Sales Channel** | Канал продаж Medusa, связанный с данным маркетплейсом         |
| **Status**        | Активен или отключён маркетплейс                              |

---

#### Добавление маркетплейса

1. Перейдите в **Настройки → Маркетплейсы**.
2. Нажмите **Добавить**, чтобы создать подключение к маркетплейсу.
3. Заполните форму:
   - **Title** — понятное имя для данного подключения (например, «Wildberries Основной магазин»).
   - **Provider** — выберите `wildberries` из выпадающего списка.
   - **Sales Channel** — выберите канал продаж Medusa, к которому будут относиться товары и заказы данного маркетплейса.
   - **Enabled** — переключите, чтобы включить или отключить маркетплейс.
4. Нажмите **Save**, чтобы создать маркетплейс.

![settings.marketplaces.add](../../www/docs/public/static/marketplace-wildberries/image-1.png)

> После создания настройте разделы **Credentials** и **Exchange settings** перед запуском синхронизации.

---

#### Просмотр сведений о маркетплейсе

Нажмите на маркетплейс в списке, чтобы открыть страницу с подробными сведениями. Страница разделена на несколько секций:

- **General** — название и статус активности.
- **Exchange Profiles** — сопоставление складов и типов заказов.
- **Events** — журнал всех операций синхронизации для данного маркетплейса.
- **Credentials** — ваш API-ключ Wildberries.

![settings.marketplaces.[id]](../../www/docs/public/static/marketplace-wildberries/image-2.png)

---

#### Редактирование сведений о маркетплейсе

1. На странице сведений о маркетплейсе найдите раздел **General**.
2. Нажмите на значок **Edit** (карандаш).
3. Обновите **Title** или переключите **Enabled**.
4. Нажмите **Save**.

![settings.marketplaces.[id].edit](../../www/docs/public/static/marketplace-wildberries/image-3.png)

---

### Управление учётными данными маркетплейса

В этом руководстве вы узнаете, как управлять учётными данными Wildberries в панели администратора Medusa.

#### Редактирование учётных данных маркетплейса

Раздел **Credentials** предоставляется виджетом `@gorgo/medusa-marketplace-wildberries` на странице сведений о маркетплейсе.

1. Найдите раздел **Credentials** на странице сведений о маркетплейсе.
2. Текущий API-ключ отображается в скрытом виде (показываются первые 4 и последние 2 символа).
3. Нажмите на значок глаза, чтобы показать полный ключ, или нажмите на ключ, чтобы скопировать его в буфер обмена.
4. Нажмите на значок **Edit** (карандаш), чтобы открыть форму редактирования.
5. Введите ваш [API-ключ Wildberries](https://seller.wildberries.ru/supplier-settings/access-to-api) в поле **API Key**.
6. Нажмите **Save**.

![settings.marketplaces.[id].credentials.edit](../../www/docs/public/static/marketplace-wildberries/image-4.png)

> Ваш API-ключ хранится в базе данных и по умолчанию никогда не отображается в открытом виде в интерфейсе администратора.

---

### Управление настройками обмена маркетплейса

В этом руководстве вы узнаете, как управлять настройками обмена Wildberries в панели администратора Medusa.

#### Редактирование настроек обмена маркетплейса

Настройки обмена связывают **склад** с **типом заказа** (FBS, FBO, DBS и т.д.). Они необходимы для синхронизации заказов.

1. Найдите раздел **Exchange settings** на странице сведений о маркетплейсе.
2. Нажмите **Add** (или значок редактирования у существующего профиля).
3. Выберите:
   - **Warehouse** — выберите из списка складов, полученных в режиме реального времени из вашего аккаунта Wildberries.
   - **Order Type** — `FBS` (Fulfilled by Seller, выполняется продавцом) или `FBO` (Fulfilled by Operator, выполняется оператором).
4. Нажмите **Save**.

![settings.marketplaces.[id].exchange-settings.edit](../../www/docs/public/static/marketplace-wildberries/image-5.png)

> Список складов загружается из API Wildberries с использованием вашего настроенного API-ключа. Убедитесь, что учётные данные сохранены перед добавлением профиля обмена.

---

### Синхронизация товаров

Товары можно синхронизировать в обоих направлениях:

- **Export** — товары Medusa отправляются в Wildberries. Для товаров без идентификатора Wildberries создаются новые карточки товаров; существующие карточки обновляются по идентификатору номенклатуры (`nmID`). Если товар уже имеет множество вариантов на Wildberries, новые варианты добавляются в существующую карточку.
- **Import** — данные товаров Wildberries (nmID, imtID, SKU размеров) загружаются и сохраняются в виде метаданных для ваших товаров и вариантов в Medusa.

После успешного экспорта или импорта в вариантах устанавливаются следующие поля метаданных:

| Metadata key           | Описание                                                                        |
| ---------------------- | ------------------------------------------------------------------------------- |
| `wildberries_nmID`     | Идентификатор номенклатуры на Wildberries (идентификатор варианта).             |
| `wildberries_imtID`    | Идентификатор материала на Wildberries (идентификатор карточки товара).         |
| `wildberries_sizeSkus` | Массив SKU размеров.                                                            |
| `wildberries_sizeID`   | Идентификатор размера.                                                          |
| `wildberries_error`    | Ошибка валидации от Wildberries, если есть.                                     |

---

#### Ручная синхронизация товаров

1. На странице сведений о маркетплейсе нажмите «Синхронизировать».
2. Выберите «Товары» из выпадающего меню.
3. Синхронизация выполняется в фоновом режиме. Для отслеживания прогресса и результатов проверьте раздел **Events**.

![settings.marketplaces.[id].products-sync](../../www/docs/public/static/marketplace-wildberries/image-6.png)

---

#### Плановая синхронизация товаров

Товары автоматически синхронизируются каждый день в полночь (UTC) с помощью фонового задания `sync-marketplace-products`. Дополнительная настройка не требуется.

---

### Синхронизация заказов

Заказы импортируются из Wildberries в Medusa. Для каждого заказа Wildberries создаются соответствующий заказ и покупатель в Medusa, если они ещё не существуют. Дублирующиеся заказы пропускаются автоматически.

---

#### Ручная синхронизация заказов

1. На странице сведений о маркетплейсе нажмите «Синхронизировать».
2. Выберите «Заказы» из выпадающего меню.
3. Синхронизация выполняется в фоновом режиме. Для отслеживания прогресса и результатов проверьте раздел **Events**.

![settings.marketplaces.[id].orders-sync](../../www/docs/public/static/marketplace-wildberries/image-7.png)

---

#### Плановая синхронизация заказов

Заказы автоматически синхронизируются каждый день в полночь (UTC) с помощью фонового задания `sync-marketplace-orders`. Дополнительная настройка не требуется.

---

#### Удаление маркетплейса

1. На странице сведений о маркетплейсе откройте меню действий.
2. Нажмите «Удалить».
3. Подтвердите удаление.

![settings.marketplaces.[id].delete](../../www/docs/public/static/marketplace-wildberries/image-8.png)

> Удаление маркетплейса также безвозвратно удаляет все связанные профили обмена и события.

---

#### Просмотр событий

Перейдите в **Настройки → Маркетплейсы → События**, чтобы просмотреть журнал всех операций синхронизации по всем маркетплейсам. События, относящиеся к конкретному маркетплейсу, также видны на его странице сведений.

![settings.marketplaces.[id].events](../../www/docs/public/static/marketplace-wildberries/image-9.png)

Список событий содержит:

| Column        | Описание                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------- |
| **Direction** | `Medusa → Marketplace` (экспорт) или `Marketplace → Medusa` (импорт).                            |
| **Entity**    | Что синхронизировалось: `PRODUCT`, `PRODUCT_MEDIA`, `PRODUCT_PRICE`, `PRODUCT_STOCK` или `ORDER`. |
| **Action**    | Выполненная операция: `CREATE`, `UPDATE` или `DELETE`.                                            |
| **Started**   | Когда началась операция.                                                                          |
| **Finished**  | Когда завершилась операция.                                                                       |

---

#### Просмотр сведений о событии

Нажмите на любое событие в списке, чтобы открыть подробный просмотр. Здесь отображается:

- **Correlation ID** — группирует связанные события из одного цикла синхронизации (WIP).
- **Direction**, **Entity type** и **Action**.
- Временные метки **Started at** / **Finished at**.
- **Request data** — полная полезная нагрузка, отправленная в Wildberries или полученная от него (JSON).
- **Response data** — полный ответ от Wildberries (JSON), включая любые ошибки валидации, возвращённые API Wildberries.

![settings.marketplaces.[id].events.[event_id]](../../www/docs/public/static/marketplace-wildberries/image-10.png)

> Сведения о событии полезны для диагностики сбоев синхронизации. Ошибки валидации для отдельных карточек товаров хранятся в поле **Response data** и также записываются обратно в поле метаданных `wildberries_error` затронутых вариантов.
