import { useState } from "react"
import type { DetailWidgetProps } from "@medusajs/framework/types"

import {
  MarketplaceDetailCredentialsSection,
  MarketplaceDetailCredentialsEditModal,
} from "../admin/components/gorgo-widgets"

const MarketplaceDetailCredentialsWidget = ({
  data: marketplace,
}: DetailWidgetProps<any>) => {
  const [editOpen, setEditOpen] = useState(false)

  return (
    <>
      <MarketplaceDetailCredentialsSection onEditClick={() => setEditOpen(true)} />
      <MarketplaceDetailCredentialsEditModal
        response={{ marketplace }}
        open={editOpen}
        setOpen={setEditOpen}
      />
    </>
  )
}

export const config = {
  zone: ["marketplace.details.after"]
}
export default MarketplaceDetailCredentialsWidget
