import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { createExchangeProfileWorkflow } from "../../../../../workflows/integration-exchange-profile/workflows"
import { AdminIntegrationCreateExchangeProfileType } from "../../validators"
import {
  AdminIntegrationExchangeProfileListResponse,
  AdminIntegrationExchangeProfileResponse
} from "../../../../../types"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse<AdminIntegrationExchangeProfileListResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)
  
  const { data: exchange_profiles, metadata: { skip, take, count } = {} } = await query.graph({
    entity: "integration_exchange_profile",
    filters: { integration_id: req.params.id },
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
  req: MedusaRequest<AdminIntegrationCreateExchangeProfileType>,
  res: MedusaResponse<AdminIntegrationExchangeProfileResponse>
) => {
  const { result } = await createExchangeProfileWorkflow(req.scope).run({
    input: {
      integration_id: req.params.id,
      ...req.validatedBody
    }
  })

  res.status(200).json({ exchange_profile: result })
}
