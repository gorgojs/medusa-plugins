import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import {
  OZON_BASE_URL,
  HEADERS,
  ExportInput,
  Output,
  OzonProduct,
} from "../types"
import {assertOzonEnv} from "../../../lib"


export const runExportStep = createStep<ExportInput, Output, void>(
  "admin-ozon-post-export",
  async (input) => {
    assertOzonEnv()

    const itemsRaw = (input as any)?.items
    const items: OzonProduct[] = Array.isArray(itemsRaw) ? itemsRaw : []

    if (items.length === 0) {
      throw new Error("Нет товаров для экспорта: маппинг вернул пусто. Проверьте обязательные поля (RUB цена, изображения, габариты, обязательные атрибуты категории).")
    }

    const url = `${OZON_BASE_URL}/v3/product/import`
    const body: any = { items }

    const res = await fetch(url, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(body),
    })

    const raw = await res.text().catch(() => "")
    if (!res.ok) {
      throw new Error(
        `Ozon import failed: ${res.status}. URL=${url}. ` +
        `First 500 bytes of body: ${raw.slice(0, 500)}`
      )
    }

    let data: any = {}
    try { data = raw ? JSON.parse(raw) : {} } catch { }

    const task_id = String(data?.result?.task_id ?? "")
    if (!task_id) {
      throw new Error(
        `Ozon import response has no task_id. URL=${url}. ` +
        `First 500 bytes of body: ${raw.slice(0, 500)}`
      )
    }

    return new StepResponse<Output, void>({ ok: true, status: res.status, data, task_id })
  },
  async () => { }
)