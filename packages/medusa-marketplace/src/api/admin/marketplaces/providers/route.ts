import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { MARKETPLACE_MODULE } from "../../../../modules/marketplace"
import { MarketplaceModuleService } from "../../../../modules/marketplace/services"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {

  const marketplaceService: MarketplaceModuleService = req.scope.resolve(MARKETPLACE_MODULE)

  const result = marketplaceService.getProvidersList()

  res.json(result)
}
