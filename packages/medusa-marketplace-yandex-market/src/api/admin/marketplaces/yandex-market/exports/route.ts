import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { runYmProductExportWorkflow } from "../../../../../workflows/product/workflows/export-products"

export const POST = async (request: MedusaRequest, result: MedusaResponse) => {
  try {
    const exec = await runYmProductExportWorkflow.run({ container: request.scope })
    return result.status(200).json({
      status: exec.result.status,
      results: exec.result.results,
    })
  } catch (e: any) {
    return result.status(500).json({ error: e?.message ?? "Internal error" })
  }
}
