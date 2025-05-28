import {
  AuthenticatedMedusaRequest,
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import { updateExportWorkflow } from "../../../../../workflows/update-export"
import { deleteExportsWorkflow } from "../../../../../workflows/delete-exports"
import { AdminGetExportParamsType, AdminUpdateExportType } from "./validators"

export const GET = async (
  req: AuthenticatedMedusaRequest<AdminGetExportParamsType>,
  res: MedusaResponse
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
  const { id } = req.params

  const {
    data: [export_data],
  } = await query.graph(
    {
      entity: "yandex_market_catalog_export",
      filters: { id },
      fields: req.queryConfig?.fields || ["*"],
    },
    { throwIfKeyNotFound: true }
  )

  res.json({ export: export_data })
}

export const PATCH = async (
  req: AuthenticatedMedusaRequest<AdminUpdateExportType>,
  res: MedusaResponse
) => {
  const { result } = await updateExportWorkflow(req.scope).run({
    input: [req.validatedBody],
  })

  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
  const { data: exports } = await query.graph({
    entity: "yandex_market_catalog_export",
    fields: ["*"],
    filters: { id: result[0].id },
  })

  res.json({ export: exports[0] })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
  const id = req.params.id

  await deleteExportsWorkflow(req.scope).run({
    input: { ids: [id] },
  })

  res.status(200).json({
    id,
    object: "yandex-market-export",
    deleted: true,
  })
}