import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { MedusaError } from "@medusajs/framework/utils"
import { upsertIntegrationWorkflow, deleteIntegrationWorkflow } from "../../../../workflows/integration"
import { INTEGRATION_MODULE, IntegrationModuleService } from "../../../.."

export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
  const integrationService = req.scope.resolve<IntegrationModuleService>(INTEGRATION_MODULE)
  const [integration] = await integrationService.listIntegrations(
    { plugin_id: req.params.plugin_id, instance_id: null },
    { take: 1 }
  )
  if (!integration) throw new MedusaError(MedusaError.Types.NOT_FOUND, "Not configured")
  res.json({ integration })
}

type AdminUpsertIntegrationType = {
  title: string
  values: Record<string, unknown>
}

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminUpsertIntegrationType>,
  res: MedusaResponse
) => {
  const { result } = await upsertIntegrationWorkflow(req.scope).run({
    input: { plugin_id: req.params.plugin_id, instance_id: null, title: req.body.title, payload: req.body.values },
  })
  res.json({ integration: result })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
  await deleteIntegrationWorkflow(req.scope).run({
    input: { plugin_id: req.params.plugin_id, instance_id: null, hard: req.query.hard === "true" },
  })
  res.json({ id: req.params.plugin_id, deleted: true })
}
