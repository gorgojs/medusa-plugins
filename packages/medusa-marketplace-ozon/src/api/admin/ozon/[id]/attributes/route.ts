import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { categoryApi, withAuth } from "../../../../../lib/ozon-client"
import { MARKETPLACE_MODULE } from "@gorgo/medusa-marketplace/modules/marketplace"
import { MarketplaceModuleService } from "@gorgo/medusa-marketplace/modules/marketplace/services"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const description_category_id = Number(req.query.description_category_id)
  const type_id = Number(req.query.type_id)
  if (!description_category_id || !type_id) {
    return res.status(400).json({
      message: "description_category_id and type_id are required",
    })
  }
  const marketplaceService: typeof MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const marketplace = await marketplaceService.listMarketplaces(
    { id: req.params.id },
    { select: ["id", "provider_id", "is_enabled", "credentials"] }
  )

  const ozonAttributesResponse = await categoryApi.descriptionCategoryAPIGetAttributes(
    withAuth(marketplace[0].credentials, {
      v1GetAttributesRequest: {
        description_category_id: description_category_id,
        type_id: type_id
      }
    })
  )

  return res.status(200).json(ozonAttributesResponse.data)
}
