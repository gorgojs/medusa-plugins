---
date: 2026-05-28
researcher: Claude
topic: "Архитектура пакета @gorgo/medusa-integration — storage + admin UI для настроек любых Medusa-плагинов (payment, fulfillment, marketplace, ...)"
tags: [proposal, architecture, medusa-integration, admin-ui]
status: draft
last_updated: 2026-06-01
---

# `@gorgo/medusa-integration` — архитектура

Пакет нужен как фундамент под предыдущий редизайн (см. [2026-05-17-integration-framework-redesign-v2.md](2026-05-17-integration-framework-redesign-v2.md), где он фигурировал под рабочим именем `@gorgo/medusa-provider-settings`). Ниже — конкретная архитектура такого пакета, ограниченная двумя заявленными целями: **storage** + **admin UI** для настроек любых Medusa-плагинов (payment, fulfillment, marketplace-интеграции, и т.д.).

**Имя пакета зафиксировано**: новый пакет занимает имя `@gorgo/medusa-integration`. Существующий marketplace-фреймворк с этим именем переименовывается в `@gorgo/medusa-integration-marketplace` и переезжает поверх нового пакета (использует его `Integration`-модель + хранилище настроек, добавляет свои marketplace-специфичные сущности — `IntegrationOrder`, `IntegrationExchangeProfile`, workflows, cron). Подробнее в §11.

---

## 1. Scope и не-scope

**В скоупе:**
- Универсальная модель `integration` — «настройки одного инстанса плагина» в БД.
- Декларация схемы настроек (поля, типы, секции, валидация) каждым плагином.
- Готовые admin API-эндпоинты `/admin/integrations/...` для CRUD с валидацией.
- Auto-generated admin UI на базе схемы (можно отключить) + опциональные кастомные UI-секции.
- Runtime-резолвер, через который payment/fulfillment/marketplace-плагин достаёт настройки (+ кэширование).
- Test-connection хук.
- События об изменении настроек (для инвалидации кэша плагина, если необходимо).
- Шифрование секретов at rest.
- Локализация UI (i18n).

**Вне скоупа (этим пакетом не решаем):**
- Capability-интерфейсы провайдеров (это слой `medusa-integration-marketplace`/`-crm`/`-erp`/`-pim`).
- Audit-log обменов (`IntegrationEvent`) — переезжает в `medusa-integration-marketplace`.
- Workflows синхронизации, cron, webhook-receiver.
- Доменные модели (orders/products/exchange-profiles/contacts/...).

То есть пакет — это **«storage + UI for plugin config»**, не интеграционное ядро.

---

## 2. Доменная модель

Одна таблица + опциональная история (отложена).

```ts
// modules/integration/models/integration.ts
const Integration = model.define("integration", {
  id: model.id({ prefix: "int" }).primaryKey(),

  // ─── Идентификация плагина ─────────────────────────────────
  plugin_kind: model.enum([
    "payment", "fulfillment", "marketplace", "crm", "erp", "pim",
    "notification", "feed", "tax", "other",
  ]),
  plugin_id: model.text(),               // "robokassa", "apiship", "ozon"
  instance_id: model.text().nullable(),  // "seller1" для multi-instance;
                                         // NULL для single-instance плагинов
  title: model.text().nullable(),        // человеко-читаемое имя инстанса (UI)

  // ─── Содержимое ────────────────────────────────────────────

  // Зашифрованный JSON: всё, что помечено в схеме как secret.
  credentials_ciphertext: model.text().nullable(),
  credentials_iv: model.text().nullable(),
  // Нешифрованные настройки (валидируются по схеме).
  settings: model.json().default({}),

  // ─── Метаданные ────────────────────────────────────────────
  schema_version: model.number().default(1),
  is_enabled: model.boolean().default(true),
  last_test_at: model.dateTime().nullable(),
  last_test_status: model.enum(["ok", "fail", "skipped"]).nullable(),
  last_test_message: model.text().nullable(),
})
.indexes([
  { on: ["plugin_id", "instance_id"], unique: true },  // один инстанс — одна запись
  { on: ["plugin_kind"] },
])
```

