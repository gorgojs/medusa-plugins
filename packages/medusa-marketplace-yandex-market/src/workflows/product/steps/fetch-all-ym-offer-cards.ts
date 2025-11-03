import {
    createStep,
    StepResponse,
} from "@medusajs/framework/workflows-sdk"
import { 
  FetchAllYmOfferCardsInput, 
  FetchAllYmOfferCardsOutput,
  ensureSessionId,
  resolveYmExportLogService,
  YM_BASE,
  YM_BUSINESS_ID,
  ymFetchWithTimeout,
  YmAuthHeaders,
  parseJsonOrText,
  delay
} from "../types"


export const FetchAllYmOfferCardsStep = createStep(
  "fetch-all-ym-offer-cards",
  async (input: FetchAllYmOfferCardsInput | undefined, { container }) => {
    if (!YM_BUSINESS_ID) throw new Error("Set YM_BUSINESS_ID")

    const sessionId = ensureSessionId(input?.sessionId)
    const limit = Math.max(1, Math.min(200, Number(input?.limitPerPage ?? 200)))
    const sleepMs = Number(input?.sleepMsBetweenPages ?? 200)
    const maxPages = Math.max(1, Number(input?.maxPages ?? 50))

    const svc = resolveYmExportLogService(container)
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
    for (; ;) {
      page += 1
      const url = new URL(urlBase)
      url.searchParams.set("limit", String(limit))
      if (pageToken) url.searchParams.set("page_token", pageToken)

      let response: Response, data: any
      try {
        response = await ymFetchWithTimeout(url.toString(), {
          method: "POST",
          headers: { ...YmAuthHeaders(), Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({
            cardStatuses: Array.isArray(input?.cardStatuses) && input!.cardStatuses.length ? input!.cardStatuses : undefined,
            categoryIds: Array.isArray(input?.categoryIds) && input!.categoryIds.length ? input!.categoryIds : undefined,
          }),
        })
        data = await parseJsonOrText(response)
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

      statuses.push(response.status)
      rawResponses.push(response.ok ? { page, status: response.status, body: data } : { page, status: response.status, body: data })

      if (!response.ok) {
        const bodyStr = typeof data === "string" ? data : JSON.stringify(data)
        await svc?.update?.([{
          id: log.id,
          status: "error",
          batch_statuses: [...statuses],
          raw_response: rawResponses,
          meta: { ...(log.meta ?? {}), where: "offer-cards" },
        }])
        throw new Error(`Yandex Market error ${response.status}: ${bodyStr.slice(0, 1000)}`)
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
      if (sleepMs > 0) await delay(sleepMs)
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

    return new StepResponse<FetchAllYmOfferCardsOutput>({
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
