import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { INTEGRATION_MODULE } from "../../../../../modules/integration"
import { IntegrationModuleService } from "../../../../../modules/integration/services"
import { AdminIntegrationWarehouseListResponse, IntegrationDTO } from "../../../../../types"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse<AdminIntegrationWarehouseListResponse>
) => {
  const integrationModuleService: IntegrationModuleService = req.scope.resolve(INTEGRATION_MODULE)

  const integration: IntegrationDTO = req["integrationContext"]

  const warehouses = await integrationModuleService.getIntegrationWarehouses(integration.provider_id, {
    container: req.scope,
    integration
  })

  res.status(200).json({ warehouses })
}