**Почему так:**
- **Единая таблица** — главное упрощение. Все плагины — payment/fulfillment/marketplace/CRM/… — пишут сюда. Никакой плагин не заводит свою таблицу настроек (антипаттерн B20 / D в исследованиях).
- **`plugin_kind` + `plugin_id` + `instance_id`** — три уровня адресации. `instance_id = NULL` для большинства плагинов; нужен только при multi-account (две Ozon-учётки).
- **`credentials_ciphertext` отдельно от `settings`** — снимает «всё JSON, всё открыто» (B8/N). Только секреты шифруются; остальное — `settings`, валидируется и доступно для query.
- **`schema_version`** — нужен сразу, потому что схема плагина будет эволюционировать (поля добавляются/переименовываются).
- **`last_test_*`** — для UI-индикатора «соединение проверено».
- **Имя таблицы `integration` сохранено** относительно старого пакета (см. [Integration model](../../../medusa-plugins/packages/medusa-integration/src/modules/integration/models/integration.ts)) — это упрощает миграцию данных при переезде старого `medusa-integration` в `medusa-integration-marketplace` (см. §11). Существующие колонки `title`, `is_enabled` сохраняются; `provider_id` распиливается на `plugin_kind` + `plugin_id` + `instance_id`; `credentials` json → `credentials_ciphertext` (шифруется миграцией).

Опционально, вторая сущность `IntegrationRevision` (история «кто/когда что менял») — **отложить**, добавим когда появится реальный запрос на rollback.

---

## 3. Декларация схемы плагином

Каждый плагин экспортирует **один объект** — descriptor. Это единственный контракт, который пакет требует от плагина. Контрактом служит **обычная zod-схема** — без собственного field-DSL. Всё, чего в zod нет (двуязычные labels/hints, пометка `secret`, тип UI-контрола, секция формы), плагин кладёт в нативный `.meta()` каждого поля. Пакет читает схему для валидации и тот же `.meta()` — для генерации UI и списка секретов.

> **Зависимость:** `.meta()` — это API **zod ≥ 4**. Пакет реэкспортирует `z` из своей зависимости, чтобы все плагины использовали одну и ту же версию zod и единый формат метаданных. До интеграции — подтвердить, что репозиторий плагинов уже на zod 4 (см. §12, п. 7).

```ts
// в medusa-payment-robokassa/src/integration-descriptor.ts
import { defineIntegration, z } from "@gorgo/medusa-integration"

const schema = z.object({
  merchant_login: z.string().min(1).meta({
    section: "general", control: "text",
    label: { en: "Merchant login", ru: "Логин магазина" },
  }),
  password1: z.string().min(1).meta({
    section: "general", control: "secret", secret: true,
    label: { en: "Password #1", ru: "Пароль #1" },
  }),
  password2: z.string().min(1).meta({
    section: "general", control: "secret", secret: true,
    label: { en: "Password #2", ru: "Пароль #2" },
  }),
  is_test: z.boolean().default(false).meta({
    section: "behavior", control: "switch",
    label: { en: "Test mode", ru: "Тестовый режим" },
  }),
  success_url: z.string().url().optional().meta({
    section: "behavior", control: "url",
    label: { en: "Success URL", ru: "URL успеха" },
  }),
  fail_url: z.string().url().optional().meta({
    section: "behavior", control: "url",
    label: { en: "Fail URL", ru: "URL ошибки" },
  }),
})

export default defineIntegration({
  pluginKind: "payment",
  pluginId: "robokassa",
  schemaVersion: 1,

  // Человеко-читаемые мета — для UI-списка
  displayName: { en: "Robokassa", ru: "Робокасса" },
  description: {
    en: "Russian payment gateway",
    ru: "Платёжный шлюз для российского рынка",
  },
  icon: "robokassa.svg",       // относительный путь, пакет проксирует
  docsUrl: "https://docs.robokassa.ru/",

  // multi-instance? (default false)
  supportsMultipleInstances: false,

  // Единственный контракт валидации — голый zod.
  schema,

  // Порядок и заголовки секций; поля распределяются по section из .meta().
  // Поля без указанной секции попадают в первую.
  sections: [
    { id: "general",  title: { en: "Credentials", ru: "Доступы" } },
    { id: "behavior", title: { en: "Behavior",    ru: "Поведение" } },
  ],

  // Опционально: проверка соединения
  testConnection: async ({ credentials, settings, http }) => {
    const r = await http.get("https://auth.robokassa.ru/Merchant/.../...",
      { params: { merchantLogin: credentials.merchant_login } })
    return r.ok
      ? { status: "ok" }
      : { status: "fail", message: `HTTP ${r.status}` }
  },

  // Опционально: кастомные UI-секции (React-компоненты)
  customSections: [
    {
      id: "webhook-tester",
      title: { en: "Webhook tester", ru: "Тест вебхука" },
      component: () => import("./admin/webhook-tester-section"),
      position: "after",         // before | after — относительно generated-секций
    },
  ],
})
```

