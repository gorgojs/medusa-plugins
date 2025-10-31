import { createStep, StepResponse, createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"

const YM_BASE = process.env.YM_BASE_URL ?? "https://api.partner.market.yandex.ru"
const YM_API_KEY = process.env.YM_API_KEY
const YM_BUSINESS_ID = process.env.YM_BUSINESS_ID
const YM_FETCH_TIMEOUT_MS = Number(process.env.YM_FETCH_TIMEOUT_MS ?? 15000)

const authHeaders = (): Record<string, string> => {
  if (!YM_API_KEY) throw new Error("Set YM_API_KEY")
  return { "Api-Key": YM_API_KEY }
}
function fetchWithTimeout(input: RequestInfo | URL, init?: RequestInit, timeoutMs = YM_FETCH_TIMEOUT_MS) {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), timeoutMs)
  const headers = { "User-Agent": "medusa-yandex-market/1.0", ...(init?.headers || {}) } as any
  return fetch(input, { ...init, headers, signal: ctrl.signal }).finally(() => clearTimeout(t))
}
function jsonOrText(r: Response): Promise<any> {
  const ct = r.headers.get("content-type") || ""
  if (ct.includes("application/json")) return r.json().catch(() => ({}))
  return r.text().catch(() => "")
}
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
const getSessionId = (maybe?: string) => maybe || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
const safe = (o: any) => { try { return JSON.parse(JSON.stringify(o)) } catch { return String(o) } }

const resolveYmLogService = (scope: any) => {
  const keys = ["yandex_market_export_log","yandexMarketExportLogService","yandexMarketExportLogModuleService"]
  for (const k of keys) {
    try {
      const svc: any = scope.resolve(k)
      const create = svc.createYmExportLogs?.bind(svc) ?? svc.createYMExportLogs?.bind(svc)
      const update = svc.updateYmExportLogs?.bind(svc) ?? svc.updateYMExportLogs?.bind(svc)
      return {
        create: (rows: any[]) => (create ? create(rows) : Promise.resolve([])),
        update: (rows: any[]) => (update ? update(rows) : Promise.resolve([])),
      }
    } catch {}
  }
  return null as any
}

export type ListAllInput = {
  cardStatuses?: string[]     
  categoryIds?: number[]      
  limitPerPage?: number       
  sleepMsBetweenPages?: number
  maxPages?: number         
  sessionId?: string         
}
export type ListAllOutput = {
  ok: boolean
  sessionId: string
  logId: string
  pages: number
  totalCards: number
  statuses: number[]
  countsByStatus: Record<string, number>
  offerCards: any[]
}

