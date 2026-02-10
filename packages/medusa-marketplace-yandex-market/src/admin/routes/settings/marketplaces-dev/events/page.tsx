import {
  Container
} from "@medusajs/ui"
import { defineRouteConfig } from "@medusajs/admin-sdk"
import { EventsTable } from "../../../../components/routes/marketplaces/marketplace-list/marketplace-events-table"
import { SingleColumnLayout } from "../../../../components/layout"

export const config = defineRouteConfig({
  label: "Events",
})

export const handle = {
  breadcrumb: () => "Events"
}

const EventsList = () => {

  return (
    <SingleColumnLayout>
      <Container className="p-0">
        <EventsTable
        />
      </Container>
    </SingleColumnLayout>
  )
}

export default EventsList
