import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { exportYandexMarketWorkflow } from "../../../../workflows/export-yandex-market"
import { getDemoYandexOffers } from "../../../../config/yandex-offers"

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const body = (req.body ?? {}) as { offers?: any[] }
    const offers = Array.isArray(body.offers) && body.offers.length > 0
      ? body.offers
      : getDemoYandexOffers() 

    const exec = await exportYandexMarketWorkflow.run({
      container: req.scope,
      input: { offers },
    })

    return res.status(200).json(exec.result)
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? "Internal error" })
  }
}
