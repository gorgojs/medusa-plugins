import { Copy, Badge, Text } from "@medusajs/ui"
import {
  Link
} from "react-router-dom"
import type {
  IntegrationHttpTypes
} from "../../../../../types"
import { Container } from "../../../common/container"
import { Header } from "../../../common/header"
import { SectionRow } from "../../../common/section-row"
import { formatDateTime } from "../../../../utils"

type IntegrationEventGeneralSectionProps = {
  integration_event: IntegrationHttpTypes.AdminIntegrationEvent
}

export const IntegrationEventGeneralSection = ({
  integration_event
}: IntegrationEventGeneralSectionProps) => {
  return (
    <Container>
      <Header
        title={
          <div className="flex items-center gap-x-2">
            <span className="text-ui-fg-subtle text-small truncate">
              {integration_event.id}
            </span>
            <Copy content={integration_event.id} />
          </div>
        }
        actions={[]}
      />

      <SectionRow title="Integration ID"
        value={
          integration_event?.integration_id
            ? (
              <Link to={`/settings/integrations/${integration_event.integration_id}`}>
                <Badge size="xsmall" color="grey">
                  <Text size="xsmall" className="text-ui-fg-subtle">{integration_event.integration_id}</Text>
                </Badge>
              </Link>
            )
            : "-"
        }
      />
      <SectionRow title="Correlation ID"
        value={
          integration_event?.correlation_id
            ? (
              <Link to={`/settings/integrations/events/${integration_event.correlation_id}`}>
                <Badge size="xsmall" color="grey">
                  <Text size="xsmall" className="text-ui-fg-subtle">{integration_event.correlation_id}</Text>
                </Badge>
              </Link>
            )
            : "-"
        }
      />
      <SectionRow title="Direction"
        value={
          integration_event?.direction
            ? (
              <Badge size="xsmall" color="grey">
                <Text size="xsmall" className="text-ui-fg-subtle">{integration_event.direction}</Text>
              </Badge>
            )
            : "-"
        }
      />
      <SectionRow title="Entity type"
        value={
          integration_event?.entity_type
            ? (
              <Badge size="xsmall" color="grey">
                <Text size="xsmall" className="text-ui-fg-subtle">{integration_event.entity_type}</Text>
              </Badge>
            )
            : "-"
        }
      />
      <SectionRow title="Action"
        value={
          integration_event?.action
            ? (
              <Badge size="xsmall" color="grey">
                <Text size="xsmall" className="text-ui-fg-subtle">{integration_event.action}</Text>
              </Badge>
            )
            : "-"
        }
      />
      <SectionRow
        title="Started"
        value={integration_event.started_at ? formatDateTime(integration_event.started_at) : "-"}
      />
      <SectionRow
        title="Finished"
        value={integration_event.finished_at ? formatDateTime(integration_event.finished_at) : "-"}
      />
    </Container>
  )
}
