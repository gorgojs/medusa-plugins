import { Button, Text } from "@medusajs/ui"
import { MappingFormValues, OzonIds } from "../../../../types"
import { AttributeMappingRow } from "./attributes-mapping-row"
import { useMemo } from "react"
import { useComboboxData } from "../../../../hooks/use-combobox-data"
import { extractMedusaAttributeTitles } from "../../../../utils"
import { sdk } from "../../../../lib/sdk"
import { UseFormReturn, FieldArrayWithId, UseFieldArrayAppend, UseFieldArrayRemove } from "react-hook-form"
import { IntegrationHttpTypes } from "@gorgo/medusa-integration/types"

type AttributeMappingProps = {
  form: UseFormReturn<MappingFormValues>
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
  integration: IntegrationHttpTypes.AdminIntegration
  watchedRules: any
}

export const AttributesMapping = ({
  form,
  attrFields,
  appendAttr,
  removeAttr,
  canAdd,
  selectedMedusaCategoryIds,
  ozonIds,
  medusaCategoryNameById,
  selectedMedusaValues,
  selectedOzonValues,
  integration,
  ozonAttributes,
  watchedRules,
}: AttributeMappingProps) => {
  const ozonAttributesComboboxData = useComboboxData<any, any>({
    queryKey: ["ozon-attributes", integration.id, ozonIds.description_category_id, ozonIds.type_id],
    enabled: Boolean(ozonIds.description_category_id && ozonIds.type_id),
    queryFn: async () => {
      const params = new URLSearchParams({
        description_category_id: ozonIds.description_category_id,
        type_id: ozonIds.type_id,
      })
      const res = await sdk.client.fetch<any>(`/admin/ozon/${integration.id}/attributes?${params.toString()}`)
      const result = res?.result ?? []
      return { offset: 0, limit: result.length, count: result.length, result }
    },
    defaultValue: undefined,
    getOptions: (data) => {
      const ozonAttributes = data?.result ?? []
      const options: { value: string; label: string }[] = []
      for (const attribute of ozonAttributes as any[]) {
        const id = attribute?.id
        const value = String(id)
        const label = attribute?.is_required ? `${String(attribute?.name)} *` : String(attribute?.name)
        options.push({ value, label })
      }
      return options
    },
  })

  const attributesByCategoryComboboxData = useComboboxData<any, any>({
    queryKey: ["medusa-category-attributes-by-category", selectedMedusaCategoryIds],
    enabled: selectedMedusaCategoryIds.length > 0,
    queryFn: async () => {
      const fields = [
        "id",
        "title",
        "description",
        "*options",
        "*variants.options",
        "*variants.images",
        "*variants.prices",
        "variants.sku",
        "variants.weight",
        "variants.length",
        "variants.height",
        "variants.width",
        "variants.barcode",
      ].join(",")
      const results = await Promise.all(
        selectedMedusaCategoryIds.map(async (categoryId) => {
          const res = await sdk.admin.product.list({
            category_id: [categoryId],
            fields,
          })

          const products = res?.products
          const attributes = extractMedusaAttributeTitles(products)
          return {
            category: {
              id: categoryId,
              name: medusaCategoryNameById.get(categoryId) ?? categoryId,
            },
            attributes,
          }
        }),
      )
      return { result: results }
    },
    defaultValue: undefined,
    getOptions: (data) => {
      const rows = data?.result ?? []
      const optionsSet = new Set<string>()

      for (const row of rows as any[]) {
        for (const key of row?.attributes?.options ?? []) {
          optionsSet.add(String(key).trim())
        }
      }

      const optionTitles = Array.from(optionsSet)
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b))
        .map((key) => ({ label: key, value: key }))

      return optionTitles
    },
  })

  const blockedMedusaValues = useMemo(
    () => new Set(selectedMedusaValues),
    [selectedMedusaValues]
  )
  const blockedOzonValues = useMemo(
    () => new Set(selectedOzonValues),
    [selectedOzonValues]
  )
  return (
    <div className="flex flex-col">
      <Text size="base" weight="plus">
        Attributes Mapping
      </Text>

      <Text size="small" className="text-ui-fg-subtle mb-6">
        Add mapping rules between Ozon and Medusa attributes.
      </Text>

      <div className="flex flex-col space-y-3">
        {attrFields.map((row, attrIndex) => {
          return (
            <AttributeMappingRow
              key={row.id}
              form={form}
              attrIndex={attrIndex}
              onRemove={() => removeAttr(attrIndex)}
              ozonAttributes={ozonAttributes}
              currentMedusaValue={watchedRules?.[attrIndex]?.medusa_attribute}
              currentOzonValue={watchedRules?.[attrIndex]?.ozon_attribute_id}
              blockedMedusaValues={blockedMedusaValues}
              blockedOzonValues={blockedOzonValues}
              ozonAttributesComboboxData={ozonAttributesComboboxData}
              attributesByCategoryComboboxData={attributesByCategoryComboboxData}
            />
          )
        })}
      </div>

      <div className={attrFields.length ? "mt-6" : ""}>
        <Button
          type="button"
          variant="secondary"
          className="inline-block"
          onClick={() =>
            appendAttr({
              medusa_attribute: "",
              ozon_attribute_id: "",
              default_value: [],
              transform: "none",
              is_error: false,
            })
          }
          disabled={!canAdd}
        >
          Add rule
        </Button>
      </div>
    </div>
  )
}
