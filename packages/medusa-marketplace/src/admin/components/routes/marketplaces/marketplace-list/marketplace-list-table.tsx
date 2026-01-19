import {
  createDataTableColumnHelper,
  DataTable,
  DataTablePaginationState,
  useDataTable,
} from "@medusajs/ui"
import { useMemo, useState } from "react"
import { StatusBadge } from "@medusajs/ui"
import { useNavigate } from "react-router-dom"
import {
  useQuery,
} from "@tanstack/react-query"
import { Header } from "../../../common/header"
import { sdk } from "../../../../lib/sdk"
import type { MarketplaceDTO } from "../../../../../modules/marketplace/types"
import { AdminMarketplaceListResponse } from "../../../../../api/types"

const PAGE_SIZE = 20

export const MarketplaceListTable = ({
  stateModal,
  openModal,
}: {
  stateModal: boolean
  openModal: () => void
}) => {
  const navigate = useNavigate()
  const limit = PAGE_SIZE
  const [pagination, setPagination] = useState<DataTablePaginationState>({
    pageSize: limit,
    pageIndex: 0,
  })

  const offset = useMemo(() => pagination.pageIndex * limit, [pagination])

  const { data, isLoading } = useQuery<AdminMarketplaceListResponse>({
    queryFn: () =>
      sdk.client.fetch(`/admin/marketplaces`, {
        query: { limit, offset },
      }),
    queryKey: [["marketplaces"]],
  })

  const columnHelper = createDataTableColumnHelper<MarketplaceDTO>()

  const columns = [
    columnHelper.accessor("id", { header: "ID" }),
    columnHelper.accessor("provider_id", {header: "Provider ID"}),
    columnHelper.accessor("is_active", {
      header: "Status",
      cell: ({ getValue }) => {
        const active = Boolean(getValue())
        return (
          <StatusBadge color={active ? "green" : "red"}>
            {active ? "Active" : "Inactive"}
          </StatusBadge>
        )
      },
    })
  ]

  const table = useDataTable({
    columns,
    data: data?.marketplaces || [],
    getRowId: (row) => row.id,
    rowCount: data?.marketplaces.length || 0,
    isLoading,
    pagination: {
      state: pagination,
      onPaginationChange: setPagination,
    },
    onRowClick: (_e, row) => {
      navigate(row.id)
    }
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
