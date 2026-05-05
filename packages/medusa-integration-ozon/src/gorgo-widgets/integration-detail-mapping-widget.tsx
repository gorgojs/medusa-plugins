import type { DetailWidgetProps } from "@medusajs/framework/types"
import {
  MarketplaceDetailMappingSection
} from "../admin/components/gorgo-widgets"

const MarketplaceDetailMappingWidget = ({
  data: marketplace,
}: DetailWidgetProps<any>) => {
  return (
    <MarketplaceDetailMappingSection marketplace={marketplace} />
  )
}

export const config = {
  zone: ["marketplace.details.after",]
}

export default MarketplaceDetailMappingWidget
