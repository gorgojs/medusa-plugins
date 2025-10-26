import {
  createStep,
  StepResponse,
  createWorkflow,
  transform,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import { OZON_EXPORT_MODULE } from "../modules/ozon-export"

type OzonExportRecord = {
  id: string
  task_id: string
  ozon_task_status?: string | null
  total?: number | null
  items?: any[] | null
  raw_result?: any | null
  error_message?: string | null
  last_checked_at?: Date | null
}


type FetchResult =
  | {
    id: string
    task_id: string
    ok: true
    result: { items?: any[]; total?: number; status?: string }
  }
  | {
    id: string
    task_id: string
    ok: false
    error: string
  }

type Input = {
  batchSize?: number
}

async function fetchTaskStatus(taskId: string) {
  const clientId = process.env.OZON_CLIENT_ID!
  const apiKey = process.env.OZON_API_KEY!
  const baseUrl = process.env.OZON_BASE_URL ?? "https://api-seller.ozon.ru"

  const res = await fetch(`${baseUrl}/v1/task/info`, {
    method: "POST",
    headers: {
      "Client-Id": clientId,
      "Api-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task_id: taskId }),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => "")
    throw new Error(`Ozon ${res.status}: ${text}`)
  }
  return (await res.json()) as { result?: { items?: any[]; total?: number; status?: string } }
}


export const listOzonExportsStep = createStep(
  "list-ozon-exports",
  async ({ batchSize = 100 }: Input, { container }) => {
    const svc = container.resolve(OZON_EXPORT_MODULE) as any
    const { rows } = await svc.listOzonExports({}, { take: batchSize })
    return new StepResponse(rows)
  }
)

export const fetchStatusesFromOzonStep = createStep(
  "fetch-statuses-from-ozon",
  async (records: OzonExportRecord[], { container }) => {
    const logger = container.resolve("logger") as any

    const results: FetchResult[] = await Promise.all(
      (records ?? []).map(async (r) => {
        try {
          const resp = await fetchTaskStatus(r.task_id)
          const result = resp?.result ?? {}
          return {
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
          return {
            id: r.id,
            task_id: r.task_id,
            ok: false,
            error: e?.message ?? "unknown",
          }
        }
      })
    )

    return new StepResponse(results)
  }
)

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
    },
    { container }
  ) => {
    const svc = container.resolve(OZON_EXPORT_MODULE) as any

    const prev = await svc.listOzonExports(
      { id: input.updates.map((u) => u.id) },
      { take: input.updates.length }
    )
    await svc.updateOzonExports(input.updates)

    return new StepResponse(input.updates, prev?.rows ?? [])
  },
  async (prevRows: OzonExportRecord[], { container }) => {
    if (!prevRows?.length) return
    const svc = container.resolve(OZON_EXPORT_MODULE) as any
    await svc.updateOzonExports(
      prevRows.map((r) => ({
        id: r.id,
        ozon_task_status: r.ozon_task_status ?? null,
        total: r.total ?? null,
        items: r.items ?? null,
        raw_result: r.raw_result ?? null,
        error_message: r.error_message ?? null,
        last_checked_at: r.last_checked_at ?? null,
      }))
    )
  }
)


export const checkExportStatusWorkflow = createWorkflow("check-export-status", (input: Input = {}) => {
  const records = listOzonExportsStep(input)
  const fetched = fetchStatusesFromOzonStep(records)

  const { updates } = transform({ fetched }, ({ fetched }) => {
    const now = new Date()
    return {
      updates: (fetched as FetchResult[]).map((fr) => {
        if (fr.ok) {
          return {
            id: fr.id,
            ozon_task_status: fr.result.status ?? null,
            total: fr.result.total ?? null,
            items: fr.result.items ?? null,
            raw_result: fr.result,
            error_message: null,
            last_checked_at: now,
          }
        } else {
          return {
            id: fr.id,
            error_message: fr.error,
            last_checked_at: now,
          }
        }
      }),
    }
  })

  const applied = applyStatusesToDbStep({ updates })

  return new WorkflowResponse({ count: transform({ updates }, (d) => d.updates.length), applied })
})
