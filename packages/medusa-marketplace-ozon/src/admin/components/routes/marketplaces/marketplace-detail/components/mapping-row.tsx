import { Select } from "@medusajs/ui"
import { useQuery } from "@tanstack/react-query"
import { useMemo, useState } from "react"
import { sdk } from "../../../../../lib/sdk"
import { Combobox } from "../../../../../components/common/combobox"
import { useComboboxData } from "../../../../../hooks/use-combobox-data"

type SelectOption = { value: string; label: string }

type OzonCategoryNode = {
  description_category_id: number
  category_name: string
  disabled?: boolean
  children?: OzonNode[]
}

type OzonTypeNode = {
  type_id: number
  type_name: string
  disabled?: boolean
  children?: OzonNode[]
}

type OzonNode = OzonCategoryNode | OzonTypeNode

type AggregatedMedusaOption = { title: string; values: string[] }

const OZON_MARKETPLACE_ID = "mp_01KGR3T88704KE32DMCK798ZSM"

const MEDUSA_PROPERTIES = [
  "id",
  "title",
  "description",
  "thumbnail",
  "handle",
  "variants.id",
  "variants.title",
  "variants.sku",
] as const

// export const loader = async () => {
//   const [ozonCategoriesResponse, medusaCategoriesResponse] = await Promise.all([
//     sdk.client.fetch(`/admin/ozon/${OZON_MARKETPLACE_ID}/categories`, { method: "GET" }),
//     sdk.client.fetch(`/admin/product-categories`, { method: "GET" }),
//   ])

// return { ozonCategories: ozonCategoriesResponse, medusaCategories: medusaCategoriesResponse }
// }


