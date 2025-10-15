export type SelectOption = {
  value: string;
  label: string 
}

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

export type AggregatedMedusaOption = {
  title: string
  values: string[]
}

export type ComboboxOption = {
  value: string
  label: string
  disabled?: boolean
}
export type ComboboxGroupOption = {
  label: string
  options: ComboboxOption[]
}

export type TransformName = "none" | "centsToRub" | "rubToCents" | "gramsToKg" | "trim" | "fallback"
export type TransformConfig = {
  name: TransformName
}

export type MappingFormValues = {
  category_mapping: CategoryMappingValue
}

export type OzonIds = {
  description_category_id: string
  type_id: string
}

export const transformOptions: Array<{ label: string; value: TransformName }> = [
  { label: "None", value: "none" },
  { label: "Cents → Rub", value: "centsToRub" },
  { label: "Rub → Cents", value: "rubToCents" },
  { label: "Grams → Kg", value: "gramsToKg" },
  { label: "Trim", value: "trim" },
  { label: "Fallback", value: "fallback" },
]

export type OzonComboboxOption = {
  label: string
  value: string
}

export type OzonComboboxGroupWithIds = {
  label: string
  options: OzonComboboxOption[]
}

export type CategoryMappingRule = {
  id: string
  ozon_category_name: string
  medusa_category_name: string
  attributes_total?: number
  attributes_required?: number
  attributes_filled?: number
}

export type AdminCategoryMappingListResponse = {
  rules: CategoryMappingRule[]
  count: number
}

export type MappingRowValue = {
  ozon_attribute_id: string
  medusa_attribute: string
  default_value?: string[]
  transform?: TransformName
  is_error: boolean
}

export type CategoryMappingValue = {
  mapping_id: string
  medusa_category_ids?: string[]
  root_ozon_category_id: string
  ozon_category_type_value?: string
  mappings?: MappingRowValue[]
}

export type OutputFieldRule = {
  from: string
  to: string
  default?: unknown
  transform?: TransformConfig
}

export type OutputAttributeOptionRule = {
  attributeId: number
  medusa_attribute: string | undefined
  is_error: boolean
  default?: unknown[]
  transform?: TransformConfig
}

export type OutputAttributesRule = {
  from: "attributes"
  to: "attributes"
  optionRules: Record<string, OutputAttributeOptionRule>
}
export type OutputRule = OutputFieldRule | OutputAttributesRule
export type OutputMappingRow = {
  ozon_category: OzonCategoryNode | null
  medusa_categories: string[]
  fields: OutputRule[]
}

export type OzonRequiredAttribute = {
  is_required?: boolean
}

export type OzonAttributesResponse = {
  result: OzonRequiredAttribute[]
}

export type AttrsSummary = {
  total: number
  required: number
}
