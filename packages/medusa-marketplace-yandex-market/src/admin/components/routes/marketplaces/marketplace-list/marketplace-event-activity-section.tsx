import { PropsWithChildren, useMemo, useState } from "react"
import { Text, Tooltip, clx } from "@medusajs/ui"
import { Collapsible as RadixCollapsible } from "radix-ui"
import type {
  AdminMarketplaceEventListResponse,
  MarketplaceEventDTO
} from "@gorgo/medusa-marketplace/types"
import { useQuery } from "@tanstack/react-query"
import { sdk } from "../../../../lib/sdk"
import { getFullDate } from "../../../../utils"
import { Activity } from "../../../../types"

const PAGE_SIZE = 20

const useLocalDate = () => {
  const getRelativeDate = (date: string | Date) => {
    const d = typeof date === "string" ? new Date(date) : date
    const diffMs = Date.now() - d.getTime()
    const sec = Math.max(0, Math.floor(diffMs / 1000))
    const min = Math.floor(sec / 60)
    const hr = Math.floor(min / 60)
    const day = Math.floor(hr / 24)

    if (sec < 30) return "just now"
    if (min < 1) return "less than a minute ago"
    if (min === 1) return "about 1 minute ago"
    if (min < 60) return `about ${min} minutes ago`
    if (hr === 1) return "about 1 hour ago"
    if (hr < 24) return `about ${hr} hours ago`
    if (day === 1) return "about 1 day ago"
    return `about ${day} days ago`
  }

  return { getFullDate, getRelativeDate }
}

export const EventActivity = ({
  marketplace_id,
}: {
  marketplace_id?: string
}) => {
  const limit = PAGE_SIZE
  const [pageIndex] = useState(0)
  const offset = useMemo(() => pageIndex * limit, [pageIndex, limit])

  const { data } = useQuery<AdminMarketplaceEventListResponse>({
    queryKey: ["admin-marketplace-events", { limit, offset, marketplace_id }],
    queryFn: () =>
      sdk.client.fetch(`/admin/marketplaces/events`, {
        query: {
          limit,
          offset,
          marketplace_id: marketplace_id || undefined
        },
      }),
  })

  const events = (data?.events ?? []) as MarketplaceEventDTO[]

  const items = useMemo<Activity[]>(() => {
    return events.map((event: MarketplaceEventDTO) => ({
      title: String((event as any).marketplace_id ?? "-"),
      timestamp:
        (event as any).created_at ??
        (event as any).started_at ??
        (event).finished_at ??
        new Date(),
      children: null,
    }))
  }, [events])


  if (items.length === 0) {
    return (
      <Text size="small" className="text-ui-fg-subtle">
        No events yet
      </Text>
    )
  }

  if (items.length <= 3) {
    return (
      <div className="flex flex-col gap-y-0.5">
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
      </div>
    )
  }

  const lastItems = items.slice(0, 2)
  const collapsibleItems = items.slice(2, items.length - 1)
  const firstItem = items[items.length - 1]

  return (
    <div className="flex flex-col gap-y-0.5">
      {lastItems.map((item, index) => (
        <EventsActivityItem
          key={index}
          title={item.title}
          timestamp={item.timestamp}
        >
          {item.children}
        </EventsActivityItem>
      ))}

      <EventsActivityItemCollapsible activities={collapsibleItems} />

      <EventsActivityItem
        title={firstItem.title}
        timestamp={firstItem.timestamp}
        isFirst
      >
        {firstItem.children}
      </EventsActivityItem>
    </div>
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

const EventsActivityItemCollapsible = ({ activities }: { activities: Activity[] }) => {
  const [open, setOpen] = useState(false)

  return (
    <RadixCollapsible.Root open={open} onOpenChange={setOpen}>
      {!open && (
        <div className="grid grid-cols-[20px_1fr] items-start gap-2">
          <div className="flex size-full flex-col items-center">
            <div className="border-ui-border-strong w-px flex-1 bg-[linear-gradient(var(--border-strong)_33%,rgba(255,255,255,0)_0%)] bg-[length:1px_3px] bg-right bg-repeat-y" />
          </div>
          <div className="pb-4">
            <RadixCollapsible.Trigger className="text-left">
              <Text
                size="small"
                leading="compact"
                weight="plus"
                className="text-ui-fg-muted"
              >
                Show {activities.length} more activities
              </Text>
            </RadixCollapsible.Trigger>
          </div>
        </div>
      )}

      <RadixCollapsible.Content>
        <div className="flex flex-col gap-y-0.5">
          {activities.map((item, index) => (
            <EventsActivityItem
              key={index}
              title={item.title}
              timestamp={item.timestamp}
            >
              {item.children}
            </EventsActivityItem>
          ))}
        </div>
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>
  )
}
