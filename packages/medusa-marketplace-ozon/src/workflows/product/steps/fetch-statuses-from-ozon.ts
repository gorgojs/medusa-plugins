import {
  createStep,
  StepResponse,
} from "@medusajs/framework/workflows-sdk"
import { FetchResult } from "../types/types"
import { OzonExportRecord } from "../../../types/ozon"
import { fetchTaskStatus } from "../../../lib"

export type FetchStatusesFromOzonInput = {
  records: OzonExportRecord[]
  concurrency?: number
}

export const fetchStatusesFromOzonStep = createStep<
  FetchStatusesFromOzonInput,
  FetchResult[],
  unknown
>(
  "fetch-statuses-from-ozon",
  async ({ records, concurrency = 10 }, { container }) => {
    const logger = container.resolve("logger") as any

    const exportRecords = Array.isArray(records) ? records : []
    const results: FetchResult[] = new Array(exportRecords.length)

    let nextIndex = 0
    const worker = async () => {
      while (true) {
        const idx = nextIndex++
        if (idx >= exportRecords.length) break

        const record = exportRecords[idx]
        try {
          const response = await fetchTaskStatus(record.task_id)
          const taskResult = response?.result ?? {}

          results[idx] = {
            id: record.id,
            task_id: record.task_id,
            ok: true,
            result: {
              items: Array.isArray(taskResult.items) ? taskResult.items : undefined,
              total: typeof taskResult.total === "number" ? taskResult.total : undefined,
              status: typeof taskResult.status === "string" ? taskResult.status : undefined,
            },
          }
        } catch (err: any) {
          logger?.warn?.(`OZON status check failed (task ${record.task_id}): ${err?.message}`)
          results[idx] = {
            id: record.id,
            task_id: record.task_id,
            ok: false,
            error: err?.message ?? "unknown",
          }
        }
      }
    }

    const workerCount = Math.max(1, Math.min(concurrency, exportRecords.length || 1))
    await Promise.all(Array.from({ length: workerCount }, () => worker()))

    return new StepResponse<FetchResult[]>(results)
  }
)
