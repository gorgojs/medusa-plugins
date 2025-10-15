import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { MARKETPLACE_MODULE } from "../../../../modules/marketplace"
import { MarketplaceModuleService } from "../../../../modules/marketplace/services"
import { AdminMarketplaceProviderList } from "../../../../types"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse<AdminMarketplaceProviderList>
) => {

  const marketplaceService: MarketplaceModuleService = req.scope.resolve(MARKETPLACE_MODULE)

  const providers = marketplaceService.getProvidersList()

  res.status(200).json({ providers })
}
