import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { syncWbProductsWorkflow } from "../../../../../../workflows/sync-wb-products"

export const POST = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {

  const response = await syncWbProductsWorkflow(req.scope).run()
  res.json(response.result)
}
