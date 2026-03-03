import { defineRouteConfig } from "@medusajs/admin-sdk"
import { MarketplaceEventsTable } from "../../../../components/routes/marketplaces/marketplace-events-list"
import { SingleColumnPageWithWidgets } from "../../../../components/layout"
import { WidgetProvider } from "../../../../providers/widget-provider"

const MarketplaceEventsList = () => {

  return (
    <WidgetProvider>
      <SingleColumnPageWithWidgets
        widgets={{
          before: "marketplace_event.list.before",
          after: "marketplace_event.list.after"
        }}
      >
        <MarketplaceEventsTable />
      </SingleColumnPageWithWidgets>
    </WidgetProvider>
  )
}

export const config = defineRouteConfig({
  label: "Events",
})

export const handle = {
  breadcrumb: () => "Events"
}

export default MarketplaceEventsList

