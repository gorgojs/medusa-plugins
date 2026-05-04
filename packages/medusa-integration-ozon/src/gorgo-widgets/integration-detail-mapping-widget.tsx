import type { DetailWidgetProps } from "@medusajs/framework/types"
import {
  IntegrationDetailMappingSection
} from "../admin/components/gorgo-widgets"

const IntegrationDetailMappingWidget = ({
  data: integration,
}: DetailWidgetProps<any>) => {
  return (
    <IntegrationDetailMappingSection integration={integration} />
  )
}

export const config = {
  zone: ["integration.details.after",]
}

export default IntegrationDetailMappingWidget
