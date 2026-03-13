import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { createExchangeProfileWorkflow } from "../../../../../workflows/marketplace-exchange-profile/workflows"
import { AdminMarketplaceCreateExchangeProfileType } from "../../validators"
import {
  AdminMarketplaceExchangeProfileListResponse,
  AdminMarketplaceExchangeProfileResponse
} from "../../../../../types"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse<AdminMarketplaceExchangeProfileListResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
  
  const { data: exchange_profiles, metadata: { skip, take, count } = {} } = await query.graph({
    entity: "marketplace_exchange_profile",
    filters: { marketplace_id: req.params.id },
    ...req.queryConfig
  })

  res.status(200).json({
    exchange_profiles,
    count: count!,
    limit: take!,
    offset: skip!
  })
}

export const POST = async (
  req: MedusaRequest<AdminMarketplaceCreateExchangeProfileType>,
  res: MedusaResponse<AdminMarketplaceExchangeProfileResponse>
) => {
  const { result } = await createExchangeProfileWorkflow(req.scope).run({
    input: {
      marketplace_id: req.params.id,
      ...req.validatedBody
    }
  })

  res.status(200).json({ exchange_profile: result })
}
