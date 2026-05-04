import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { categoryApi, withAuth } from "../../../../../lib/ozon-client"
import { INTEGRATION_MODULE } from "@gorgo/medusa-integration/modules/integration"
import { IntegrationModuleService } from "@gorgo/medusa-integration/modules/integration/services"
import { IntegrationOzonCredentialsType } from "../../../../../providers/integration-ozon/types"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const description_category_id = Number(req.query.description_category_id)
  const type_id = Number(req.query.type_id)
  if (!description_category_id || !type_id) {
    return res.status(400).json({
      message: "description_category_id and type_id are required",
    })
  }
  const integrationService: IntegrationModuleService = await req.scope.resolve(INTEGRATION_MODULE)
  const integration = await integrationService.listIntegrations(
    { id: req.params.id },
    { select: ["id", "provider_id", "is_enabled", "credentials"] }
  )

  const ozonAttributesResponse = await categoryApi.descriptionCategoryAPIGetAttributes(
    withAuth(integration[0].credentials as IntegrationOzonCredentialsType, {
      v1GetAttributesRequest: {
        description_category_id: description_category_id,
        type_id: type_id
      }
    })
  )

  return res.status(200).json(ozonAttributesResponse.data)
}