**Метаданные поля (`.meta({...})`)** — необязательная типизированная структура, которую пакет понимает. Тип контрола выводится из zod, если `control` не задан (`z.boolean()` → `switch`, `z.string().url()` → `url` и т.д.):

```ts
type FieldMeta = {
  label: { en: string; ru: string }          // обязательно — bilingual, см. CLAUDE.md
  hint?: { en: string; ru: string }
  placeholder?: string
  section?: string                            // id секции; иначе — первая
  secret?: boolean                            // → шифрование + mask в UI (password+reveal)
  control?: "text" | "secret" | "switch" | "number"
         | "url" | "select" | "multiselect" | "json"
  // select/multiselect берут варианты из самой zod-схемы (z.enum / z.union)
}
```

**Почему голый zod, а не свой DSL:**
- единственный контракт — стандартная zod-схема: серверная валидация берёт её напрямую, без шага компиляции;
- авторам плагинов не нужно учить новый API — zod в Medusa-стеке уже знаком всем;
- метаданные (i18n, `secret`, UI-hints) живут прямо на поле через нативный `.meta()` zod 4 — без дублирования имён полей и без отдельной карты;
- цена — жёсткая привязка к zod ≥ 4 (см. оговорку выше).

Регистрация в `medusa-config.ts`:

```ts
plugins: [
  { resolve: "@gorgo/medusa-integration", options: {
      encryptionKey: process.env.GORGO_INTEGRATION_KEY,   // см. §4
  } },
  { resolve: "@gorgo/medusa-payment-robokassa" },     // descriptor подхватывается автоматически
  { resolve: "@gorgo/medusa-fulfillment-apiship" },
]
```

Пакет находит descriptor через стандартный экспорт `<pkg>/integration-descriptor` (резолвится loader-ом по аналогии с тем, как старый `medusa-integration` сейчас грузит провайдеры). Подробности — в §7.

---

## 4. Шифрование секретов

- **Алгоритм:** AES-256-GCM (стандарт; IV рандомный per-запись; auth-tag в составе ciphertext).
- **Ключ:** `options.encryptionKey` плагина — 32-байтный base64 (`openssl rand -base64 32`). Хранится в env-var `GORGO_INTEGRATION_KEY`, не в коде.
- **Где шифруем:** subscriber на `integration.beforeCreate / beforeUpdate` — берёт поля, помеченные `secret: true` в `.meta()` соответствующего поля zod-схемы, кладёт в `credentials_ciphertext`, остальное оставляет в `settings`.
- **Где расшифровываем:** только в одном месте — `IntegrationSettingsResolver.get()` (см. §6). API-эндпоинты **возвращают замаскированный вид** (`merchant_login: "rk_****"`) — это поведение для read-операций по умолчанию; `?reveal=true` доступен только с дополнительным правом `integrations:reveal-secrets` (опционально, на v1 можно вообще не отдавать секреты на чтение).
- **Если ключ не задан:** в production падаем при загрузке плагина с понятной ошибкой. В development — warning + fallback на plain (флаг `allowPlaintextInDev: true`).
- **Rotation:** schema_version полей не помогает с ротацией ключа; для v1 — out of scope, документируем `gorgo-integration rotate-key <old> <new>` CLI как будущую работу.

