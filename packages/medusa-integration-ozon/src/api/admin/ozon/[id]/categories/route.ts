import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { categoryApi, withAuth } from "../../../../../lib/ozon-client"
import { MARKETPLACE_MODULE } from "@gorgo/medusa-marketplace/modules/marketplace"
import { MarketplaceModuleService } from "@gorgo/medusa-marketplace/modules/marketplace/services"
import { MarketplaceOzonCredentialsType } from "../../../../../providers/integration-ozon/types"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const marketplace = await marketplaceService.listMarketplaces(
    { id: req.params.id },
    { select: ["id", "provider_id", "is_enabled", "credentials"] }
  )
  const credentials = marketplace[0].credentials as MarketplaceOzonCredentialsType
  const ozonCategoriesResponse = await categoryApi.descriptionCategoryAPIGetTree(
    withAuth(credentials, {
      v1GetTreeRequest: { language: "RU" },
    })
  )
  return res.status(200).json(ozonCategoriesResponse.data)
}
