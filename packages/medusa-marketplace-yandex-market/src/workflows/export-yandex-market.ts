import {
  createStep,
  StepResponse,
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"

const YM_BASE = process.env.YM_BASE_URL ?? "https://api.partner.market.yandex.ru"
const YM_API_KEY = process.env.YM_API_KEY
const YM_BUSINESS_ID = process.env.YM_BUSINESS_ID
const YM_PHONE_CATEGORY_ID = process.env.YM_PHONE_CATEGORY_ID
const YM_DEFAULT_VENDOR = process.env.YM_DEFAULT_VENDOR

const MAX_OFFERS_PER_REQUEST = 100 as const

type Price = { amount: number; currency_code: string }
type Variant = {
  id: string
  sku?: string | null
  barcode?: string | null
  options?: Record<string, string>
  prices?: Price[]
}
type Image = { url: string }

type ProductRow = {
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

export type ExportInput = {
  medusaCategoryName?: string
  categoryId?: number
}

export type ExportOutput = {
  ok: boolean
  status: number
  sentCount: number
  response: any
}

type UpdateOfferMappingResultDTO = Record<string, any>

const RUB_FROM_MINOR = (amt: number) => Math.max(0, Math.round(amt)) / 100

function authHeaders(): Record<string, string> {
  if (!YM_API_KEY) throw new Error("Set YM_API_KEY")
  return { "Api-Key": YM_API_KEY }
}

function bestRubPrice(variants?: Variant[]) {
  if (!variants?.length) return null
  let best: { value: number; variant: Variant } | null = null
  for (const v of variants) {
    const rub = v.prices?.find((p) => p.currency_code?.toLowerCase() === "rub")
    if (!rub) continue
    const val = RUB_FROM_MINOR(rub.amount)
    if (val && (!best || val < best.value)) best = { value: val, variant: v }
  }
  return best
}

function picsOrThrow(title: string, pics: string[]) {
  if (!Array.isArray(pics) || pics.length === 0) {
    throw new Error(`Product "${title}": add at least one picture URL`)
  }
}

const to2 = (n: number) => Math.round(n * 100) / 100
const mapDims = (p: ProductRow): { length: number; width: number; height: number; weight: number } => {
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

  return { length: to2(length), width: to2(width), height: to2(height), weight: to2(weight) }
}

type YmParamValue = { id: number; value: string }
type YmParam = {
  id: number
  name: string
  type: "ENUM" | "STRING" | "BOOLEAN" | "NUMBER"
  multivalue?: boolean
  allowCustomValues?: boolean
  values?: YmParamValue[]
}
type YmParamsResponse = { parameters: YmParam[] }

const findParam = (params: YmParam[], nameIncludes: string[]): YmParam | undefined => {
  const low = (s: string) => s.toLowerCase()
  return params.find((p) => {
    const n = low(p.name || "")
    return nameIncludes.some((needle) => n.includes(low(needle)))
  })
}
const findEnumValueId = (p: YmParam, val: string): number | undefined => {
  const norm = (s: string) => s.trim().toLowerCase()
  const nval = norm(val)
  return p.values?.find((v) => norm(v.value) === nval)?.id
}
type YmParameterValue =
  | { parameterId: number; valueId: number }
  | { parameterId: number; value: string | number | boolean }
const pushParam = (
  out: YmParameterValue[],
  params: YmParam[],
  searchByNames: string[],
  value: string | number | boolean | undefined | null
) => {
  if (value === undefined || value === null || value === "") return
  const p = findParam(params, searchByNames)
  if (!p) return
  if (p.type === "ENUM") {
    const id = typeof value === "string" ? findEnumValueId(p, value) : undefined
    if (id !== undefined) out.push({ parameterId: p.id, valueId: id })
    else if (p.allowCustomValues && typeof value === "string") out.push({ parameterId: p.id, value })
  } else {
    out.push({ parameterId: p.id, value: value as any })
  }
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}
function sleep(ms: number) {
  return new Promise<void>((res) => setTimeout(res, ms))
}

function extractResults(resp: any): UpdateOfferMappingResultDTO[] {
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

const resolveMarketCategoryIdStep = createStep(
  "resolve-market-category-id",
  async (input: ExportInput | undefined) => {
    const cat = Number(input?.categoryId || YM_PHONE_CATEGORY_ID || 0)
    if (!cat) {
      throw new Error("Set YM_PHONE_CATEGORY_ID or pass input.categoryId (leaf id for Mobile Phones)")
    }
    return new StepResponse(cat)
  }
)

const loadPhonesStep = createStep(
  "load-phones-from-medusa",
  async (input: ExportInput | undefined, { container }) => {
    const query = container.resolve(ContainerRegistrationKeys.QUERY)

    const { data } = await query.graph({
      entity: "product",
      filters: { status: "published" },
      fields: [
        "id",
        "title",
        "subtitle",
        "description",
        "handle",
        "weight",
        "length",
        "height",
        "width",
        "origin_country",
        "hs_code",
        "metadata",
        "images.url",
        "categories.id",
        "categories.name",
        "variants.id",
        "variants.sku",
        "variants.barcode",
        "variants.options.*",
        "variants.prices.amount",
        "variants.prices.currency_code",
      ],
    })

    const all = (data ?? []) as ProductRow[]

    const catName = (input?.medusaCategoryName || "Mobile Phones").toLowerCase()
    const products = all.filter((p) =>
      (p.categories || []).some((c) => c.name?.toLowerCase() === catName)
    )

    return new StepResponse(products)
  }
)

const loadYmCategoryParamsStep = createStep(
  "ym-load-category-params",
  async (marketCategoryId: number) => {
    if (!YM_BUSINESS_ID) throw new Error("Set YM_BUSINESS_ID")
    const url = `${YM_BASE}/v2/category/${marketCategoryId}/parameters?businessId=${YM_BUSINESS_ID}`
    const r = await fetch(url, {
      method: "POST",
      headers: { ...authHeaders(), Accept: "application/json" },
    })
    const data = await (r.ok ? r.json().catch(() => ({})) : r.text().catch(() => ""))
    if (!r.ok) throw new Error(typeof data === "string" ? data : `Yandex Market params error ${r.status}`)
    const params = (data as YmParamsResponse).parameters || []
    return new StepResponse(params)
  }
)

const pushToYandexStep = createStep<
  { products: ProductRow[]; params: YmParam[]; categoryId: number },
  ExportOutput,
  string[]
>(
  "push-phones-to-yandex",
  async (payload) => {
    const { products, params, categoryId } = payload
    if (!YM_BUSINESS_ID) throw new Error("Set YM_BUSINESS_ID")

    const batches = chunk(products, MAX_OFFERS_PER_REQUEST)

    const allOfferIds: string[] = []
    const ymResponses: any[] = []
    const statuses: number[] = []
    const allResults: UpdateOfferMappingResultDTO[] = []
    let totalSent = 0

    for (const batch of batches) {
      const offers = batch.map((p) => {
        const pictures = (p.images || []).map((im) => im.url).filter(Boolean)
        picsOrThrow(p.title, pictures)

        const best = bestRubPrice(p.variants)
        if (!best || best.value <= 0) {
          throw new Error(`Product "${p.title}": RUB price is missing or <= 0`)
        }

        const optStr = best.variant.options
          ? " " + Object.entries(best.variant.options).map(([k, v]) => `${k}: ${v}`).join(", ")
          : ""

        const vendor = (p.metadata?.vendor as string) || YM_DEFAULT_VENDOR
        const description = p.description || p.subtitle || p.title

        const offerId =
          best.variant.sku ||
          (p.handle && best.variant.id ? `${p.handle}-${best.variant.id}` : `prod-${p.id}`)

        const barcodes = best.variant.barcode ? [best.variant.barcode] : undefined

        const manufacturerCountries =
          Array.isArray(p.metadata?.manufacturerCountries) && p.metadata!.manufacturerCountries.length
            ? p.metadata!.manufacturerCountries
            : p.origin_country
            ? [p.origin_country]
            : undefined

        const customsCommodityCode =
          (p.hs_code as string) || (p.metadata?.hs_code as string) || undefined

        const parameterValues: YmParameterValue[] = []

        const color =
          best.variant.options?.Color ||
          best.variant.options?.color ||
          (p.metadata?.color_vendor as string) ||
          (p.metadata?.color as string)
        pushParam(parameterValues, params, ["Название цвета от производителя", "цвет"], color)

        const storage = best.variant.options?.Storage || best.variant.options?.storage
        if (typeof storage === "string") {
          const romGb = parseInt(storage)
          if (!Number.isNaN(romGb)) {
            pushParam(parameterValues, params, ["Объем встроенной памяти", "Память встроенная"], romGb)
          }
        }

        const ramOpt = best.variant.options?.RAM || best.variant.options?.Ram || p.metadata?.ram
        const ramGb = typeof ramOpt === "string" ? parseInt(ramOpt) : Number(ramOpt)
        if (Number.isFinite(ramGb)) {
          pushParam(parameterValues, params, ["Оперативная память", "RAM"], ramGb as number)
        }

        const os = (p.metadata?.os as string) || (p.metadata?.operating_system as string)
        pushParam(parameterValues, params, ["Операционная система", "ОС"], os)

        const screenInch = Number(p.metadata?.screen_size_inch)
        if (Number.isFinite(screenInch)) {
          pushParam(parameterValues, params, ["Диагональ экрана", "Размер экрана"], screenInch)
        }

        const resolution = p.metadata?.screen_resolution as string | undefined
        pushParam(parameterValues, params, ["Разрешение экрана"], resolution)

        const nfc = p.metadata?.nfc ?? best.variant.options?.NFC
        if (typeof nfc === "boolean") pushParam(parameterValues, params, ["NFC"], nfc)

        const fiveg = p.metadata?.five_g ?? p.metadata?.is_5g ?? best.variant.options?.["5G"]
        if (typeof fiveg === "boolean") pushParam(parameterValues, params, ["5G"], fiveg)

        const esim = p.metadata?.esim ?? best.variant.options?.eSIM
        if (typeof esim === "boolean") pushParam(parameterValues, params, ["eSIM"], esim)

        const year = Number(p.metadata?.release_year)
        if (Number.isFinite(year)) pushParam(parameterValues, params, ["Год выпуска"], year)

        return {
          offerId,
          name: `${p.title}${optStr}`,
          marketCategoryId: categoryId,
          pictures,
          vendor,
          description,
          vendorCode: best.variant.sku || undefined,
          barcodes,
          weightDimensions: mapDims(p),
          manufacturerCountries,
          customsCommodityCode,
          basicPrice: { value: best.value, currencyId: "RUR" as const },
          parameterValues: parameterValues.length ? parameterValues : undefined,
        }
      })

      const body = { offerMappings: offers.map((o) => ({ offer: o })) }

      const r = await fetch(`${YM_BASE}/v2/businesses/${YM_BUSINESS_ID}/offer-mappings/update`, {
        method: "POST",
        headers: {
          ...authHeaders(),
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })

      const data = await (r.ok ? r.json().catch(() => ({})) : r.text().catch(() => ""))
      if (!r.ok) {
        throw new Error(typeof data === "string" ? data : `Yandex Market error ${r.status}`)
      }

      ymResponses.push(data)
      statuses.push(r.status)
      totalSent += offers.length
      allOfferIds.push(...offers.map((o) => o.offerId))

      const batchResults = extractResults(data)
      if (batchResults.length) {
        allResults.push(...batchResults)
      }

      await sleep(200)
    }

    return new StepResponse<ExportOutput, string[]>(
      {
        ok: true,
        status: 200,
        sentCount: totalSent,
        response: {
          batches: ymResponses,
          statuses,
          results: allResults,
        },
      },
      allOfferIds
    )
  },
  async () => {}
)

export const exportYandexMarketWorkflow = createWorkflow<ExportInput, ExportOutput, []>(
  "export-yandex-market",
  (input) => {
    const catId = resolveMarketCategoryIdStep(input)
    const products = loadPhonesStep(input)
    const params = loadYmCategoryParamsStep(catId)
    const result = pushToYandexStep({
      products,
      params,
      categoryId: catId,
    })
    return new WorkflowResponse(result)
  }
)
