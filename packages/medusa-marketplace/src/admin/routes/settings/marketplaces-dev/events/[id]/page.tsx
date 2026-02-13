import {
  LoaderFunctionArgs,
  UIMatch,
  useLoaderData,
} from "react-router-dom"
import type {
  AdminMarketplaceEventResponse
} from "../../../../../../types"

import { sdk } from "../../../../../lib/sdk"
import { SingleColumnLayout } from "../../../../../components/layout"
import { OpenJsonSection } from "../../../../../components/common/open-json-section"
import { JsonViewSection } from "../../../../../components/common/json-view-section"
import { MarketplaceEventGeneralSection } from "../../../../../components/routes/marketplaces/marketplace-events-detail"

const MarketplaceEventDetail = () => {
  const { event } = useLoaderData() as AdminMarketplaceEventResponse

  return (
    <SingleColumnLayout>
      <MarketplaceEventGeneralSection />
      <OpenJsonSection title="Request" data={event.requestData ?? {}} />
      <OpenJsonSection title="Response" data={event.responseData ?? {}} />
      <JsonViewSection data={event} />
    </SingleColumnLayout>
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
