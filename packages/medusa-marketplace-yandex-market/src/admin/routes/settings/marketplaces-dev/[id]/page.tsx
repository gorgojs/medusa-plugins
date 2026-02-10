import {
  LoaderFunctionArgs,
  UIMatch,
} from "react-router-dom"
import { sdk } from "../../../../lib/sdk"
import type { AdminMarketplaceResponse } from "@gorgo/medusa-marketplace/types"
import {
  MarketplaceGeneralSection,
  MarketplaceEventsSection
 } from "../../../../components/routes/marketplaces/marketplace-detail"
import { TwoColumnLayout } from "../../../../components/layout"

const MarketplaceDetail = () => {
  return (
    <TwoColumnLayout
      firstCol={
        <MarketplaceGeneralSection />
      }
      secondCol={
        <MarketplaceEventsSection />
      }
    >
    </TwoColumnLayout>
  )
}

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

export default MarketplaceDetail
