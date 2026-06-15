import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { upsertIntegrationWorkflow, deleteIntegrationWorkflow } from "../../../../workflows/integration"
import { service, maskedView, resolveRegistration } from "../_helpers"

/** Descriptor (UI schema) + current masked record for one declared instance. */
export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
  const svc = service(req)
  const { plugin_id, instance_id } = resolveRegistration(svc, req.params.provider_id)
  const descriptor = svc.getUiDescriptor(plugin_id, instance_id)
  const [record] = await svc.listIntegrations({ plugin_id, instance_id }, { take: 1 })
  res.json({
    descriptor,
    integration: record ? maskedView(svc, record) : null
  })
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
  const { plugin_id, instance_id } = resolveRegistration(svc, req.params.provider_id)
  const { result } = await upsertIntegrationWorkflow(req.scope).run({
    input: { plugin_id, instance_id, title: req.body.title, payload: req.body.values },
  })
  res.json({ integration: maskedView(svc, result) })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
  const svc = service(req)
  const { plugin_id, instance_id } = resolveRegistration(svc, req.params.provider_id)
  await deleteIntegrationWorkflow(req.scope).run({
    input: { plugin_id, instance_id, hard: req.query.hard === "true" },
  })
  res.json({
    id: req.params.provider_id,
    deleted: true
  })
}
