const KEY = "ym_marketplace_events_v1"

export type MarketplaceEvent = {
  id: string
  marketplace_id: string
  direction: "in" | "out"
  entity_type: string
  action: string
  started_at: string
  finished_at: string | null
  request_data: unknown
  response_data: unknown
}

const read = (): MarketplaceEvent[] => {
  const raw = localStorage.getItem(KEY)
  return raw ? (JSON.parse(raw) as MarketplaceEvent[]) : []
}

const write = (items: MarketplaceEvent[]) => {
  localStorage.setItem(KEY, JSON.stringify(items))
}

const seedIfEmpty = () => {
  const items = read()
  if (items.length) return

  const now = new Date()
  const iso = (d: Date) => d.toISOString()

  write([
    {
      id: crypto.randomUUID(),
      marketplace_id: "demo-marketplace-1",
      direction: "out",
      entity_type: "order",
      action: "export",
      started_at: iso(new Date(now.getTime() - 60_000)),
      finished_at: iso(new Date(now.getTime() - 30_000)),
      request_data: { order_id: "order_1" },
      response_data: { status: "ok" },
    },
    {
      id: crypto.randomUUID(),
      marketplace_id: "demo-marketplace-2",
      direction: "in",
      entity_type: "product",
      action: "import",
      started_at: iso(new Date(now.getTime() - 120_000)),
      finished_at: null,
      request_data: { page: 1 },
      response_data: { status: "processing" },
    },
  ])
}

export const marketplaceEventsStore = {
  list(): MarketplaceEvent[] {
    seedIfEmpty()
    return read()
  },
}
