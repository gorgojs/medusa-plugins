import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { importMarketplaceOrdersWorkflow } from "../../../../../../workflows/integration-orders";

// request for testing the workflow, not the final implementation of the route handler
export const POST = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const { result } = await importMarketplaceOrdersWorkflow(req.scope).run({
    input: {
      marketplace: req["marketplaceContext"],
      orderType: req["marketplaceContext"]?.exchange_profiles[0]?.order_type
    }
  })

  res.json(result)
}
