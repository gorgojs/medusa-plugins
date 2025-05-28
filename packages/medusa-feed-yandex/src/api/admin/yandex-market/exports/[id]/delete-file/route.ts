import { MedusaRequest, MedusaResponse, AuthenticatedMedusaRequest } from '@medusajs/framework/http'
import { deleteExportFilesWorkflow } from "../../../../../../workflows/delete-export-files"

export const DELETE = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const id = req.params.id

  await deleteExportFilesWorkflow(req.scope)
    .run({
      input: {ids: [id]},
    })

  res.status(200).json({
    id,
    object: "yandex-market-export-file",
    deleted: true,
  })
}