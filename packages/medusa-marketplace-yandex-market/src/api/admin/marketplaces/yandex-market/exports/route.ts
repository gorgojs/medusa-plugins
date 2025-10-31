import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { runYmProductExportWorkflow } from "../../../../../workflows/product/workflows/run-ym-product-export"

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const exec = await runYmProductExportWorkflow.run({
      container: req.scope,
      input: { medusaCategoryName: "Mobile Phones" },
    })
    return res.status(200).json(exec.result)
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? "Internal error" })
  }
}
