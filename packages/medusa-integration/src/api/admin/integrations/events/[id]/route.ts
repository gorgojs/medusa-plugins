import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { MarketplaceModuleService } from "../../../../../modules/integration/services"
import { MARKETPLACE_MODULE } from "../../../../../modules/integration"
import { AdminMarketplaceEventResponse } from "../../../../../types"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse<AdminMarketplaceEventResponse>
) => {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const marketplace_event = await marketplaceService.retrieveMarketplaceEvent(req.params.id, {
    select: req.queryConfig.fields
  })

  return res.status(200).json({ marketplace_event })
}
