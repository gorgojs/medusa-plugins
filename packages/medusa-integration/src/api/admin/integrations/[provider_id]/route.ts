import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { upsertIntegrationWorkflow, deleteIntegrationWorkflow } from "../../../../workflows/integration"
import { service, maskedView, requireProvider } from "../_helpers"

/** Descriptor (UI schema) + current masked record for one declared instance. */
export const GET = async (req: AuthenticatedMedusaRequest, res: MedusaResponse) => {
  const svc = service(req)
  const provider_id = req.params.provider_id
  const descriptor = svc.getProviderUiDescriptor(provider_id)
  requireProvider(svc, provider_id)
  const [record] = await svc.listIntegrations({ provider_id }, { take: 1 })
  res.json({ descriptor, integration: record ? maskedView(svc, record) : null })
}

type AdminUpsertIntegrationType = {
  title?: string
  values: Record<string, unknown>
}

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminUpsertIntegrationType>,
  res: MedusaResponse
) => {
  const svc = service(req)
  const provider_id = req.params.provider_id
  requireProvider(svc, provider_id)
  const { result } = await upsertIntegrationWorkflow(req.scope).run({
    input: {
      provider_id,
      title: req.body.title,
      payload: req.body.values
    },
  })
  res.json({ integration: maskedView(svc, result) })
}

export const DELETE = async (req: AuthenticatedMedusaRequest, res: MedusaResponse) => {
  const svc = service(req)
  const provider_id = req.params.provider_id
  requireProvider(svc, provider_id)
  await deleteIntegrationWorkflow(req.scope).run({
    input: {
      provider_id,
      hard: req.query.hard === "true"
    },
  })
  res.json({ id: provider_id, deleted: true })
}
