import MarketplaceModule from "../modules/marketplace"
import StockLocationModule from "@medusajs/medusa/stock-location"
import { defineLink } from "@medusajs/framework/utils"

export default defineLink(
  {
    linkable: MarketplaceModule.linkable.marketplaceExchangeProfile,
    isList: true
  },
  StockLocationModule.linkable.stockLocation
)
