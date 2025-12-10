import {
  createDataTableColumnHelper,
  DataTable,
  DataTablePaginationState,
  useDataTable,
} from "@medusajs/ui"
// import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
// import { useNavigate } from "react-router-dom"

import { Header } from "../../../common/header"
import type { Marketplace } from "../../../../types"

const PAGE_SIZE = 20

export const MarketplaceListTable = ({
  stateModal,
  openModal,
  marketplaces
}: {
  marketplaces: any[],
  stateModal: boolean,
  openModal: () => void
}) => {
  const columnHelper = createDataTableColumnHelper<Marketplace>()

  // const navigate = useNavigate()
  const limit = PAGE_SIZE
  const [pagination, setPagination] = useState<DataTablePaginationState>({
    pageSize: limit,
    pageIndex: 0,
  })

  // const offset = useMemo(() => pagination.pageIndex * limit, [pagination])

  // const { data, isLoading } = useQuery<FeedsResponse>({
  //   queryFn: () =>
  //     sdk.client.fetch(`/admin/feeds`, {
  //       query: { limit, offset },
  //     }),
  //   queryKey: [["feeds"]],
  // })

  const columns = [
    columnHelper.accessor("title", { header: "Marketplace Title" }),
    
  ]

  const table = useDataTable({
    columns,
    data: marketplaces || [],
    getRowId: (row) => row.title,
    rowCount: marketplaces?.length || 0,
    isLoading: false,
    pagination: {
      state: pagination,
      onPaginationChange: setPagination,
    },
    // onRowClick(_, row) {
    //    navigate(`${row.id}`)
    // },
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
