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
import type {
  AdminMarketplaceEventListResponse,
  MarketplaceEventDTO,
  AdminMarketplaceResponse
} from "../../../../../types"
import { useLoaderData } from "react-router-dom"
import { useQuery, useMutation } from "@tanstack/react-query"
import { sdk } from "../../../../lib/sdk"
import { getFullDate, getRelativeDate } from "../../../../utils"
import { Container } from "../../../common/container"
import { Header } from "../../../common/header"

const PAGE_SIZE = 5

// TODO: refactor to i18n
const useLocalDate = () => {
  return { getFullDate, getRelativeDate }
}

export const MarketplaceEventsSection = () => {
  const limit = PAGE_SIZE

  const { marketplace } = useLoaderData() as AdminMarketplaceResponse

  // TODO: reactor to listAndCount service factory method
  const { data } = useQuery<AdminMarketplaceEventListResponse>({
    queryKey: ["admin-marketplace-events", { limit, marketplace_id: marketplace.id }],
    queryFn: () =>
      sdk.client.fetch(`/admin/marketplaces/events`, {
        query: {
          limit,
          offset: 0,
          marketplace_id: marketplace.id,
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

  const events = (data?.events ?? []) as MarketplaceEventDTO[]
  const total = data?.count ?? 0
  const shown = events.length

  const items = events.map((event: MarketplaceEventDTO) => ({
    title: String((event as any).marketplace_id ?? "-"),
    timestamp:
      (event).finished_at ??
      (event as any).started_at ??
      (event as any).created_at,
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
          <Text size="small" className="text-ui-fg-subtle">
            No events yet
          </Text>
        )
        : (<div className="flex flex-col gap-y-0.5  px-6 py-4">
          {items.map((item, index) => (
            <EventsActivityItem
              key={index}
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
          <Text size="small" className="text-ui-fg-subtle">
            {shown} of {total} events
          </Text>
        </div>
      )}
    </Container>
  )
}

type EventsActivityItemProps = PropsWithChildren<{
  title: string
  timestamp: string | Date
  isFirst?: boolean
}>

const EventsActivityItem = ({
  title,
  timestamp,
  isFirst = false,
  children,
}: EventsActivityItemProps) => {
  const { getFullDate, getRelativeDate } = useLocalDate()

  return (
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
  )
}
