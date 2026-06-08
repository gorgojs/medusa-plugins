import { PropsWithChildren } from "react"
import {
  Text,
  Tooltip,
  clx,
  Button,
} from "@medusajs/ui"
import { useQuery } from "@tanstack/react-query"
import {
  Link
} from "react-router-dom"
import { sdk } from "../../../../lib/sdk"
import { getFullDate, getRelativeDate } from "../../../../utils"
import { Container } from "../../../common/container"
import { Header } from "../../../common/header"
import { IntegrationHttpTypes } from "../../../../../types"

const PAGE_SIZE = 5

type EventsActivityItemProps = PropsWithChildren<{
  id: string
  title: string
  timestamp: string | Date
  isFirst?: boolean
}>

const EventsActivityItem = ({
  id,
  title,
  timestamp,
  isFirst = false,
  children,
}: EventsActivityItemProps) => {
  const { getFullDate, getRelativeDate } = useLocalDate()

  return (
    <Link to={`/settings/integrations/events/${id}`}>
      <div className="grid grid-cols-[20px_1fr] items-start gap-2">
        <div className="flex size-full flex-col items-center gap-y-0.5">
          <div className="flex size-5 items-center justify-center">
            <div className="bg-ui-bg-base shadow-borders-base flex size-2.5 items-center justify-center rounded-full">
              <div className="bg-ui-tag-neutral-icon size-1.5 rounded-full" />
            </div>
          </div>

          {!isFirst && <div className="bg-ui-border-base w-px flex-1" />}
        </div>

        <div className={clx({ "pb-4": !isFirst })}>
          <div className="flex items-center justify-between">
            <Text size="small" leading="compact" weight="plus">
              {title}
            </Text>

            {timestamp && (
              <Tooltip content={getFullDate({ date: timestamp, includeTime: true })}>
                <Text
                  size="small"
                  leading="compact"
                  className="text-ui-fg-subtle text-right"
                >
                  {getRelativeDate(timestamp)}
                </Text>
              </Tooltip>
            )}
          </div>

          <div>{children}</div>
        </div>
      </div>
    </Link>
  )
}

// TODO: refactor to i18n
const useLocalDate = () => {
  return { getFullDate, getRelativeDate }
}

type IntegrationEventsSectionProps = {
  integration: IntegrationHttpTypes.AdminIntegration
}

export const IntegrationEventsSection = ({
  integration
}: IntegrationEventsSectionProps) => {
  const limit = PAGE_SIZE

  // TODO: reactor to listAndCount service factory method
  const { data } = useQuery<IntegrationHttpTypes.AdminIntegrationEventListResponse>({
    queryKey: ["admin-integration-events", { limit, integration_id: integration.id }],
    queryFn: () =>
      sdk.client.fetch(`/admin/integrations/events`, {
        query: {
          limit,
          offset: 0,
          integration_id: integration.id,
          order: "-created_at"
        },
      }),
  })

  const integration_events = (data?.integration_events ?? []) as IntegrationHttpTypes.AdminIntegrationEvent[]
  const total = data?.count ?? 0
  const shown = integration_events.length

  const items = integration_events.map((integration_event: IntegrationHttpTypes.AdminIntegrationEvent) => ({
    id: integration_event.id,
    title: `${integration_event.action} ${integration_event.entity_type}`,
    timestamp:
      integration_event.started_at ??
      integration_event.created_at,
    children: null,
  }))

  return (
    <Container>
      <Header title="Events" />
      {items.length === 0 ?
        (
          <div className="flex items-center justify-between px-6 py-3 border-t border-ui-border-subtle">
            <Text size="small" className="text-ui-fg-subtle">
              No events yet
            </Text>
          </div>
        )
        : (<div className="flex flex-col gap-y-0.5  px-6 py-4">
          {items.map((item, index) => (
            <EventsActivityItem
              key={index}
              id={item.id}
              title={item.title}
              timestamp={item.timestamp}
              isFirst={index === items.length - 1}
            >
              {item.children}
            </EventsActivityItem>
          ))}
        </div>)
      }
      {total > 0 && (
        <div className="flex items-center justify-between px-6 py-3 border-t border-ui-border-subtle">
          <Text size="small" >
            <Text weight="plus" as="span">{shown} </Text>
            of
            <Text weight="plus" as="span"> {total} </Text>
            events
          </Text>
          <Link to={`/settings/integrations/events/`}>
            <Button size="small" variant="transparent">
              Show all
            </Button>
          </Link>
        </div>
      )}
    </Container>
  )
}

