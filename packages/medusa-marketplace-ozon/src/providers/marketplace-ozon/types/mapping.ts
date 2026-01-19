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
  children?: FieldMap[]
  optionRules?: OptionRules
}

export type MappingSchema = {
  // id?: string
  // version?: string
  // direction?: 'MEDUSA_TO_OZON' | 'OZON_TO_MEDUSA'
  ozon_category: {
    description_category_id: number
    type_id: number
  },
  medusa_categories: string[],
  fields: FieldMap[]
}

export type OptionRule = {
  attributeId?: number
  valueMap?: Record<string, string | string[]>
  default?: string | string[]
  lowercase?: boolean
}

export type OptionRules = Record<string, OptionRule>
