import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
  MedusaRequest
} from "@medusajs/framework/http"
import { runExportsWorkflow } from "../../../../../../workflows/run-exports"

export const POST = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
  const { result } = await runExportsWorkflow(req.scope)
    .run({
      input: {
        ids: [req.params.id]
      }
    })

  res.json({ export: result })
}