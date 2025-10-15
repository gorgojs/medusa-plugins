import { useToggleState } from "@medusajs/ui"
import { defineRouteConfig } from "@medusajs/admin-sdk"
import {
  MarketplaceAddModal,
  MarketplaceListTable,
} from "../../../components/routes/marketplaces"
import { SingleColumnPageWithWidgets } from "../../../components/layout"
import { WidgetProvider } from "../../../providers/widget-provider"

const MarketplaceList = () => {
  const [stateModal, openModal, closeModal] = useToggleState()

  return (
    <WidgetProvider>
      <SingleColumnPageWithWidgets
        widgets={{
          before: "marketplace.list.before",
          after: "marketplace.list.after"
        }}
      >
        <MarketplaceListTable
          stateModal={stateModal}
          openModal={openModal}
        />
        <MarketplaceAddModal
          stateModal={stateModal}
          closeModal={closeModal}
        />
      </SingleColumnPageWithWidgets>
    </WidgetProvider>
  )
}

export const config = defineRouteConfig({
  label: "Marketplaces"
})

export const handle = {
  breadcrumb: () => "Marketplaces",
}

export default MarketplaceList

