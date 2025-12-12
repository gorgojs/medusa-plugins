import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { syncMarketplaceProductsWorkflow } from "../../../../../workflows/marketplace-product"

type SyncProductsReq = {
  provider_id: string,
  ids: string[]
}

export const POST = async (
  req: MedusaRequest<SyncProductsReq>,
  res: MedusaResponse
) => {

  const response = await syncMarketplaceProductsWorkflow(req.scope).run({
    input: { 
      providerId: req.body.provider_id,
      ids: req.body.ids,
     },
  })

  res.json(response.result)
}
