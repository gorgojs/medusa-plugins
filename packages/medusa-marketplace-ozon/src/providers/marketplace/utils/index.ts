export type WhenClause =
  | { path: string; exists: true }
  | { path: string; equals: unknown }

export type MapCtx = {
  source: unknown
}

export type TransformFn = (
  value: unknown,
  args: Record<string, unknown> | undefined,
  ctx: MapCtx
) => unknown

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

export type TransformCall = {
  name: keyof TransformRegistry
  args?: Record<string, unknown>
}

export type FieldMap = {
  from: string
  to: string
  transform?: TransformCall
  default?: unknown
  when?: WhenClause
}

export type MappingConfig = {
  id?: string
  version?: string
  direction?: 'MEDUSA_TO_OZON' | 'OZON_TO_MEDUSA'
  fields: FieldMap[]
}

export function getByPath(obj: any, path: string): unknown {
  if (!path) return obj
  return path.split('.').reduce((acc, key) => {
    if (acc == null) return undefined
    return (acc as any)[key]
  }, obj as any)
}

export function setByPath(obj: any, path: string, value: unknown) {
  if (!path) return
  const parts = path.split('.')
  let cur = obj
  for (let i = 0; i < parts.length - 1; i++) {
    const k = parts[i]
    if (cur[k] == null || typeof cur[k] !== 'object') {
      cur[k] = {}
    }
    cur = cur[k]
  }
  cur[parts[parts.length - 1]] = value
}

export function applyField<S>(
  src: S,
  dst: any,
  rule: FieldMap,
  ctx: MapCtx
) {
  if (rule.when) {
    const condVal = getByPath(src as any, rule.when.path)

    if ('exists' in rule.when && rule.when.exists) {
      if (condVal === undefined || condVal === null) return
    }

    if ('equals' in rule.when) {
      if (condVal !== rule.when.equals) return
    }
  }

  let value = getByPath(src as any, rule.from)

  if ((value === undefined || value === null) && 'default' in rule) {
    value = rule.default
  }

  if (rule.transform && value !== undefined) {
    const fn = TRANSFORMS[rule.transform.name]
    if (!fn) {
      throw new Error(`Unknown transform: ${String(rule.transform.name)}`)
    }
    value = fn(value, rule.transform.args, ctx)
  }

  if (value === undefined) return

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
