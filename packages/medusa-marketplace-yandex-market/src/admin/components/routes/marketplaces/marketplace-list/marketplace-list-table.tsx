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
import type { MarketplaceResponse } from "../../../../types"
import type { MarketplaceDTO } from "@gorgo/medusa-marketplace/modules/marketplace/types"

const PAGE_SIZE = 20

export const MarketplaceListTable = ({
  stateModal,
  openModal,
}: {
  stateModal: boolean
  openModal: () => void
}) => {
  // const navigate = useNavigate()
  const limit = PAGE_SIZE

  const [pagination, setPagination] = useState<DataTablePaginationState>({
    pageSize: limit,
    pageIndex: 0,
  })

  const offset = useMemo(() => pagination.pageIndex * limit, [pagination])

  const { data, isLoading } = useQuery<MarketplaceResponse>({
    queryFn: () =>
      sdk.client.fetch(`/admin/feeds`, {
        query: { limit, offset },
      }),
    queryKey: [["feeds"]],
  })

  const columnHelper = createDataTableColumnHelper<MarketplaceDTO>()

  const columns = [
    columnHelper.accessor("provider_id", {
      header: "Provider",
    }),
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
    }),
    columnHelper.accessor("id", {
      header: "ID",
      cell: ({ getValue }) => (
        <span className="font-mono text-ui-fg-subtle">{getValue()}</span>
      ),
    }),
  ]

  const table = useDataTable({
    columns,
    data: data?.marketplaces || [],
    getRowId: (row) => row.id,
    rowCount: data?.count || 0,
    isLoading,
    pagination: {
      state: pagination,
      onPaginationChange: setPagination,
    },
    onRowClick: (_e, row) => {
      // navigate(row.id)
      console.log("row", row.id)
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
