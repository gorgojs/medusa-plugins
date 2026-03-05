
import {
  LoaderFunctionArgs,
  UIMatch,
  useLoaderData
} from "react-router-dom"
import { sdk } from "../../../../lib/sdk"
import type { AdminMarketplaceResponse } from "../../../../../types"
import {
  MarketplaceGeneralSection,
  MarketplaceEventsSection
} from "../../../../components/routes/marketplaces/marketplace-detail"
import { TwoColumnPageWithWidgets } from "../../../../components/layout"
import { WidgetProvider } from "../../../../providers/widget-provider"

const MarketplaceDetail = () => {
  const { marketplace } = useLoaderData() as AdminMarketplaceResponse

  return (
    <WidgetProvider>
      <TwoColumnPageWithWidgets
        widgets={{
          before: "marketplace.details.before",
          after: "marketplace.details.after",
          sideBefore: "marketplace.details.side.before",
          sideAfter: "marketplace.details.side.after",
        }}
        data={marketplace}
        showJSON={true}
        firstCol={
          <MarketplaceGeneralSection marketplace={marketplace} />
        }
        secondCol={
          <MarketplaceEventsSection marketplace={marketplace}/>
        }
      />
    </WidgetProvider>
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
