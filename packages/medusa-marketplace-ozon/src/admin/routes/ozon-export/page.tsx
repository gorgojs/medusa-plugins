"use client"

import { defineRouteConfig } from "@medusajs/admin-sdk"
import { TagSolid } from "@medusajs/icons"
import { Button, Container, Heading, Text } from "@medusajs/ui"
import { useState } from "react"

function OzonExportPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<any>(null)

  async function onLaunch() {
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const r = await fetch("/admin/ozon/product/import", {
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
    } catch (e: any) {
      setError(e?.message || "Export failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container className="p-0 divide-y">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">Ozon Product Import</Heading>
        <Button onClick={onLaunch} disabled={loading}>
          {loading ? "Importing…" : "Launch Product Import"}
        </Button>
      </div>

      <div className="px-6 py-4 space-y-3">
        <Text size="small" className="text-ui-fg-subtle">
          Triggers workflow that imports products to Ozon.
        </Text>

        {error && <Text className="text-ui-fg-error">Error: {error}</Text>}

        {result && (
          <div className="border rounded-md p-3 text-xs overflow-auto">
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </Container>
  )
}

export default OzonExportPage

export const config = defineRouteConfig({
  label: "Import",
  icon: TagSolid,
})
