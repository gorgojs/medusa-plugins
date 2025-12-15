import {
  createDataTableColumnHelper,
  DataTable,
  DataTablePaginationState,
  useDataTable,
} from "@medusajs/ui"
import { useMemo, useState } from "react"
import { Header } from "../../../common/header"
import { useNavigate } from "react-router-dom"
import type { Marketplace } from "../../../../types"

const PAGE_SIZE = 5

export const MarketplaceListTable = ({
  stateModal,
  openModal,
  marketplaces
}: {
  marketplaces: Marketplace[]
  stateModal: boolean
  openModal: () => void
}) => {

  const navigate = useNavigate()
  
  const columnHelper = createDataTableColumnHelper<Marketplace>()

  const [pagination, setPagination] = useState<DataTablePaginationState>({
    pageSize: PAGE_SIZE,
    pageIndex: 0,
  })


 const shownMarketplaces = useMemo(() => {
    return marketplaces.slice(
      pagination.pageIndex * pagination.pageSize,
      (pagination.pageIndex + 1) * pagination.pageSize
    )
  }, [pagination])

  const columns = [
    columnHelper.accessor("title", { header: "Title" }),
    columnHelper.accessor("provider" as any, { header: "Provider" }),
  ]

  const table = useDataTable({
    columns,
    data: shownMarketplaces,
    getRowId: (row) => row.id,
    rowCount: marketplaces?.length || 0,
    pagination: {
      state: pagination,
      onPaginationChange: setPagination,
    },

    onRowClick: (_e, row) => {
      navigate(`/marketplaces/${row.id}`)
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
