import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { INTEGRATION_MODULE } from "../../../../modules/integration"
import { IntegrationModuleService } from "../../../../modules/integration/services"
import { AdminIntegrationProviderList } from "../../../../types"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse<AdminIntegrationProviderList>
) => {

  const integrationService: IntegrationModuleService = req.scope.resolve(INTEGRATION_MODULE)

  const providers = integrationService.getProvidersList()

  res.status(200).json({ providers })
}
