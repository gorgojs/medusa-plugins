export type Bilingual = { en: string; ru: string }

export type FieldControl =
  | "text"
  | "secret"
  | "switch"
  | "number"
  | "url"
  | "select"
  | "multiselect"
  | "json"

/** Stored on each zod field via `.meta({...})` (zod 4). */
export type FieldMeta = {
  label: Bilingual
  hint?: Bilingual
  placeholder?: string
  section?: string
  secret?: boolean
  control?: FieldControl
}
