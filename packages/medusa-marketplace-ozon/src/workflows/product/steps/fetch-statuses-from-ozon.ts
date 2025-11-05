import {
  createStep,
  StepResponse,
} from "@medusajs/framework/workflows-sdk"
import { OzonExportRecord, FetchResult } from "../types/types"

import { fetchTaskStatus } from "../../../lib"


export const fetchStatusesFromOzonStep = createStep(
  "fetch-statuses-from-ozon",
  async (
    {
      records,
      concurrency = 10,
    }: { records: OzonExportRecord[]; concurrency?: number },
    { container }
  ) => {
    const logger = container.resolve("logger") as any
    const list = Array.isArray(records) ? records : []
    const results: FetchResult[] = new Array(list.length)
    let i = 0
    async function worker() {
      while (i < list.length) {
        const idx = i++
        const r = list[idx]
        try {
          const resp = await fetchTaskStatus(r.task_id)
          const result = resp?.result ?? {}
          results[idx] = {
            id: r.id,
            task_id: r.task_id,
            ok: true,
            result: {
              items: Array.isArray(result.items) ? result.items : undefined,
              total: typeof result.total === "number" ? result.total : undefined,
              status: typeof result.status === "string" ? result.status : undefined,
            },
          }
        } catch (e: any) {
          logger?.warn?.(`OZON status check failed (task ${r.task_id}): ${e?.message}`)
          results[idx] = {
            id: r.id,
            task_id: r.task_id,
            ok: false,
            error: e?.message ?? "unknown",
          }
        }
      }
    }

    const workers = Math.max(1, Math.min(concurrency, list.length || 1))
    await Promise.all(Array.from({ length: workers }, () => worker()))

    return new StepResponse(results)
  }
)