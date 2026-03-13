import { useEffect, useMemo, useState } from "react"
import { Heading } from "@medusajs/ui"
import { useFieldArray, useWatch } from "react-hook-form"
import { CategoryMappingRowProps, ComboboxOption, OzonComboboxOption } from "../../../../types"
import { CategorySelectors } from "./category-selectors"
import { AttributesMapping } from "./attributes-mapping"
import { sdk } from "../../../../lib/sdk"

const profileFieldOptions: OzonComboboxOption[] = [
  { value: "field:offer_id", label: "offer_id" },
  { value: "field:name", label: "name" },
  { value: "field:barcode", label: "barcode" },
  { value: "field:price", label: "price" },
  { value: "field:old_price", label: "old_price" },
  { value: "field:vat", label: "vat" },
  { value: "field:currency_code", label: "currency_code" },
  { value: "field:images", label: "images" },
  { value: "field:primary_image", label: "primary_image" },
  { value: "field:dimension_unit", label: "dimension_unit" },
  { value: "field:depth", label: "depth" },
  { value: "field:width", label: "width" },
  { value: "field:height", label: "height" },
  { value: "field:weight_unit", label: "weight_unit" },
  { value: "field:weight", label: "weight" },
]

export const CategoryMappingRow = ({
  form,
  index,
  productCategoriesCombobox,
  rootOzonCategoriesCombobox,
  ozonCategoriesCombobox,
  ozonGroupsWithIds,
  selectedOzonRootCategoryValue,
  marketplace,
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
  })

  const ozonIds = useMemo(() => {
    const [description_category_id, type_id] = (selectedOzonCategoryTypeValue || "").split(":")
    return { description_category_id: description_category_id || "", type_id: type_id || "" }
  }, [selectedOzonCategoryTypeValue])

  const medusaCategoryNameById = useMemo(() => {
    return new Map<string, string>(productCategoriesCombobox.options.map((o: ComboboxOption) => [String(o.value), o.label]))
  }, [productCategoriesCombobox.options])

  const isOzonDisabled = productCategoriesCombobox.disabled || selectedMedusaCategoryIds?.length === 0
  const selectedMedusaValues = (watchedRules ?? []).map((r) => r?.medusa_attribute).filter(Boolean)
  const selectedOzonValues = (watchedRules ?? []).map((r) => r?.ozon_attribute_id).filter(Boolean)

  const [ozonAttributes, setOzonAttributes] = useState<any[]>([])

  useEffect(() => {
    const load = async () => {
      if (!selectedOzonCategoryTypeValue) {
        setOzonAttributes([])
        if (attrFields.length) {
          removeAttr()
        }
        return
      }

      const { description_category_id, type_id } = ozonIds
      if (!description_category_id || !type_id) {
        setOzonAttributes([])
        if (attrFields.length) {
          removeAttr()
        }
        return
      }

      const params = new URLSearchParams({ description_category_id, type_id })
      const res = await sdk.client.fetch<any>(`/admin/ozon/${marketplace.id}/attributes?${params.toString()}`)
      const result = (res?.result ?? []) as any[]
      setOzonAttributes(result)
      removeAttr()

      result
        .filter((a) => a?.is_required)
        .forEach((a) =>
          appendAttr({
            medusa_attribute: "",
            ozon_attribute_id: `attr:${String(a.id)}`,
            default_value: "",
            transform: "none",
          })
        )

      profileFieldOptions.forEach((p) =>
        appendAttr({
          medusa_attribute: "",
          ozon_attribute_id: p.value,
          default_value: "",
          transform: "none",
        })
      )
    }

    load()
  }, [
    selectedOzonCategoryTypeValue,
    ozonIds.description_category_id,
    ozonIds.type_id,
    marketplace.id,
    appendAttr,
    removeAttr,
  ])

  return (
    <div>
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h1">Create Category Mapping</Heading>
      </div>
      <div className="px-6 py-4">
        <CategorySelectors
          index={index}
          form={form}
          productCategoriesCombobox={productCategoriesCombobox}
          rootOzonCategoriesCombobox={rootOzonCategoriesCombobox}
          ozonCategoriesCombobox={ozonCategoriesCombobox}
          ozonGroupsWithIds={ozonGroupsWithIds}
          isOzonDisabled={isOzonDisabled}
          selectedMedusaCategoryIds={selectedMedusaCategoryIds}
          selectedOzonRootCategoryValue={selectedOzonRootCategoryValue}
        />
      </div>
      <div className="px-6 py-4">
        <AttributesMapping
          form={form}
          categoryIndex={index}
          attrFields={attrFields}
          appendAttr={appendAttr}
          removeAttr={removeAttr}
          canAdd={Boolean(selectedMedusaCategoryIds?.length && selectedOzonCategoryTypeValue)}
          selectedMedusaCategoryIds={selectedMedusaCategoryIds}
          ozonIds={ozonIds}
          medusaCategoryNameById={medusaCategoryNameById}
          selectedMedusaValues={selectedMedusaValues}
          selectedOzonValues={selectedOzonValues}
          marketplace={marketplace}
          ozonAttributes={ozonAttributes}
          profileOptions={profileFieldOptions}
        />
      </div>
    </div>
  )
}
