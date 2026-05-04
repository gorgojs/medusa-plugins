import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { IntegrationModuleService } from "../../../../../modules/integration/services"
import { INTEGRATION_MODULE } from "../../../../../modules/integration"
import { AdminIntegrationOrderTypeListResponse, IntegrationDTO } from "../../../../../types"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse<AdminIntegrationOrderTypeListResponse>
) => {
  const integrationModuleService: IntegrationModuleService = req.scope.resolve(INTEGRATION_MODULE)

  const integration: IntegrationDTO = req["integrationContext"]

  const orderTypes = await integrationModuleService.getIntegrationOrderTypes(integration.provider_id, {
    container: req.scope,
    integration
  })
  
  res.status(200).json({ orderTypes })
}
