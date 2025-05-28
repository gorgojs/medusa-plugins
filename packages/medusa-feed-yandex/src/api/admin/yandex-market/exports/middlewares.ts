import { MiddlewareRoute } from "@medusajs/framework/http"
import { validateAndTransformQuery, validateAndTransformBody } from "@medusajs/framework"
import { AdminGetExportsParams, AdminCreateExport } from "./validators"
import * as queryConfig from "./query-config"

export const adminExportsRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/admin/yandex-market/exports",
    middlewares: [
      validateAndTransformQuery(
        AdminGetExportsParams,
        queryConfig.listTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/yandex-market/exports",
    middlewares: [
      validateAndTransformBody(AdminCreateExport),
      validateAndTransformQuery(
        AdminGetExportsParams,
        queryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
]
