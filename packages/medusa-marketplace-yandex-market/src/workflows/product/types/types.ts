export const YM_BASE = process.env.YM_BASE_URL ?? "https://api.partner.market.yandex.ru"
export const YM_API_KEY = process.env.YM_API_KEY
export const YM_BUSINESS_ID = process.env.YM_BUSINESS_ID
export const YM_PHONE_CATEGORY_ID = 91491
export const YM_DEFAULT_VENDOR = "Medusa"
export const YM_FETCH_TIMEOUT_MS = Number(process.env.YM_FETCH_TIMEOUT_MS ?? 15000)

export const MAX_OFFERS_PER_REQUEST = 100 as const

export type FetchAllYmOfferCardsInput  = {
  cardStatuses?: string[]
  categoryIds?: number[]
  limitPerPage?: number
  sleepMsBetweenPages?: number
  maxPages?: number
  sessionId?: string
}
export type FetchAllYmOfferCardsOutput  = {
  ok: boolean
  sessionId: string
  logId: string
  pages: number
  totalCards: number
  statuses: number[]
  countsByStatus: Record<string, number>
  offerCards: any[]
}

export type Price = { amount: number; currency_code: string }
type Variant = {
    id: string
    sku?: string | null
    barcode?: string | null
    options?: Record<string, string>
    prices?: Price[]
}
export type Image = { url: string }

export type ProductRow = {
    id: string
    title: string
    description?: string | null
    subtitle?: string | null
    handle?: string | null
    images?: Image[]
    categories?: { id: string; name: string }[]
    metadata?: Record<string, any> | null
    weight?: number | null
    length?: number | null
    height?: number | null
    width?: number | null
    origin_country?: string | null
    hs_code?: string | null
    variants?: Variant[]
}

export type RunYmProductExportWorkflowInput = {
    medusaCategoryName?: string
    categoryId?: number
}

export type RunYmProductExportWorkflowOutput = {
    ok: boolean
    status: number
    sentCount: number
    response: any
}

export type UpdateOfferMappingResultDTO = Record<string, any>

export type YmParamsResponse = { parameters: YmParam[] }

export type YmParamValue = { id: number; value: string }
export type YmParam = {
    id: number
    name: string
    type: "ENUM" | "STRING" | "BOOLEAN" | "NUMBER"
    multivalue?: boolean
    allowCustomValues?: boolean
    values?: YmParamValue[]
}


export const MinorToRub = (amt: number) => Math.max(0, Math.round(amt)) / 100

export type YmParameterValue =
    | { parameterId: number; valueId: number }
    | { parameterId: number; value: string | number | boolean }

export function GetMinimalRublePrice(variants?: Variant[]) {
    if (!variants?.length) return null
    let best: { value: number; variant: Variant } | null = null
    for (const v of variants) {
        const rub = v.prices?.find((p) => p.currency_code?.toLowerCase() === "rub")
        if (!rub) continue
        const val = MinorToRub(rub.amount)
        if (val && (!best || val < best.value)) best = { value: val, variant: v }
    }
    return best
}

export function YmAuthHeaders(): Record<string, string> {
    if (!YM_API_KEY) throw new Error("Set YM_API_KEY")
    return { "Api-Key": YM_API_KEY }
}

export const RoundTo2 = (n: number) => Math.round(n * 100) / 100
export const MapPackageDimensions = (p: ProductRow): { length: number; width: number; height: number; weight: number } => {
    const mmLen = Number(p.length ?? p.metadata?.package_length_mm ?? NaN)
    const mmWid = Number(p.width ?? p.metadata?.package_width_mm ?? NaN)
    const mmHei = Number(p.height ?? p.metadata?.package_height_mm ?? NaN)
    const gWgt = Number(p.weight ?? p.metadata?.package_weight_g ?? NaN)

    const cmLen = Number.isFinite(mmLen) ? mmLen / 10 : Number(p.metadata?.package_length_cm ?? NaN)
    const cmWid = Number.isFinite(mmWid) ? mmWid / 10 : Number(p.metadata?.package_width_cm ?? NaN)
    const cmHei = Number.isFinite(mmHei) ? mmHei / 10 : Number(p.metadata?.package_height_cm ?? NaN)
    const kgWgt = Number.isFinite(gWgt) ? gWgt / 1000 : Number(p.metadata?.package_weight_kg ?? NaN)

    const length = Number.isFinite(cmLen) ? cmLen : 18.0
    const width = Number.isFinite(cmWid) ? cmWid : 9.0
    const height = Number.isFinite(cmHei) ? cmHei : 5.0
    const weight = Number.isFinite(kgWgt) ? kgWgt : 0.35

    return { length: RoundTo2(length), width: RoundTo2(width), height: RoundTo2(height), weight: RoundTo2(weight) }
}



