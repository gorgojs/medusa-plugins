import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { testIntegrationConnectionWorkflow } from "../../../../../workflows/integration"
import { service, resolveRegistration } from "../../_helpers"

export const POST = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
  const svc = service(req)
  const { plugin_id, instance_id } = resolveRegistration(svc, req.params.provider_id)
  const { result } = await testIntegrationConnectionWorkflow(req.scope).run({
    input: { plugin_id, instance_id },
  })
  res.json(result)
}