---

## 5. API (admin)

Минимальный набор маршрутов. Все под `/admin/integrations`, защищены штатным admin auth Medusa.

> ⚠️ Часть путей пересекается с админ-API старого `medusa-integration`. После рефакторинга (§11) старый пакет становится `medusa-integration-marketplace`; marketplace-специфичные маршруты (`sync`, `exchange-profiles`, `warehouses`, `order-types`) уезжают под отдельный префикс `/admin/integrations/:id/marketplace/*` или остаются как extension-routes на той же сущности. Базовые маршруты CRUD ниже — собственность нового пакета.

| Метод | Path | Назначение |
|---|---|---|
| `GET` | `/admin/integrations/descriptors` | Список зарегистрированных плагинов с их descriptor'ами (без secrets). Используется для главной admin-страницы. |
| `GET` | `/admin/integrations/descriptors/:plugin_id` | Один descriptor — для страницы редактирования. |
| `GET` | `/admin/integrations` | Список существующих записей (`id`, `plugin_kind`, `plugin_id`, `instance_id`, `is_enabled`, `last_test_*`). |
| `GET` | `/admin/integrations/:plugin_id[/:instance_id]` | Конкретная запись. Секреты — маскированные. |
| `PUT` | `/admin/integrations/:plugin_id[/:instance_id]` | Upsert. На сервере: валидация по descriptor → шифрование секретов → запись → emit `integration.updated`. |
| `POST` | `/admin/integrations/:plugin_id[/:instance_id]/test` | Запускает `testConnection` из descriptor; обновляет `last_test_*`. |
| `DELETE` | `/admin/integrations/:plugin_id[/:instance_id]` | Soft delete (`is_enabled = false`) — настоящее удаление только если пользователь подтвердил. |

Multi-instance (`supportsMultipleInstances: true`) добавляет:

| Метод | Path | Назначение |
|---|---|---|
| `POST` | `/admin/integrations/:plugin_id` | Создать новый инстанс (генерирует `instance_id`). |
| `GET` | `/admin/integrations/:plugin_id` | Список инстансов этого плагина. |

**Валидация** — единая функция `validateAgainstDescriptor(descriptor, payload)`, которая просто прогоняет payload через `descriptor.schema` (готовая zod-схема, ничего компилировать не нужно). Список секретных полей для шифрования извлекается один раз на старте из `.meta().secret` каждого поля схемы.

---

## 6. Runtime: как плагин читает настройки

Самая важная связка — payment/fulfillment/marketplace-плагин должен получать **расшифрованные** креды без знания о шифровании, кэше и т.п.

### Сервис-резолвер

```ts
// services/integration-settings-resolver.ts
class IntegrationSettingsResolver {
  constructor({ integrationModuleService, eventBus, logger }) { ... }

  /**
   * Возвращает закэшированный «разворот» настроек.
   * Кэш инвалидируется по событию integration.updated.
   */
  async get<P extends string>(pluginId: P, instanceId?: string)
      : Promise<{ credentials: Decrypted, settings: Settings, meta: Meta }>

  /**
   * Ленивый аксессор — для конструкторов плагинов.
   * Возвращает функцию (), которая на каждом вызове даёт свежий снапшот из кэша.
   */
  lazy<P extends string>(pluginId: P, instanceId?: string): () => Promise<ResolvedSettings>
}
```

Зарегистрирован в DI как `integrationSettingsResolver` — стандартный Medusa-style.

### Использование в payment-провайдере

`AbstractPaymentProvider` Medusa получает `options` в конструкторе. Меняется только то, что плагин читает их не из `medusa-config.ts`, а через resolver:

