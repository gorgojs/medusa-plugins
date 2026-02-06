import { Shopping } from "@medusajs/icons"
import { defineRouteConfig } from "@medusajs/admin-sdk"
import { TwoColumnLayout } from "../../../components/layout"
import { MarketplaceMappingSection } from "../../../components/routes/marketplaces/marketplace-detail"

const MarketplaceList = () => {

  return (
    <TwoColumnLayout
      firstCol={
        <MarketplaceMappingSection />
      }
      secondCol={
        <div>Second col</div>
      }
    />
  )
}

export const config = defineRouteConfig({
  label: "Marketplaces Mapping",
  icon: Shopping,
})

export const handle = {
  breadcrumb: () => "Marketplaces Mapping",
}

export default MarketplaceList

