import {
  createDataTableColumnHelper,
  DataTable,
  DataTablePaginationState,
  useDataTable,
  StatusBadge,
} from "@medusajs/ui"
import { Pencil, Trash } from "@medusajs/icons"
import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { MarketplaceHttpTypes } from "@gorgo/medusa-marketplace/types"
import { Header } from "../../../common/header"
import { CategoryMappingRule } from "../../../../types"
import { sdk } from "../../../../lib/sdk"
import { ActionMenu } from "../../../common/action-menu"

const PAGE_SIZE = 20

export const CategoryMappingRulesTable = ({
  stateModal,
  openModal,
  onEdit,
  onDelete,
  marketplace,
}: {
  stateModal: boolean
  openModal: () => void
  onEdit: (id: string) => void
  onDelete: (id: string) => void
  marketplace: MarketplaceHttpTypes.AdminMarketplace
}) => {
  const navigate = useNavigate()
  const limit = PAGE_SIZE

  const [pagination, setPagination] = useState<DataTablePaginationState>({
    pageSize: limit,
    pageIndex: 0,
  })

  const offset = useMemo(() => pagination.pageIndex * limit, [pagination.pageIndex, limit])

  const mapping = useMemo(() => marketplace?.settings?.mapping ?? {}, [marketplace])

  const categoryIds = useMemo(() => {
    const ids = new Set<string>()
    for (const rule of Object.values<any>(mapping)) {
      for (const id of rule?.medusa_categories ?? []) {
        if (typeof id === "string" && id) ids.add(id)
      }
    }
    return Array.from(ids)
  }, [mapping])

  const idsKey = useMemo(() => categoryIds.slice().sort().join(","), [categoryIds])

  const { data: categoriesRes, isLoading: isLoadingCategories } = useQuery({
    queryKey: ["product_categories", idsKey],
    enabled: categoryIds.length > 0,
    queryFn: async () => {
      return sdk.admin.productCategory.list({
        id: categoryIds as any,
        fields: "id,name"
      } as any)
    },
  })

  const categoryMap = useMemo(() => {
    const rows = categoriesRes?.product_categories ?? []
    return Object.fromEntries(rows.map((c: any) => [c.id, c.name]))
  }, [categoriesRes])

  const allRules = useMemo(() => {
    return Object.entries<any>(mapping).map(([ruleId, rule]) => {
      const attrs = rule?.ozon_category?.attributes ?? {}
      const medusaIds: string[] = rule?.medusa_categories ?? []

      return {
        id: ruleId,
        ozon_category_name: `${rule?.ozon_category?.children[0].category_name} -> ${rule?.ozon_category?.children[0].children[0].type_name}`,
        medusa_category_name: medusaIds.map((id) => categoryMap[id] ?? id).join(", "),
        attributes_total: attrs.total ?? 0,
        attributes_required: attrs.required ?? 0,
        attributes_filled: attrs.mapped ?? 0,
      }
    })
  }, [mapping, categoryMap])

  const pageRules = useMemo(
    () => allRules.slice(offset, offset + limit),
    [allRules, offset, limit]
  )

  const columnHelper = createDataTableColumnHelper<CategoryMappingRule>()

  const columns = [
    columnHelper.accessor("ozon_category_name", { header: "Категория Ozon" }),
    columnHelper.accessor("medusa_category_name", { header: "Категория Medusa" }),
    columnHelper.display({
      id: "attributes",
      header: "Атрибуты",
      cell: ({ row }) => {
        const r = row.original
        const total = r.attributes_total ?? 0
        const req = r.attributes_required ?? 0
        const filled = r.attributes_filled ?? 0

        return (
          <div className="flex items-center gap-2">
            <StatusBadge color="blue">Всего: {total}</StatusBadge>
            <StatusBadge color="orange">Обязательные: {req}</StatusBadge>
            <StatusBadge color={filled >= req ? "green" : "red"}>Заполнены: {filled}</StatusBadge>
          </div>
        )
      },
    }),
    columnHelper.display({
      id: "actions",
      header: "",
      cell: ({ row }) => {
        const id = row.original.id
        return (
          <div className="flex justify-end">
            <ActionMenu
              groups={[
                {
                  actions: [
                    {
                      icon: <Pencil />,
                      label: "Edit",
                      onClick: () => onEdit(id),
                    },
                    {
                      icon: <Trash />,
                      label: "Delete",
                      onClick: () => onDelete(id),
                    },
                  ],
                },
              ]}
            />
          </div>
        )
      },
    }),
  ]

  const table = useDataTable({
    columns,
    data: pageRules,
    getRowId: (row) => row.id,
    rowCount: allRules.length,
    isLoading: isLoadingCategories,
    pagination: { state: pagination, onPaginationChange: setPagination },
    onRowClick: (_e, row) => {
      navigate(row.id)
    },
  })

  return (
    <DataTable instance={table}>
      <Header
        key={stateModal ? "mapping-open" : "mapping-closed"}
        title="Category mapping rules"
        actions={[
          {
            type: "button",
            props: {
              children: "Add mapping rules",
              variant: "secondary",
              onClick: openModal,
            },
          },
        ]}
      />
      <DataTable.Table />
      <DataTable.Pagination />
    </DataTable>
  )
}
