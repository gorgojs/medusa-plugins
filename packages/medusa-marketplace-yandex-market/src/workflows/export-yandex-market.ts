import { createStep, StepResponse, createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { getDemoYandexOffers } from "../config/yandex-offers"

export type YmOffer = {
  offerId: string
  name: string
  marketCategoryId: number
  pictures: string[]
  vendor: string
  description: string
}

export type YmExportInput = { offers?: YmOffer[] }
export type YmExportOutput = { ok: boolean; status: number; sentCount: number; response: any }

const YM_BASE = process.env.YM_BASE_URL ?? "https://api.partner.market.yandex.ru"

function authHeaders(): Record<string, string> {
  const apiKey = process.env.YM_API_KEY
  if (!apiKey) throw new Error("Set YM_API_KEY")
  return { "Api-Key": apiKey }
}

const ymOfferMappingsUpdateStep = createStep(
  "ym-offer-mappings-update",
  async (input?: YmExportInput) => {
    const businessId = process.env.YM_BUSINESS_ID
    if (!businessId) throw new Error("Set YM_BUSINESS_ID")

    const offers = Array.isArray(input?.offers) && input!.offers.length
      ? input!.offers
      : getDemoYandexOffers()

    const body = { offerMappings: offers.map((o) => ({ offer: o })) }

    const r = await fetch(`${YM_BASE}/v2/businesses/${businessId}/offer-mappings/update`, {
      method: "POST",
      headers: { ...authHeaders(), Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })

    const data = await (r.ok ? r.json().catch(() => ({})) : r.text().catch(() => ""))
    if (!r.ok) throw new Error(typeof data === "string" ? data : `Yandex Market error ${r.status}`)

    return new StepResponse<YmExportOutput>(
      { ok: true, status: r.status, sentCount: offers.length, response: data },
      offers.map((o) => o.offerId)
    )
  },
  async () => {}
)

export const exportYandexMarketWorkflow = createWorkflow<YmExportInput, YmExportOutput, []>(
  "export-yandex-market",
  (input) => new WorkflowResponse(ymOfferMappingsUpdateStep(input))
)
