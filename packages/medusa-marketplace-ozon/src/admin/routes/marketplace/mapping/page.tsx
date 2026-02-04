import { useLoaderData } from "react-router-dom"
import { Shopping } from "@medusajs/icons"
import { defineRouteConfig } from "@medusajs/admin-sdk"
import { TwoColumnLayout } from "../../../components/layout"
import { MarketplaceMappingSection } from "../../../components/routes/marketplaces/marketplace-detail"
import { OZON_MARKETPLACE_ID } from "../../../components/routes/marketplaces/marketplace-detail/components/constants"
import { sdk } from "../../../lib/sdk"

const MarketplaceList = ()  => {
  const data = useLoaderData() as any
  const marketplace = data.marketplace

  return (
    <TwoColumnLayout
      firstCol={
        <MarketplaceMappingSection marketplace = {marketplace}/>
      }
      secondCol={
        <div>Second col</div>
      }
    />
  )
}

export const loader = async () => {
  const response = await sdk.client.fetch(`/admin/marketplaces/${OZON_MARKETPLACE_ID}`)
  return response
}

export const config = defineRouteConfig({
  label: "Marketplaces Mapping",
  icon: Shopping,
})

export default MarketplaceList
