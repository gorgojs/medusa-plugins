import type { DetailWidgetProps } from "@medusajs/framework/types"
import { IntegrationDetailCredentialsSection } from "../admin/components/gorgo-widgets"

const IntegrationDetailCredentialsWidget = ({
  data: integration,
}: DetailWidgetProps<any>) => {

  return (
    <IntegrationDetailCredentialsSection
      integration={integration}
    />
  )
}

export const config = {
  zone: ["integration.details.after"]
}

export default IntegrationDetailCredentialsWidget
