import { Copy, Badge, Text } from "@medusajs/ui"
import {
  Link
} from "react-router-dom"
import type {
  MarketplaceHttpTypes
} from "../../../../../types"
import { Container } from "../../../common/container"
import { Header } from "../../../common/header"
import { SectionRow } from "../../../common/section-row"
import { formatDateTime } from "../../../../utils"

type MarketplaceEventGeneralSectionProps = {
  marketplace_event: MarketplaceHttpTypes.AdminMarketplaceEvent
}

export const MarketplaceEventGeneralSection = ({
  marketplace_event
}: MarketplaceEventGeneralSectionProps) => {
  return (
    <Container>
      <Header
        title={
          <div className="flex items-center gap-x-2">
            <span className="text-ui-fg-subtle text-small truncate">
              {marketplace_event.id}
            </span>
            <Copy content={marketplace_event.id} />
          </div>
        }
        actions={[]}
      />

      <SectionRow title="Marketplace ID"
        value={
          marketplace_event?.marketplace_id
            ? (
              <Link to={`/settings/marketplaces/${marketplace_event.marketplace_id}`}>
                <Badge size="xsmall" color="grey">
                  <Text size="xsmall" className="text-ui-fg-subtle">{marketplace_event.marketplace_id}</Text>
                </Badge>
              </Link>
            )
            : "-"
        }
      />
      <SectionRow title="Correlation ID"
        value={
          marketplace_event?.correlation_id
            ? (
              <Link to={`/settings/marketplaces/events/${marketplace_event.correlation_id}`}>
                <Badge size="xsmall" color="grey">
                  <Text size="xsmall" className="text-ui-fg-subtle">{marketplace_event.correlation_id}</Text>
                </Badge>
              </Link>
            )
            : "-"
        }
      />
      <SectionRow title="Direction"
        value={
          marketplace_event?.direction
            ? (
              <Badge size="xsmall" color="grey">
                <Text size="xsmall" className="text-ui-fg-subtle">{marketplace_event.direction}</Text>
              </Badge>
            )
            : "-"
        }
      />
      <SectionRow title="Entity type"
        value={
          marketplace_event?.entity_type
            ? (
              <Badge size="xsmall" color="grey">
                <Text size="xsmall" className="text-ui-fg-subtle">{marketplace_event.entity_type}</Text>
              </Badge>
            )
            : "-"
        }
      />
      <SectionRow title="Action"
        value={
          marketplace_event?.action
            ? (
              <Badge size="xsmall" color="grey">
                <Text size="xsmall" className="text-ui-fg-subtle">{marketplace_event.action}</Text>
              </Badge>
            )
            : "-"
        }
      />
      <SectionRow
        title="Started"
        value={marketplace_event.started_at ? formatDateTime(marketplace_event.started_at) : "-"}
      />
      <SectionRow
        title="Finished"
        value={marketplace_event.finished_at ? formatDateTime(marketplace_event.finished_at) : "-"}
      />
    </Container>
  )
}
