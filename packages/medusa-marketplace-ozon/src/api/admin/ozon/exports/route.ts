import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const limit = Number(req.query.limit) || 20
  const offset = Number(req.query.offset) || 0

  const { data } = await query.graph({
    entity: "ozon_export",
    fields: [
      "id",
      "task_id",
      "ozon_task_status",
      "total",
      "items",
      "error_message",
      "raw_result",
      "last_checked_at",
    ],
    pagination: { take: limit, skip: offset },
  })

  res.status(200).json({
    exports: data,
    count: data.length,
    limit,
    offset,
  })
}
