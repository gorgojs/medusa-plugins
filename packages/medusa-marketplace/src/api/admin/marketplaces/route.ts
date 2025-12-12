import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const result = await marketplaceService.listMarketplaces()

  res.json(result)
}

type PostMarketplaceReq = {
  data: {
    provider_id: string,
    credentials: Record<string, unknown>,
    settings: Record<string, unknown>,
    is_active?: boolean 
  }
}

export const POST = async (
  req: MedusaRequest<PostMarketplaceReq>,
  res: MedusaResponse
) => {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const result = await marketplaceService.createMarketplaces(req.body.data)
  
  res.json(result)
}
