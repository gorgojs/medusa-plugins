import { Container, Heading } from "@medusajs/ui"
import { Shopping } from "@medusajs/icons"
import { defineRouteConfig } from "@medusajs/admin-sdk"
import { AddMarketplaceModal } from "../../../components/routes/marketplaces"

const MarketplaceList = () => {
  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h1">Marketplaces</Heading>
        <AddMarketplaceModal />
      </div>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "Marketplaces",
  icon: Shopping,
})

export default MarketplaceList