```ts
// medusa-payment-robokassa/src/providers/payment-robokassa/index.ts
class RobokassaPaymentProvider extends AbstractPaymentProvider {
  static identifier = "robokassa"
  #settings: () => Promise<ResolvedSettings>

  constructor({ integrationSettingsResolver, logger }, options) {
    super(...arguments)
    this.#settings = integrationSettingsResolver.lazy("robokassa")
    this.logger = logger
  }

  async initiatePayment(input) {
    const { credentials, settings } = await this.#settings()
    if (!credentials) throw new NotConfiguredError("Robokassa is not configured in admin")
    // ... обычная Robokassa-логика
  }
}
```

Что важно:
- `AbstractPaymentProvider`/`AbstractFulfillmentProviderService` **не меняется** (это upstream-абстракция Medusa) — плагин просто инжектит наш сервис, как любой другой.
- Конструктор синхронный, потому что `lazy()` возвращает функцию, а не promise — никаких async-конструкторов.
- Кэш: `Map<key, {value, expiresAt}>` с TTL 60s, плюс subscriber на `integration.updated` сбрасывает запись. Без TTL — потенциальный leak при `instance_id` с long-running runtime.

### Использование в fulfillment-провайдере

Идентично, только `AbstractFulfillmentProviderService`:

```ts
class ApishipFulfillmentProvider extends AbstractFulfillmentProviderService {
  static identifier = "apiship"
  constructor({ integrationSettingsResolver }) {
    super(...arguments)
    this.#settings = integrationSettingsResolver.lazy("apiship")
  }
  async getFulfillmentOptions() {
    const { settings } = await this.#settings()  // например, список складов из settings.warehouses
    // ...
  }
}
```

`medusa-fulfillment-apiship` оставляет свою `modules/apiship/` для специфичных коллекций (списки складов из ApiShip API) — это **plugin-private storage**, не задача `@gorgo/medusa-integration`.

---

## 7. Загрузка descriptors

Loader повторяет паттерн старого `medusa-integration` ([loaders/providers.ts](../../../medusa-plugins/packages/medusa-integration/src/modules/integration/loaders/providers.ts)), но с descriptor вместо класса-провайдера:

```ts
// medusa-integration/src/loaders/load-descriptors.ts
export const loadDescriptors = async (
  { container, options }: LoaderInput<{ descriptors?: DescriptorRef[] }>
) => {
  // 1. Явные ссылки из options:
  const explicit = (options.descriptors ?? []).map(ref =>
    require(ref.resolve).default)

  // 2. Auto-discovery: пройти по plugins и подгрузить `<pkg>/integration-descriptor`.
  //    Реализация идёт через Medusa plugin-registry: каждый plugin со
  //    `exports["./integration-descriptor"]` в package.json — автоматически
  //    подхватывается.
  const auto = await autoDiscoverDescriptors(container)

  const all = [...explicit, ...auto]
  validateUniqueness(all)             // (plugin_id, instance scope) уникальны
  container.register("integrationDescriptors", asValue(all))
}
```

**Auto-discovery > explicit list** потому что descriptor — это статический манифест плагина, а не runtime-выбираемая стратегия (как было с marketplace-провайдерами). Один плагин → один descriptor → одна позиция в `/admin/integrations`.

---

## 8. Admin UI

Один маршрут с двумя экранами + один re-используемый компонент.

### Маршрут: `routes/settings/integrations/page.tsx`

Замещает разрозненные страницы (`settings/apiship`, `routes/1c`, `settings/feeds`, существующую `settings/integrations` из старого `medusa-integration` и т.д.). Список:

```
┌──────────────────────────────────────────────────────────┐
│ Integrations                                             │
├──────────────────────────────────────────────────────────┤
│ Payment                                                  │
│   ⚙ Robokassa            ● configured   tested 2 min ago │
│   ⚙ T-Kassa              ○ not configured                │
│ Fulfillment                                              │
│   ⚙ ApiShip              ● configured   ✗ test failed    │
│ Marketplace                                              │
│   ⚙ Ozon (seller1)       ● configured                    │
│   ⚙ Ozon (seller2)       ● configured        ＋ Add      │
│   ⚙ Wildberries          ○ not configured                │
│ Feed                                                     │
│   ⚙ Yandex Market Feed   ● configured                    │
└──────────────────────────────────────────────────────────┘
```

