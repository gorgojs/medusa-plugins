import IntegrationModule from "../modules/integration"
import StockLocationModule from "@medusajs/medusa/stock-location"
import { defineLink } from "@medusajs/framework/utils"

export default defineLink(
  {
    linkable: IntegrationModule.linkable.integrationExchangeProfile,
    isList: true
  },
  StockLocationModule.linkable.stockLocation
)
