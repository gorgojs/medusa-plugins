import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { MarketplaceModuleService } from "../../../../modules/marketplace/services"
import { MARKETPLACE_MODULE } from "../../../../modules/marketplace"
import { AdminUpdateMarketplaceType } from "../validators"
import { AdminMarketplaceResponse, AdminMarketplaceDeleteResponse } from "../../../../types"
import { ContainerRegistrationKeys, Modules } from "@medusajs/utils"

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

  console.log("marketplace", marketplace)
  console.log("marketplaceContext", req["marketplaceContext"])

  if (req.validatedBody.sales_channel_id) {
    const link = req.scope.resolve(ContainerRegistrationKeys.LINK)
    // TODO: how to correctly update the link
    await link.dismiss({
      marketplace: {
        marketplace_id: marketplace.id
      },
      [Modules.SALES_CHANNEL]: {
        sales_channel_id: req["marketplaceContext"].sales_channel.id // TODO: not sure to pass sales_channel_id throug marketplaceContext, need to think about it
      }
    })
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
