import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { MarketplaceModuleService } from "../../../../modules/marketplace/services";
import { MARKETPLACE_MODULE } from "../../../../modules/marketplace";
import { AdminUpdateMarketplaceType } from "../validators";

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const result = await marketplaceService.listMarketplaces(
    { id: req.params.id },
    { select: req.queryConfig.fields }
  )

  res.json(result)
}

export const POST = async (
  req: MedusaRequest<AdminUpdateMarketplaceType>,
  res: MedusaResponse
) => {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const result = await marketplaceService.updateMarketplaces({
    id: req.params.id,
    provider_id: req.validatedBody.provider_id,
    credentials: req.validatedBody.credentials,
    settings: req.validatedBody.settings,
    is_active: req.validatedBody.is_active
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
