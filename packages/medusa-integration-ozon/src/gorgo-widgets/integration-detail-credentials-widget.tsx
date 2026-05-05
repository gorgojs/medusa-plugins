import type { DetailWidgetProps } from "@medusajs/framework/types"
import { MarketplaceDetailCredentialsSection } from "../admin/components/gorgo-widgets"

const MarketplaceDetailCredentialsWidget = ({
  data: marketplace,
}: DetailWidgetProps<any>) => {

  return (
    <MarketplaceDetailCredentialsSection
      marketplace={marketplace}
    />
  )
}

export const config = {
  zone: ["marketplace.details.after"]
}

export default MarketplaceDetailCredentialsWidget
