import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { MarketplaceModuleService } from "../../../../modules/marketplace/services"
import { MARKETPLACE_MODULE } from "../../../../modules/marketplace"
import { AdminUpdateMarketplaceType } from "../validators"
import { AdminMarketplaceResponse, AdminMarketplaceDeleteResponse } from "../../../../types"
import { ContainerRegistrationKeys } from "@medusajs/utils"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse<AdminMarketplaceResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
  
  const { data } = await query.graph({
    entity: "marketplace",
    filters: { id: req.params.id },
    ...req.queryConfig
  })

  const marketplace = data[0]

  res.status(200).json({ marketplace })
}

export const POST = async (
  req: MedusaRequest<AdminUpdateMarketplaceType>,
  res: MedusaResponse<AdminMarketplaceResponse>
) => {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const marketplace = await marketplaceService.updateMarketplaces({
    id: req.params.id,
    ...req.validatedBody
  })

  res.status(200).json({ marketplace })
}

export const DELETE = async (
  req: MedusaRequest,
  res: MedusaResponse<AdminMarketplaceDeleteResponse>
) => {
  const marketplaceService: MarketplaceModuleService = await req.scope.resolve(MARKETPLACE_MODULE)
  const id = req.params.id

  await marketplaceService.deleteMarketplaces(id)

  res.status(200).json({
    id,
    object: "marketplace",
    deleted: true
  })
}
