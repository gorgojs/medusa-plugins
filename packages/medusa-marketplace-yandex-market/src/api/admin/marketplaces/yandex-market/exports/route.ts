import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { exportProductsMarketplaceWorkflow } from "../../../../../workflows"

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const { result } = await exportProductsMarketplaceWorkflow.run({ container: req.scope })
    return res.status(200).json({
      result
    })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? "Internal error" })
  }
}
