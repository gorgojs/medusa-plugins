import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { syncMarketplaceProductsWorkflow } from "../../../../../../workflows/marketplace-product"
import { AdminMarketplaceSyncProductsType } from "../../../validators"
import { AdminMarketplaceProductSyncResponse } from "../../../../../types"

export const POST = async (
  req: MedusaRequest<AdminMarketplaceSyncProductsType>,
  res: MedusaResponse<AdminMarketplaceProductSyncResponse>
) => {
  const { result } = await syncMarketplaceProductsWorkflow(req.scope).run({
    input: {
      marketplace: req["marketplaceContext"],
      ids: req.validatedBody.ids,
     },
  })

  res.status(200).json({ result })
}
