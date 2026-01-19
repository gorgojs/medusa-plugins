import { Container, Heading, Text, StatusBadge } from "@medusajs/ui"
import { useQuery } from "@tanstack/react-query"
import { sdk } from "../../../../lib/sdk"
import { MarketplaceEditDrawer } from "../../../../components/routes/marketplaces/marketplace-list"
import { AdminMarketplaceResponse } from "../../../../../api/types"

type Marketplace = {
  id: string
  provider_id: string
  credentials: Record<string, unknown>
  settings: Record<string, unknown>
  is_active: boolean
}

const MarketplaceDetail = () => {

  const id = window.location.pathname.split("/").pop() || ""

  const { data, isLoading, isError } = useQuery<AdminMarketplaceResponse>({
    queryKey: ["admin-marketplace", id],
    enabled: Boolean(id),
    queryFn: async () => sdk.client.fetch(`/admin/marketplaces/${id}`),
  })

  const marketplace: Marketplace | undefined = data?.marketplace

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
          />
        </div>
      </div>
    </Container>
  )
}

export default MarketplaceDetail
