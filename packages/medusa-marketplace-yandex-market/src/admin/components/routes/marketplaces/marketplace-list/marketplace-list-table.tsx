import {
  createDataTableColumnHelper,
  DataTable,
  DataTablePaginationState,
  useDataTable,
  StatusBadge,
  Badge
} from "@medusajs/ui"
import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { Header } from "../../../common/header"
import { sdk } from "../../../../lib/sdk"
import type {
  AdminMarketplaceListResponse,
} from "@gorgo/medusa-marketplace/types"
import { MarketplaceActionMenu } from "./marketplace-action-menu"
import { MarketplaceEdit } from "./marketplace-edit"

const PAGE_SIZE = 20

const columnHelper = createDataTableColumnHelper<AdminMarketplaceListResponse>()

export const MarketplaceListTable = ({
  stateModal,
  openModal,
}: {
  stateModal: boolean
  openModal: () => void
}) => {
  const navigate = useNavigate()
  const [editOpen, setEditOpen] = useState(false)
  const [editingMarketplace] = useState<AdminMarketplaceListResponse | null>(null)

  const limit = PAGE_SIZE

  const [pagination, setPagination] = useState<DataTablePaginationState>({
    pageSize: limit,
    pageIndex: 0,
  })

  const offset = useMemo(
    () => pagination.pageIndex * limit,
    [pagination.pageIndex, limit]
  )

  const { data, isLoading } = useQuery<AdminMarketplaceListResponse>({
    queryFn: () =>
      sdk.client.fetch(`/admin/marketplaces`, {
        query: { limit, offset },
      }),
    queryKey: ["marketplaces", limit, offset],
  })

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
    columnHelper.accessor("title", { header: "Title" }),
    columnHelper.accessor("provider_id", { 
      header: "Provider ID" ,
      cell: ({ getValue }) => {
        const provider_id = getValue() as string

        return (
          <Badge size="xsmall">
            {provider_id}
          </Badge>
        )
      },
    }),
    columnHelper.accessor("is_enabled", {
      header: "Status",
      cell: ({ getValue }) => {
        const enabled = Boolean(getValue())
        return (
          <StatusBadge color={enabled ? "green" : "red"}>
            {enabled ? "Enabled" : "Disabled"}
          </StatusBadge>
        )
      },
    }),
    columnHelper.display({
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <div className="flex w-full justify-end" onClick={(e) => e.stopPropagation()}>
          <MarketplaceActionMenu
            marketplace={row.original}
            onEdit={() => navigate(row.original.id, { state: { openEdit: true } })}
          />
        </div>
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
      navigate(row.id)
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
              children: "Events",
              variant: "secondary",
              onClick: () => navigate("events"),
            },
          },
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

      {editingMarketplace && (
        <MarketplaceEdit
          response={{ marketplace: editingMarketplace }}
          open={editOpen}
          setOpen={setEditOpen}
        />
      )}
    </DataTable>
  )
}
