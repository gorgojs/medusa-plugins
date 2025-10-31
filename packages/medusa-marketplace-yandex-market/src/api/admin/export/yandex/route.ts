import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { exportYandexMarketWorkflow } from "../../../../workflows/export-yandex-market"

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const exec = await exportYandexMarketWorkflow.run({
      container: req.scope,
      input: { medusaCategoryName: "Mobile Phones" },
    })
    return res.status(200).json(exec.result)
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? "Internal error" })
  }
}
