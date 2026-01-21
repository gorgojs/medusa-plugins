import { Container, Heading, Text, StatusBadge } from "@medusajs/ui"
import {
  LoaderFunctionArgs,
  UIMatch,
  useLoaderData,
} from "react-router-dom"
import { sdk } from "../../../../lib/sdk"
import { MarketplaceEditDrawer } from "../../../../components/routes/marketplaces/marketplace-list"
import type { MarketplaceResponse } from "../../../../types" 

const Breadcrumb = (
  props: UIMatch<MarketplaceResponse>
) => {
  const { marketplace } = props.data || {}
  if (!marketplace)
    return null

  return <span>{marketplace.provider_id}</span>
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params

  const response = await sdk.client.fetch(`/admin/marketplaces/${id}`)
  const marketplace = Array.isArray(response) ? response[0] : response

  if (!marketplace) throw new Response("Not found", { status: 404 })

  return { marketplace }
}


export const handle = {
  breadcrumb: (match: UIMatch<MarketplaceResponse>) => <Breadcrumb {...match} />,
}

const MarketplaceDetail = () => {
  const { marketplace } = useLoaderData() as MarketplaceResponse

  if (!marketplace) {
    return <Container className="p-6">Not found</Container>
  }

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <Text size="small" className="text-ui-fg-subtle">
            Marketplace provider
          </Text>
          <Heading level="h1">{marketplace.provider_id}</Heading>
        </div>

        <div className="flex items-center gap-x-2">
          <StatusBadge color={marketplace.is_active ? "green" : "red"}>
            {marketplace.is_active ? "Active" : "Inactive"}
          </StatusBadge>

          <MarketplaceEditDrawer marketplace={marketplace} />
        </div>
      </div>
    </Container>
  )
}

export default MarketplaceDetail
