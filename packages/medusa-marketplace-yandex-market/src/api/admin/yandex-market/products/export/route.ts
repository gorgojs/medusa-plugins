import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { exportMarketplaceProductsWorkflow } from "../../../../../workflows"

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const { result } = await exportMarketplaceProductsWorkflow.run({ container: req.scope })
    return res.status(200).json({
      result
    })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? "Internal error" })
  }
}
