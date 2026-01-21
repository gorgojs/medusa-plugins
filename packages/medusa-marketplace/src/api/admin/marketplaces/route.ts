import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"
import { AdminCreateMarketplaceType, AdminMarketplaceDefaultFindParams } from "./validators"
import { AdminMarketplaceListResponse, AdminMarketplaceResponse } from "../../../types"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse<AdminMarketplaceListResponse>
) => {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  // TODO: do we need caching here with the query module? 
  const [marketplaces, count] = await marketplaceService.listAndCountMarketplaces({}, {
    select: req.queryConfig.fields,
    ...req.queryConfig.pagination
  })

  res.status(200).json({
    marketplaces,
    count,
    limit: req.queryConfig.pagination.take ?? AdminMarketplaceDefaultFindParams.limit,
    offset: req.queryConfig.pagination.skip
  })
}

export const POST = async (
  req: MedusaRequest<AdminCreateMarketplaceType>,
  res: MedusaResponse<AdminMarketplaceResponse>
) => {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const marketplace = await marketplaceService.createMarketplaces(req.validatedBody)
  
  res.status(200).json({ marketplace })
}
