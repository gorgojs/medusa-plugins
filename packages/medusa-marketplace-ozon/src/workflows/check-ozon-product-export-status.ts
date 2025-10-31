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
  concurrency?: number
  onlyWithoutStatus?: boolean
}

const OZON_BASE_URL = process.env.OZON_BASE_URL ?? "https://api-seller.ozon.ru"
const HEADERS = {
  "Client-Id": process.env.OZON_CLIENT_ID!,
  "Api-Key": process.env.OZON_API_KEY!,
  "Accept": "application/json",
  "Content-Type": "application/json",
}


async function fetchTaskStatus(taskId: string) {
  const res = await fetch(`${OZON_BASE_URL}/v1/product/import/info`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({ task_id: Number(taskId) }),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => "")
    throw new Error(`Ozon ${res.status}: ${text}`)
  }

  return (await res.json()) as {
    result?: { items?: any[]; total?: number; status?: string }
  }
}


export const listAllOzonExportsStep = createStep(
  "list-all-ozon-exports",
  async ({ batchSize = 200, onlyWithoutStatus = false }: Input, { container }) => {
    const logger = container.resolve("logger") as any
    const svc = container.resolve(OZON_EXPORT_MODULE) as any

    const rows: OzonExportRecord[] = []
    let skip = 0
    const where = onlyWithoutStatus ? { ozon_task_status: null } : {}

    while (true) {
      const page = await svc.listOzonExports(where, { take: batchSize, skip })
      const chunk: OzonExportRecord[] = page?.rows ?? page ?? []
      logger.info(`ozon_export page: got=${chunk.length} skip=${skip}`)
      if (!chunk.length) break
      rows.push(...chunk)
      skip += chunk.length
      if (chunk.length < batchSize) break
    }

    logger.info(`ozon_export total rows collected: ${rows.length}`)
    return new StepResponse(rows)
  }
)


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
