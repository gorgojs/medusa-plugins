import {
  Container,
  Text,
  createDataTableColumnHelper,
  DataTable,
  DataTablePaginationState,
  useDataTable,
} from "@medusajs/ui"
import { defineRouteConfig } from "@medusajs/admin-sdk"
import { useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { sdk } from "../../../../lib/sdk"
import { Header } from "../../../../components/common/header"
import type {
  AdminMarketplaceEventListResponse,
  MarketplaceEventDTO,
} from "@gorgo/medusa-marketplace/types"

const PAGE_SIZE = 20

export const config = defineRouteConfig({
  label: "Events",
})

export const handle = {
  breadcrumb: () => "Marketplace Events",
}

const columnHelper = createDataTableColumnHelper<MarketplaceEventDTO>()

const formatDateTime = (value: unknown) => {
  if (!value) return "-"
  const d = value instanceof Date ? value : new Date(value as any)
  return Number.isNaN(d.getTime()) ? String(value) : d.toLocaleString()
}

const jsonPreview = (value: unknown) => {
  if (value == null) return "-"
  try {
    return JSON.stringify(value)
  } catch {
    return String(value)
  }
}

const columns = [
  columnHelper.accessor("id", { header: "ID" }),
  columnHelper.accessor("marketplace_id" as any, { header: "Marketplace ID" }),
  columnHelper.accessor("direction", { header: "Direction" }),
  columnHelper.accessor("entity_type", { header: "Entity Type" }),
  columnHelper.accessor("action", { header: "Action" }),

  columnHelper.accessor("started_at" as any, {
    header: "Started",
    cell: ({ getValue }) => formatDateTime(getValue()),
  }),

  columnHelper.accessor("finished_at" as any, {
    header: "Finished",
    cell: ({ getValue }) => formatDateTime(getValue()),
  }),

  columnHelper.accessor("request_data" as any, {
    header: "Request",
    cell: ({ getValue }) => (
      <Text size="small" className="truncate max-w-[260px]">
        {jsonPreview(getValue())}
      </Text>
    ),
  }),

  columnHelper.accessor("response_data" as any, {
    header: "Response",
    cell: ({ getValue }) => (
      <Text size="small" className="truncate max-w-[260px]">
        {jsonPreview(getValue())}
      </Text>
    ),
  }),
]


export default function MarketplaceEventsPage() {
  const limit = PAGE_SIZE

  const [pagination, setPagination] = useState<DataTablePaginationState>({
    pageSize: limit,
    pageIndex: 0,
  })

  const offset = useMemo(() => pagination.pageIndex * limit, [pagination.pageIndex, limit])

  const { data, isLoading } = useQuery<AdminMarketplaceEventListResponse>({
    queryKey: ["admin-marketplace-events", limit, offset],
    queryFn: () =>
      sdk.client.fetch(`/admin/marketplaces/events`, {
        query: { limit, offset },
      }),
  })

  const events = data?.events ?? []
  const rowCount = data?.count ?? 0


  const table = useDataTable({
    columns,
    data: events,
    getRowId: (row) => row.id,
    rowCount: rowCount || 0,
    isLoading,
    pagination: {
      state: pagination,
      onPaginationChange: setPagination,
    },
  })

  return (
    <Container className="divide-y p-0">
      <Header title="Events" />
      <DataTable instance={table}>
        <DataTable.Table />
        <DataTable.Pagination />
      </DataTable>
    </Container>
  )
}
