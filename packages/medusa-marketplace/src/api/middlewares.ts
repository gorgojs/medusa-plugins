import { defineMiddlewares } from "@medusajs/framework"
import { adminMarketplaceRoutesMiddlewares } from "./admin/marketplaces/middlewares"
import { adminMarketplaceEventsRoutesMiddlewares } from "./admin/marketplaces/events/middlewares"
import { adminMarketplaceProductsRoutesMiddlewares } from "./admin/marketplaces/[id]/products/middlewares"

export default defineMiddlewares({
  routes: [
    ...adminMarketplaceRoutesMiddlewares,
    ...adminMarketplaceEventsRoutesMiddlewares,
    ...adminMarketplaceProductsRoutesMiddlewares
  ]
})
