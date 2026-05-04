import MarketplaceModule from "../modules/integration"
import OrderModule from "@medusajs/medusa/order"
import { defineLink } from "@medusajs/framework/utils"

export default defineLink(
  MarketplaceModule.linkable.marketplaceOrder,
  OrderModule.linkable.order
)
