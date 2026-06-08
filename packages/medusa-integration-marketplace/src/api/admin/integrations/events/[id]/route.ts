import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { IntegrationModuleService } from "../../../../../modules/integration/services"
import { INTEGRATION_MODULE } from "../../../../../modules/integration"
import { AdminIntegrationEventResponse } from "../../../../../types"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse<AdminIntegrationEventResponse>
) => {
  const integrationService: IntegrationModuleService = await req.scope.resolve(INTEGRATION_MODULE)
  const integration_event = await integrationService.retrieveIntegrationEvent(req.params.id, {
    select: req.queryConfig.fields
  })

  return res.status(200).json({ integration_event })
}