export const FindYmParamByNames = (params: YmParam[], nameIncludes: string[]): YmParam | undefined => {
    const low = (s: string) => s.toLowerCase()
    return params.find((p) => {
        const n = low(p.name || "")
        return nameIncludes.some((needle) => n.includes(low(needle)))
    })
}

export const ResolveYmEnumValueId = (p: YmParam, val: string): number | undefined => {
    const norm = (s: string) => s.trim().toLowerCase()
    const nval = norm(val)
    return p.values?.find((v) => norm(v.value) === nval)?.id
}

export const PushYmParameterValue = (
    out: YmParameterValue[],
    params: YmParam[],
    searchByNames: string[],
    value: string | number | boolean | undefined | null
) => {
    if (value === undefined || value === null || value === "") return
    const p = FindYmParamByNames(params, searchByNames)
    if (!p) return
    if (p.type === "ENUM") {
        const id = typeof value === "string" ? ResolveYmEnumValueId(p, value) : undefined
        if (id !== undefined) out.push({ parameterId: p.id, valueId: id })
        else if (p.allowCustomValues && typeof value === "string") out.push({ parameterId: p.id, value })
    } else {
        out.push({ parameterId: p.id, value: value as any })
    }
}

export function ExtractOfferMappingResults(resp: any): UpdateOfferMappingResultDTO[] {
    if (!resp) return []
    const candidate =
        (Array.isArray(resp?.result?.results) && resp.result.results) ||
        (Array.isArray(resp?.results) && resp.results) ||
        (Array.isArray(resp?.result) && resp.result) ||
        (Array.isArray(resp?.offerMappings) && resp.offerMappings) ||
        (Array.isArray(resp?.result?.offerMappings) && resp.result.offerMappings) ||
        []
    return Array.isArray(candidate) ? (candidate as UpdateOfferMappingResultDTO[]) : []
}

export function ChunkArray<T>(arr: T[], size: number): T[][] {
    const out: T[][] = []
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
    return out
}
export function Delay(ms: number) {
    return new Promise<void>((res) => setTimeout(res, ms))
}

export function AssertHasPictures(title: string, pics: string[]) {
    if (!Array.isArray(pics) || pics.length === 0) {
        throw new Error(`Product "${title}": add at least one picture URL`)
    }
}

export function ymFetchWithTimeout(input: RequestInfo | URL, init?: RequestInit, timeoutMs = YM_FETCH_TIMEOUT_MS) {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), timeoutMs)
  const headers = { "User-Agent": "medusa-yandex-market/1.0", ...(init?.headers || {}) } as any
  return fetch(input, { ...init, headers, signal: ctrl.signal }).finally(() => clearTimeout(t))
}
export function parseJsonOrText(r: Response): Promise<any> {
  const ct = r.headers.get("content-type") || ""
  if (ct.includes("application/json")) return r.json().catch(() => ({}))
  return r.text().catch(() => "")
}
export const delay  = (ms: number) => new Promise((r) => setTimeout(r, ms))
export const ensureSessionId  = (maybe?: string) => maybe || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
export const toSafeJson  = (o: any) => { try { return JSON.parse(JSON.stringify(o)) } catch { return String(o) } }

export const resolveYmExportLogService  = (scope: any) => {
  const keys = ["yandex_market_export_log", "yandexMarketExportLogService", "yandexMarketExportLogModuleService"]
  for (const k of keys) {
    try {
      const svc: any = scope.resolve(k)
      const create = svc.createYmExportLogs?.bind(svc) ?? svc.createYMExportLogs?.bind(svc)
      const update = svc.updateYmExportLogs?.bind(svc) ?? svc.updateYMExportLogs?.bind(svc)
      return {
        create: (rows: any[]) => (create ? create(rows) : Promise.resolve([])),
        update: (rows: any[]) => (update ? update(rows) : Promise.resolve([])),
      }
    } catch { }
  }
  return null as any
}
