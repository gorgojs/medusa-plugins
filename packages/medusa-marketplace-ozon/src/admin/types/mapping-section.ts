import { UseFormReturn } from "react-hook-form"

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

export type MappingRule = {
  medusa_attribute: string
  ozon_attribute_id: string
  default_value: string
  transform: string
}

export type MappingFormValues = {
  mappings: MappingRule[]
}

export type Option = { label: string; value: string }
export type OptionGroup = { label: string; options: Option[] }

export const transformOptions: Option[] = [
  { label: "None", value: "none" },
  { label: "Cents → Rub", value: "centsToRub" },
  { label: "Rub → Cents", value: "rubToCents" },
  { label: "Grams → Kg", value: "gramsToKg" },
  { label: "Trim", value: "trim" },
  { label: "Fallback", value: "fallback" },
]
export type MappingRowFormFieldProps = {
  form: UseFormReturn<MappingFormValues>
}