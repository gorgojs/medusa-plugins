import { Copy, Badge, Text } from "@medusajs/ui"
import {
  LoaderFunctionArgs,
  UIMatch,
  useLoaderData,
  Link
} from "react-router-dom"
import type {
  AdminEventResponse
} from "@gorgo/medusa-marketplace/types"
import { sdk } from "../../../../../lib/sdk"
import { Container } from "../../../../../components/common/container"
import { Header } from "../../../../../components/common/header"
import { SectionRow } from "../../../../../components/common/section-row"
import { OpenJsonSection } from "../../../../../components/common/open-json-section"
import { JsonViewSection } from "../../../../../components/common/json-view-section"
import { MarketplaceEventDetailPage } from "../../../../../components/routes/marketplaces/marketplace-list/marketplace-event-detail"

const Breadcrumb = (
  props: UIMatch<AdminEventResponse>
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
  breadcrumb: (match: UIMatch<AdminEventResponse>) => <Breadcrumb {...match} />,
}

const MarketplaceEventDetail = () => {
  return (
      <Container>
        <Container className="p-0">
          <MarketplaceEventDetailPage
          />
        </Container>
      </Container>
    )
}

export default MarketplaceEventDetail
