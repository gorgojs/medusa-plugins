import { defineMiddlewares } from "@medusajs/framework"
import { adminMarketplaceRoutesMiddlewares } from "./admin/integrations/middlewares"

export default defineMiddlewares({
  routes: [
    ...adminMarketplaceRoutesMiddlewares
  ]
})
