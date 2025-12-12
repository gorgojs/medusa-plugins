import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { syncMarketplaceProductsWorkflow } from "../../../../../workflows/product"

export const POST = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {

  const response = await syncMarketplaceProductsWorkflow(req.scope).run({
    input: { providerId: "mp_wildberries_test" },
  })

  res.json(response.result)
}
