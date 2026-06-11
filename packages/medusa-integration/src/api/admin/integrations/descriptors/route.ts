import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { INTEGRATION_MODULE, IntegrationModuleService } from "../../../.."

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const integrationService = req.scope.resolve<IntegrationModuleService>(INTEGRATION_MODULE)
  res.json({ descriptors: integrationService.listUiDescriptors() })
}
