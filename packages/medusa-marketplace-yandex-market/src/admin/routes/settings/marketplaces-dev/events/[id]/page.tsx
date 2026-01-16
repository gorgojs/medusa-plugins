import { Copy, Badge, Text } from "@medusajs/ui"
import {
  LoaderFunctionArgs,
  UIMatch,
  useLoaderData,
  Link
} from "react-router-dom"
import type {
  AdminEventResponse
} from "@gorgo/medusa-marketplace/types"
import { sdk } from "../../../../../lib/sdk"
import { Container } from "../../../../../components/common/container"
import { Header } from "../../../../../components/common/header"
import { SectionRow } from "../../../../../components/common/section-row"
import { OpenJsonSection } from "../../../../../components/common/open-json-section"
import { JsonViewSection } from "../../../../../components/common/json-view-section"

const Breadcrumb = (
  props: UIMatch<AdminEventResponse>
) => {
  const { event } = props.data || {}
  if (!event)
    return null

  return <span>{event.id}</span>
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params

  const response = await sdk.client.fetch(`/admin/marketplaces/events/${id}`)

  return response
}

export const handle = {
  breadcrumb: (match: UIMatch<AdminEventResponse>) => <Breadcrumb {...match} />,
}

const MarketplaceEventDetail = () => {
  const { event } = useLoaderData() as AdminEventResponse

  return (
    <div className="flex flex-col gap-y-4">
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
        <SectionRow title="Started" value={event.started_at} />
        <SectionRow title="Finished" value={event.finished_at} />
      </Container>

      <OpenJsonSection title="Request" data={event.request_data} />
      <OpenJsonSection title="Response" data={event.response_data} />

      <Container>
        <JsonViewSection data={event} />
      </Container>
    </div>
  )
}

export default MarketplaceEventDetail
