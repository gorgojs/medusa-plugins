import { MiddlewareRoute, validateAndTransformBody, validateAndTransformQuery } from "@medusajs/framework/http"
import { 
  AdminCreateMarketplace,
  AdminGetMarketplaceParams,
  AdminMarketplaceCreateEvents,
  AdminMarketplaceCreateExchangeProfile,
  AdminMarketplaceGetEventsParams,
  AdminMarketplaceListExchangeProfileParams,
  AdminMarketplaceSyncProducts,
  AdminUpdateMarketplace
} from "./validators"
import * as QueryConfig from "./query-config"
import { setMarketplaceContext } from "../../utils/middlewares/marketplaces/set-marketplace-context"

export const adminMarketplaceRoutesMiddlewares: MiddlewareRoute[] = [
  {
    methods: ["GET"],
    matcher: "/admin/marketplaces",
    middlewares: [
      validateAndTransformQuery(
        AdminGetMarketplaceParams,
        QueryConfig.listMarketplaceQueryConfig
      )
    ]
  },
  {
    methods: ["POST"],
    matcher: "/admin/marketplaces",
    middlewares: [
      validateAndTransformBody(AdminCreateMarketplace)
    ]
  },
  {
    methods: ["GET"],
    matcher: "/admin/marketplaces/:id",
    middlewares: [
      validateAndTransformQuery(
        AdminGetMarketplaceParams,
        QueryConfig.retrieveMarketplaceQueryConfig
      )
    ]
  },
  {
    methods: ["POST"],
    matcher: "/admin/marketplaces/:id",
    middlewares: [
      validateAndTransformBody(AdminUpdateMarketplace),
      setMarketplaceContext()
    ]
  },
  {
    matcher: "/admin/marketplaces/:id/*",
    middlewares: [
      setMarketplaceContext()
    ]
  },
  {
    matcher: "/admin/marketplaces/:id/exchange-profiles",
    methods: ["GET"],
    middlewares: [
      validateAndTransformQuery(
        AdminMarketplaceListExchangeProfileParams,
        QueryConfig.listExchangeProfileQueryConfig
      )
    ]
  },
  {
    matcher: "/admin/marketplaces/:id/exchange-profiles",
    methods: ["POST"],
    middlewares: [
      validateAndTransformBody(AdminMarketplaceCreateExchangeProfile)
    ]
  },
  {
    methods: ["POST"],
    matcher: "/admin/marketplaces/:id/products/sync",
    middlewares: [
      validateAndTransformBody(AdminMarketplaceSyncProducts),
    ]
  },
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
      validateAndTransformBody(AdminMarketplaceCreateEvents)
    ]
  },
  {
    methods: ["GET"],
    matcher: "/admin/marketplaces/events/:id",
    middlewares: [
      validateAndTransformQuery(
        AdminMarketplaceGetEventsParams,
        QueryConfig.retrieveEventQueryConfig
      ),
    ],
  },
]
