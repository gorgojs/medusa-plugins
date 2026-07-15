import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { service } from "./_helpers"
import type { AdminIntegrationListResponse } from "../../../types"

export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse<AdminIntegrationListResponse>
) => {
  const svc = service(req)
  const integrations = await svc.listIntegrationsOverview()
  res.json({ integrations })
}
