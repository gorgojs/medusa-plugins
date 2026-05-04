import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { IntegrationModuleService } from "../../../../modules/integration/services"
import { INTEGRATION_MODULE } from "../../../../modules/integration"
import { AdminUpdateIntegrationType } from "../validators"
import { AdminIntegrationResponse, AdminIntegrationDeleteResponse } from "../../../../types"
import { ContainerRegistrationKeys, Modules } from "@medusajs/utils"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse<AdminIntegrationResponse>
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data } = await query.graph({
    entity: "integration",
    filters: { id: req.params.id },
    ...req.queryConfig
  })

  const integration = data[0]

  res.status(200).json({ integration })
}

export const POST = async (
  req: MedusaRequest<AdminUpdateIntegrationType>,
  res: MedusaResponse<AdminIntegrationResponse>
) => {
  const integrationService: IntegrationModuleService = await req.scope.resolve(INTEGRATION_MODULE)

  const integration = await integrationService.updateIntegrations({
    id: req.params.id,
    ...req.validatedBody
  })

  if (req.validatedBody.sales_channel_id) {
    const link = req.scope.resolve(ContainerRegistrationKeys.LINK)

    const current = req["integrationContext"]?.sales_channel?.id
    const next = req.validatedBody.sales_channel_id

    if (current !== next) {
      if (current) {
        await link.delete({
          integration: { integration_id: req.params.id },
          [Modules.SALES_CHANNEL]: { sales_channel_id: current }
        })
      }

      await link.create({
        integration: { integration_id: req.params.id },
        [Modules.SALES_CHANNEL]: { sales_channel_id: next }
      })
    }
  }

  res.status(200).json({ integration })
}

export const DELETE = async (
  req: MedusaRequest,
  res: MedusaResponse<AdminIntegrationDeleteResponse>
) => {
  const integrationService: IntegrationModuleService = await req.scope.resolve(INTEGRATION_MODULE)
  const id = req.params.id

  await integrationService.deleteIntegrations(id)

  res.status(200).json({
    id,
    object: "integration",
    deleted: true
  })
}
