import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { MarketplaceModuleService } from "../../../../modules/marketplace/services";
import { MARKETPLACE_MODULE } from "../../../../modules/marketplace";

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const result = await marketplaceService.listMarketplaces({
    id: req.params.id
  })

  res.json(result)
}

type UpdateMarketplacesReq = {
  provider_id?: string
  credentials?: Record<string, unknown>
  settings?: Record<string, unknown>
  is_active?: boolean
}

export const POST = async (
  req: MedusaRequest<UpdateMarketplacesReq>,
  res: MedusaResponse
) => {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const result = await marketplaceService.updateMarketplaces({
    id: req.params.id,
    provider_id: req.body.provider_id,
    credentials: req.body.credentials,
    settings: req.body.settings,
    is_active: req.body.is_active
  })

  res.json(result)
}

export const DELETE = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const result = await marketplaceService.deleteMarketplaces(req.params.id)

  res.json(result)  
}
