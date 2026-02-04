import { useMemo } from "react"
import { Heading } from "@medusajs/ui"
import { useFieldArray, useWatch } from "react-hook-form"
import { MappingFormValues, CategoryMappingRowProps } from "../../../../../types"
import { CategorySelectors } from "./category-selectors"
import { AttributesMapping } from "./attributes-mapping"
import { Container } from "../../../../common/container"

export const CategoryMappingRow = ({
  form,
  index,
  productCategoriesCombobox,
  ozonCategoriesCombobox,
  ozonGroupsWithIds,
}: CategoryMappingRowProps) => {
  const selectedMedusaCategoryIds = useWatch({
    control: form.control,
    name: `category_mappings.${index}.medusa_category_ids`,
    defaultValue: [],
  }) as string[]

  const selectedOzonCategoryTypeValue = useWatch({
    control: form.control,
    name: `category_mappings.${index}.ozon_category_type_value`,
    defaultValue: "",
  }) as string

  const {
    fields: attrFields,
    append: appendAttr,
    remove: removeAttr,
  } = useFieldArray({
    control: form.control,
    name: `category_mappings.${index}.mappings`,
  })

  const watchedRules = useWatch({
    control: form.control,
    name: `category_mappings.${index}.mappings`,
    defaultValue: [],
  }) as MappingFormValues["category_mappings"][number]["mappings"]

  const ozonIds = useMemo(() => {
    const [description_category_id, type_id] = (selectedOzonCategoryTypeValue || "").split(":")
    return { description_category_id: description_category_id || "", type_id: type_id || "" }
  }, [selectedOzonCategoryTypeValue])

  const medusaCategoryNameById = useMemo(() => {
    return new Map(productCategoriesCombobox.options.map((o) => [String(o.value), o.label]))
  }, [productCategoriesCombobox.options])

  const isOzonDisabled = productCategoriesCombobox.disabled || selectedMedusaCategoryIds.length === 0
  const selectedMedusaValues = (watchedRules ?? []).map((r) => r?.medusa_attribute).filter(Boolean)
  const selectedOzonValues = (watchedRules ?? []).map((r) => r?.ozon_attribute_id).filter(Boolean)

  return (
    <Container>
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">Categories mapping</Heading>
      </div>
      <div className="px-6 py-4">
        <CategorySelectors
          index={index}
          productCategoriesCombobox={productCategoriesCombobox}
          ozonCategoriesCombobox={ozonCategoriesCombobox}
          ozonGroupsWithIds={ozonGroupsWithIds}
          isOzonDisabled={isOzonDisabled}
        />
      </div>
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">Attributes mapping</Heading>
      </div>
      <div className="px-6 py-4">
        <AttributesMapping
          form={form}
          categoryIndex={index}
          attrFields={attrFields as any}
          appendAttr={appendAttr as any}
          removeAttr={removeAttr}
          canAdd={Boolean(selectedMedusaCategoryIds.length && selectedOzonCategoryTypeValue)}
          selectedMedusaCategoryIds={selectedMedusaCategoryIds}
          ozonIds={ozonIds}
          medusaCategoryNameById={medusaCategoryNameById}
          selectedMedusaValues={selectedMedusaValues}
          selectedOzonValues={selectedOzonValues}
        />
      </div>
    </Container>
  )
}
