import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { MARKETPLACE_MODULE } from "../../../../modules/marketplace"
import MarketplaceModuleService from "../../../../modules/marketplace/service"

export const POST = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {

  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const result = await marketplaceService.createMarketplaces({
    provider_id: "wildberries",
    credentials: {},
    settings: {},
    is_active: true,
  })
  
  res.json(result)
}
