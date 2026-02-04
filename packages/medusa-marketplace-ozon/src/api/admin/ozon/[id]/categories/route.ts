import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { categoryApi, withAuth } from "../../../../../lib/ozon-client"
import { MARKETPLACE_MODULE } from "@gorgo/medusa-marketplace/modules/marketplace"
import { MarketplaceModuleService } from "@gorgo/medusa-marketplace/modules/marketplace/services"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const marketplaceService: typeof MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const marketplace = await marketplaceService.listMarketplaces(
    { id: req.params.id },
    { select: ["id", "provider_id", "is_enabled", "credentials"] }
  )
  const ozonCategoriesResponse = await categoryApi.descriptionCategoryAPIGetTree(
    withAuth(marketplace[0].credentials, {
      v1GetTreeRequest: { language: "RU" },
    })
  )
  return res.status(200).json(ozonCategoriesResponse.data)
}