Группировка по `plugin_kind`. Каждая строка — ссылка на edit-page.

### Маршрут: `routes/settings/integrations/[plugin_id]/[[instance_id]]/page.tsx`

Динамическая страница edit:

```
┌────────────────────────────────────────────────────────┐
│ ← Robokassa  [Test connection]  [Disable]              │
├────────────────────────────────────────────────────────┤
│ ▼ Credentials                                          │
│   Merchant login    [_______________________]          │
│   Password #1       [••••••••••]      [Reveal]         │
│   Password #2       [••••••••••]      [Reveal]         │
│ ▼ Behavior                                             │
│   Test mode         [ ] enabled                        │
│   Success URL       [_______________________]          │
│   Fail URL          [_______________________]          │
│ ▼ Webhook tester              ← кастом-секция плагина  │
│   ... (React-компонент из customSections)              │
│                                          [Save]        │
└────────────────────────────────────────────────────────┘
```

**Реализация:**
1. `useDescriptor(pluginId)` — RQ-хук, тянет `/descriptors/:plugin_id`.
2. `<ProviderSettingsForm descriptor={d} value={v} onChange={...} />` — генерирует поля из `sections[].fields` по типу (`text` → input, `secret` → password+reveal, `select` → combobox, `boolean` → switch).
3. `customSections` подгружаются динамическим импортом и рендерятся в указанной позиции (`before`/`after`).
4. Submit делает PUT, на 200 — emit toast + рефреш `last_test_*` иконки.

**UI-кит:** `@medusajs/ui` + `react-hook-form` + `zod resolver` — как уже принято в проекте.

### Замена существующих страниц

| Сейчас | После |
|---|---|
| `medusa-fulfillment-apiship/src/admin/routes/settings/apiship/page.tsx` | Удалить — заменяется generic edit-page. ApiShip оставляет только `customSections` для нестандартных вещей (синхр. складов). |
| `medusa-1c/src/admin/routes/1c/page.tsx` | Удалить — заменяется generic. |
| `medusa-feed-yandex` страница | Заменяется generic. |
| `medusa-integration/src/admin/routes/settings/integrations/page.tsx` (старый) | Удалить — generic список из нового пакета на том же URL. Marketplace-специфичные секции (exchange-profiles, sync-кнопки) переезжают в `customSections` от `medusa-integration-marketplace`. |
| `medusa-integration-ozon` credentials-widget | Удалить — generic покрывает; mapping-widget остаётся как `customSections`. |
| Payment-плагины (robokassa, tkassa) | Получают admin-страницу впервые — без своего кода. |

---

## 9. События

Два event-типа, чтобы плагины могли реагировать.

```
event "integration.updated"  payload: { plugin_id, instance_id, change: "create"|"update"|"delete"|"enable"|"disable" }
event "integration.tested"   payload: { plugin_id, instance_id, status, message? }
```

`IntegrationSettingsResolver` подписан на первое — сбрасывает свой кэш. Плагины могут подписаться, если им нужно прогреть свои собственные кэши/коннекшны.

> Существующий старый пакет уже использует `IntegrationEvent` как сущность audit-лога обменов. После переезда (§11) она уходит в `medusa-integration-marketplace`. Чтобы не путаться: новые событийные имена в этом пакете — `integration.updated` / `integration.tested` (про настройки), а старая модель audit-лога остаётся `IntegrationEvent` в marketplace-пакете (про обмены).

---

## 10. Пакетная структура

