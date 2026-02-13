import { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { useFieldArray, useWatch} from "react-hook-form"
import { Heading, Text } from "@medusajs/ui"
import { aggregateMedusaProductOptionsByTitle } from "../../../../../utils"
import { sdk } from "../../../../../lib/sdk"
import { MappingFormValues, CategoryMappingRowProps } from "../../../../../types"
import { CategorySelectors } from "./category-selectors"
import { AttributesMapping } from "./attributes-mapping"
import { OZON_MARKETPLACE_ID } from "./constants"
import { CategoryMappingCard } from "./category-mapping-card"

export const CategoryMappingRow = ({
  form,
  index,
  onRemove,
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
    replace: replaceAttr,
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

  const ozonAttributesQuery = useQuery({
    queryKey: ["ozon-attributes", OZON_MARKETPLACE_ID, ozonIds.description_category_id, ozonIds.type_id],
    enabled: Boolean(ozonIds.description_category_id && ozonIds.type_id),
    queryFn: async () => {
      const params = new URLSearchParams({
        description_category_id: ozonIds.description_category_id,
        type_id: ozonIds.type_id,
      })
      return sdk.client.fetch<any>(`/admin/ozon/${OZON_MARKETPLACE_ID}/attributes?${params.toString()}`)
    },
  })

  const attributesByCategoryQuery = useQuery({
    // TODO: add IDs of all the products in the selected categories to the query key to avoid issues when products are added/removed from categories
    queryKey: ["medusa-category-attributes-by-category", selectedMedusaCategoryIds],
    enabled: selectedMedusaCategoryIds.length > 0,
    queryFn: async () => {
      const fields = [
        "id",
        "title",
        "options.id",
        "options.title",
        "variants.id",
        "variants.options.option_id",
        "variants.options.value",
      ].join(",")

      const results = await Promise.all(
        selectedMedusaCategoryIds.map(async (categoryId) => {
          const res = await sdk.admin.product.list({
            category_id: [categoryId],
            fields,
          })

          const products = res?.products
          const attributes = aggregateMedusaProductOptionsByTitle(products)

          return {
            category: {
              id: categoryId,
              name: medusaCategoryNameById.get(categoryId) ?? categoryId,
            },
            attributes,
          }
        })
      )

      return results
    },
  })

  const isOzonDisabled = productCategoriesCombobox.disabled || selectedMedusaCategoryIds.length === 0

  const medusaAttributeGroups = useMemo(() => {
    const attributes = attributesByCategoryQuery.data ?? []

    const extractTitles = (attrs: any): string[] => {
      if (!attrs) return []
      if (Array.isArray(attrs)) return [...new Set(attrs.map((a) => a?.title).filter(Boolean))]
      return []
    }

    return attributes
      .map((row) => {
        const titles = extractTitles(row.attributes).sort((a, b) => a.localeCompare(b))
        return {
          label: row.category.name,
          options: titles.map((title) => ({
            label: title,
            value: `${row.category.id}:${title}`,
          })),
        }
      })
      .filter((g) => g.options.length > 0)
  }, [attributesByCategoryQuery.data])

  const ozonAttributeOptions = useMemo(() => {
    const ozonAttributes = ozonAttributesQuery.data?.result ?? []
    const options: { value: string; label: string }[] = []
    for (const attribute of ozonAttributes as any[]) {
      const id = attribute?.id
      if (id == null) continue
      const name = attribute?.name
      options.push({ value: String(id), label: String(name) })
    }
    return options
  }, [ozonAttributesQuery.data])

  const selectedMedusaValues = (watchedRules ?? []).map((r) => r?.medusa_attribute).filter(Boolean)
  const selectedOzonValues = (watchedRules ?? []).map((r) => r?.ozon_attribute_id).filter(Boolean)

  const getMedusaGroupsForRow = (rowIndex: number) => {
    const currentValue = watchedRules?.[rowIndex]?.medusa_attribute || ""
    const blocked = new Set(selectedMedusaValues.filter((v) => v && v !== currentValue))

    return medusaAttributeGroups
      .map((g) => ({
        label: g.label,
        options: g.options.filter((o) => !blocked.has(o.value) || o.value === currentValue),
      }))
      .filter((g) => g.options.length > 0)
  }

  const getOzonOptionsForRow = (rowIndex: number) => {
    const currentValue = watchedRules?.[rowIndex]?.ozon_attribute_id || ""
    const blocked = new Set(selectedOzonValues.filter((v) => v && v !== currentValue))
    return ozonAttributeOptions.filter((o) => !blocked.has(o.value) || o.value === currentValue)
  }

  return (
    <CategoryMappingCard
      title="Categories mapping"
      onRemove={onRemove}
      categories={
        <CategorySelectors
          index={index}
          productCategoriesCombobox={productCategoriesCombobox}
          ozonCategoriesCombobox={ozonCategoriesCombobox}
          ozonGroupsWithIds={ozonGroupsWithIds}
          isOzonDisabled={isOzonDisabled}
        />
      }
      attributes={
        <>
          <Heading level="h2" className="mb-2">
            Attributes mapping
          </Heading>
          <Text className="text-ui-fg-subtle txt-small mb-6">
            Add rules to map Medusa attributes to Ozon attributes.
          </Text>
          <AttributesMapping
            index={index}
            attrFields={attrFields as any}
            appendAttr={appendAttr as any}
            removeAttr={removeAttr}
            replaceAttr={replaceAttr as any}
            canAdd={Boolean(selectedMedusaCategoryIds.length && selectedOzonCategoryTypeValue)}
            getMedusaGroupsForRow={getMedusaGroupsForRow}
            getOzonOptionsForRow={getOzonOptionsForRow}
          />
        </>
      }
    />
  )
}
