import type { I18nKey, FieldControl } from "../../modules/integration/descriptor/meta"

// Domain types for the integration module. Kept zod-free so admin (browser) code and the
// http types can depend on them without pulling zod's type graph into the type-check.
// Re-exported so the http layer can import domain bits from `src/types/integration`.
export type { I18nKey }

export type ModuleKind =
  | "payment" | "fulfillment" | "marketplace" | "crm" | "erp" | "pim"
  | "notification" | "feed" | "tax" | "other"

export type TestStatus = "ok" | "fail" | "skipped"

export type IntegrationLayouts = "core:single-column" | "core:two-column"

/** Date fields are `Date` server-side and ISO strings once JSON-serialized to the admin. */
export type DateValue = Date | string | null

export interface TestConnectionContext {
  options: Record<string, unknown>
}

export interface TestConnectionResult {
  status: TestStatus
  message?: string
}

// ── UI descriptor (introspected options; produced server-side, consumed by the admin) ──
export interface UiField {
  name: string
  control: FieldControl
  secret: boolean
  required: boolean
  label: I18nKey
  hint?: I18nKey
  placeholder?: string
  options?: string[]
  /** For `select`: i18n-key label per enum value (value → key). UI shows the label, stores the value. */
  optionLabels?: Partial<Record<string, I18nKey>>
  /** Declarative UI visibility (evaluated admin-side against sibling values). */
  visibleWhen?: { field: string; equals: string | number | boolean }
  /** Rendered disabled (not editable) — an author-fixed constant. */
  readonly?: boolean
  /** The constant to display for a readonly (non-secret) field — its descriptor `default`. */
  readonlyValue?: unknown
}

export interface UiSection {
  id: string
  title: I18nKey
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
  optionsVersion: number
  displayName: I18nKey
  description?: I18nKey
  icon?: string
  docsUrl?: string
  supportsMultipleInstances: boolean
  preferredLayoutId: IntegrationLayouts
  hasTestConnection: boolean
  sections: UiSection[]
}
