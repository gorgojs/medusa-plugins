import { MiddlewareRoute, validateAndTransformBody } from "@medusajs/framework"
import { setMarketplaceContext } from "../../../../utils/middlewares/marketplaces/set-marketplace-context"
import { AdminMarketplaceSyncProducts } from "./validators"

export const adminMarketplaceProductsRoutesMiddlewares: MiddlewareRoute[] = [
  {
    methods: ["POST"],
    matcher: "/admin/marketplaces/:id/products/sync",
    middlewares: [
      validateAndTransformBody(AdminMarketplaceSyncProducts),
      setMarketplaceContext()
    ]
  }
] 
