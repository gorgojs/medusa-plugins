import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { MarketplaceModuleService } from "../../../../modules/marketplace/services";
import { MARKETPLACE_MODULE } from "../../../../modules/marketplace";

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const marketplaceService: MarketplaceModuleService = req.scope.resolve(MARKETPLACE_MODULE)
  const result = await marketplaceService.listMarketplaceEvents()

  res.json(result)
}

type CreateMarketplaceEventsReq = {
  data: {
    id?: string
    correlation_id?: string
    direction?: "MEDUSA_TO_MARKETPLACE" | "MARKETPLACE_TO_MEDUSA"
    entity_type?: "PRODUCT" | "PRODUCT_MEDIA" | "PRODUCT_PRICE" | "PRODUCT_STOCK" | "ORDER"
    action?: "CREATE" | "UPDATE" | "DELETE"
    started_at?: Date
    finished_at?: Date
    request_data?: Record<string, unknown>
    response_data?: Record<string, unknown>
    marketplace_id?: string
  }
}

export const POST = async (
  req: MedusaRequest<CreateMarketplaceEventsReq>,
  res: MedusaResponse
) => {
  const marketplaceService: MarketplaceModuleService = req.scope.resolve(MARKETPLACE_MODULE)
  const result = await marketplaceService.createMarketplaceEvents(req.body.data)

  res.json(result)
}

