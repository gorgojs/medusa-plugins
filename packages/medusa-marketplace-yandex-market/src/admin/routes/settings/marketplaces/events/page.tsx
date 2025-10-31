import {
  Container,
  Heading,
  Text,
  createDataTableColumnHelper,
  DataTable,
  DataTablePaginationState,
  useDataTable,
} from "@medusajs/ui"
import { defineRouteConfig } from "@medusajs/admin-sdk"
import { useState } from "react"
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import { sdk } from "../../../../lib/sdk"

type MarketplaceEvent = {
  id: string
  marketplace_id?: string | null
  correlation_id?: string | null
  direction: string
  entity_type: string
  action: string
  started_at?: string | Date | null
  finished_at?: string | Date | null
  request_data?: any
  response_data?: any
}

const queryClient = new QueryClient()

const PAGE_SIZE = 20

export const config = defineRouteConfig({
  label: "Events",
})

export const handle = {
  breadcrumb: () => "Marketplace Events",
}

function MarketplaceEventsPageInner() {
  const columnHelper = createDataTableColumnHelper<MarketplaceEvent>()

  const [pagination, setPagination] = useState<DataTablePaginationState>({
    pageSize: PAGE_SIZE,
    pageIndex: 0,
  })

  const limit = pagination.pageSize
  const offset = pagination.pageIndex * pagination.pageSize

  const { data, isLoading, isError } = useQuery({
    queryKey: ["admin-marketplace-events", limit, offset],
    queryFn: async () => {
      return sdk.client.fetch(`/admin/marketplaces/events?limit=${limit}&offset=${offset}`)
    },
  })

  const events: MarketplaceEvent[] = Array.isArray(data)
    ? (data as any)
    : ((data as any)?.marketplace_events ??
        (data as any)?.events ??
        (data as any)?.marketplaceEvents ??
        [])

  const totalCount: number =
    (data as any)?.count ??
    (data as any)?.total ??
    (data as any)?.total_count ??
    events.length

  const columns = [
    columnHelper.accessor("id", { header: "id" }),
    columnHelper.accessor("marketplace_id" as any, { header: "marketplace_id" }),
    columnHelper.accessor("direction", { header: "direction" }),
    columnHelper.accessor("entity_type", { header: "entity_type" }),
    columnHelper.accessor("action", { header: "action" }),

    columnHelper.accessor("started_at" as any, {
      header: "started_at",
      cell: ({ getValue }) => {
        const v = getValue()
        if (!v) return "-"
        const d = v instanceof Date ? v : new Date(v)
        return isNaN(d.getTime()) ? String(v) : d.toLocaleString()
      },
    }),

    columnHelper.accessor("finished_at" as any, {
      header: "finished_at",
      cell: ({ getValue }) => {
        const v = getValue()
        if (!v) return "-"
        const d = v instanceof Date ? v : new Date(v)
        return isNaN(d.getTime()) ? String(v) : d.toLocaleString()
      },
    }),

    columnHelper.accessor("request_data" as any, {
      header: "request_data",
      cell: ({ getValue }) => (
        <Text size="small" className="truncate max-w-[260px]">
          {(() => {
            const v = getValue()
            if (v == null) return "-"
            try {
              return JSON.stringify(v)
            } catch {
              return String(v)
            }
          })()}
        </Text>
      ),
    }),

    columnHelper.accessor("response_data" as any, {
      header: "response_data",
      cell: ({ getValue }) => (
        <Text size="small" className="truncate max-w-[260px]">
          {(() => {
            const v = getValue()
            if (v == null) return "-"
            try {
              return JSON.stringify(v)
            } catch {
              return String(v)
            }
          })()}
        </Text>
      ),
    }),
  ]

  const table = useDataTable({
    columns,
    data: events,
    getRowId: (row) => row.id,
    rowCount: totalCount,
    pagination: {
      state: pagination,
      onPaginationChange: setPagination,
    },
  })

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h1">Events</Heading>
      </div>

      {isLoading && <div className="px-6 py-4">Loading…</div>}
      {isError && <div className="px-6 py-4">Failed to load events</div>}

      <DataTable instance={table}>
        <DataTable.Table />
        <DataTable.Pagination />
      </DataTable>
    </Container>
  )
}

export default function MarketplaceEventsPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <MarketplaceEventsPageInner />
    </QueryClientProvider>
  )
}
