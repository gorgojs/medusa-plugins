import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"
import { MarketplaceModuleService } from "../../../modules/marketplace/services"
import { AdminCreateMarketplaceType, AdminMarketplaceDefaultFindParams } from "./validators"
import { AdminMarketplaceListResponse, AdminMarketplaceResponse } from "../../../types"
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse<AdminMarketplaceListResponse>
) => {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  // TODO: do we need caching here with the query module? 
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: marketplaces, metadata: { skip, take, count } = {} } = await query.graph({
    entity: "marketplace",
    ...req.queryConfig
  })

  res.status(200).json({
    marketplaces,
    count: count!,
    limit: take!,
    offset: skip!
  })
}

export const POST = async (
  req: MedusaRequest<AdminCreateMarketplaceType>,
  res: MedusaResponse<AdminMarketplaceResponse>
) => {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const marketplace = await marketplaceService.createMarketplaces(req.validatedBody)

  if (req.validatedBody.sales_channel_id) {
    const link = req.scope.resolve(ContainerRegistrationKeys.LINK)
    await link.create({
      marketplace: {
        marketplace_id: marketplace.id
      },
      [Modules.SALES_CHANNEL]: {
        sales_channel_id: req.validatedBody.sales_channel_id
      }
    })
  }

  res.status(200).json({ marketplace })
}
