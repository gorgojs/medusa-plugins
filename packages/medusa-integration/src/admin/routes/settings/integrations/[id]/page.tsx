
import {
  LoaderFunctionArgs,
  UIMatch,
  useLoaderData
} from "react-router-dom"
import { sdk } from "../../../../lib/sdk"
import type { AdminIntegrationResponse } from "../../../../../types"
import {
  IntegrationGeneralSection,
  IntegrationEventsSection
} from "../../../../components/routes/integrations/integration-detail"
import { TwoColumnPageWithWidgets } from "../../../../components/layout"
import { WidgetProvider } from "../../../../providers/widget-provider"
import { IntegrationExchangeProfileSection } from "../../../../components/routes/integrations/integration-detail/integration-exchange-profile-section"

const IntegrationDetail = () => {
  const { integration } = useLoaderData() as AdminIntegrationResponse

  return (
    <WidgetProvider>
      <TwoColumnPageWithWidgets
        widgets={{
          before: "integration.details.before",
          after: "integration.details.after",
          sideBefore: "integration.details.side.before",
          sideAfter: "integration.details.side.after",
        }}
        data={integration}
        showJSON={true}
        firstCol={
          <IntegrationGeneralSection integration={integration} />
        }
        secondCol={(
          <div className="flex flex-col gap-y-6">
            <IntegrationExchangeProfileSection integration={integration}/>
            <IntegrationEventsSection integration={integration}/>
          </div>
        )}
      />
    </WidgetProvider>
  )
}

const Breadcrumb = (
  props: UIMatch<AdminIntegrationResponse>
) => {
  const { integration } = props.data || {}
  if (!integration)
    return null

  return <span>{integration.title}</span>
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params

  const response = await sdk.client.fetch(`/admin/integrations/${id}`)

  return response
}

export const handle = {
  breadcrumb: (match: UIMatch<AdminIntegrationResponse>) => <Breadcrumb {...match} />,
}

export default IntegrationDetail
