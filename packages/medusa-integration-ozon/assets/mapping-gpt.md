Ниже — рабочий, расширяемый шаблон под двусторонний маппинг Medusa ⇄ Ozon, где правила маппинга лежат в БД (JSON), валидируются, компилируются в функции и применяются в шаге mapToOzonFormatStep. Подходит для App Router/Node, TypeScript.

⸻

1) Типы и интерфейсы

// Примерно, упростим до ключевых полей
export type MedusaProduct = {
  id: string
  title: string
  description?: string
  price_cents: number
  currency: 'RUB' | 'USD' | 'EUR'
  sku?: string
  weight_g?: number
  attributes?: Record<string, unknown>
}

export type OzonProduct = {
  offer_id: string
  name: string
  description?: string
  price: number      // рубли (целые/десятичные)
  currency_code?: string
  barcode?: string
  weight?: number    // кг
  attrs?: Record<string, unknown>
}


⸻

2) Формат маппинг-конфига (хранится в БД)
	•	Используем dot-path (например, attributes.color) для чтения/записи
	•	transform — именованная функция из реестра + опц. args

export type WhenClause =
  | { path: string; exists: true }
  | { path: string; equals: unknown }

export type TransformCall = {
  name: keyof TransformRegistry
  args?: Record<string, unknown>
}

export type FieldMap = {
  from: string          // путь в source
  to: string            // путь в target
  transform?: TransformCall
  default?: unknown
  when?: WhenClause
}

export type MappingConfig = {
  id: string
  version: string
  direction: 'MEDUSA_TO_OZON' | 'OZON_TO_MEDUSA'
  fields: FieldMap[]
}

Пример JSON в БД (для Medusa → Ozon):

{
  "id": "ozon-default",
  "version": "1.0.0",
  "direction": "MEDUSA_TO_OZON",
  "fields": [
    { "from": "id", "to": "offer_id" },
    { "from": "title", "to": "name" },
    { "from": "description", "to": "description" },
    { "from": "price_cents", "to": "price", "transform": { "name": "centsToRub" } },
    { "from": "currency", "to": "currency_code" },
    { "from": "sku", "to": "barcode", "when": { "path": "sku", "exists": true } },
    { "from": "weight_g", "to": "weight", "transform": { "name": "gramsToKg" } },
    { "from": "attributes", "to": "attrs", "default": {} }
  ]
}

И обратный (Ozon → Medusa):

{
  "id": "ozon-default-reverse",
  "version": "1.0.0",
  "direction": "OZON_TO_MEDUSA",
  "fields": [
    { "from": "offer_id", "to": "id" },
    { "from": "name", "to": "title" },
    { "from": "description", "to": "description" },
    { "from": "price", "to": "price_cents", "transform": { "name": "rubToCents" } },
    { "from": "currency_code", "to": "currency" },
    { "from": "barcode", "to": "sku" },
    { "from": "weight", "to": "weight_g", "transform": { "name": "kgToGrams" } },
    { "from": "attrs", "to": "attributes", "default": {} }
  ]
}


⸻

3) Реестр трансформаций

export type MapCtx = {
  // исходный объект, полезные хелперы, дата, локаль и т.д.
  source: unknown
}

export type TransformFn = (value: unknown, args: Record<string, unknown> | undefined, ctx: MapCtx) => unknown

export type TransformRegistry = {
  centsToRub: TransformFn
  rubToCents: TransformFn
  gramsToKg: TransformFn
  kgToGrams: TransformFn
  trim: TransformFn
  fallback: TransformFn
}

export const TRANSFORMS: TransformRegistry = {
  centsToRub: (v) => (typeof v === 'number' ? v / 100 : v),
  rubToCents: (v) => (typeof v === 'number' ? Math.round(v * 100) : v),
  gramsToKg: (v) => (typeof v === 'number' ? v / 1000 : v),
  kgToGrams: (v) => (typeof v === 'number' ? Math.round(v * 1000) : v),
  trim: (v) => (typeof v === 'string' ? v.trim() : v),
  fallback: (v, args) => (v ?? args?.value ?? null),
}


⸻

4) Утилиты get/set по пути

(Можно заменить на lodash.get/set, но тут самодостаточно.)

export function getByPath(obj: any, path: string): unknown {
  return path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj)
}

