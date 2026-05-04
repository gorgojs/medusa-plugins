import { defineRouteConfig } from "@medusajs/admin-sdk"
import { IntegrationEventsTable } from "../../../../components/routes/integrations/integration-events-list"
import { SingleColumnPageWithWidgets } from "../../../../components/layout"
import { WidgetProvider } from "../../../../providers/widget-provider"

const IntegrationEventsList = () => {
  return (
    <WidgetProvider>
      <SingleColumnPageWithWidgets
        widgets={{
          before: "integration_event.list.before",
          after: "integration_event.list.after"
        }}
      >
        <IntegrationEventsTable />
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

export default IntegrationEventsList

