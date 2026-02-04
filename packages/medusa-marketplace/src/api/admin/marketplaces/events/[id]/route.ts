import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { MarketplaceModuleService } from "../../../../../modules/marketplace/services"
import { MARKETPLACE_MODULE } from "../../../../../modules/marketplace"
import { AdminMarketplaceEventResponse } from "../../../../../types"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse<AdminMarketplaceEventResponse>
) => {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const event = await marketplaceService.retrieveMarketplaceEvent(req.params.id, {
    select: req.queryConfig.fields
  })

  return res.status(200).json({ event })
}
