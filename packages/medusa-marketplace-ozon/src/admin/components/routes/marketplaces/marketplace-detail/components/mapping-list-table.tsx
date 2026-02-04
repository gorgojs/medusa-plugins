import {
  createDataTableColumnHelper,
  DataTable,
  DataTablePaginationState,
  useDataTable,
  StatusBadge,
  Button,
} from "@medusajs/ui"
import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { Header } from "../../../../common/header"
import {CategoryMappingRule, AdminCategoryMappingListResponse} from "../../../../../types"

const PAGE_SIZE = 20

const MOCK_RULES: CategoryMappingRule[] = Array.from({ length: 10 }).map((_, i) => {
  const idx = i + 1
  const required = 6
  const filled = (idx * 3) % 10
  const total = 50 + ((idx * 7) % 5)

  return {
    id: `rule_${idx}`,
    ozon_category_name: `Одежда > Категория ${idx}`,
    medusa_category_name: `Medusa Category ${idx}`,
    attributes_total: total,
    attributes_required: required,
    attributes_filled: filled,
  }
})

export const CategoryMappingRulesTable = ({
  stateModal,
  openModal,
  onEdit,
  onDelete,
}: {
  stateModal: boolean
  openModal: () => void
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}) => {
  const navigate = useNavigate()
  const limit = PAGE_SIZE

  const [pagination, setPagination] = useState<DataTablePaginationState>({
    pageSize: limit,
    pageIndex: 0,
  })

  const offset = useMemo(() => pagination.pageIndex * limit, [pagination.pageIndex, limit])

  const { data, isLoading } = useQuery<AdminCategoryMappingListResponse>({
    queryKey: ["category-mapping-rules", limit, offset],
    queryFn: async () => {
      return {
        rules: MOCK_RULES.slice(offset, offset + limit),
        count: MOCK_RULES.length,
      }
    },
    placeholderData: keepPreviousData,
  })

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
            <StatusBadge color={filled >= req ? "green" : "red"}>
              Заполнены: {filled}
            </StatusBadge>
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
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="secondary"
              size="small"
              onClick={() => onEdit(id)}
            >
              Редактировать
            </Button>
            <Button type="button" variant="danger" size="small" onClick={() => onDelete(id)}>
              Удалить
            </Button>
          </div>
        )
      },
    }),
  ]

  const table = useDataTable({
    columns,
    data: data?.rules ?? [],
    getRowId: (row) => row.id,
    rowCount: data?.count ?? 0,
    isLoading,
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
