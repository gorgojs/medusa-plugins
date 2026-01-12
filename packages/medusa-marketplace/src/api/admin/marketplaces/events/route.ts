import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { MarketplaceModuleService } from "../../../../modules/marketplace/services"
import { MARKETPLACE_MODULE } from "../../../../modules/marketplace"
import { AdminMarketplaceCreateEventsType } from "../validators"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const marketplaceService: MarketplaceModuleService = req.scope.resolve(MARKETPLACE_MODULE)
  const result = await marketplaceService.listMarketplaceEvents({}, {
    select: req.queryConfig.fields,
    ...req.queryConfig.pagination,
  })

  res.json(result)
}

export const POST = async (
  req: MedusaRequest<AdminMarketplaceCreateEventsType>,
  res: MedusaResponse
) => {
  const marketplaceService: MarketplaceModuleService = req.scope.resolve(MARKETPLACE_MODULE)
  const result = await marketplaceService.createMarketplaceEvents(req.validatedBody)

  res.json(result)
}

