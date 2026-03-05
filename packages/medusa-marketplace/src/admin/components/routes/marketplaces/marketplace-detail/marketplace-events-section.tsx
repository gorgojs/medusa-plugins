import { PropsWithChildren } from "react"
import {
  Text,
  Tooltip,
  clx,
  Button,
  DropdownMenu
} from "@medusajs/ui"
import {
  ArrowPath,
  CubeSolid,
  CurrencyDollar,
  HandTruck
} from "@medusajs/icons"
import { useQuery, useMutation } from "@tanstack/react-query"
import {
  Link
} from "react-router-dom"
import { sdk } from "../../../../lib/sdk"
import { getFullDate, getRelativeDate } from "../../../../utils"
import { Container } from "../../../common/container"
import { Header } from "../../../common/header"
import { MarketplaceHttpTypes } from "../../../../../types"

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
    <Link to={`/settings/marketplaces/events/${id}`}>
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

type MarketplaceEventsSectionProps = {
  marketplace: MarketplaceHttpTypes.AdminMarketplace
}

export const MarketplaceEventsSection = ({
  marketplace
}: MarketplaceEventsSectionProps) => {
  const limit = PAGE_SIZE

  // TODO: reactor to listAndCount service factory method
  const { data } = useQuery<MarketplaceHttpTypes.AdminMarketplaceEventListResponse>({
    queryKey: ["admin-marketplace-events", { limit, marketplace_id: marketplace.id }],
    queryFn: () =>
      sdk.client.fetch(`/admin/marketplaces/events`, {
        query: {
          limit,
          offset: 0,
          marketplace_id: marketplace.id,
          order: "-created_at"
        },
      }),
  })

  const syncProducts = useMutation({
    mutationFn: async () => {
      return sdk.client.fetch(`/admin/marketplaces/${marketplace.id}/products/sync`, {
        method: "POST",
        body: {
          ids: [],
        },
      })
    },
  })

  const marketplace_events = (data?.marketplace_events ?? []) as MarketplaceHttpTypes.AdminMarketplaceEvent[]
  const total = data?.count ?? 0
  const shown = marketplace_events.length

  const items = marketplace_events.map((marketplace_event: MarketplaceHttpTypes.AdminMarketplaceEvent) => ({
    id: marketplace_event.id,
    title: `${marketplace_event.action} ${marketplace_event.entity_type}`,
    timestamp:
      marketplace_event.started_at ??
      marketplace_event.created_at,
    children: null,
  }))

  return (
    <Container>
      <Header
        title="Events"
        actions={[
          {
            type: "custom",
            children: (
              <DropdownMenu>
                <DropdownMenu.Trigger asChild>
                  <Button size="small" variant="secondary">
                    <ArrowPath className="mr-1" />
                    Synchronize
                  </Button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content>
                  <DropdownMenu.Group>
                    <DropdownMenu.Item onClick={() => {
                      syncProducts.mutate()
                    }}>
                      <CubeSolid className="mr-1 text-ui-fg-subtle" />
                      Products
                    </DropdownMenu.Item>
                    <DropdownMenu.Item onClick={() => { }}>
                      <CurrencyDollar className="mr-1 text-ui-fg-subtle" />
                      Prices
                    </DropdownMenu.Item>
                    <DropdownMenu.Item onClick={() => { }}>
                      <HandTruck className="mr-1 text-ui-fg-subtle" />
                      Inventory
                    </DropdownMenu.Item>
                  </DropdownMenu.Group>

                  <DropdownMenu.Separator />

                  <DropdownMenu.Item onClick={() => { }}>
                    <ArrowPath className="mr-1 text-ui-fg-subtle" />
                    All
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu>
            ),
          },
        ]}
      />
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
          <Link to={`/settings/marketplaces/events/`}>
            <Button size="small" variant="transparent">
              Show all
            </Button>
          </Link>
        </div>
      )}
    </Container>
  )
}

