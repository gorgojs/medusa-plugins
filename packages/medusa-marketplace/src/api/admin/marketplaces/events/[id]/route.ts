import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { MarketplaceModuleService } from "../../../../../modules/marketplace/services"
import { MARKETPLACE_MODULE } from "../../../../../modules/marketplace"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const event = await marketplaceService.retrieveMarketplaceEvent(req.params.id)
  return res.status(200).json({ event })
}
