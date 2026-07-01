import { z } from "zod"
import type { FieldControl, FieldMeta } from "./meta"
import type { IntegrationDescriptor, IntegrationSection } from "./define"
import type { UiField, UiSection, UiDescriptor } from "../../../types"

// Canonical definitions live in the zod-free `src/types`; re-exported here for consumers.
export type { UiField, UiSection, UiDescriptor }

function unwrap(options: any): any {
  let o = options
  while (o && typeof o.unwrap === "function") o = o.unwrap()
  if (o && typeof o.removeDefault === "function") o = o.removeDefault()
  return o
}
function isOptional(options: any): boolean {
  return typeof options.safeParse === "function" && options.safeParse(undefined).success
}
function inferControl(options: any): FieldControl {
  const base = unwrap(options)
  if (base instanceof z.ZodBoolean) return "switch"
  if (base instanceof z.ZodNumber) return "number"
  if (base instanceof z.ZodEnum) return "select"
  return "text"
}
function enumOptions(options: any): string[] | undefined {
  const base = unwrap(options)
  if (base instanceof z.ZodEnum) return (base as any).options ?? Object.values((base as any).enum ?? {})
  return undefined
}
function readMeta(options: any): FieldMeta {
  const meta = typeof options.meta === "function" ? options.meta() : undefined
  return (meta ?? {}) as FieldMeta
}

function introspectField(name: string, field: any): UiField {
  const meta = readMeta(field)
  return {
    name,
    control: meta.control ?? inferControl(field),
    secret: meta.secret === true,
    required: !isOptional(field),
    label: meta.label,
    hint: meta.hint,
    placeholder: meta.placeholder,
    options: enumOptions(field),
  }
}

function introspectSection(section: IntegrationSection): UiSection {
  const shape = section.options.shape as Record<string, any>
  return {
    id: section.id,
    title: section.title,
    column: section.column ?? "main",
    fields: Object.entries(shape).map(([name, field]) => introspectField(name, field)),
  }
}

export function secretFieldNames(descriptor: IntegrationDescriptor): string[] {
  const names: string[] = []
  for (const section of descriptor.sections) {
    const shape = section.options.shape as Record<string, any>
    for (const [name, field] of Object.entries(shape)) {
      if (readMeta(field).secret === true) names.push(name)
    }
  }
  return names
}

export function introspectDescriptor(
  descriptor: IntegrationDescriptor,
  hasTestConnection = false
): UiDescriptor {
  return {
    module: descriptor.module,
    pluginId: descriptor.pluginId,
    instanceId: descriptor.instanceId ?? null,
    optionsVersion: descriptor.optionsVersion ?? 1,
    displayName: descriptor.displayName,
    description: descriptor.description,
    icon: descriptor.icon,
    docsUrl: descriptor.docsUrl,
    supportsMultipleInstances: descriptor.supportsMultipleInstances ?? false,
    preferredLayoutId: descriptor.preferredLayoutId ?? "core:single-column",
    hasTestConnection,
    sections: descriptor.sections.map(introspectSection),
  }
}
