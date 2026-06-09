import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { IntegrationModuleService } from "../../../modules/integration/services"
import { INTEGRATION_MODULE } from "../../../modules/integration"

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
) {
  const service = await req.scope.resolve<IntegrationModuleService>(INTEGRATION_MODULE)
  const uiDescriptors = await service.listUiDescriptors()

  res.json(uiDescriptors)
}
