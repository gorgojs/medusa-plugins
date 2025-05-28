import { defineMiddlewares } from "@medusajs/framework/http"
import { adminExportsRoutesMiddlewares } from "./admin/yandex-market/exports/middlewares"
import { adminExportByIdMiddlewares } from "./admin/yandex-market/exports/[id]/middlewares"

export default defineMiddlewares({
  routes: [
    ...adminExportsRoutesMiddlewares,
    ...adminExportByIdMiddlewares,
  ],
})