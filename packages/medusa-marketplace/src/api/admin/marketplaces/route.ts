import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"
import { AdminCreateMarketplaceType } from "./validators"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const result = await marketplaceService.listMarketplaces({}, {
    select: req.queryConfig.fields,
    ...req.queryConfig.pagination
  })

  res.json(result)
}

export const POST = async (
  req: MedusaRequest<AdminCreateMarketplaceType>,
  res: MedusaResponse
) => {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const result = await marketplaceService.createMarketplaces(req.validatedBody)
  
  res.json(result)
}
