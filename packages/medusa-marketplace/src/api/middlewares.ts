import { defineMiddlewares } from "@medusajs/framework"
import { adminMarketplaceRoutesMiddlewares } from "./admin/marketplaces/middlewares"

export default defineMiddlewares({
  routes: [
    ...adminMarketplaceRoutesMiddlewares
  ]
})
