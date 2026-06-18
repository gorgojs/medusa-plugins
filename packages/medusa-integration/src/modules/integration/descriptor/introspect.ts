import { z } from "zod"
import type { FieldControl, FieldMeta } from "./meta"
import type { IntegrationDescriptor } from "./define"

export type UiField = {
  name: string
  control: FieldControl
  secret: boolean
  required: boolean
  label: FieldMeta["label"]
  hint?: FieldMeta["hint"]
  placeholder?: string
  options?: string[]
}
export type UiSection = { id: string; title: { en: string; ru: string }; fields: UiField[] }
export type UiDescriptor = {
  pluginKind: string
  pluginId: string
  instanceId: string | null
  schemaVersion: number
  displayName: { en: string; ru: string }
  description?: { en: string; ru: string }
  icon?: string
  docsUrl?: string
  supportsMultipleInstances: boolean
  hasTestConnection: boolean
  sections: UiSection[]
}

function unwrap(schema: any): any {
  let s = schema
  while (s && typeof s.unwrap === "function") s = s.unwrap()
  if (s && typeof s.removeDefault === "function") s = s.removeDefault()
  return s
}
function isOptional(schema: any): boolean {
  return typeof schema.safeParse === "function" && schema.safeParse(undefined).success
}
function inferControl(schema: any): FieldControl {
  const base = unwrap(schema)
  if (base instanceof z.ZodBoolean) return "switch"
  if (base instanceof z.ZodNumber) return "number"
  if (base instanceof z.ZodEnum) return "select"
  return "text"
}
function enumOptions(schema: any): string[] | undefined {
  const base = unwrap(schema)
  if (base instanceof z.ZodEnum) return (base as any).options ?? Object.values((base as any).enum ?? {})
  return undefined
}
function readMeta(schema: any): FieldMeta {
  const meta = typeof schema.meta === "function" ? schema.meta() : undefined
  return (meta ?? {}) as FieldMeta
}

export function secretFieldNames(descriptor: IntegrationDescriptor): string[] {
  const shape = descriptor.schema.shape as Record<string, any>
  return Object.entries(shape).filter(([, f]) => readMeta(f).secret === true).map(([name]) => name)
}

export function introspectDescriptor(
  descriptor: IntegrationDescriptor,
  hasTestConnection = false
): UiDescriptor {
  const shape = descriptor.schema.shape as Record<string, any>
  const sections: UiSection[] = descriptor.sections.map((s) => ({ id: s.id, title: s.title, fields: [] }))
  const firstSectionId = sections[0]?.id
  for (const [name, field] of Object.entries(shape)) {
    const meta = readMeta(field)
    const sectionId = meta.section ?? firstSectionId
    const target = sections.find((s) => s.id === sectionId) ?? sections[0]
    if (!target) continue
    target.fields.push({
      name,
      control: meta.control ?? inferControl(field),
      secret: meta.secret === true,
      required: !isOptional(field),
      label: meta.label,
      hint: meta.hint,
      placeholder: meta.placeholder,
      options: enumOptions(field),
    })
  }
  return {
    pluginKind: descriptor.pluginKind,
    pluginId: descriptor.pluginId,
    instanceId: descriptor.instanceId ?? null,
    schemaVersion: descriptor.schemaVersion ?? 1,
    displayName: descriptor.displayName,
    description: descriptor.description,
    icon: descriptor.icon,
    docsUrl: descriptor.docsUrl,
    supportsMultipleInstances: descriptor.supportsMultipleInstances ?? false,
    hasTestConnection,
    sections,
  }
}
