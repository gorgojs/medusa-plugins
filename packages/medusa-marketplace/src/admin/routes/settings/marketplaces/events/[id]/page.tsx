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
import { JsonViewSection } from "../../../../../components/common/json-view-section"
import { MarketplaceEventGeneralSection } from "../../../../../components/routes/marketplaces/marketplace-events-detail"

const MarketplaceEventDetail = () => {
  const { event } = useLoaderData() as AdminMarketplaceEventResponse

  return (
    <WidgetProvider>
      <SingleColumnPageWithWidgets
        widgets={{
          before: "marketplace_event.list.before",
          after: "marketplace_event.list.after"
        }}
      >
        <MarketplaceEventGeneralSection />
        <OpenJsonSection title="Request" data={event.request_data ?? {}} />
        <OpenJsonSection title="Response" data={event.response_data ?? {}} />
        <JsonViewSection data={event} />
      </SingleColumnPageWithWidgets>
    </WidgetProvider>
  )
}

const Breadcrumb = (
  props: UIMatch<AdminMarketplaceEventResponse>
) => {
  const { event } = props.data || {}
  if (!event)
    return null

  return <span>{event.id}</span>
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