export function setByPath(obj: any, path: string, value: unknown) {
  const parts = path.split('.')
  let cur = obj
  for (let i = 0; i < parts.length - 1; i++) {
    const k = parts[i]
    if (cur[k] == null || typeof cur[k] !== 'object') cur[k] = {}
    cur = cur[k]
  }
  cur[parts[parts.length - 1]] = value
}


⸻

5) Компиляция и исполнение маппинга

export function applyField(
  src: unknown,
  dst: any,
  rule: FieldMap,
  ctx: MapCtx
) {
  // when
  if (rule.when) {
    const condVal = getByPath(src as any, rule.when.path)
    if ('exists' in rule.when && rule.when.exists && (condVal === undefined || condVal === null)) return
    if ('equals' in rule.when && condVal !== rule.when.equals) return
  }

  // value
  let value = getByPath(src as any, rule.from)
  if (value === undefined || value === null) {
    if (rule.default !== undefined) value = rule.default
  }
  if (rule.transform) {
    const fn = TRANSFORMS[rule.transform.name]
    if (!fn) throw new Error(`Unknown transform: ${rule.transform.name}`)
    value = fn(value, rule.transform.args, ctx)
  }

  setByPath(dst, rule.to, value)
}

export function mapObject<S, T>(source: S, config: MappingConfig): T {
  const result: any = {}
  const ctx: MapCtx = { source }
  for (const f of config.fields) {
    applyField(source, result, f, ctx)
  }
  return result as T
}


⸻

6) Валидация и кеш

Рекомендую валидировать конфиг при загрузке (например, zod):

import { z } from 'zod'

const TransformCallSchema = z.object({
  name: z.string(),
  args: z.record(z.unknown()).optional(),
})

const FieldMapSchema = z.object({
  from: z.string(),
  to: z.string(),
  transform: TransformCallSchema.optional(),
  default: z.unknown().optional(),
  when: z.union([
    z.object({ path: z.string(), exists: z.literal(true) }),
    z.object({ path: z.string(), equals: z.unknown() })
  ]).optional()
})

export const MappingConfigSchema = z.object({
  id: z.string(),
  version: z.string(),
  direction: z.enum(['MEDUSA_TO_OZON', 'OZON_TO_MEDUSA']),
  fields: z.array(FieldMapSchema).min(1)
})

export function parseConfig(raw: unknown): MappingConfig {
  return MappingConfigSchema.parse(raw)
}

Кешируйте по id+version (in-memory/LRU), чтобы не дергать БД каждый раз.

⸻

7) Шаг workflow mapToOzonFormatStep

// pseudo-step (адаптируйте под ваш фреймворк шагов)
type MapInput = MedusaProduct[]
type MapOutput = OzonProduct[]

async function loadMappingFromDB(direction: MappingConfig['direction']): Promise<MappingConfig> {
  // получите JSON из таблицы настроек маркетплейса
  const raw = await repo.settings.getMapping('ozon', direction) // пример
  return parseConfig(raw)
}

export async function mapToOzonFormatStep(products: MedusaProduct[]): Promise<OzonProduct[]> {
  const cfg = await loadMappingFromDB('MEDUSA_TO_OZON')
  return products.map(p => mapObject<MedusaProduct, OzonProduct>(p, cfg))
}

И обратный:

export async function mapFromOzonStep(items: OzonProduct[]): Promise<MedusaProduct[]> {
  const cfg = await loadMappingFromDB('OZON_TO_MEDUSA')
  return items.map(i => mapObject<OzonProduct, MedusaProduct>(i, cfg))
}


⸻

8) Плюсы такой схемы
	•	✅ Двусторонний маппинг, управляемый из БД
	•	✅ Версионирование правил (version)
	•	✅ Расширяемый реестр трансформаций
	•	✅ Валидация правил перед применением
	•	✅ Тестируемость: mapObject() — чистая функция

⸻

9) Что легко добавить
	•	Параметризованные трансформации (например, таблица соответствий категорий)
	•	Композицию трансформаций (pipe массивом: transform: [{name:'trim'}, {name:'fallback', args:{value:'N/A'}}])
	•	Локализация/валюта в MapCtx (например, ctx.locale, ctx.currencyRates)
	•	Логи/трассировка применения правил для отладки

⸻

Если пришлёшь пример реального JSON из вашей БД и точные поля Ozon API, помогу допилить конфиг/трансформации под прод.