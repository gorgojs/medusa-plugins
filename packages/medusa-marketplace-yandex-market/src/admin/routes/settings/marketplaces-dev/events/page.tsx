import { defineRouteConfig } from "@medusajs/admin-sdk"
import { MarketplaceEventsTable } from "../../../../components/routes/marketplaces/marketplace-events-list"
import { SingleColumnLayout } from "../../../../components/layout"

const MarketplaceEventsList = () => {
  return (
    <SingleColumnLayout>
      <MarketplaceEventsTable/>
    </SingleColumnLayout>
  )
}

export const config = defineRouteConfig({
  label: "Events",
})

export const handle = {
  breadcrumb: () => "Events"
}

export default MarketplaceEventsList
