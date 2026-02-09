import { useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { OzonNode } from "../../../../../types"
import { buildOzonCategoryTypeSelectOptionsDeep, ozonOptionsToGroups, aggregateMedusaProductOptionsByTitle } from "../../../../../utils"
import { sdk } from "../../../../../lib/sdk"
import { Combobox } from "../../../../../components/common/combobox"
import { useComboboxData } from "../../../../../hooks/use-combobox-data"

const OZON_MARKETPLACE_ID = "mp_01KFBVSVR44EW6SWMEECXEWXN9"

export const MappingRow = () => {
  const [selectedMedusaCategoryIds, setSelectedMedusaCategoryIds] = useState<string[]>([])
  const [selectedOzonCategoryTypeValue, setSelectedOzonCategoryTypeValue] = useState<string>("")

  const productCategoriesCombobox = useComboboxData({
    queryKey: ["product_categories"],
    queryFn: (params) =>
      sdk.admin.productCategory.list({ ...params, fields: "id,name" }),
    defaultValue: undefined, // TODO: support default value to load initial data
    getOptions: (data) =>
      data.product_categories.map((r) => ({ label: r.name, value: r.id })),
    enabled: true
  })

  const ozonProductCategoriesComboboxWithIds = useComboboxData<any, any>({
    queryKey: ["ozon_categories", OZON_MARKETPLACE_ID],
    queryFn: (params) =>
      sdk.client.fetch<any>(`/admin/ozon/${OZON_MARKETPLACE_ID}/categories`, {
        query: params as any,
      }) as any,
    defaultValue: undefined,
    getOptions: (data) =>
      buildOzonCategoryTypeSelectOptionsDeep((data?.result ?? []) as OzonNode[]).map((o) => ({
        label: o.label,
        value: String(o.value),
      })),
    enabled: selectedMedusaCategoryIds.length > 0,
  })

  const ozonGroupsWithIds = useMemo(
    () => ozonOptionsToGroups(ozonProductCategoriesComboboxWithIds.options),
    [ozonProductCategoriesComboboxWithIds.options]
  )

  const ozonIds = useMemo(() => {
    const [description_category_id, type_id] = (selectedOzonCategoryTypeValue || "").split(":")
    return { description_category_id: description_category_id || "", type_id: type_id || "" }
  }, [selectedOzonCategoryTypeValue])

  const medusaCategoryNameById = useMemo(() => {
    return new Map(productCategoriesCombobox.options.map((o) => [String(o.value), o.label]))
  }, [productCategoriesCombobox.options])

  const ozonAttributesQuery = useQuery({
    queryKey: [
      "ozon-attributes",
      OZON_MARKETPLACE_ID,
      ozonIds.description_category_id,
      ozonIds.type_id,
    ],
    enabled: Boolean(ozonIds.description_category_id && ozonIds.type_id),
    queryFn: async () => {
      const params = new URLSearchParams({
        description_category_id: ozonIds.description_category_id,
        type_id: ozonIds.type_id,
      })

      return sdk.client.fetch<any>(`/admin/ozon/${OZON_MARKETPLACE_ID}/attributes?${params.toString()}`,)
    },
  })

  const attributesByCategoryQuery = useQuery({
    queryKey: ["medusa-category-attributes-by-category", selectedMedusaCategoryIds],
    enabled: selectedMedusaCategoryIds.length > 0,
    queryFn: async () => {
      const results = await Promise.all(
        selectedMedusaCategoryIds.map(async (categoryId) => {
          const params = new URLSearchParams()
          params.append("category_id[]", categoryId)
          params.set(
            "fields",
            [
              "id",
              "title",
              "options.id",
              "options.title",
              "variants.id",
              "variants.options.option_id",
              "variants.options.value",
            ].join(",")
          )
          params.set("limit", "100")

          const resp = await sdk.client.fetch<any>(`/admin/products?${params.toString()}`)

          const products = resp?.products
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

  return (
    <div className="p-6">
      <div className="flex gap-6">
        <div className="flex-1 min-w-0 space-y-4">
          <div>Medusa: Категория</div>
          {/* TODO: create ComboboxGroup */}
          <Combobox
            value={selectedMedusaCategoryIds}
            onChange={(v) => setSelectedMedusaCategoryIds((v ?? []) as string[])}
            options={productCategoriesCombobox.options}
            searchValue={productCategoriesCombobox.searchValue}
            onSearchValueChange={productCategoriesCombobox.onSearchValueChange}
            disabled={productCategoriesCombobox.disabled}
          />
          {/* <Combobox
            value={selectedOzonDescriptionCategoryId}
            onChange={(v) => setSelectedOzonDescriptionCategoryId((v ?? "") as string)}
            options={ozonProductCategoriesCombobox.options}
            groups={ozonGroups}
            searchValue={ozonProductCategoriesCombobox.searchValue}
            onSearchValueChange={ozonProductCategoriesCombobox.onSearchValueChange}
            disabled={isOzonDisabled}
          /> */}
          <Combobox
            value={selectedOzonCategoryTypeValue}
            onChange={(v) => setSelectedOzonCategoryTypeValue((v ?? "") as string)}
            options={ozonProductCategoriesComboboxWithIds.options}
            groups={ozonGroupsWithIds}
            searchValue={ozonProductCategoriesComboboxWithIds.searchValue}
            onSearchValueChange={ozonProductCategoriesComboboxWithIds.onSearchValueChange}
            disabled={isOzonDisabled}
          />
          <pre className="whitespace-pre-wrap overflow-x-auto">
            {JSON.stringify(ozonAttributesQuery.data ?? null, null, 2)}
          </pre>
          <pre className="whitespace-pre-wrap overflow-x-auto">
            {JSON.stringify(attributesByCategoryQuery.data ?? null, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}
