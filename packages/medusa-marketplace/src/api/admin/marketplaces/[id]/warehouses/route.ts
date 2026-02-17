import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { MARKETPLACE_MODULE } from "../../../../../modules/marketplace"
import { MarketplaceModuleService } from "../../../../../modules/marketplace/services"
import { MarketplaceDTO } from "../../../../../types"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const marketplaceModuleService: MarketplaceModuleService = req.scope.resolve(MARKETPLACE_MODULE)

  const marketplace: MarketplaceDTO = req["marketplaceContext"]

  const warehouses = await marketplaceModuleService.getWarehouses(marketplace.provider_id, {
    container: req.scope,
    marketplace
  })

  res.status(200).json({ warehouses })
}
