import {
  Container,
  Text,
  createDataTableColumnHelper,
  DataTable,
  DataTablePaginationState,
  useDataTable,
  Badge
} from "@medusajs/ui"
import { useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { sdk } from "../../../../lib/sdk"
import { Header } from "../../../common/header"
import { useNavigate } from "react-router-dom"
import type {
  AdminMarketplaceEventListResponse,
  MarketplaceEventDTO
} from "../../../../../types"
import { formatDateTime, jsonPreview } from "../../../../utils"

const PAGE_SIZE = 20

const columnHelper = createDataTableColumnHelper<MarketplaceEventDTO>()

const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: ({ getValue }) => {
      const id = getValue() as string
      return (
        <Badge size="xsmall">
          {id}
        </Badge>
      )
    },
  }),
  columnHelper.accessor("marketplace.id", {
    header: "Marketplace ID",
    cell: ({ getValue }) => {
      const marketplace_id = getValue() as string
      return (
        <Badge size="xsmall">
          {marketplace_id}
        </Badge>
      )
    },
  }),
  columnHelper.accessor("correlation_id", {
    header: "Correlation ID",
    cell: ({ getValue }) => {
      const correlation_id = getValue() as string
      return (
        <Badge size="xsmall">
          {correlation_id}
        </Badge>
      )
    },
  }),
  columnHelper.accessor("direction", {
    header: "Direction",
    cell: ({ getValue }) => {
      const direction = getValue() as string
      return (
        <Badge size="xsmall">
          {direction}
        </Badge>
      )
    },
  }),
  columnHelper.accessor("entity_type", {
    header: "Entity Type",
    cell: ({ getValue }) => {
      const entity_type = getValue() as string
      return (
        <Badge size="xsmall">
          {entity_type}
        </Badge>
      )
    },
  }),
  columnHelper.accessor("action", {
    header: "Action",
    cell: ({ getValue }) => {
      const action = getValue() as string
      return (
        <Badge size="2xsmall">
          {action}
        </Badge>
      )
    },
  }),
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

export const MarketplaceEventsTable = () => {
  const navigate = useNavigate()
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
    onRowClick: (_e, row) => {
      navigate(row.id)
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
