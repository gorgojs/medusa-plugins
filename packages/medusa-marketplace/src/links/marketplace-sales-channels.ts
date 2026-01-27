import MarketplaceModule from "../modules/marketplace"
import SalesChannelModule from "@medusajs/medusa/sales-channel"
import { defineLink } from "@medusajs/framework/utils"

export default defineLink(
  MarketplaceModule.linkable.marketplace,
  SalesChannelModule.linkable.salesChannel
)
