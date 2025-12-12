import {
  createDataTableColumnHelper,
  DataTable,
  DataTablePaginationState,
  useDataTable,
} from "@medusajs/ui"
import { useMemo, useState } from "react"
import { Header } from "../../../common/header"
import type { Marketplace } from "../../../../types"

const PAGE_SIZE = 20

export const MarketplaceListTable = ({
  stateModal,
  openModal,
  marketplaces,
  isLoading = false,
}: {
  marketplaces: Marketplace[]
  stateModal: boolean
  openModal: () => void
  isLoading?: boolean
}) => {
  const columnHelper = createDataTableColumnHelper<Marketplace>()

  const [pagination, setPagination] = useState<DataTablePaginationState>({
    pageSize: PAGE_SIZE,
    pageIndex: 0,
  })


  const pagedData = useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize
    const end = start + pagination.pageSize
    return (marketplaces ?? []).slice(start, end)
  }, [marketplaces, pagination.pageIndex, pagination.pageSize])

  const columns = [
    columnHelper.accessor("title", { header: "Title" }),
    columnHelper.accessor("provider" as any, { header: "Provider" }),
  ]

  const table = useDataTable({
    columns,
    data: pagedData,
    getRowId: (row) => (row as any).id ?? row.title,
    rowCount: marketplaces?.length || 0,
    isLoading,
    pagination: {
      state: pagination,
      onPaginationChange: setPagination,
    },
    
  })

  return (
    <DataTable instance={table}>
      <Header
        key={stateModal ? "create-open" : "create-closed"}
        title="Marketplaces"
        actions={[
          {
            type: "button",
            props: {
              children: "Add marketplace",
              variant: "secondary",
              onClick: () => openModal(),
            },
          },
        ]}
      />
      <DataTable.Table />
      <DataTable.Pagination />
    </DataTable>
  )
}
