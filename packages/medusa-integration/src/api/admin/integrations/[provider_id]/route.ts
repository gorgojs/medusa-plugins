import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { MedusaError } from "@medusajs/framework/utils"
import { upsertIntegrationWorkflow, deleteIntegrationWorkflow } from "../../../../workflows/integration"
import { service, maskedView, requireProvider } from "../_helpers"
import type { AdminUpsertIntegrationType } from "../validators"
import type {
  AdminIntegrationResponse,
  AdminIntegrationUpsertResponse,
  AdminIntegrationDeleteResponse,
} from "../../../../types"

/** Descriptor (UI schema) + current masked record for one declared instance. */
export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse<AdminIntegrationResponse>
) => {
  const svc = service(req)
  const provider_id = req.params.provider_id
  requireProvider(svc, provider_id)
  const descriptor = svc.getProviderUiDescriptor(provider_id)
  const [record] = await svc.listIntegrations({ provider_id }, { take: 1 })
  res.json({ descriptor, integration: record ? maskedView(record) : null })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminUpsertIntegrationType>,
  res: MedusaResponse<AdminIntegrationUpsertResponse>
) => {
  const svc = service(req)
  const provider_id = req.params.provider_id
  requireProvider(svc, provider_id)

  // The middleware validated the outer shape ({ title?, values }); here we keep blank
  // secrets (never sent to the client) and validate `values` against the provider's
  // descriptor schema, surfacing a readable, field-prefixed message on failure.
  const descriptor = svc.getProviderDescriptor(provider_id)!
  const values = await svc.mergeSecrets(provider_id, req.validatedBody.values)
  const parsed = descriptor.schema.safeParse(values)
  if (!parsed.success) {
    throw new MedusaError(
      MedusaError.Types.INVALID_DATA,
      parsed.error.issues.map((i) => `${i.path.join(".") || "value"}: ${i.message}`).join("; ")
    )
  }

  const { result } = await upsertIntegrationWorkflow(req.scope).run({
    input: { provider_id, title: req.validatedBody.title, payload: values },
  })
  res.json({ integration: maskedView(result) })
}

export const DELETE = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse<AdminIntegrationDeleteResponse>
) => {
  const svc = service(req)
  const provider_id = req.params.provider_id
  requireProvider(svc, provider_id)
  await deleteIntegrationWorkflow(req.scope).run({
    input: { provider_id },
  })
  res.json({ id: provider_id, object: "integration", deleted: true })
}
