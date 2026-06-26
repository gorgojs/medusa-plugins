import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { upsertIntegrationWorkflow, deleteIntegrationWorkflow } from "../../../../workflows/integration"
import { service, maskedView, requireProvider } from "../_helpers"
import type { AdminUpsertIntegrationType } from "../validators"
import type {
  AdminIntegrationResponse,
  AdminIntegrationUpsertResponse,
  AdminIntegrationDeleteResponse,
} from "../../../../types"

/** Descriptor (UI schema) + current masked record + completeness for one declared instance. */
export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse<AdminIntegrationResponse>
) => {
  const svc = service(req)
  const provider_id = req.params.provider_id
  requireProvider(svc, provider_id)
  const descriptor = svc.getProviderUiDescriptor(provider_id)
  const record = await svc.findByProviderId(provider_id)
  const is_complete = record ? svc.isComplete(record) : false
  res.json({ descriptor, integration: record ? maskedView(record) : null, is_complete })
}

export const POST = async (
  req: AuthenticatedMedusaRequest<AdminUpsertIntegrationType>,
  res: MedusaResponse<AdminIntegrationUpsertResponse>
) => {
  const svc = service(req)
  const provider_id = req.params.provider_id
  requireProvider(svc, provider_id)

  // Only the edited section is validated (inside the workflow step), against that section's
  // own schema — a readable, field-prefixed message surfaces on failure. The config as a
  // whole may remain a partial draft; full validation happens lazily at resolve time.
  const { result } = await upsertIntegrationWorkflow(req.scope).run({
    input: {
      provider_id,
      section_id: req.validatedBody.section_id,
      title: req.validatedBody.title,
      values: req.validatedBody.values,
    },
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
