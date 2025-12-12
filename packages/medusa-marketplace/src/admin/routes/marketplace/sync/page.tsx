import { defineRouteConfig } from "@medusajs/admin-sdk"
import { CircleSolid } from "@medusajs/icons"
import {
  Button,
  Container,
  Text
} from "@medusajs/ui"
import { useState } from "react"
import { sdk } from "../../../lib/sdk"

const SyncMarketplacePage = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const syncWithMarketplace = async () => {
    setLoading(true)
    setError(null)
    setData(null)

    try {
      const response = await sdk.client.fetch("/admin/marketplaces/products/sync", {
        method: "POST",
        body: {
          provider_id: "mp_wildberries_test",
          ids: []
        }
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
      <Button onClick={syncWithMarketplace} disabled={loading}>
        {loading ? "Syncing..." : "Sync with marketplace"}
      </Button>

      <div className="px-6 py-4 space-y-3">
        {error && <Text className="text-ui-fg-error">Error: {error}</Text>}

        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "Sync with marketplaces",
  icon: CircleSolid
})

export default SyncMarketplacePage
