import {
  LoaderFunctionArgs,
  UIMatch,
  useLoaderData,
} from "react-router-dom"
import { SingleColumnPageWithWidgets } from "../../../../../components/layout"
import { WidgetProvider } from "../../../../../providers/widget-provider"
import type {
  AdminIntegrationEventResponse
} from "../../../../../../types"
import { sdk } from "../../../../../lib/sdk"
import { OpenJsonSection } from "../../../../../components/common/open-json-section"
import { IntegrationEventGeneralSection } from "../../../../../components/routes/integrations/integration-events-detail"

const IntegrationEventDetail = () => {
  const { integration_event } = useLoaderData() as AdminIntegrationEventResponse

  return (
    <WidgetProvider>
      <SingleColumnPageWithWidgets
        widgets={{
          before: "integration_event.list.before",
          after: "integration_event.list.after"
        }}
        data={integration_event}
        showJSON={true}
      >
        <IntegrationEventGeneralSection integration_event={integration_event} />
        <OpenJsonSection title="Request" data={integration_event.request_data ?? {}} />
        <OpenJsonSection title="Response" data={integration_event.response_data ?? {}} />
      </SingleColumnPageWithWidgets>
    </WidgetProvider>
  )
}

const Breadcrumb = (
  props: UIMatch<AdminIntegrationEventResponse>
) => {
  const { integration_event } = props.data || {}
  if (!integration_event)
    return null

  return <span>{integration_event.id}</span>
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params
  const response = await sdk.client.fetch(`/admin/integrations/events/${id}`)

  return response
}

export const handle = {
  breadcrumb: (match: UIMatch<AdminIntegrationEventResponse>) => <Breadcrumb {...match} />,
}

export default IntegrationEventDetail

