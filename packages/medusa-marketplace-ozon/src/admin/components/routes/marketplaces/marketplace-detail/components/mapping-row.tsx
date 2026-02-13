import { useMemo } from "react"
import { useFieldArray } from "react-hook-form"
import { Button } from "@medusajs/ui"
import { OzonNode } from "../../../../../types"
import { buildOzonCategoryTypeSelectOptionsDeep, ozonOptionsToGroups } from "../../../../../utils"
import { sdk } from "../../../../../lib/sdk"
import { useComboboxData } from "../../../../../hooks/use-combobox-data"
import { MappingFormValues, MappingRowFormFieldProps } from "../../../../../types"
import { CategoryMappingRow } from "./category-mapping-row"
import { OZON_MARKETPLACE_ID } from "./constants"

export const MappingRow = ({ form }: MappingRowFormFieldProps) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "category_mappings",
  })

  const productCategoriesCombobox = useComboboxData({
    queryKey: ["product_categories"],
    queryFn: (params) => sdk.admin.productCategory.list({ ...params, fields: "id,name" }),
    defaultValue: undefined,
    getOptions: (data) => data.product_categories.map((r) => ({ label: r.name, value: r.id })),
    enabled: true,
  })

  const ozonCategoriesCombobox = useComboboxData<any, any>({
    queryKey: ["ozon_categories", OZON_MARKETPLACE_ID],
    queryFn: async () => {
      return {
        "result": [
          {
            "description_category_id": 88976462,
            "category_name": "Фермерское хозяйство",
            "disabled": false,
            "children": [
              {
                "description_category_id": 88979652,
                "category_name": "Вывод пчелиных маток",
                "disabled": false,
                "children": [
                  {
                    "type_name": "Оборудование для мечения пчелиных маток",
                    "type_id": 970861199,
                    "disabled": false,
                    "children": [],
                  },
                  {
                    "type_name": "Оборудование для вывода пчелиных маток",
                    "type_id": 970861198,
                    "disabled": false,
                    "children": [],
                  },
                ],
              },
            ],
          },
          {
            "description_category_id": 17027915,
            "category_name": "Мебель",
            "disabled": false,
            "children": [
              {
                "description_category_id": 80731485,
                "category_name": "Полки и стеллажи",
                "disabled": false,
                "children": [
                  {
                    "type_name": "Полка",
                    "type_id": 115946601,
                    "disabled": false,
                    "children": []
                  },
                  {
                    "type_name": "Комплектующие для стеллажа",
                    "type_id": 970968749,
                    "disabled": false,
                    "children": [],
                  },
                  {
                    "type_name": "Стеллаж для ванной",
                    "type_id": 970666031,
                    "disabled": false,
                    "children": [],
                  },
                ],
              },
            ],
          },
        ],
      }
    },
    defaultValue: undefined,
    getOptions: (data) =>
      buildOzonCategoryTypeSelectOptionsDeep((data?.result ?? []) as OzonNode[]).map((o) => ({
        label: o.label,
        value: String(o.value),
      })),
    enabled: true,
  })

  const ozonGroupsWithIds = useMemo(
    () => ozonOptionsToGroups(ozonCategoriesCombobox.options),
    [ozonCategoriesCombobox.options]
  )

  return (
    <div className="space-y-6">
      {fields.map((row, index) => (
        <CategoryMappingRow
          key={`${(row as any).id}.${index}`}
          form={form}
          index={index}
          onRemove={() => remove(index)}
          productCategoriesCombobox={productCategoriesCombobox}
          ozonCategoriesCombobox={ozonCategoriesCombobox}
          ozonGroupsWithIds={ozonGroupsWithIds}
        />
      ))}

      <Button
        type="button"
        variant="secondary"
        className="inline-block"
        onClick={() =>
          append({
            medusa_category_ids: [],
            ozon_category_type_value: "",
            mappings: [],
          } as MappingFormValues["category_mappings"][number])
        }
      >
        Add Categories mapping
      </Button>
    </div>
  )
}