```
@gorgo/medusa-integration/
├── src/
│   ├── modules/
│   │   └── integration/
│   │       ├── index.ts                       # Module("integration", {...})
│   │       ├── models/
│   │       │   └── integration.ts
│   │       ├── services/
│   │       │   ├── integration-module.ts      # MedusaService({ Integration })
│   │       │   ├── resolver.ts                # IntegrationSettingsResolver
│   │       │   └── crypto.ts                  # AES-GCM helpers
│   │       ├── subscribers/
│   │       │   └── encrypt-credentials.ts     # beforeCreate/beforeUpdate
│   │       ├── migrations/
│   │       ├── descriptor/
│   │       │   ├── define.ts                          # defineIntegration()
│   │       │   ├── meta.ts                            # тип FieldMeta + хелпер чтения .meta()
│   │       │   └── introspect.ts                      # zod-схема → секции/секреты/контролы для UI
│   │       └── loaders/
│   │           └── load-descriptors.ts
│   ├── api/admin/integrations/
│   │   ├── route.ts                           # GET list, POST create-instance
│   │   ├── descriptors/route.ts
│   │   ├── [plugin_id]/[[instance_id]]/route.ts
│   │   └── [plugin_id]/[[instance_id]]/test/route.ts
│   ├── admin/
│   │   ├── routes/settings/integrations/
│   │   │   ├── page.tsx                       # list
│   │   │   └── [plugin_id]/[[instance_id]]/page.tsx
│   │   └── components/
│   │       ├── integration-form.tsx           # generic form renderer
│   │       └── fields/                        # text, secret, select, ...
│   └── index.ts                               # public API
├── package.json
└── README.md
```

**Public API (`@gorgo/medusa-integration`):**
- `defineIntegration()`, реэкспорт `z` (zod ≥ 4) и тип `FieldMeta` — для descriptor authors.
- `IntegrationSettingsResolver` — для payment/fulfillment/marketplace-плагинов (DI-key: `integrationSettingsResolver`).
- `getIntegrationSettings(pluginId, instanceId?)` — convenience-функция вне DI (например, в workflow-step).
- Реэкспорт модели `Integration` и сервиса `IntegrationModuleService` — для пакетов вроде `medusa-integration-marketplace`, которые расширяют ту же сущность remote-link-ами и кастомными маршрутами.

---

## 11. Миграционная стратегия

Так как мы захватываем имя `@gorgo/medusa-integration`, нужно сначала освободить его — переименовать существующий marketplace-фреймворк, затем выпустить новый пакет.

| Этап | Действие |
|---|---|
| 0 | **Освободить имя.** Существующий пакет `@gorgo/medusa-integration` (marketplace-фреймворк) → скипировать в `@gorgo/medusa-integration-marketplace`. |
| 1 | **Редактировать пакет `@gorgo/medusa-integration` v0.0.0** — новый пакет: модель `Integration`, CRUD API, generic admin UI, resolver. Без зависимостей от `-marketplace`. |
| 2 | **Добавить пакет `@gorgo/medusa-payment-tkassa-v2` v0.0.0** — новый пакет платежки для тестирования внедрения через `@gorgo/medusa-integration`, и добавить `examples/payment-tkassa-v2`.  |
| 4 | Добавить descriptor в `medusa-payment-robokassa` и `medusa-payment-tkassa` (новая фича — раньше негде было редактировать креды). `options` из `medusa-config.ts` остаются как fallback на 2 минора. |
| 5 | Добавить descriptor в `medusa-fulfillment-apiship`. Его собственная `modules/apiship/` остаётся для warehouses; credentials мигрируются. Скриптовая миграция: однократный перенос. |
| 6 | Добавить descriptor в `medusa-feed-yandex`, `medusa-1c`. Удалить их ad-hoc страницы настроек. |
| 7 | Когда появятся `medusa-integration-crm` / `-erp` / `-pim` (v2-план) — они аналогично `marketplace` подключаются поверх этого пакета. |

---

## 12. Открытые решения, требующие подтверждения

> Имя пакета (бывшая открытая позиция) **зафиксировано как `@gorgo/medusa-integration`**, существующий пакет переименовывается в `-marketplace` (см. §11). Ниже — оставшиеся открытые вопросы.

1. **Encryption required vs optional.** Я предложил «required в prod, dev-fallback с warning». Альтернатива — required всегда; в dev отдельно генерируем ключ при первом запуске и пишем в `.env.local`.

2. **Multi-instance scope.** Сейчас в схеме `instance_id` опционален. Если приоритет — payment/fulfillment, то multi-instance можно отложить (по факту нужен только marketplace-интеграциям).

