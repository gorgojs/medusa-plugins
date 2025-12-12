import { defineRouteConfig } from "@medusajs/admin-sdk"
import { CreditCardSolid } from "@medusajs/icons"
import {
  Button,
  Container,
  Text
} from "@medusajs/ui"
import { useState } from "react"
import { sdk } from "../../../lib/sdk"

const AddMarketplacePage = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const addMarketplace = async () => {
    setLoading(true)
    setError(null)
    setData(null)

    try {
      const response = await sdk.client.fetch("/admin/marketplaces/", {
        method: "POST",
        body: {
          data: {
            provider_id: "wildberries",
            credentials: {},
            settings: {},
            is_active: true
          }
        }
      })
      setData(response)
    } catch (err: any) {
      setError(err?.message ?? "Error during creating")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container className="divide-y p-0">
      <Button onClick={addMarketplace} disabled={loading}>
        {loading ? "Adding..." : "add marketplace"}
      </Button>

      <div className="px-6 py-4 space-y-3">
        {error && <Text className="text-ui-fg-error">Error: {error}</Text>}

        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "Add marketplace",
  icon: CreditCardSolid
})

export default AddMarketplacePage
