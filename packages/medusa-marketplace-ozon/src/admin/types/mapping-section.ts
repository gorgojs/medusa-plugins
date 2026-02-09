export type SelectOption = { value: string; label: string }

export type OzonCategoryNode = {
  description_category_id: number
  category_name: string
  disabled?: boolean
  children?: OzonNode[]
}

export type OzonTypeNode = {
  type_id: number
  type_name: string
  disabled?: boolean
  children?: OzonNode[]
}

export type OzonNode = OzonCategoryNode | OzonTypeNode

export type AggregatedMedusaOption = { title: string; values: string[] }

export type ComboboxOption = { value: string; label: string; disabled?: boolean }

export type ComboboxGroupOption = { label: string; options: ComboboxOption[] }