3. **Audit-log изменений настроек.** Нужно ли вести историю кто/когда что менял в самих настройках? Это +1 таблица (`IntegrationRevision`). В v1 — выкинуть.

4. **Test connection** — обязателен для descriptor или опционален? Я предложил опциональный (некоторые провайдеры не умеют быстро проверить).

5. **Permission-модель** — нужны ли «role:billing» для редактирования платёжных кредов, и «role:logistics» для fulfillment? Если нужны, descriptor добавляет `requiredPermission?: string`, и middleware его проверяет. На v1 — все creds под общим admin-правом.

6. **Версия zod (блокер для схемы).** Принятый формат декларации (§3) использует `.meta()`, доступный только в **zod ≥ 4**. Нужно подтвердить версию zod в репозитории плагинов и в самом Medusa-стеке. Если там zod 3 — либо апгрейд (предпочтительно, zod 4 обратносовместим по большинству API), либо запасной вариант: голый zod + параллельная карта `ui.fields` без `.meta()`.

7. **Совместимость API-роутов на момент перехода.** Когда оба пакета (`@gorgo/medusa-integration` v0.1 и `-marketplace` v… на ходу одновременно), marketplace-специфичные эндпоинты (`/admin/integrations/:id/products/sync`, `/admin/integrations/:id/exchange-profiles/*`, `/admin/integrations/:id/warehouses`, `/admin/integrations/:id/order-types`) поставляются `-marketplace`. Решить: оставить их на тех же путях (риск конфликта в роутере при двух пакетах с одинаковыми префиксами) или сразу переехать на префикс `/admin/integrations/:id/marketplace/*`. Рекомендую второе — чище namespacing и упрощает чтение OpenAPI.

---

## TL;DR-карта решений

| Вопрос | Решение |
|---|---|
| Имя пакета | `@gorgo/medusa-integration` (новый пакет). Существующий marketplace-фреймворк → `@gorgo/medusa-integration-marketplace`. |
| Одна таблица или несколько? | Одна — `integration`, ключ `(plugin_id, instance_id)`, скоуп по `plugin_kind`. |
| Как плагин описывает себя? | Один экспорт — `defineIntegration({...})` из `@gorgo/medusa-integration`. |
| Как защищаются секреты? | AES-256-GCM, отдельная колонка `credentials_ciphertext`, поля помечены `secret: true` в `.meta()` zod-поля. |
| Как плагин читает настройки в runtime? | `integrationSettingsResolver.lazy(pluginId)` в конструкторе → `await it()` в каждом методе. Кэш с инвалидацией по событию `integration.updated`. |
| Как генерируется UI? | Интроспекция zod-схемы + `.meta()` каждого поля → generic React-form. Кастом-секции через `customSections: [{component: () => import(...)}]`. |
| Где живёт страница? | `/app/settings/integrations` (список) + `/app/settings/integrations/[plugin_id]` (edit). Старые страницы apiship/1c/feeds + старая `settings/integrations` — удаляются. |
| Совместимость с AbstractPaymentProvider? | Не трогаем upstream. Провайдер инжектит наш resolver как обычную зависимость. |
| Что НЕ покрывает пакет? | Capability-интерфейсы провайдеров, audit-log обменов, workflows, webhooks, доменные модели — это `medusa-integration-marketplace`/`-crm`/`-erp`/`-pim`. |

---

## Related Research

- [2026-05-17-integration-framework-redesign-v2.md](2026-05-17-integration-framework-redesign-v2.md) — основной редизайн. То, что в нём фигурировало под рабочим именем `@gorgo/medusa-provider-settings`, в этом документе называется `@gorgo/medusa-integration`. Domain-плагины оттуда (`-marketplace`, `-crm`, `-erp`, `-pim`) надстраиваются поверх этого пакета.
- [2026-05-17-integration-core-redesign.md](2026-05-17-integration-core-redesign.md) — более ранняя версия редизайна с `connectionCredentialsResolver` (концептуальный предок `IntegrationSettingsResolver`).
