import { createWorkflow, createStep, StepResponse, WorkflowResponse } from "@medusajs/workflows-sdk"

type Input = { items: any[] }
type Output = { ok: boolean; status: number; data: any }

const BASE = process.env.OZON_BASE_URL ?? "https://api-seller.ozon.ru"
const H = {
  "Client-Id": process.env.OZON_CLIENT_ID!,
  "Api-Key": process.env.OZON_API_KEY!,
  Accept: "application/json",
  "Content-Type": "application/json",
}

const postImportStep = createStep(
  "admin-ozon-post-import",
  async (input: Input) => {
    if (!Array.isArray(input.items) || input.items.length === 0) {
      throw new Error("items must be a non-empty array")
    }

    const r = await fetch(`${BASE}/v3/product/import`, {
      method: "POST",
      headers: H,
      body: JSON.stringify({ items: input.items }),
    })

    if (r.ok) {
      const data = await r.json().catch(() => ({}))
      return new StepResponse<Output>({ ok: true, status: r.status, data })
    }

    const text = await r.text().catch(() => "")
    try {
      throw new Error(JSON.parse(text))
    } catch {
      throw new Error(text || `Ozon error ${r.status}`)
    }
  },
  async () => {}
)

export const adminOzonProductImportWorkflow = createWorkflow<Input, Output, []>(
  "admin-ozon-product-import",
  (input) => {
    const result = postImportStep({ items: input.items })
    return new WorkflowResponse(result)
  }
)
