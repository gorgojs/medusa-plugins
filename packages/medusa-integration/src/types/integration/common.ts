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
  column: "main" | "side"
  fields: UiField[]
}

/**
 * Data the integration settings page passes to a provider's custom-section widget
 * (via `LayoutComposer`'s `data` prop → the widget's `data` prop). Secrets are never
 * included — anything needing a secret must go through a server endpoint.
 */
export interface IntegrationSectionData {
  /** Registration key `int_<pluginId>[_<instanceId>]` — pass to API calls. */
  providerId: string
  /** The provider's `static identifier` (e.g. "tkassa"). */
  pluginId: string
  /** Current non-secret options for this integration. */
  values: Record<string, unknown>
  /** Whether the stored config passes full validation (use to gate actions). */
  isComplete: boolean
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
