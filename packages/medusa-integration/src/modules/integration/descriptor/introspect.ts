import type { FieldControl } from "./meta"
import type { OptionDef } from "./option"
import type { IntegrationDescriptor, IntegrationSection } from "./define"
import type { UiField, UiSection, UiDescriptor } from "../../../types"

// Canonical definitions live in the zod-free `src/types`; re-exported here for consumers.
export type { UiField, UiSection, UiDescriptor }

function controlFor(def: OptionDef): FieldControl {
  if (def.control) return def.control
  switch (def.type) {
    case "boolean": return "switch"
    case "number": return "number"
    case "enum": return "select"
    case "json": return "json"
    case "url": return "url"
    default: return "text"
  }
}

function introspectField(name: string, def: OptionDef): UiField {
  return {
    name,
    control: controlFor(def),
    secret: def.secret === true,
    // UI-required: must be filled by the user (a `default` or an absent `required` → not required).
    required: def.required === true && def.default === undefined,
    label: def.label,
    hint: def.hint,
    placeholder: def.placeholder,
    options: def.type === "enum" ? [...def.values] : undefined,
    optionLabels: def.type === "enum" ? def.valueLabels : undefined,
    default: def.secret !== true ? def.default : undefined,
    visibleWhen: def.visibleWhen,
    readonly: def.readonlyValue !== undefined,
    // The constant to display; never expose a secret's value to the client.
    readonlyValue: def.readonlyValue !== undefined && def.secret !== true ? def.readonlyValue : undefined,
  }
}

function introspectSection(section: IntegrationSection, options: Record<string, OptionDef>): UiSection {
  return {
    id: section.id,
    title: section.title,
    column: section.column ?? "main",
    // Ignore ids missing from the options catalog (defineIntegration already rejects those at build).
    fields: section.options
      .filter((id) => Object.prototype.hasOwnProperty.call(options, id))
      .map((id) => introspectField(id, options[id])),
  }
}

export function secretFieldNames(descriptor: Pick<IntegrationDescriptor, "options">): string[] {
  return Object.entries(descriptor.options)
    .filter(([, def]) => def.secret === true)
    .map(([name]) => name)
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
    sections: descriptor.sections.map((s) => introspectSection(s, descriptor.options)),
  }
}
