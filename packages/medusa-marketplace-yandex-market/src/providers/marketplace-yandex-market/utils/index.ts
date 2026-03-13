import { BaseMappingSchema, FieldMap, MapCtx, TRANSFORMS } from "../types"

export function toStringArray(value: Iterable<string> | string[] | null | undefined): string[] {
  if (!value) return []
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string" && item.length > 0)
  }
  return Array.from(value).filter((item): item is string => typeof item === "string" && item.length > 0)
}

export function chunk<T>(items: T[], size: number): T[][] {
  const result: T[][] = []
  for (let index = 0; index < items.length; index += size) {
    result.push(items.slice(index, index + size))
  }
  return result
}

export function getMappingSchema<T extends BaseMappingSchema>(
  settings: Record<string, unknown> | undefined,
  key: string,
  fallback: T
): T {
  const schema = settings?.[key]
  if (schema && typeof schema === "object" && Array.isArray((schema as BaseMappingSchema).fields)) {
    return schema as T
  }
  return fallback
}

export function dedupeById<T extends { id?: string }>(items: T[]): T[] {
  return Array.from(
    new Map(
      items
        .filter((item): item is T & { id: string } => Boolean(item.id))
        .map((item) => [item.id, item])
    ).values()
  )
}

export function getByPath(obj: any, path: string): unknown {
  if (!path) return obj

  return path.split(".").reduce((acc, key) => {
    if (acc == null) return undefined
    return (acc as any)[key]
  }, obj as any)
}

export function setByPath(obj: any, path: string, value: unknown) {
  if (!path) return

  const parts = path.split(".")
  let current = obj

  for (let index = 0; index < parts.length - 1; index++) {
    const key = parts[index]

    if (current[key] == null || typeof current[key] !== "object") {
      current[key] = {}
    }

    current = current[key]
  }

  current[parts[parts.length - 1]] = value
}

export function evalRuleValue<S>(source: S, rule: FieldMap, ctx: MapCtx): unknown {
  let value = getByPath(source as any, rule.from)

  if ((value === undefined || value === null) && "default" in rule) {
    value = rule.default
  }

  if (rule.transform && value !== undefined) {
    const transform = TRANSFORMS[rule.transform.name]

    if (!transform) {
      throw new Error(`Unknown transform: ${String(rule.transform.name)}`)
    }

    value = transform(value, rule.transform.args, ctx)
  }

  return value
}

export function applyField<S>(source: S, target: any, rule: FieldMap, ctx: MapCtx) {
  if (rule.when) {
    const conditionValue = getByPath(source as any, rule.when.path)

    if ("exists" in rule.when && rule.when.exists) {
      if (conditionValue === undefined || conditionValue === null) return
    }

    if ("equals" in rule.when) {
      if (conditionValue !== rule.when.equals) return
    }
  }

  const value = evalRuleValue(source, rule, ctx)
  if (value === undefined) return

  setByPath(target, rule.to, value)

  if (!rule.children?.length) return

  const parent = getByPath(target, rule.to)
  if (!parent || typeof parent !== "object") return

  for (const child of rule.children) {
    applyField(source, parent, child, ctx)
  }
}

export function mapObject<S, T>(source: S, config: BaseMappingSchema): T {
  const result: any = {}
  const ctx: MapCtx = { source }

  for (const field of config.fields) {
    applyField(source, result, field, ctx)
  }

  return result as T
}
