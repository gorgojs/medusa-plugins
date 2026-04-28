import type { DetailWidgetProps } from "@medusajs/framework/types"
import { MarketplaceDetailSettingsSection } from "../admin/components/gorgo-widgets"

const MarketplaceDetailSettingsWidget = ({
  data: marketplace,
}: DetailWidgetProps<any>) => {
  return (
    <MarketplaceDetailSettingsSection marketplace={marketplace} />
  )
}

export const config = {
  zone: ["marketplace.details.after"],
}

export default MarketplaceDetailSettingsWidget
