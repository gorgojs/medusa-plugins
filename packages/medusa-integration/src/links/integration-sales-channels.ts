import IntegrationModule from "../modules/integration"
import SalesChannelModule from "@medusajs/medusa/sales-channel"
import { defineLink } from "@medusajs/framework/utils"

export default defineLink(
  {
    linkable: IntegrationModule.linkable.integration,
    isList: true
  },
  SalesChannelModule.linkable.salesChannel
)
