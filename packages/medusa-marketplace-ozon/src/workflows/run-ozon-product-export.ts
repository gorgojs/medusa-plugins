import {
  createWorkflow,
  createStep,
  StepResponse,
  WorkflowResponse,
} from "@medusajs/workflows-sdk"
import { OzonProductImport, OzonProduct } from "../types/ozon";

const DEMO_OZON_PRODUCTS: OzonProduct[] = [
  {
    offer_id: "SKU-12345-NEW",
    price: "1500",
    quantity: 1,
    description_category_id: 200001517,
    type_id: 93228,
    name: "Термофутболка",
    attributes: [
      { complex_id: 0, id: 4295, values: [{ dictionary_value_id: 971082156, value: "48;50;52" }] },
      { complex_id: 0, id: 10096, values: [{ dictionary_value_id: 61576, value: "Черный" }] },
      { complex_id: 0, id: 8292, values: [{ value: "SKU-12345-NEW" }] },
      { complex_id: 0, id: 9163, values: [{ value: "Мужской" }] },
      { complex_id: 0, id: 4495, values: [{ value: "Зима" }] },
      { complex_id: 0, id: 4496, values: [{ value: "80% хлопок, 15% полиэстер, 5% эластан" }] },
      { complex_id: 0, id: 4596, values: [{ value: "Длинный" }] },
      { complex_id: 0, id: 4389, values: [{ value: "Россия" }] },
    ],
    images: [
      "https://kelme.ua/wp-content/uploads/2021/06/termo-futbolka-kelme-tech-fit-3891112.9000.jpg",
    ],
    weight: 300,
    weight_unit: "g",
    dimensions: {
      length: 20,
      width: 10,
      height: 5,
      depth: 2,
    },
    vat: "0.1",
  },
  {
    offer_id: "SKU-12346-NEW",
    price: "1200",
    quantity: 1,
    description_category_id: 200001517,
    type_id: 93229,
    name: "Спортивная футболка",
    attributes: [
      { complex_id: 0, id: 4295, values: [{ dictionary_value_id: 971082156, value: "48;50" }] },
      { complex_id: 0, id: 10096, values: [{ dictionary_value_id: 61577, value: "Синий" }] },
      { complex_id: 0, id: 9163, values: [{ value: "Мужской" }] },
      { complex_id: 0, id: 8292, values: [{ value: "SKU-12346-NEW" }] },
      { complex_id: 0, id: 4596, values: [{ value: "Короткий" }] },
      { complex_id: 0, id: 4495, values: [{ value: "Лето" }] },
      { complex_id: 0, id: 4496, values: [{ value: "Полиэстер" }] },
      { complex_id: 0, id: 4389, values: [{ value: "Россия" }] },
    ],
    images: [
      "https://kelme.ua/wp-content/uploads/2021/06/sport-futbolka-3891112.9000.jpg",
    ],
    weight: 250,
    weight_unit: "g",
    dimensions: {
      length: 19,
      width: 9,
      height: 4,
      depth: 1,
    },
    vat: "0.1",
  }
]


type Input = { items: any[] }
type Output = {
  ok: boolean
  status: number
  data: any
  task_id?: string
}

const OZON_BASE_URL = process.env.OZON_BASE_URL ?? "https://api-seller.ozon.ru"
const HEADERS = {
  "Client-Id": process.env.OZON_CLIENT_ID!,
  "Api-Key": process.env.OZON_API_KEY!,
  "Accept": "application/json",
  "Content-Type": "application/json",
}

const OZON_EXPORT_MODULE = "ozon_export"

export type runExportStepInput = OzonProductImport

const runExportStep = createStep<Input, Output, void>(
  "admin-ozon-post-import",
  async (input) => {
    let items: OzonProduct[] = []
    if (input.items.length === 0) {
      // TODO: fetch products for export
      items = DEMO_OZON_PRODUCTS
    }

    console.log("Exporting items to Ozon:", items);

    // TODO: decide what to do if items is empty
    if (!Array.isArray(items) || items.length === 0) {
      throw new Error("Items must be a non-empty array")
    }

    const res = await fetch(`${OZON_BASE_URL}/v3/product/import`, {
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
  async () => { }
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
  async () => { }
)

export const runOzonProductExport = createWorkflow<Input, Output, []>(
  "admin-ozon-product-import",
  (input) => {
    const result = runExportStep(input)
    if (result.task_id) {
      saveOzonTaskStep(result.task_id)
    }
    return new WorkflowResponse<Output>(result)
  }
)

