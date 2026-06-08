import { MiddlewareRoute, validateAndTransformBody, validateAndTransformQuery } from "@medusajs/framework/http"
import { 
  AdminCreateIntegration,
  AdminGetIntegrationParams,
  AdminIntegrationCreateEvents,
  AdminIntegrationCreateExchangeProfile,
  AdminIntegrationGetEventsParams,
  AdminIntegrationListExchangeProfileParams,
  AdminIntegrationSyncProducts,
  AdminIntegrationUpdateExchangeProfile,
  AdminUpdateIntegration
} from "./validators"
import * as QueryConfig from "./query-config"
import { setIntegrationContext } from "../../utils/middlewares/integrations/set-integration-context"

export const adminIntegrationRoutesMiddlewares: MiddlewareRoute[] = [
  {
    methods: ["GET"],
    matcher: "/admin/integrations",
    middlewares: [
      validateAndTransformQuery(
        AdminGetIntegrationParams,
        QueryConfig.listIntegrationQueryConfig
      )
    ]
  },
  {
    methods: ["POST"],
    matcher: "/admin/integrations",
    middlewares: [
      validateAndTransformBody(AdminCreateIntegration)
    ]
  },
  {
    methods: ["GET"],
    matcher: "/admin/integrations/:id",
    middlewares: [
      validateAndTransformQuery(
        AdminGetIntegrationParams,
        QueryConfig.retrieveIntegrationQueryConfig
      )
    ]
  },
  {
    methods: ["POST"],
    matcher: "/admin/integrations/:id",
    middlewares: [
      validateAndTransformBody(AdminUpdateIntegration),
      setIntegrationContext()
    ]
  },
  {
    matcher: "/admin/integrations/:id/*",
    middlewares: [
      setIntegrationContext()
    ]
  },
  {
    matcher: "/admin/integrations/:id/exchange-profiles",
    methods: ["GET"],
    middlewares: [
      validateAndTransformQuery(
        AdminIntegrationListExchangeProfileParams,
        QueryConfig.listExchangeProfileQueryConfig
      )
    ]
  },
  {
    matcher: "/admin/integrations/:id/exchange-profiles",
    methods: ["POST"],
    middlewares: [
      validateAndTransformBody(AdminIntegrationCreateExchangeProfile)
    ]
  },
  {
    matcher: "/admin/integrations/:id/exchange-profiles/:ep_id",
    methods: ["POST"],
    middlewares: [
      validateAndTransformBody(AdminIntegrationUpdateExchangeProfile)
    ]
  },
  {
    methods: ["POST"],
    matcher: "/admin/integrations/:id/products/sync",
    middlewares: [
      validateAndTransformBody(AdminIntegrationSyncProducts),
    ]
  },
  {
    methods: ["GET"],
    matcher: "/admin/integrations/events",
    middlewares: [
      validateAndTransformQuery(
        AdminIntegrationGetEventsParams,
        QueryConfig.listEventQueryConfig
      )
    ]
  },
  {
    methods: ["POST"],
    matcher: "/admin/integrations/events",
    middlewares: [
      validateAndTransformBody(AdminIntegrationCreateEvents)
    ]
  },
  {
    methods: ["GET"],
    matcher: "/admin/integrations/events/:id",
    middlewares: [
      validateAndTransformQuery(
        AdminIntegrationGetEventsParams,
        QueryConfig.retrieveEventQueryConfig
      ),
    ],
  },
]
