import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { categoryApi, withAuth } from "../../../../../lib/ozon-client"
import { INTEGRATION_MODULE } from "@gorgo/medusa-integration/modules/integration"
import { IntegrationModuleService } from "@gorgo/medusa-integration/modules/integration/services"
import { IntegrationOzonCredentialsType } from "../../../../../providers/integration-ozon/types"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const integrationService: IntegrationModuleService = await req.scope.resolve(INTEGRATION_MODULE)
  const integration = await integrationService.listIntegrations(
    { id: req.params.id },
    { select: ["id", "provider_id", "is_enabled", "credentials"] }
  )
  const credentials = integration[0].credentials as IntegrationOzonCredentialsType
  const ozonCategoriesResponse = await categoryApi.descriptionCategoryAPIGetTree(
    withAuth(credentials, {
      v1GetTreeRequest: { language: "RU" },
    })
  )
  return res.status(200).json(ozonCategoriesResponse.data)
}
