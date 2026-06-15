import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { service } from "./_helpers"

export const GET = async (
  req: AuthenticatedMedusaRequest,
  res: MedusaResponse
) => {
  const svc = service(req)
  const integrations = await svc.listIntegrationsOverview()
  res.json({ integrations })
}
