import { defineRouteConfig } from "@medusajs/admin-sdk"
import { CircleSolid } from "@medusajs/icons"
import { Button, Container, Text } from "@medusajs/ui"
import { useState } from "react"
import { sdk } from "../../../lib/sdk"

const marketplaceId = "id_marketplace_id"

const getErrorMessage = (error: unknown, fallback: string) => {
  if (error instanceof Error) return error.message
  if (typeof error === "string") return error
  return fallback
}

const MarketplaceMappingPage = () => {
  const [medusaCategoriesResponse, setMedusaCategoriesResponse] = useState<any>(null)
  const [ozonCategoriesResponse, setOzonCategoriesResponse] = useState<any>(null)
  const [medusaCategoryResponse, setMedusaCategoryResponse] = useState<any>(null)
  const [ozonAttributesResponse, setOzonAttributesResponse] = useState<any>(null)

  const [medusaCategoryId, setMedusaCategoryId] = useState("")
  const [ozonDescriptionCategoryId, setOzonDescriptionCategoryId] = useState("")
  const [ozonTypeId, setOzonTypeId] = useState("")

  const [loadingMedusaCategories, setLoadingMedusaCategories] = useState(false)
  const [loadingOzonCategories, setLoadingOzonCategories] = useState(false)
  const [loadingMedusaCategory, setLoadingMedusaCategory] = useState(false)
  const [loadingOzonAttributes, setLoadingOzonAttributes] = useState(false)

  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const loadMedusaCategories = async () => {
    setLoadingMedusaCategories(true)
    setErrorMessage(null)

    try {
      const response = await sdk.client.fetch("/admin/product-categories", { method: "GET" })
      setMedusaCategoriesResponse(response)
    } catch (error) {
      setErrorMessage(getErrorMessage(error, "Failed to load Medusa categories"))
    } finally {
      setLoadingMedusaCategories(false)
    }
  }

  const loadOzonCategories = async () => {
    setLoadingOzonCategories(true)
    setErrorMessage(null)

    try {
      const response = await sdk.client.fetch(`/admin/ozon/${marketplaceId}/categories`, {
        method: "GET",
      })
      setOzonCategoriesResponse(response)
    } catch (error) {
      setErrorMessage(getErrorMessage(error, "Failed to load Ozon categories"))
    } finally {
      setLoadingOzonCategories(false)
    }
  }

  const loadMedusaCategory = async () => {
    if (!medusaCategoryId.trim()) {
      setErrorMessage("Medusa category id is required")
      return
    }

    setLoadingMedusaCategory(true)
    setErrorMessage(null)
    setMedusaCategoryResponse(null)

    try {
      const response = await sdk.client.fetch(`/admin/product-categories/${medusaCategoryId.trim()}`, {
        method: "GET",
      })
      setMedusaCategoryResponse(response)
    } catch (error) {
      setErrorMessage(getErrorMessage(error, "Failed to load Medusa category"))
    } finally {
      setLoadingMedusaCategory(false)
    }
  }

  const loadOzonAttributes = async () => {
    const descriptionCategoryId = Number(ozonDescriptionCategoryId)
    const typeId = Number(ozonTypeId)

    if (!descriptionCategoryId || !typeId) {
      setErrorMessage("description_category_id and type_id are required")
      return
    }

    setLoadingOzonAttributes(true)
    setErrorMessage(null)
    setOzonAttributesResponse(null)

    try {
      const url =
        `/admin/ozon/${marketplaceId}/attributes` +
        `?description_category_id=${encodeURIComponent(String(descriptionCategoryId))}` +
        `&type_id=${encodeURIComponent(String(typeId))}`

      const response = await sdk.client.fetch(url, { method: "GET" })
      setOzonAttributesResponse(response)
    } catch (error) {
      setErrorMessage(getErrorMessage(error, "Failed to load Ozon attributes"))
    } finally {
      setLoadingOzonAttributes(false)
    }
  }

  return (
    <Container className="divide-y p-0">
      <div className="px-6 py-4 flex flex-wrap items-center gap-2">
        <Button onClick={loadMedusaCategories} disabled={loadingMedusaCategories}>
          {loadingMedusaCategories ? "Loading..." : "Load Medusa categories"}
        </Button>

        <Button onClick={loadOzonCategories} disabled={loadingOzonCategories}>
          {loadingOzonCategories ? "Loading..." : "Load Ozon categories"}
        </Button>
      </div>

      <div className="px-6 py-4 space-y-8">
        {errorMessage && <Text className="text-ui-fg-error">Error: {errorMessage}</Text>}

        <div className="space-y-2">
          <Text size="small" weight="plus">
            Medusa category attributes
          </Text>

          <input
            className="w-full rounded-md border px-3 py-2"
            placeholder="pcat_..."
            value={medusaCategoryId}
            onChange={(event) => setMedusaCategoryId(event.currentTarget.value)}
          />

          <Button onClick={loadMedusaCategory} disabled={loadingMedusaCategory}>
            {loadingMedusaCategory ? "Loading..." : "Show Medusa category"}
          </Button>

          {medusaCategoryResponse && <pre>{JSON.stringify(medusaCategoryResponse, null, 2)}</pre>}
        </div>

        <div className="space-y-2">
          <Text size="small" weight="plus">
            Ozon category attributes
          </Text>

          <input
            className="w-full rounded-md border px-3 py-2"
            placeholder="description_category_id"
            value={ozonDescriptionCategoryId}
            onChange={(event) => setOzonDescriptionCategoryId(event.currentTarget.value)}
          />

          <input
            className="w-full rounded-md border px-3 py-2"
            placeholder="type_id"
            value={ozonTypeId}
            onChange={(event) => setOzonTypeId(event.currentTarget.value)}
          />

          <Button onClick={loadOzonAttributes} disabled={loadingOzonAttributes}>
            {loadingOzonAttributes ? "Loading..." : "Show Ozon attributes"}
          </Button>

          {ozonAttributesResponse && <pre>{JSON.stringify(ozonAttributesResponse, null, 2)}</pre>}
        </div>

        <div className="space-y-2">
          <Text size="small" weight="plus">
            Medusa categories raw
          </Text>
          {medusaCategoriesResponse && <pre>{JSON.stringify(medusaCategoriesResponse, null, 2)}</pre>}
        </div>

        <div className="space-y-2">
          <Text size="small" weight="plus">
            Ozon categories raw
          </Text>
          {ozonCategoriesResponse && <pre>{JSON.stringify(ozonCategoriesResponse, null, 2)}</pre>}
        </div>
      </div>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "Mapping for marketplaces",
  icon: CircleSolid,
})

export default MarketplaceMappingPage
