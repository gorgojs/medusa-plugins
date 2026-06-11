import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { MedusaError } from "@medusajs/framework/utils"
import { upsertIntegrationWorkflow } from "../../../workflows/integration"
import { INTEGRATION_MODULE } from "../../../modules/integration"
import { IntegrationModuleService } from "../../../modules/integration/services"

export const GET  = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
  const integrationService = req.scope.resolve<IntegrationModuleService>(INTEGRATION_MODULE)
  const integrations = await integrationService.listIntegrations({}, { take: 1000 })
  res.json({ integrations })
}

type AdminCreateIntegrationType = {
  title: string
  values: Record<string, unknown>
  plugin_id: string
}

export async function POST(
  req: AuthenticatedMedusaRequest<AdminCreateIntegrationType>,
  res: MedusaResponse
) {
  const integrationService = req.scope.resolve<IntegrationModuleService>(INTEGRATION_MODULE)
  const plugin_id = req.body.plugin_id
  const descriptor = integrationService.getDescriptor(plugin_id)
  if (!descriptor) throw new MedusaError(MedusaError.Types.NOT_FOUND, "Unknown plugin")
  if (!descriptor.supportsMultipleInstances) {
    throw new MedusaError(MedusaError.Types.NOT_ALLOWED, "Plugin does not support multiple instances")
  }
  const instance_id = `${plugin_id}_${Date.now().toString(36)}`
  const { result } = await upsertIntegrationWorkflow(req.scope).run({
    input: { plugin_id, instance_id, title: req.body.title, payload: req.body.values },
  })
  res.status(201).json({ integration: result })
}
