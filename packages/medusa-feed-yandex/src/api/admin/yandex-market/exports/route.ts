import {
  AuthenticatedMedusaRequest,
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import { createExportsWorkflow } from "../../../../workflows/create-exports"
import { AdminCreateExportType } from "./validators"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const {
    data: exports,
    metadata: { count, take, skip } = {},
  } = await query.graph({
    entity: "yandex_market_catalog_export",
    ...req.queryConfig,
  })

  res.status(200).json({
    exports,
    count,
    limit: take,
    offset: skip,
  })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminCreateExportType>,
  res: MedusaResponse
) => {
  const { result } = await createExportsWorkflow(req.scope).run({
    input: req.validatedBody.exports,
  })

  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: exports } = await query.graph({
    entity: "yandex_market_catalog_export",
    fields: ["*"],
    filters: { id: result[0].id },
  })

  res.status(200).json({ export: exports[0] })
}
