import {
  LoaderFunctionArgs,
  UIMatch,
} from "react-router-dom"
import { sdk } from "../../../../lib/sdk"
import type { AdminMarketplaceResponse } from "@gorgo/medusa-marketplace/types"
import { Container } from "../../../../components/common/container"
import { MarketplaceDetailPage } from "../../../../components/routes/marketplaces/marketplace-list/marketplace-detail"
import { SingleColumnLayout } from "../../../../components/layout"

const Breadcrumb = (
  props: UIMatch<AdminMarketplaceResponse>
) => {
  const { marketplace } = props.data || {}
  if (!marketplace)
    return null

  return <span>{marketplace.title}</span>
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params

  const response = await sdk.client.fetch(`/admin/marketplaces/${id}`)

  return response
}

export const handle = {
  breadcrumb: (match: UIMatch<AdminMarketplaceResponse>) => <Breadcrumb {...match} />,
}

const MarketplaceDetail = () => {
  return (
    <SingleColumnLayout>
      <Container className="p-0">
        <MarketplaceDetailPage />
      </Container>
    </SingleColumnLayout>
  )
}

export default MarketplaceDetail
