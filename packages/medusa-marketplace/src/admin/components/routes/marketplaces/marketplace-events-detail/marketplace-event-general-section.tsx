import { Copy, Badge, Text } from "@medusajs/ui"
import {
  useLoaderData,
  Link
} from "react-router-dom"
import type {
  AdminMarketplaceEventResponse
} from "../../../../../types"
import { Container } from "../../../common/container"
import { Header } from "../../../common/header"
import { SectionRow } from "../../../common/section-row"
import { formatDateTime } from "../../../../utils"


export const MarketplaceEventGeneralSection = () => {
  const { event } = useLoaderData() as AdminMarketplaceEventResponse

  return (
    <Container>
      <Header
        title={
          <div className="flex items-center gap-x-2">
            <span className="text-ui-fg-subtle text-small truncate">
              {event.id}
            </span>
            <Copy content={event.id} />
          </div>
        }
        actions={[]}
      />

      <SectionRow title="Marketplace ID"
        value={
          event?.marketplace_id
            ? (
              <Link to={`/settings/marketplaces-dev/${event.marketplace_id}`}>
                <Badge size="xsmall" color="grey">
                  <Text size="xsmall" className="text-ui-fg-subtle">{event.marketplace_id}</Text>
                </Badge>
              </Link>
            )
            : "-"
        }
      />
      <SectionRow title="Correlation ID"
        value={
          event?.correlation_id
            ? (
              <Link to={`/settings/marketplaces-dev/events/${event.correlation_id}`}>
                <Badge size="xsmall" color="grey">
                  <Text size="xsmall" className="text-ui-fg-subtle">{event.correlation_id}</Text>
                </Badge>
              </Link>
            )
            : "-"
        }
      />
      <SectionRow title="Direction"
        value={
          event?.direction
            ? (
              <Badge size="xsmall" color="grey">
                <Text size="xsmall" className="text-ui-fg-subtle">{event.direction}</Text>
              </Badge>
            )
            : "-"
        }
      />
      <SectionRow title="Entity type"
        value={
          event?.entity_type
            ? (
              <Badge size="xsmall" color="grey">
                <Text size="xsmall" className="text-ui-fg-subtle">{event.entity_type}</Text>
              </Badge>
            )
            : "-"
        }
      />
      <SectionRow title="Action"
        value={
          event?.action
            ? (
              <Badge size="xsmall" color="grey">
                <Text size="xsmall" className="text-ui-fg-subtle">{event.action}</Text>
              </Badge>
            )
            : "-"
        }
      />
      <SectionRow
        title="Started"
        value={event.started_at ? formatDateTime(event.started_at) : "-"}
      />
      <SectionRow
        title="Finished"
        value={event.finished_at ? formatDateTime(event.finished_at) : "-"}
      />
    </Container>
  )
}
