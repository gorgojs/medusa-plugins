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
import { useLoaderData } from "react-router-dom"
import { useMemo, useState } from "react"
import { marketplaceEventsStore, MarketplaceEvent } from "../../../lib/marketplace-events-store"

const PAGE_SIZE = 1

export async function loader() {
  return { events: marketplaceEventsStore.list() }
}

export const config = defineRouteConfig({
  label: "Events"
})

export const handle = {
  breadcrumb: () => "Marketplace Events",
}

const MarketplaceEventsPage = () => {
  const { events } = useLoaderData() as Awaited<ReturnType<typeof loader>>

  const columnHelper = createDataTableColumnHelper<MarketplaceEvent>()

  const [pagination, setPagination] = useState<DataTablePaginationState>({
    pageSize: PAGE_SIZE,
    pageIndex: 0,
  })

  const shownEvents = useMemo(() => {
    return events.slice(
      pagination.pageIndex * pagination.pageSize,
      (pagination.pageIndex + 1) * pagination.pageSize

    )

  }, [pagination])


  const columns = [
    columnHelper.accessor("id", { header: "id" }),
    columnHelper.accessor("marketplace_id", { header: "marketplace_id" }),
    columnHelper.accessor("direction", { header: "direction" }),
    columnHelper.accessor("entity_type", { header: "entity_type" }),
    columnHelper.accessor("action", { header: "action" }),
    columnHelper.accessor("started_at", { header: "started_at" }),
    columnHelper.accessor("finished_at", {
      header: "finished_at",
      cell: ({ getValue }) => getValue() ?? "-",
    }),
    columnHelper.accessor("request_data", { 
      header: "request_data", 
      cell: ({ getValue }) => 
      <Text size="small" className="truncate max-w-[260px]">
        {String(getValue() ?? "")}
      </Text> 
      }),
    columnHelper.accessor("response_data", { 
      header: "response_data", 
      cell: ({ getValue }) => 
      <Text size="small" className="truncate max-w-[260px]">
        {String(getValue() ?? "")}
        </Text> 
      })
  ]

  const table = useDataTable({
    columns,
    data: shownEvents,
    getRowId: (row) => row.id,
    rowCount: events?.length || 0,
    pagination: {
      state: pagination,
      onPaginationChange: setPagination,

    },
  })

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex flex-col">
          <Heading level="h1">Events</Heading>
        </div>
      </div>

      <DataTable instance={table}>
        <DataTable.Table />
        <DataTable.Pagination />
      </DataTable>
    </Container>
  )
}

export default MarketplaceEventsPage
