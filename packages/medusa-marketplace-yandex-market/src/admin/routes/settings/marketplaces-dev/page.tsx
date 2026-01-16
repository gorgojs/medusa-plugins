import { Container, useToggleState } from "@medusajs/ui"
import { Shopping } from "@medusajs/icons"
import { defineRouteConfig } from "@medusajs/admin-sdk"
import {
  MarketplaceAddModal,
  MarketplaceListTable,
} from "../../../components/routes/marketplaces/marketplace-list"
import { SingleColumnLayout } from "../../../components/layout"

const MarketplaceList = () => {
  const [stateModal, openModal, closeModal] = useToggleState()

  return (
    <SingleColumnLayout>
      <Container className="p-0">
        <MarketplaceListTable
          stateModal={stateModal}
          openModal={openModal}
        />
        <MarketplaceAddModal
          stateModal={stateModal}
          closeModal={closeModal}
        />
      </Container>
    </SingleColumnLayout>
  )
}

export const config = defineRouteConfig({
  label: "Marketplaces Dev",
  icon: Shopping,
})

export const handle = {
  breadcrumb: () => "Marketplaces",
}

export default MarketplaceList