const listAllStep = createStep(
  "ym-cards-list-all",
  async (input: ListAllInput | undefined, { container }) => {
    if (!YM_BUSINESS_ID) throw new Error("Set YM_BUSINESS_ID")

    const sessionId = getSessionId(input?.sessionId)
    const limit = Math.max(1, Math.min(200, Number(input?.limitPerPage ?? 200))) 
    const sleepMs = Number(input?.sleepMsBetweenPages ?? 200)
    const maxPages = Math.max(1, Number(input?.maxPages ?? 50)) 

    const svc = resolveYmLogService(container)
    const [log] = await (svc?.create?.([
      {
        status: "pending",
        import_id: `cards-list-all-${sessionId}`,
        sent_count: 0,
        offer_ids: null,
        batch_statuses: [],
        results: null,
        raw_request: { cardStatuses: input?.cardStatuses ?? null, categoryIds: input?.categoryIds ?? null, limitPerPage: limit, maxPages, sleepMsBetweenPages: sleepMs },
        raw_response: [],
        meta: { kind: "cards_scan_all", sessionId, startedAt: new Date().toISOString() },
      },
    ]) ?? Promise.resolve([{ id: undefined }]))

    const urlBase = `${YM_BASE}/v2/businesses/${YM_BUSINESS_ID}/offer-cards`
    let pageToken: string | undefined = undefined
    const statuses: number[] = []
    const rawResponses: any[] = []
    const allCards: any[] = []

    let page = 0
    for (;;) {
      page += 1
      const url = new URL(urlBase)
      url.searchParams.set("limit", String(limit))
      if (pageToken) url.searchParams.set("page_token", pageToken)

      let r: Response, data: any
      try {
        r = await fetchWithTimeout(url.toString(), {
          method: "POST",
          headers: { ...authHeaders(), Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({
            cardStatuses: Array.isArray(input?.cardStatuses) && input!.cardStatuses.length ? input!.cardStatuses : undefined,
            categoryIds: Array.isArray(input?.categoryIds) && input!.categoryIds.length ? input!.categoryIds : undefined,
          }),
        })
        data = await jsonOrText(r)
      } catch (err: any) {
        await svc?.update?.([{
          id: log.id,
          status: "error",
          batch_statuses: [...statuses],
          raw_response: [...rawResponses, { page, error: String(err?.message || err) }],
          meta: { ...(log.meta ?? {}), where: "offer-cards", note: "network-failure" },
        }])
        throw new Error(`Network error while requesting offer cards: ${String(err?.message || err)}`)
      }

      statuses.push(r.status)
      rawResponses.push(r.ok ? { page, status: r.status, body: data } : { page, status: r.status, body: data })

      if (!r.ok) {
        const bodyStr = typeof data === "string" ? data : JSON.stringify(data)
        await svc?.update?.([{
          id: log.id,
          status: "error",
          batch_statuses: [...statuses],
          raw_response: rawResponses,
          meta: { ...(log.meta ?? {}), where: "offer-cards" },
        }])
        throw new Error(`Yandex Market error ${r.status}: ${bodyStr.slice(0, 1000)}`)
      }

      const batchCards: any[] =
        (typeof data !== "string" && (data as any)?.result?.offerCards) ||
        (typeof data !== "string" && (data as any)?.offerCards) ||
        []
      if (Array.isArray(batchCards) && batchCards.length) allCards.push(...batchCards)

      pageToken =
        (typeof data !== "string" && (data as any)?.result?.paging?.nextPageToken) ||
        (typeof data !== "string" && (data as any)?.paging?.nextPageToken) ||
        undefined

      await svc?.update?.([{
        id: log.id,
        status: "pending",
        sent_count: allCards.length,
        batch_statuses: [...statuses],
        results: allCards,              
        raw_response: rawResponses,
        meta: { ...(log.meta ?? {}), currentPage: page, nextPageToken: pageToken ?? null },
      }])

      if (!pageToken) break
      if (page >= maxPages) break
      if (sleepMs > 0) await sleep(sleepMs)
    }

    const countsByStatus: Record<string, number> = {}
    for (const c of allCards) {
      const st = (c as any)?.cardStatus ?? (c as any)?.contentStatus ?? (c as any)?.status ?? "unknown"
      countsByStatus[String(st)] = (countsByStatus[String(st)] || 0) + 1
    }

    const allOk = statuses.every((s) => s >= 200 && s < 300)
    const someErr = statuses.some((s) => s >= 400)
    const finalStatus: "success" | "partial" | "error" = allOk ? "success" : someErr ? "partial" : "success"

    await svc?.update?.([{
      id: log.id,
      status: finalStatus,
      import_id: `cards-list-all-${sessionId}`,
      sent_count: allCards.length,
      batch_statuses: statuses,
      results: allCards,
      raw_response: rawResponses,
      meta: { ...(log.meta ?? {}), finishedAt: new Date().toISOString(), countsByStatus },
    }])

    return new StepResponse<ListAllOutput>({
      ok: true,
      sessionId,
      logId: log.id,
      pages: statuses.length,
      totalCards: allCards.length,
      statuses,
      countsByStatus,
      offerCards: allCards,
    })
  }
)

export const yandexOfferCardsListAll = createWorkflow<ListAllInput, ListAllOutput, []>(
  "yandex-offer-cards-list-all",
  (input) => {
    const result = listAllStep(input)
    return new WorkflowResponse(result)
  }
)
