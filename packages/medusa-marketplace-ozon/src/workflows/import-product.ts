import {
  createWorkflow,
  createStep,
  StepResponse,
  WorkflowResponse,
} from "@medusajs/workflows-sdk"
import { getDemoOzonOffers } from "../config/ozon-offers"

type Input = { items: any[] }
type Output = {
  ok: boolean
  status: number
  data: any
  task_id?: string
}

const BASE_URL = process.env.OZON_BASE_URL ?? "https://api-seller.ozon.ru"
const HEADERS = {
  "Client-Id": process.env.OZON_CLIENT_ID!,
  "Api-Key": process.env.OZON_API_KEY!,
  "Accept": "application/json",
  "Content-Type": "application/json",
}

const OZON_EXPORT_MODULE = "ozon_export"

const postImportStep = createStep<Input, Output, void>(
  "admin-ozon-post-import",
  async (input) => {
    const items =
      Array.isArray(input?.items) && input.items.length
        ? input.items
        : getDemoOzonOffers()

    if (!Array.isArray(items) || items.length === 0) {
      throw new Error("items must be a non-empty array")
    }

    const res = await fetch(`${BASE_URL}/v3/product/import`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({ items }),
    })

    if (!res.ok) {
      const text = await res.text().catch(() => "")
      throw new Error(text || `Ozon error ${res.status}`)
    }

    const data = await res.json().catch(() => ({}))
    const rawTaskId = data?.result?.task_id
    if (!rawTaskId) {
      throw new Error("task_id not found in response")
    }

    const task_id = String(rawTaskId)

    return new StepResponse<Output, void>({
      ok: true,
      status: res.status,
      data,
      task_id,
    })
  },
  async () => {}
)

const saveOzonTaskStep = createStep<string, void, void>(
  "save-ozon-task",
  async (task_id, { container }) => {
    const svc = container.resolve(OZON_EXPORT_MODULE) as {
      createOzonExports: (
        data: { task_id: string } | { task_id: string }[]
      ) => Promise<any[]>
    }

    try {
      await svc.createOzonExports({ task_id })
    } catch (e: any) {
      const msg = String(e?.message ?? "")
      if (!/unique|duplicate/i.test(msg)) throw e
    }
  },
  async () => {}
)

export const adminOzonProductImportWorkflow = createWorkflow<Input, Output, []>(
  "admin-ozon-product-import",
  (input) => {
    const result = postImportStep(input)
    if (result.task_id) {
      saveOzonTaskStep(result.task_id)
    }
    return new WorkflowResponse<Output>(result)
  }
)

