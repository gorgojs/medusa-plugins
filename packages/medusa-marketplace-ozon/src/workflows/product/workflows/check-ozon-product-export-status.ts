import {
  createWorkflow,
  transform,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import { listAllOzonExportsStep, fetchStatusesFromOzonStep, applyStatusesToDbStep } from "../steps"
import { Input, FetchResult } from "../types"


export const checkOzonProductExportStatusWorkflow = createWorkflow<Input, { count: number }, []>(
  "check-ozon-product-export-status",
  (input: Input = {}) => {
    const records = listAllOzonExportsStep({
      batchSize: input.batchSize ?? 200,
      onlyWithoutStatus: input.onlyWithoutStatus ?? false,
    })

    const fetched = fetchStatusesFromOzonStep({
      records,
      concurrency: input.concurrency ?? 10,
    })

    const { updates } = transform({ fetched }, ({ fetched }) => {
      const now = new Date()

      return {
        updates: (fetched as FetchResult[]).map((fr) => {
          if (fr.ok) {
            const items = Array.isArray(fr.result.items) ? fr.result.items : []
            let status: string | null = null

            if (items.length > 0) {
              const allImported = items.every((it) => it.status === "imported")
              status = allImported ? "success" : "error"
            } else {
              status = "error"
            }

            return {
              id: fr.id,
              ozon_task_status: status,
              total: typeof fr.result.total === "number" ? fr.result.total : null,
              items,
              raw_result: fr.result,
              error_message: null,
              last_checked_at: now,
            }
          } else {
            return {
              id: fr.id,
              ozon_task_status: "error",
              error_message: fr.error,
              last_checked_at: now,
            }
          }
        }),
      }
    })


    applyStatusesToDbStep({ updates, chunkSize: 200 })

    const count = transform({ updates }, (d) => d.updates.length)
    return new WorkflowResponse({ count })
  }
)
