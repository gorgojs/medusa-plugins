import {
  createStep,
  StepResponse,
} from "@medusajs/framework/workflows-sdk"
import { OZON_EXPORT_MODULE } from "../../../modules/ozon-export"
import { OzonExportRecord } from "../../../types/ozon"

export type ApplyStatusesToDbInput = {
  updates: Array<{
    id: string
    ozon_task_status?: string | null
    total?: number | null
    items?: any[] | null
    raw_result?: any | null
    error_message?: string | null
    last_checked_at?: Date | null
  }>
}

export const applyStatusesToDbStep = createStep<ApplyStatusesToDbInput, unknown, unknown>(
  "apply-statuses-to-db",
  async (input, { container }) => {
    const ozonExportService = container.resolve(OZON_EXPORT_MODULE) as any

    const ids = input.updates.map((update) => update.id)
    const previousRecords = await ozonExportService.listOzonExports(
      { id: ids },
      { take: ids.length }
    )

    await ozonExportService.updateOzonExports(
      input.updates.map((update) => ({
        id: update.id,
        ozon_task_status: update.ozon_task_status ?? null,
        total: update.total ?? null,
        items: Array.isArray(update.items) ? update.items : update.items ?? null,
        raw_result: update.raw_result ?? null,
        error_message: update.error_message ?? null,
        last_checked_at: update.last_checked_at ?? null,
      }))
    )

    return new StepResponse(input.updates, previousRecords?.rows ?? [])
  },
  async (previousRecords: OzonExportRecord[], { container }) => {
    if (!previousRecords?.length) return

    const ozonExportService = container.resolve(OZON_EXPORT_MODULE) as any

    await ozonExportService.updateOzonExports(
      previousRecords.map((record) => ({
        id: record.id,
        ozon_task_status: record.ozon_task_status ?? null,
        total: record.total ?? null,
        items: record.items ?? null,
        raw_result: record.raw_result ?? null,
        error_message: record.error_message ?? null,
        last_checked_at: record.last_checked_at ?? null,
      }))
    )
  }
)
