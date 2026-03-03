import { useState } from "react"
import type { DetailWidgetProps } from "@medusajs/framework/types"

import {
  MarketplaceDetailCredentialsSection,
  MarketplaceDetailCredentialsEditModal,
} from "./components/gorgo-widgets"

const MarketplaceDetailCredentialsWidget = ({
  data: marketplace,
}: DetailWidgetProps<any>) => {
  const [editOpen, setEditOpen] = useState(false)

  return (
    <>
      <MarketplaceDetailCredentialsSection />
      <MarketplaceDetailCredentialsEditModal
        response={{ marketplace }}
        open={editOpen}
        setOpen={setEditOpen}
      />
    </>
  )
}

export const config = {
  zone: "marketplace.details.after",
}

export default MarketplaceDetailCredentialsWidget
