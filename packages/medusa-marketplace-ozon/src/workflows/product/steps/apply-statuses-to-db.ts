import {
  createStep,
  StepResponse,
} from "@medusajs/framework/workflows-sdk"
import { OZON_EXPORT_MODULE } from "../../../modules/ozon-export"
import { OzonExportRecord } from "../types/types"


export const applyStatusesToDbStep = createStep(
  "apply-statuses-to-db",
  async (
    input: {
      updates: Array<{
        id: string
        ozon_task_status?: string | null
        total?: number | null
        items?: any[] | null
        raw_result?: any | null
        error_message?: string | null
        last_checked_at?: Date | null
      }>
      chunkSize?: number
    },
    { container }
  ) => {
    const svc = container.resolve(OZON_EXPORT_MODULE) as any

    const ids = input.updates.map((u) => u.id)
    const prev = await svc.listOzonExports({ id: ids }, { take: ids.length })

    const chunkSize = input.chunkSize ?? 200
    for (let i = 0; i < input.updates.length; i += chunkSize) {
      const chunk = input.updates.slice(i, i + chunkSize).map((u) => ({
        id: u.id,
        ozon_task_status: u.ozon_task_status ?? null,
        total: u.total ?? null,
        items: Array.isArray(u.items) ? u.items : u.items ?? null,
        raw_result: u.raw_result ?? null,
        error_message: u.error_message ?? null,
        last_checked_at: u.last_checked_at ?? null,
      }))
      await svc.updateOzonExports(chunk)
    }

    return new StepResponse(input.updates, prev?.rows ?? [])
  },
  async (prevRows: OzonExportRecord[], { container }) => {
    if (!prevRows?.length) return
    const svc = container.resolve(OZON_EXPORT_MODULE) as any
    const chunkSize = 200
    for (let i = 0; i < prevRows.length; i += chunkSize) {
      const chunk = prevRows.slice(i, i + chunkSize).map((r) => ({
        id: r.id,
        ozon_task_status: r.ozon_task_status ?? null,
        total: r.total ?? null,
        items: r.items ?? null,
        raw_result: r.raw_result ?? null,
        error_message: r.error_message ?? null,
        last_checked_at: r.last_checked_at ?? null,
      }))
      await svc.updateOzonExports(chunk)
    }
  }
)