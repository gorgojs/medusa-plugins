import {
  Container,
  useToggleState
} from "@medusajs/ui"
import { Shopping } from "@medusajs/icons"
import { defineRouteConfig } from "@medusajs/admin-sdk"
import { useState } from "react"
import {
  MarketplaceAddModal,
  MarketplaceListTable
} from "../../components/routes/marketplaces/marketplace-list"
import { SingleColumnLayout } from "../../components/layout"
import type { Marketplace } from "../../types"


const MarketplaceList = () => {
  const [marketplaces, setMarketplaces] = useState<Marketplace[]>([])
  const [stateModal, openModal, closeModal] = useToggleState()

  return (
      <SingleColumnLayout>
        <Container className="p-0">
          <MarketplaceListTable stateModal={stateModal} openModal={openModal} marketplaces={marketplaces} />
          <MarketplaceAddModal stateModal={stateModal} closeModal={closeModal} marketplaces={marketplaces} setMarketplaces={setMarketplaces} />
        </Container>
      </SingleColumnLayout>
  )
}

export const config = defineRouteConfig({
  label: "Marketplaces",
  icon: Shopping,
})

export default MarketplaceList
