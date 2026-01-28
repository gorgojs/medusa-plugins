import { Container, useToggleState } from "@medusajs/ui"
import { Shopping } from "@medusajs/icons"
import { defineRouteConfig } from "@medusajs/admin-sdk"
import {
  MarketplaceAddModal,
  MarketplaceListTable,
} from "../../../components/routes/marketplaces"
import { SingleColumnLayout } from "../../../components/layout"
import AppExtension from "../../../components/layout/extension"

const MarketplaceList = () => {
  const [stateModal, openModal, closeModal] = useToggleState()

  return (
    <AppExtension>
      <SingleColumnLayout widgetsZone={{
          before: "settings.marketplaces.list.before",
          after: "settings.marketplaces.list.after"
      }}>
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
    </AppExtension>
  )
}

export const config = defineRouteConfig({
  label: "Marketplaces",
  icon: Shopping,
})

export const handle = {
  breadcrumb: () => "Marketplaces",
}

export default MarketplaceList

