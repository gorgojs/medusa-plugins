import IntegrationModule from "../modules/integration"
import OrderModule from "@medusajs/medusa/order"
import { defineLink } from "@medusajs/framework/utils"

export default defineLink(
  IntegrationModule.linkable.integrationOrder,
  OrderModule.linkable.order
)
