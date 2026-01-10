import { MiddlewareRoute, validateAndTransformBody } from "@medusajs/framework/http"
import { AdminCreateMarketplace, AdminUpdateMarketplace } from "./validators"

export const adminMarketplaceRoutesMiddlewares: MiddlewareRoute[] = [
  {
    methods: ["POST"],
    matcher: "/admin/marketplaces",
    middlewares: [
      validateAndTransformBody(AdminCreateMarketplace),
    ]
  },
  {
    methods: ["POST"],
    matcher: "/admin/marketplaces/:id",
    middlewares: [
      validateAndTransformBody(AdminUpdateMarketplace)
    ]
  }
]
