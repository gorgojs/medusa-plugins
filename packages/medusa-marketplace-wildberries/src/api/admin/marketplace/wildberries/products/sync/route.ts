import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import syncProductsWildberriesWorkflow from "../../../../../../workflows/sync-products-wildberries"


export const POST = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {

  const response = await syncProductsWildberriesWorkflow(req.scope).run()
  res.json(response.result)
}
