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
      onlyWithoutStatus: input.onlyWithoutStatus ?? false,
    })

    const fetched = fetchStatusesFromOzonStep({
      records,
      concurrency: input.concurrency ?? 10,
    })

    const { updates } = transform({ fetched }, ({ fetched }) => {
      const now = new Date()

      return {
        updates: (fetched as FetchResult[]).map((fetchResult) => {
          if (fetchResult.ok) {
            const items = Array.isArray(fetchResult.result.items) ? fetchResult.result.items : []
            const status =
              items.length > 0
                ? (items.every((item) => item.status === "imported") ? "success" : "error")
                : "error"

            return {
              id: fetchResult.id,
              ozon_task_status: status,
              total: typeof fetchResult.result.total === "number" ? fetchResult.result.total : null,
              items,
              raw_result: fetchResult.result,
              error_message: null,
              last_checked_at: now,
            }
          }

          return {
            id: fetchResult.id,
            ozon_task_status: "error",
            error_message: fetchResult.error,
            last_checked_at: now,
          }
        }),
      }
    })

    applyStatusesToDbStep({ updates })

    const count = transform({ updates }, (d) => d.updates.length)
    return new WorkflowResponse({ count })
  }
)
