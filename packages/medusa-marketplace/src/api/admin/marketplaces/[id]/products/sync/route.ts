import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { syncMarketplaceProductsWorkflow } from "../../../../../../workflows/marketplace-product"
import { AdminMarketplaceSyncProductsType } from "../validators"

export const POST = async (
  req: MedusaRequest<AdminMarketplaceSyncProductsType>,
  res: MedusaResponse
) => {
  const response = await syncMarketplaceProductsWorkflow(req.scope).run({
    input: {
      providerId: req["marketplaceContext"].provider_id,
      ids: req.validatedBody.ids,
     },
  })

  res.json(response.result)
}
