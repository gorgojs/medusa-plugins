import {
  LoaderFunctionArgs,
  UIMatch,
  useLoaderData,
} from "react-router-dom"
import { SingleColumnPageWithWidgets } from "../../../../../components/layout"
import { WidgetProvider } from "../../../../../providers/widget-provider"
import type {
  AdminMarketplaceEventResponse
} from "../../../../../../types"
import { sdk } from "../../../../../lib/sdk"
import { OpenJsonSection } from "../../../../../components/common/open-json-section"
import { MarketplaceEventGeneralSection } from "../../../../../components/routes/marketplaces/marketplace-events-detail"

const MarketplaceEventDetail = () => {
  const { marketplace_event } = useLoaderData() as AdminMarketplaceEventResponse

  return (
    <WidgetProvider>
      <SingleColumnPageWithWidgets
        widgets={{
          before: "marketplace_event.list.before",
          after: "marketplace_event.list.after"
        }}
        data={marketplace_event}
        showJSON={true}
      >
        <MarketplaceEventGeneralSection marketplace_event={marketplace_event} />
        <OpenJsonSection title="Request" data={marketplace_event.request_data ?? {}} />
        <OpenJsonSection title="Response" data={marketplace_event.response_data ?? {}} />
      </SingleColumnPageWithWidgets>
    </WidgetProvider>
  )
}

const Breadcrumb = (
  props: UIMatch<AdminMarketplaceEventResponse>
) => {
  const { marketplace_event } = props.data || {}
  if (!marketplace_event)
    return null

  return <span>{marketplace_event.id}</span>
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params
  const response = await sdk.client.fetch(`/admin/marketplaces/events/${id}`)

  return response
}

export const handle = {
  breadcrumb: (match: UIMatch<AdminMarketplaceEventResponse>) => <Breadcrumb {...match} />,
}

export default MarketplaceEventDetail

