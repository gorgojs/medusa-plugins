import { MarketplaceHttpTypes } from "@gorgo/medusa-marketplace/types"
import type {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormReturn,
} from "react-hook-form"

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
  category_mappings: CategoryMappingValue[]
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

export type MappingRowFormFieldProps = {
  form: UseFormReturn<MappingFormValues>
  ozonTreeByValueRef: any
  marketplace: MarketplaceHttpTypes.AdminMarketplace
}

export type OzonComboboxOption = {
  label: string
  value: string
}

export type OzonComboboxGroupWithIds = {
  label: string
  options: OzonComboboxOption[]
}

export type CategoryMappingRowProps = {
  form: UseFormReturn<MappingFormValues>
  index: number
  productCategoriesCombobox: Record<any, any>
  ozonCategoriesCombobox: Record<any, any>
  rootOzonCategoriesCombobox: Record<any, any>
  ozonGroupsWithIds: OzonComboboxGroupWithIds[]
  selectedOzonRootCategoryValue: string
  marketplace: MarketplaceHttpTypes.AdminMarketplace
}

export type CategorySelectorsProps = {
  index: number
  form: UseFormReturn<MappingFormValues>
  productCategoriesCombobox: Record<any, any>
  ozonCategoriesCombobox: Record<any, any>
  rootOzonCategoriesCombobox: Record<any, any>
  ozonGroupsWithIds: OzonComboboxGroupWithIds[]
  isOzonDisabled: boolean
  selectedMedusaCategoryIds: string[]
  selectedOzonRootCategoryValue: string
}

export type AttributeMappingProps = {
  form: UseFormReturn<MappingFormValues>
  categoryIndex: number
  attrFields: FieldArrayWithId[]
  appendAttr: UseFieldArrayAppend<MappingFormValues>
  removeAttr: UseFieldArrayRemove
  canAdd: boolean
  selectedMedusaCategoryIds: string[]
  ozonIds: OzonIds
  medusaCategoryNameById: Map<string, string>
  selectedMedusaValues: string[]
  selectedOzonValues: string[]
  ozonAttributes: any
  profileOptions: ComboboxOption[]
  marketplace: MarketplaceHttpTypes.AdminMarketplace
}

export type AttributeMappingRowProps = {
  form: UseFormReturn<MappingFormValues>
  rowId: string
  categoryIndex: number
  attrIndex: number
  selectedMedusaCategoryIds: string[]
  ozonIds: OzonIds
  medusaCategoryNameById: Map<string, string>
  selectedMedusaValues: string[]
  selectedOzonValues: string[]
  onRemove: () => void
  ozonAttributes: any
  profileOptions: ComboboxOption[]
  marketplace: MarketplaceHttpTypes.AdminMarketplace
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
  default_value?: string
  transform?: TransformName
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
