import type {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFieldArrayReplace,
  UseFormReturn,
} from "react-hook-form"
import { useComboboxData } from "../hooks/use-combobox-data"

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
  category_mappings: {
    medusa_category_ids: string[]
    ozon_category_type_value: string
    mappings: MappingRule[]
  }[]
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

export type CategoryMappingRowProps = {
  form: UseFormReturn<MappingFormValues>
  index: number
  onRemove: () => void
  productCategoriesCombobox: ReturnType<typeof useComboboxData>
  ozonCategoriesCombobox: ReturnType<typeof useComboboxData<any, any>>
  ozonGroupsWithIds: { label: string; options: { label: string; value: string }[] }[]
}

export type CategorySelectorsProps = {
  index: number
  productCategoriesCombobox: ReturnType<typeof useComboboxData>
  ozonCategoriesCombobox: ReturnType<typeof useComboboxData<any, any>>
  ozonGroupsWithIds: { label: string; options: { label: string; value: string }[] }[]
  isOzonDisabled: boolean
}

export type AttributeMappingProps = {
  index: number
  attrFields: FieldArrayWithId<MappingFormValues, `category_mappings.${number}.mappings`, "id">[]
  appendAttr: UseFieldArrayAppend<MappingFormValues, `category_mappings.${number}.mappings`>
  removeAttr: UseFieldArrayRemove
  replaceAttr: UseFieldArrayReplace<MappingFormValues, `category_mappings.${number}.mappings`>
  canAdd: boolean
  getMedusaGroupsForRow: (rowIndex: number) => { label: string; options: { label: string; value: string }[] }[]
  getOzonOptionsForRow: (rowIndex: number) => { value: string; label: string }[]
}

export type AttributeMappingRowProps = {
  categoryIndex: number
  attrIndex: number
  medusaGroups: { label: string; options: { label: string; value: string }[] }[]
  ozonOptions: { value: string; label: string }[]
  onRemove: () => void
}

export type CategoryMappingCardProps = {
  title: string
  onRemove: () => void
  categories: React.ReactNode
  attributes: React.ReactNode
}