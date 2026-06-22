import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { upsertIntegrationWorkflow, deleteIntegrationWorkflow } from "../../../../workflows/integration"
import { service, maskedView, requireProvider } from "../_helpers"

/** Descriptor (UI schema) + current masked record for one declared instance. */
export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
  const svc = service(req)
  const provider_id = req.params.provider_id
  const descriptor = svc.getProviderUiDescriptor(provider_id)
  requireProvider(svc, provider_id)
  const [record] = await svc.listIntegrations({ provider_id }, { take: 1 })
  res.json({
    descriptor,
    integration: record ? maskedView(record) : null
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
  const provider_id = req.params.provider_id
  requireProvider(svc, provider_id)

  // Keep secrets left blank (they're never sent to the client), then validate against the
  // descriptor schema and return field-level errors on failure.
  const descriptor = svc.getProviderDescriptor(provider_id)!
  const values = await svc.mergeSecrets(provider_id, req.body.values ?? {})
  const parsed = descriptor.schema.safeParse(values)
  if (!parsed.success) {
    return res.status(400).json({
      message: parsed.error.issues
        .map((i) => `${i.path.join(".") || "value"}: ${i.message}`)
        .join("; "),
      field_errors: parsed.error.issues.map((i) => ({
        field: String(i.path[0] ?? ""),
        message: i.message,
      })),
    })
  }

  const { result } = await upsertIntegrationWorkflow(req.scope).run({
    input: { provider_id, title: req.body.title, payload: values },
  })
  res.json({ integration: maskedView(result) })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
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
