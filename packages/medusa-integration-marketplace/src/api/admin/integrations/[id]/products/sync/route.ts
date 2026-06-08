import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { syncIntegrationProductsWorkflow } from "../../../../../../workflows/integration-product"
import { AdminIntegrationSyncProductsType } from "../../../validators"
import { AdminIntegrationProductSyncResponse } from "../../../../../../types"

export const POST = async (
  req: MedusaRequest<AdminIntegrationSyncProductsType>,
  res: MedusaResponse<AdminIntegrationProductSyncResponse>
) => {
  const { result } = await syncIntegrationProductsWorkflow(req.scope).run({
    input: {
      integration: req["integrationContext"],
      ids: req.validatedBody.ids,
     },
  })

  res.status(200).json({ result })
}
