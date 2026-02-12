import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { MarketplaceModuleService } from "../../../../../modules/marketplace/services"
import { MARKETPLACE_MODULE } from "../../../../../modules/marketplace"
import { AdminMarketplaceEventResponse } from "../../../../../types"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const marketplaceService: MarketplaceModuleService =
    req.scope.resolve(MARKETPLACE_MODULE)

  const limit = Number(req.query.limit) || 20
  const offset = Number(req.query.offset) || 0

  const [events, count] =
    await marketplaceService.listAndCountMarketplaceEvents(
      {
        marketplace_id: req.query.marketplace_id as string,
      },
      {
        take: limit,
        skip: offset,
        select: req.queryConfig?.fields,
      }
    )

  return res.status(200).json({
    events,
    count,
    limit,
    offset,
  })
}
