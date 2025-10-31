import { Container, Heading, Text, StatusBadge } from "@medusajs/ui"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query"
import { sdk } from "../../../../lib/sdk"
import { MarketplaceEditDrawer } from "../../../../components/routes/marketplaces/marketplace-list"

type Marketplace = {
  id: string
  provider_id: string
  credentials: Record<string, unknown>
  settings: Record<string, unknown>
  is_active: boolean
}
const queryClient = new QueryClient()

function MarketplaceDetailInner() {
  
  const qc = useQueryClient()

  const id = window.location.pathname.split("/").pop() || ""

  const { data, isLoading, isError } = useQuery({
    queryKey: ["admin-marketplace", id],
    enabled: Boolean(id),
    queryFn: async () => sdk.client.fetch(`/admin/marketplaces/${id}`),
  })

  const marketplace: Marketplace | undefined = Array.isArray(data)
    ? (data[0] as any)
    : (data as any)

  if (isLoading) return <Container className="p-6">Loading…</Container>
  if (isError || !marketplace) return <Container className="p-6">Not found</Container>

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <Text size="small" className="text-ui-fg-subtle">Marketplace provider</Text>
          <Heading level="h1">{marketplace.provider_id}</Heading>
        </div>

        <div className="flex items-center gap-x-2">
          <StatusBadge color={marketplace.is_active ? "green" : "red"}>
            {marketplace.is_active ? "Active" : "Inactive"}
          </StatusBadge>

          <MarketplaceEditDrawer
            marketplace={marketplace}
            onSaved={async () => {
              await qc.invalidateQueries({ queryKey: ["admin-marketplace", id] })
              await qc.invalidateQueries({ queryKey: ["admin-marketplaces"] })
            }}
          />
        </div>
      </div>
    </Container>
  )
}

export default function MarketplaceDetail() {
  return (
    <QueryClientProvider client={queryClient}>
      <MarketplaceDetailInner />
    </QueryClientProvider>
  )
}
