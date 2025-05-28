import { MiddlewareRoute } from "@medusajs/framework/http"
import {
  validateAndTransformQuery,
  validateAndTransformBody,
} from "@medusajs/framework"
import { AdminUpdateExport, AdminGetExportParams } from "./validators"
import * as queryConfig from "./query-config"

export const adminExportByIdMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/admin/yandex-market/exports/:id",
    middlewares: [
      validateAndTransformQuery(
        AdminGetExportParams,
        queryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["PATCH"],
    matcher: "/admin/yandex-market/exports/:id",
    middlewares: [
      validateAndTransformBody(AdminUpdateExport),
      validateAndTransformQuery(
        AdminGetExportParams,
        queryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["DELETE"],
    matcher: "/admin/yandex-market/exports/:id",
    middlewares: [
      validateAndTransformQuery(
        AdminGetExportParams,
        queryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
]