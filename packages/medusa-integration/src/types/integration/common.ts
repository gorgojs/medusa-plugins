import type { Bilingual, FieldControl, FieldMeta } from "../../modules/integration/descriptor/meta"

// Domain types for the integration module. Kept zod-free so admin (browser) code and the
// http types can depend on them without pulling zod's type graph into the type-check.
// Re-exported so the http layer can import domain bits from `src/types/integration`.
export type { Bilingual }

export type ModuleKind =
  | "payment" | "fulfillment" | "marketplace" | "crm" | "erp" | "pim"
  | "notification" | "feed" | "tax" | "other"

export type TestStatus = "ok" | "fail" | "skipped"

/** Date fields are `Date` server-side and ISO strings once JSON-serialized to the admin. */
export type DateValue = Date | string | null

export interface TestConnectionContext {
  options: Record<string, unknown>
}

export interface TestConnectionResult {
  status: TestStatus
  message?: string
}

// ── UI descriptor (introspected schema; produced server-side, consumed by the admin) ──
export interface UiField {
  name: string
  control: FieldControl
  secret: boolean
  required: boolean
  label: FieldMeta["label"]
  hint?: FieldMeta["hint"]
  placeholder?: string
  options?: string[]
}

export interface UiSection {
  id: string
  title: Bilingual
  fields: UiField[]
}

export interface UiDescriptor {
  module: string
  pluginId: string
  instanceId: string | null
  schemaVersion: number
  displayName: Bilingual
  description?: Bilingual
  icon?: string
  docsUrl?: string
  supportsMultipleInstances: boolean
  hasTestConnection: boolean
  sections: UiSection[]
}
