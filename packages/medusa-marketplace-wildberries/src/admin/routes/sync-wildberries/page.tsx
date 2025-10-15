import { defineRouteConfig } from "@medusajs/admin-sdk"
import { CircleSolid } from "@medusajs/icons"
import {
  Button,
  Container,
  Text
} from "@medusajs/ui"
import { useState } from "react"
import { sdk } from "../../lib/sdk"

const SyncWildberriesPage = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const syncWithWB = async () => {
    setLoading(true)
    setError(null)
    setData(null)

    try {
      const response = await sdk.client.fetch("/admin/marketplace/wildberries/products/sync", {
        method: "POST",
      })
      setData(response)
    } catch (err: any) {
      setError(err?.message ?? "Error during syncing")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container className="divide-y p-0">
      <Button onClick={syncWithWB} disabled={loading}>
        {loading ? "Syncing..." : "Sync with Wildberries"}
      </Button>

      <div className="px-6 py-4 space-y-3">
        {error && <Text className="text-ui-fg-error">Error: {error}</Text>}

        {data && <Text>Sync result: {JSON.stringify(data)}</Text>}
      </div>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "Sync with WB",
  icon: CircleSolid
})

export default SyncWildberriesPage
