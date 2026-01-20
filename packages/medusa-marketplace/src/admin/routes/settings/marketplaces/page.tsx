import { Container, useToggleState } from "@medusajs/ui"
import { Shopping } from "@medusajs/icons"
import { defineRouteConfig } from "@medusajs/admin-sdk"
import {
  MarketplaceAddModal,
  MarketplaceListTable,
} from "../../../components/routes/marketplaces"
import { SingleColumnLayout } from "../../../components/layout"
import { widgetsAppInstance } from "../../../../modules/marketplace/utils/widgets-app-instance"

const MarketplaceList = () => {
  const [stateModal, openModal, closeModal] = useToggleState()
  const { getWidgets } = widgetsAppInstance.api

  console.log("getWidget(before): ", getWidgets("settings.marketplaces.list.before"))
  console.log("getWidget(after): ", getWidgets("settings.marketplaces.list.after"))


  return (
    <SingleColumnLayout widgets={{
        before: getWidgets("settings.marketplaces.list.before"),
        after: getWidgets("settings.marketplaces.list.after")
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

