"use client"

import { defineRouteConfig } from "@medusajs/admin-sdk"
import { TagSolid } from "@medusajs/icons"
import {
  Button,
  Container,
  Heading,
  Text,
  createDataTableColumnHelper,
  DataTable,
  useDataTable,
} from "@medusajs/ui"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useMemo, useState } from "react"
import { sdk } from "../../lib/sdk"

interface OzonExport {
  id: string
  task_id: string
  ozon_task_status: string
  total: number
  items: string
  error_message: string
  raw_result: string
  last_checked_at: string
  is_active: boolean
}

interface OzonExportResponse {
  exports: OzonExport[]
  count: number
}

const PAGE_SIZE = 20

function stringifyMaybeJson(value: unknown, max = 160) {
  try {
    const parsed = typeof value === "string" ? JSON.parse(value) : value
    const s = JSON.stringify(parsed, null, 2)
    if (s.length > max) return s.slice(0, max) + "…"
    return s
  } catch {
    const s = String(value ?? "")
    return s.length > max ? s.slice(0, max) + "…" : s
  }
}

export default function OzonExportDashboard() {
  // Секция запуска импорта
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<any>(null)
  const queryClient = useQueryClient()

  async function onLaunch() {
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const r = await fetch("/admin/ozon/product/export", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
        credentials: "include",
      })

      const data = await r.json().catch(() => ({}))
      if (!r.ok) {
        throw new Error(typeof (data as any)?.error === "string" ? (data as any).error : "Export failed")
      }
      setResult(data)
      // Обновим таблицу после запуска
      queryClient.invalidateQueries({ queryKey: ["ozon_export"] })
    } catch (e: any) {
      setError(e?.message || "Export failed")
    } finally {
      setLoading(false)
    }
  }

  // Таблица экспортов
  const columnHelper = createDataTableColumnHelper<OzonExport>()

  const [pagination, setPagination] = useState({
    pageSize: PAGE_SIZE,
    pageIndex: 0,
  })

  const limit = pagination.pageSize
  const offset = useMemo(() => pagination.pageIndex * pagination.pageSize, [pagination])

  const { data, isLoading } = useQuery<OzonExportResponse>({
    queryKey: ["ozon_export", limit, offset],
    queryFn: () =>
      sdk.client.fetch("/admin/ozon/exports", {
        query: { limit, offset },
      })
  })

  const columns = useMemo(
    () => [
      columnHelper.accessor("task_id", { header: "Task ID" }),
      columnHelper.accessor("ozon_task_status", { header: "Ozon Task Status" }),
      columnHelper.accessor("total", { header: "Total" }),
      columnHelper.accessor("items", {
        header: "Items",
        cell: ({ getValue }) => (
          <code className="text-xs whitespace-pre-wrap break-words">
            {stringifyMaybeJson(getValue())}
          </code>
        ),
      }),
      columnHelper.accessor("error_message", {
        header: "Error Message",
        cell: ({ getValue }) => (
          <span className="text-ui-fg-error">{getValue() || "-"}</span>
        ),
      }),
      columnHelper.accessor("raw_result", {
        header: "Raw Result",
        cell: ({ getValue }) => (
          <code className="text-xs whitespace-pre-wrap break-words">
            {stringifyMaybeJson(getValue())}
          </code>
        ),
      }),
      columnHelper.accessor("last_checked_at", { header: "Last Checked At" }),
      columnHelper.accessor("is_active", {
        header: "Status",
        cell: ({ getValue }) => (getValue() ? "Active" : "Inactive"),
      }),
    ],
    [columnHelper]
  )

  const table = useDataTable({
    columns,
    data: data?.exports || [],
    getRowId: (row) => row.id,
    rowCount: data?.count || 0,
    isLoading,
    pagination: {
      state: pagination,
      onPaginationChange: setPagination,
    },
  })

  return (
    <Container className="p-0 divide-y">
      {/* Верхняя панель с запуском */}
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">Ozon Product Export</Heading>
        <Button onClick={onLaunch} disabled={loading}>
          {loading ? "Exporting…" : "Launch Product Export"}
        </Button>
      </div>

      {/* Описание + результат запуска */}
      <div className="px-6 py-4 space-y-3">
        <Text size="small" className="text-ui-fg-subtle">
          Triggers workflow that exports products to Ozon.
        </Text>

        {error && <Text className="text-ui-fg-error">Error: {error}</Text>}

        {result && (
          <div className="border rounded-md p-3 text-xs overflow-auto">
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>

      {/* Таблица экспортов */}
      <div className="px-6 py-4">
        <Heading level="h3" className="mb-2">
          Exports
        </Heading>

        <DataTable instance={table}>
          <DataTable.Table />
          <DataTable.Pagination />
        </DataTable>
      </div>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "Ozon Exports",
  icon: TagSolid,
})
