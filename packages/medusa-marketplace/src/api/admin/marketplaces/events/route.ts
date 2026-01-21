import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { MarketplaceModuleService } from "../../../../modules/marketplace/services"
import { MARKETPLACE_MODULE } from "../../../../modules/marketplace"
import { AdminMarketplaceCreateEventsType, AdminMarketplaceDefaultFindParams } from "../validators"
import { AdminMarketplaceEventListResponse, AdminMarketplaceEventResponse } from "../../../../types"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse<AdminMarketplaceEventListResponse>
) => {
  const marketplaceService: MarketplaceModuleService = req.scope.resolve(MARKETPLACE_MODULE)
  const [events, count] = await marketplaceService.listAndCountMarketplaceEvents({}, {
    select: req.queryConfig.fields,
    ...req.queryConfig.pagination,
  })

  res.status(200).json({
    events,
    count,
    limit: req.queryConfig.pagination.take ?? AdminMarketplaceDefaultFindParams.limit,
    offset: req.queryConfig.pagination.skip
  })
}

export const POST = async (
  req: MedusaRequest<AdminMarketplaceCreateEventsType>,
  res: MedusaResponse<AdminMarketplaceEventResponse>
) => {
  const marketplaceService: MarketplaceModuleService = req.scope.resolve(MARKETPLACE_MODULE)
  const event = await marketplaceService.createMarketplaceEvents(req.validatedBody)

  res.status(200).json({ event })
}

