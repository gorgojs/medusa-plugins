import { FieldMap, MappingSchema, MapCtx, TRANSFORMS, OptionRules } from "../types"

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

export function normalizeToValuesArray(v: any): { value: string }[] {
  if (v === undefined || v === null) return []
  const arr = Array.isArray(v) ? v : [v]
  return arr.filter((x) => x !== undefined && x !== null).map((x) => ({ value: String(x) }))
}

export function ensureAttribute(attributes: any[], id: number) {
  let attr = attributes.find((a) => Number(a?.id) === id)
  if (!attr) {
    attr = { id, values: [] }
    attributes.push(attr)
  }
  if (!Array.isArray(attr.values)) attr.values = []
  return attr
}

export function evalRuleValue<S>(src: S, rule: FieldMap, ctx: MapCtx): any {
  let value = getByPath(src as any, rule.from)

  if ((value === undefined || value === null) && "default" in rule) {
    value = (rule as any).default
  }

  if (rule.transform && value !== undefined) {
    const fn = TRANSFORMS[rule.transform.name]
    if (!fn) {
      throw new Error(`Unknown transform: ${String(rule.transform.name)}`)
    }
    value = fn(value, rule.transform.args, ctx)
  }

  return value
}

function applyOptionRulesFromVariant(src: any, dst: any, optionRules: OptionRules) {
  if (!dst.attributes) dst.attributes = []
  if (!Array.isArray(dst.attributes)) dst.attributes = []

  const opts = src?.options
  if (!Array.isArray(opts)) return

  for (const opt of opts) {
    const optionId = String(opt?.option_id ?? "")
    const raw = String(opt?.value ?? "")
    if (!optionId || !raw) continue

    const rule = optionRules[optionId]
    if (!rule) continue

    const attrId = Number(rule.attributeId)
    if (!attrId) continue

    let mapped: any = rule.valueMap?.[raw]
    if (mapped === undefined) mapped = rule.default
    if (mapped === undefined) continue

    if (rule.lowercase) {
      mapped = Array.isArray(mapped)
        ? mapped.map((v) => String(v).toLowerCase())
        : String(mapped).toLowerCase()
    }

    const attr = ensureAttribute(dst.attributes, attrId)
    attr.values = normalizeToValuesArray(mapped)
  }
}

function applyOptionDefaults(attributes: any[], optionRules: OptionRules) {
  for (const rule of Object.values(optionRules)) {
    const attrId = Number(rule.attributeId)
    if (!attrId) continue

    let mapped: any = rule.default
    if (mapped === undefined) continue

    if (rule.lowercase) {
      mapped = Array.isArray(mapped)
        ? mapped.map((v) => String(v).toLowerCase())
        : String(mapped).toLowerCase()
    }

    const attr = ensureAttribute(attributes, attrId)
    attr.values = normalizeToValuesArray(mapped)
  }
}

export function applyField<S>(src: S, dst: any, rule: FieldMap, ctx: MapCtx) {
  // if (rule.optionRules && rule.to === "attributes") {
  //   applyOptionRulesFromVariant(src as any, dst, rule.optionRules as OptionRules)
  //   return
  // }

  if (rule.optionRules && rule.to === "attributes") {
    if (!Array.isArray(dst.attributes)) dst.attributes = []
    applyOptionDefaults(dst.attributes, rule.optionRules as OptionRules)
    return
  }

  if (rule.when) {
    const condVal = getByPath(src as any, rule.when.path)

    if ("exists" in rule.when && rule.when.exists) {
      if (condVal === undefined || condVal === null) return
    }

    if ("equals" in rule.when) {
      if (condVal !== rule.when.equals) return
    }
  }

  const value = evalRuleValue(src, rule, ctx)
  if (value === undefined) return

  setByPath(dst, rule.to, value)

  if (!rule.children?.length) return

  const parent = getByPath(dst, rule.to)

  if (rule.to === "attributes" && Array.isArray(parent)) {
    for (const child of rule.children) {
      if (child.when) {
        const condVal = getByPath(src as any, child.when.path)

        if ("exists" in child.when && child.when.exists) {
          if (condVal === undefined || condVal === null) continue
        }

        if ("equals" in child.when) {
          if (condVal !== child.when.equals) continue
        }
      }

      const childVal = evalRuleValue(src, child, ctx)
      if (childVal === undefined) continue

      const attrId = Number(child.to)
      const attr = ensureAttribute(parent, attrId)
      attr.values = normalizeToValuesArray(childVal)
    }

    return
  }

  if (parent && typeof parent === "object") {
    for (const child of rule.children) {
      applyField(src, parent, child, ctx)
    }
  }
}

export function mapObject<S, T>(source: S, config: MappingSchema): T {
  const result: any = {}
  const ctx: MapCtx = { source }

  for (const f of config.fields) {
    applyField(source, result, f, ctx)
  }

  return result as T
}
