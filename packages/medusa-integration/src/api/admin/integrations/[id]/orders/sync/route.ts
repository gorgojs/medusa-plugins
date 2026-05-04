import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { importIntegrationOrdersWorkflow } from "../../../../../../workflows/integration-orders";

// request for testing the workflow, not the final implementation of the route handler
export const POST = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const { result } = await importIntegrationOrdersWorkflow(req.scope).run({
    input: {
      integration: req["integrationContext"],
      orderType: req["integrationContext"]?.exchange_profiles[0]?.order_type
    }
  })

  res.json(result)
}
