"use client"

import { defineRouteConfig } from "@medusajs/admin-sdk"
import { TagSolid } from "@medusajs/icons"
import { createDataTableColumnHelper, DataTable, useDataTable } from "@medusajs/ui";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { sdk } from "../../lib/sdk";

interface OzonExport {
  id: string;
  task_id: string;
  ozon_task_status: string;
  total: number;
  items: string;
  error_message: string;
  raw_result: string;
  last_checked_at: string;
  is_active: boolean;
}

interface OzonExportResponse {
  exports: OzonExport[];
  count: number;
}

const PAGE_SIZE = 20;

function OzonExportListTable() {
  const columnHelper = createDataTableColumnHelper<OzonExport>();

  const limit = PAGE_SIZE;
  const [pagination, setPagination] = useState({
    pageSize: limit,
    pageIndex: 0,
  });

  const { data, isLoading } = useQuery<OzonExportResponse>({
    queryFn: () =>
      sdk.client.fetch("/admin/ozon/exports", {
        query: { limit: 20, offset: 0 },
      }),
    queryKey: [["ozon_export"]],
  });

  console.log("Fetched data in component:", data);

  const columns = [
    columnHelper.accessor("task_id", { header: "Task ID" }),
    columnHelper.accessor("ozon_task_status", { header: "Ozon Task Status" }),
    columnHelper.accessor("total", { header: "Total" }),
    columnHelper.accessor("items", { header: "Items", cell: ({ getValue }) => JSON.stringify(getValue()) }),
    columnHelper.accessor("error_message", { header: "Error Message" }),
    columnHelper.accessor("raw_result", { header: "Raw Result" }),
    columnHelper.accessor("last_checked_at", { header: "Last Checked At" }),
    columnHelper.accessor("is_active", {
      header: "Status",
      cell: ({ getValue }) => {
        const isActive = getValue();
        return isActive ? "Active" : "Inactive";
      },
    }),
  ];

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
  });

  return (
    <DataTable instance={table}>
      <div className="header">
        <h1>Ozon Export</h1>
      </div>
      <DataTable.Table />
      <DataTable.Pagination />
    </DataTable>
  );
}

export default OzonExportListTable

export const config = defineRouteConfig({
  label: "Exports Table",
  icon: TagSolid,
})
