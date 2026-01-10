import { MiddlewareRoute, validateAndTransformBody, validateAndTransformQuery } from "@medusajs/framework/http"
import { AdminMarketplaceCreateEvents, AdminMarketplaceCreateEventsType, AdminMarketplaceGetEventsParams } from "./validators"
import * as QueryConfig from "./query-config"

export const adminMarketplaceEventsRoutesMiddlewares: MiddlewareRoute[] = [
  {
    methods: ["GET"],
    matcher: "/admin/marketplaces/events",
    middlewares: [
      validateAndTransformQuery(
        AdminMarketplaceGetEventsParams,
        QueryConfig.listEventQueryConfig
      )
    ]
  },
  {
    methods: ["POST"],
    matcher: "/admin/marketplaces/events",
    middlewares: [
      validateAndTransformBody(AdminMarketplaceCreateEvents),
      validateAndTransformQuery(
        AdminMarketplaceGetEventsParams,
        QueryConfig.retrieveEventQueryConfig
      )
    ]
  }
]
