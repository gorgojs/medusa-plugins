import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { syncProductsMarketplaceWorkflow } from "../../../../../workflows/product"

export const POST = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {

  const response = await syncProductsMarketplaceWorkflow(req.scope).run({
    input: { providerId: "mp_system_default" },
  })

  res.json(response.result)
}
