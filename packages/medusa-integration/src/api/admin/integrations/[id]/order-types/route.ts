import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { MarketplaceModuleService } from "../../../../../modules/integration/services"
import { MARKETPLACE_MODULE } from "../../../../../modules/integration"
import { AdminMarketplaceOrderTypeListResponse, MarketplaceDTO } from "../../../../../types"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse<AdminMarketplaceOrderTypeListResponse>
) => {
  const marketplaceModuleService: MarketplaceModuleService = req.scope.resolve(MARKETPLACE_MODULE)

  const marketplace: MarketplaceDTO = req["marketplaceContext"]

  const orderTypes = await marketplaceModuleService.getOrderTypes(marketplace.provider_id, {
    container: req.scope,
    marketplace
  })
  
  res.status(200).json({ orderTypes })
}
