import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { importMarketplaceOrdersWorkflow } from "../../../../../../workflows/marketplace-orders";

// request for testing the workflow, not the final implementation of the route handler
export const POST = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const { result } = await importMarketplaceOrdersWorkflow(req.scope).run({
    input: {
      marketplace: req["marketplaceContext"],
      orderType: req.query.order_type as string | undefined,
    }
  })

  res.json(result)
}
