import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import { IntegrationModuleService } from "../../../modules/integration/services"
import { AdminCreateIntegrationType, AdminIntegrationDefaultFindParams } from "./validators"
import { AdminIntegrationListResponse, AdminIntegrationResponse } from "../../../types"
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils"
import { createExchangeProfileWorkflow } from "../../../workflows/integration-exchange-profile/workflows"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse<AdminIntegrationListResponse>
) => {
  const integrationService: IntegrationModuleService = await req.scope.resolve(INTEGRATION_MODULE)
  // TODO: do we need caching here with the query module? 
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: integrations, metadata: { skip, take, count } = {} } = await query.graph({
    entity: "integration",
    ...req.queryConfig
  })

  res.status(200).json({
    integrations,
    count: count!,
    limit: take!,
    offset: skip!
  })
}

export const POST = async (
  req: MedusaRequest<AdminCreateIntegrationType>,
  res: MedusaResponse<AdminIntegrationResponse>
) => {
  const integrationService: IntegrationModuleService = await req.scope.resolve(INTEGRATION_MODULE)
  const integration = await integrationService.createIntegrations(req.validatedBody)

  if (req.validatedBody.sales_channel_id) {
    const link = req.scope.resolve(ContainerRegistrationKeys.LINK)
    await link.create({
      integration: {
        integration_id: integration.id
      },
      [Modules.SALES_CHANNEL]: {
        sales_channel_id: req.validatedBody.sales_channel_id
      }
    })
  }

  const exchangeProfile = await createExchangeProfileWorkflow(req.scope).run({
    input: {
      integration_id: integration.id,
      warehouse_id: "",
      stock_location_id: "",
      order_type: "",
    }
  })

  res.status(200).json({ integration })
}
