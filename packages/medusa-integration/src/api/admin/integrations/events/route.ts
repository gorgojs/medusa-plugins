import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { IntegrationModuleService } from "../../../../modules/integration/services"
import { INTEGRATION_MODULE } from "../../../../modules/integration"
import { AdminIntegrationCreateEventsType, AdminIntegrationDefaultFindParams } from "../validators"
import { AdminIntegrationEventListResponse, AdminIntegrationEventResponse } from "../../../../types"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse<AdminIntegrationEventListResponse>
) => {
  const integrationService: IntegrationModuleService = req.scope.resolve(INTEGRATION_MODULE)
  const { integration_id } = req.validatedQuery
  const [integration_events, count] = await integrationService.listAndCountIntegrationEvents({
    integration_id: integration_id ? [integration_id] : undefined
  }, {
    select: req.queryConfig.fields,
    ...req.queryConfig.pagination,
  })

  res.status(200).json({
    integration_events,
    count,
    limit: req.queryConfig.pagination.take ?? AdminIntegrationDefaultFindParams.limit,
    offset: req.queryConfig.pagination.skip
  })
}

export const POST = async (
  req: MedusaRequest<AdminIntegrationCreateEventsType>,
  res: MedusaResponse<AdminIntegrationEventResponse>
) => {
  const integrationService: IntegrationModuleService = req.scope.resolve(INTEGRATION_MODULE)
  const integration_event = await integrationService.createIntegrationEvents(req.validatedBody)

  res.status(200).json({ integration_event })
}

