import { useMemo } from "react"
import { useFieldArray } from "react-hook-form"
import { buildOzonCategoryTypeSelectOptionsDeep, findCategoryNodeById, ozonOptionsToGroups } from "../../../../utils"
import { sdk } from "../../../../lib/sdk"
import { useComboboxData } from "../../../../hooks/use-combobox-data"
import { MappingRowFormFieldProps } from "../../../../types"
import { CategoryMappingRow } from "./category-mapping-row"
import { useWatch } from "react-hook-form"

export const MappingRow = ({
  form,
  ozonTreeByValueRef,
  marketplace
}: MappingRowFormFieldProps) => {
  const { fields } = useFieldArray({
    control: form.control,
    name: "category_mappings",
  })

  const rootOzonCategoryId = useWatch({
    control: form.control,
    name: "category_mappings.0.root_ozon_category_id",
    defaultValue: "",
  })

  const productCategoriesCombobox = useComboboxData({
    queryKey: ["product_categories"],
    queryFn: (params) => sdk.admin.productCategory.list({ ...params, fields: "id,name" }),
    defaultValue: undefined,
    getOptions: (data) => data.product_categories.map((r) => ({ label: r.name, value: r.id })),
    enabled: true,
  })

  const rootOzonCategoriesCombobox = useComboboxData<any, any>({
    queryKey: ["ozon_root_categories", marketplace.id],
    enabled: true,
    queryFn: async () => {
      const res = await sdk.client.fetch(`/admin/ozon/${marketplace.id}/categories`)
      return res
    },
    defaultValue: undefined,
    getOptions: (data) => {
      const rootNodes = data?.result
      return rootNodes.map((n: any) => ({
        label: String(n.category_name),
        value: String(n.description_category_id),
      }))
    },
  })

  const ozonCategoriesCombobox = useComboboxData<any, any>({
    queryKey: ["ozon_categories", marketplace.id, rootOzonCategoryId],
    enabled: Boolean(rootOzonCategoryId),
    queryFn: async () => {
      const res = await sdk.client.fetch(`/admin/ozon/${marketplace.id}/categories`)
      return res
    },
    defaultValue: undefined,
    getOptions: (data) => {
      const nodes = data?.result
      const rootId = Number(rootOzonCategoryId)

      const rootNode = findCategoryNodeById(nodes, rootId)
      if (!rootNode) return []

      ozonTreeByValueRef.current.clear()

      const opts = buildOzonCategoryTypeSelectOptionsDeep([rootNode], ozonTreeByValueRef.current)

      return opts.map((o) => ({
        label: o.label,
        value: String(o.value),
      }))
    },
  })

  const ozonGroupsWithIds = useMemo(
    () => ozonOptionsToGroups(ozonCategoriesCombobox.options),
    [ozonCategoriesCombobox.options]
  )

  const row = fields[0]

  return (
    <div className="space-y-6">
      <CategoryMappingRow
        key={row.id}
        form={form}
        index={0}
        productCategoriesCombobox={productCategoriesCombobox}
        rootOzonCategoriesCombobox={rootOzonCategoriesCombobox}
        ozonCategoriesCombobox={ozonCategoriesCombobox}
        ozonGroupsWithIds={ozonGroupsWithIds}
      />
    </div>
  )
}
