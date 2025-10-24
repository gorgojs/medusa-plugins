import { createWorkflow, createStep, StepResponse, WorkflowResponse } from "@medusajs/workflows-sdk"
import { getDemoOzonOffers } from "../config/ozon-offers"

type Input = { items: any[] }
type Output = { 
  ok: boolean;
  status: number;
  data: any;
  task_id?: number;}

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
    const items = Array.isArray(input?.items) && input.items.length
      ? input.items
      : getDemoOzonOffers()

    if (!Array.isArray(items) || items.length === 0) {
      throw new Error("items must be a non-empty array")
    }

    const r = await fetch(`${BASE}/v3/product/import`, {
      method: "POST",
      headers: H,
      body: JSON.stringify({ items: input.items }),
    })

    if (r.ok) {
      const data = await r.json().catch(() => ({}))

      const task_id = data?.result?.task_id;
      
      if (!task_id) {
        throw new Error("task_id not found in response");
      }

      return new StepResponse<Output>({ ok: true, status: r.status, data: { ...data} })
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
    const result = postImportStep(input)
    return new WorkflowResponse(result)
  }
)