export const MappingRow = () => {
  // const { ozonCategories, medusaCategories } = useLoaderData() as any

  // const ozonRootNodes = (ozonCategories?.result ?? []) as OzonNode[]
  // const ozonCategorySelectOptions = useMemo(() => buildOzonCategorySelectOptionsDeep(ozonRootNodes), [ozonRootNodes])

  // const [selectedOzonDescriptionCategoryId, setSelectedOzonDescriptionCategoryId] = useState("")
  // const selectedOzonCategoryNode = useMemo(() => {
  //   return selectedOzonDescriptionCategoryId ? findEnabledOzonCategoryByDescriptionId(ozonRootNodes, Number(selectedOzonDescriptionCategoryId)) : null
  // }, [ozonRootNodes, selectedOzonDescriptionCategoryId])

  // const ozonTypeSelectOptions = useMemo(() => buildOzonTypeSelectOptionsFromCategory(selectedOzonCategoryNode), [selectedOzonCategoryNode])
  // const [selectedOzonTypeId, setSelectedOzonTypeId] = useState("")

  // const ozonAttributesQueryResult = useQuery({
  //   queryKey: ["ozon-attributes", OZON_MARKETPLACE_ID, selectedOzonDescriptionCategoryId, selectedOzonTypeId],
  //   enabled: Boolean(selectedOzonDescriptionCategoryId && selectedOzonTypeId),
  //   queryFn: async () => {
  //     const params = new URLSearchParams({
  //       description_category_id: selectedOzonDescriptionCategoryId,
  //       type_id: selectedOzonTypeId,
  //     })

  //     return sdk.client.fetch(`/admin/ozon/${OZON_MARKETPLACE_ID}/attributes?${params.toString()}`, {
  //       method: "GET",
  //     })
  //   },
  // })

  // const medusaCategorySelectOptions = useMemo(() => buildMedusaCategorySelectOptions(medusaCategories), [medusaCategories])
  // const [selectedMedusaCategoryId, setSelectedMedusaCategoryId] = useState("")

  // const medusaCategoryDetailsQueryResult = useQuery({
  //   queryKey: ["medusa-category", selectedMedusaCategoryId],
  //   enabled: Boolean(selectedMedusaCategoryId),
  //   queryFn: async () => {
  //     return sdk.client.fetch(`/admin/product-categories/${selectedMedusaCategoryId}`, { method: "GET" })
  //   },
  // })

  // const medusaProductOptionsQueryResult = useQuery({
  //   queryKey: ["medusa-product-options", selectedMedusaCategoryId, MEDUSA_PROPERTIES.join(",")],
  //   enabled: Boolean(selectedMedusaCategoryId),
  //   queryFn: async () => {
  //     const params = new URLSearchParams()

  //     params.append("category_id[]", selectedMedusaCategoryId)

  //     const baseFields = MEDUSA_PROPERTIES
  //     const requiredForAggregation = [
  //       "options.id",
  //       "options.title",
  //       "variants.options.option_id",
  //       "variants.options.value",
  //     ]

  //     params.set("fields", ([...baseFields, ...requiredForAggregation]).join(","))
  //     params.set("limit", "100")

  //     const response = await sdk.client.fetch(`/admin/products?${params.toString()}`, {
  //       method: "GET",
  //     })

  //     const products = (response as any)?.products ?? (response as any)?.result ?? []
  //     const options = aggregateMedusaProductOptionsByTitle(products)

  //     return { products, options }
  //   },
  // })

  const productCategoriesCombobox = useComboboxData({
    queryKey: ["product_categories"],
    queryFn: (params) =>
      sdk.admin.productCategory.list({ ...params, fields: "id,name" }),
    defaultValue: undefined, // TODO: support default value to load initial data
    getOptions: (data) =>
      data.product_categories.map((r) => ({ label: r.name, value: r.id })),
    enabled: true
  })

  // const ozonProductCategoriesCombobox = useComboboxData({
  //   queryKey: ["product_categories"],
  //   queryFn: (params) =>
  //     sdk.admin.productCategory.list({ ...params, fields: "id,name" }),
  //   defaultValue: undefined,
  //   getOptions: (data) =>
  //     data.product_categories.map((r) => ({ label: r.name, value: r.id })),
  //   enabled: false // TODO: enabled when productCategory is set
  // })

  return (
    <div className="p-6">
      <div className="flex gap-6">
        <div className="flex-1 min-w-0 space-y-4">
          <div>Medusa: Категория</div>
          {/* TODO: create ComboboxGroup */}
          <Combobox
            options={productCategoriesCombobox.options}
            searchValue={productCategoriesCombobox.searchValue}
            onSearchValueChange={
              productCategoriesCombobox.onSearchValueChange
            }
            disabled={productCategoriesCombobox.disabled}
          />

          {/* <Select
              value={selectedOzonDescriptionCategoryId}
              onValueChange={(value) => {
                setSelectedOzonDescriptionCategoryId(value)
                setSelectedOzonTypeId("")
              }}
            >
              <Select.Trigger>
                <Select.Value placeholder="Выбери категорию" />
              </Select.Trigger>
              <Select.Content>
                {ozonCategorySelectOptions.map((opt) => (
                  <Select.Item key={opt.value} value={opt.value}>
                    {opt.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select>

            <div>Ozon: Type</div>
            <Select
              value={selectedOzonTypeId}
              onValueChange={setSelectedOzonTypeId}
              disabled={!selectedOzonDescriptionCategoryId}
            >
              <Select.Trigger>
                <Select.Value
                  placeholder={selectedOzonDescriptionCategoryId ? "Выбери type" : "Сначала выбери категорию"}
                />
              </Select.Trigger>
              <Select.Content>
                {ozonTypeSelectOptions.map((opt) => (
                  <Select.Item key={opt.value} value={opt.value}>
                    {opt.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select>

            <pre className="whitespace-pre-wrap">
              {JSON.stringify(
                {
                  selected: {
                    description_category_id: selectedOzonDescriptionCategoryId || null,
                    type_id: selectedOzonTypeId || null,
                  },
                  loading: ozonAttributesQueryResult.isLoading,
                  error: ozonAttributesQueryResult.error ? String(ozonAttributesQueryResult.error) : null,
                },
                null,
                2
              )}
            </pre>

            <div>Ozon: Атрибуты выбранной категории</div>
            <pre className="mt-2 whitespace-pre-wrap overflow-x-auto">
              {JSON.stringify(ozonAttributesQueryResult.data ?? null, null, 2)}
            </pre> */}


        </div>

        {/* <div className="flex-1 min-w-0 space-y-4">
            <div>Medusa: Категория</div>
            <Select value={selectedMedusaCategoryId} onValueChange={setSelectedMedusaCategoryId}>
              <Select.Trigger>
                <Select.Value placeholder="Выбери категорию Medusa" />
              </Select.Trigger>
              <Select.Content>
                {medusaCategorySelectOptions.map((opt) => (
                  <Select.Item key={opt.value} value={opt.value}>
                    {opt.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select>

            <pre className="whitespace-pre-wrap overflow-x-auto">
              {JSON.stringify(
                {
                  selected: { category_id: selectedMedusaCategoryId || null },
                  loading: medusaCategoryDetailsQueryResult.isLoading,
                  error: medusaCategoryDetailsQueryResult.error
                    ? String(medusaCategoryDetailsQueryResult.error)
                    : null,
                  category: medusaCategoryDetailsQueryResult.data ?? null,
                },
                null,
                2
              )}
            </pre>
            <div>Medusa: Product options</div>
            <pre className="whitespace-pre-wrap overflow-x-auto">
              {JSON.stringify(
                {
                  properties: MEDUSA_PROPERTIES,
                  loading: medusaProductOptionsQueryResult.isLoading,
                  error: medusaProductOptionsQueryResult.error
                    ? String(medusaProductOptionsQueryResult.error)
                    : null,
                  products: medusaProductOptionsQueryResult.data?.products ?? null,
                  options: medusaProductOptionsQueryResult.data?.options ?? null,
                },
                null,
                2
              )}
            </pre>
          </div> */}
      </div>
    </div>
  )
}
