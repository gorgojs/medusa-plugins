import {
  createWorkflow,
  createStep,
  StepResponse,
  WorkflowResponse,
} from "@medusajs/workflows-sdk"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import { OzonProductImport, OzonProduct } from "../types/ozon"


export type Output = {
  ok: boolean
  status: number
  data: any
  task_id?: string
}

const OZON_BASE_URL = process.env.OZON_BASE_URL ?? "https://api-seller.ozon.ru"
const HEADERS = {
  "Client-Id": process.env.OZON_CLIENT_ID ?? "",
  "Api-Key": process.env.OZON_API_KEY ?? "",
  Accept: "application/json",
  "Content-Type": "application/json",
}


const OZON_EXPORT_MODULE = "ozon_export"

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

const RUB_FROM_MINOR = (amt: number) => Math.max(0, Math.round(amt)) / 100

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

const to2 = (n: number) => Math.round(n * 100) / 100
const mapDims = (p: ProductRow): {
  length: number; width: number; height: number; weight: number; weight_unit: "g"
} => {
  const mmLen = Number(p.length ?? p.metadata?.package_length_mm ?? NaN)
  const mmWid = Number(p.width ?? p.metadata?.package_width_mm ?? NaN)
  const mmHei = Number(p.height ?? p.metadata?.package_height_mm ?? NaN)
  const gWgt  = Number(p.weight ?? p.metadata?.package_weight_g ?? NaN)

  const cmLen = Number.isFinite(mmLen) ? mmLen / 10 : Number(p.metadata?.package_length_cm ?? NaN)
  const cmWid = Number.isFinite(mmWid) ? mmWid / 10 : Number(p.metadata?.package_width_cm ?? NaN)
  const cmHei = Number.isFinite(mmHei) ? mmHei / 10 : Number(p.metadata?.package_height_cm ?? NaN)
  const kgWgt = Number.isFinite(gWgt)  ? gWgt / 1000 : Number(p.metadata?.package_weight_kg ?? NaN)

  const length = Number.isFinite(cmLen) ? cmLen : 18.0
  const width  = Number.isFinite(cmWid) ? cmWid : 9.0
  const height = Number.isFinite(cmHei) ? cmHei : 5.0
  const weightG = Math.round((Number.isFinite(kgWgt) ? kgWgt : 0.35) * 1000)

  return { length: to2(length), width: to2(width), height: to2(height), weight: weightG, weight_unit: "g" }
}

type OzonAttributeValueCompat = { value: string; dictionary_value_id?: number }
type OzonAttributeCompat = { complex_id: number; id: number; values: OzonAttributeValueCompat[] }

const pushAttr = (
  attrs: OzonAttributeCompat[],
  ozonAttrId: number,
  value?: string | number | null
) => {
  if (value === undefined || value === null || value === "") return
  attrs.push({ complex_id: 0, id: ozonAttrId, values: [{ value: String(value) }] })
}

export function mapProductsToOzon(products: unknown): OzonProductImport {
  const list: ProductRow[] = Array.isArray(products) ? (products as ProductRow[]) : []
  const items: OzonProduct[] = []

  for (const p of list) {
    const pictures = (p.images || []).map((im) => im.url).filter(Boolean)
    if (!pictures.length) continue

    const best = bestRubPrice(p.variants)
    if (!best || best.value <= 0) continue

    const { length, width, height, weight, weight_unit } = mapDims(p)

    const offer_id =
      best.variant.sku ||
      (p.handle && best.variant.id ? `${p.handle}-${best.variant.id}` : `prod-${p.id}`)

    const optStr = best.variant.options
      ? " " + Object.entries(best.variant.options).map(([k, v]) => `${k}: ${v}`).join(", ")
      : ""

    const attrs: OzonAttributeCompat[] = []
    const sizeStr = best.variant.options?.Size || best.variant.options?.size || (p.metadata as any)?.size
    pushAttr(attrs, 4295, sizeStr)
    const color = best.variant.options?.Color || best.variant.options?.color || (p.metadata as any)?.color
    pushAttr(attrs, 10096, color)
    pushAttr(attrs, 8292, offer_id)
    const gender = (p.metadata as any)?.gender || best.variant.options?.Gender
    pushAttr(attrs, 9163, gender)
    pushAttr(attrs, 4495, (p.metadata as any)?.season)
    pushAttr(attrs, 4496, (p.metadata as any)?.material || (p.metadata as any)?.materials)
    pushAttr(attrs, 4596, (p.metadata as any)?.sleeve_length || best.variant.options?.Sleeve)
    pushAttr(attrs, 4389, p.origin_country || (p.metadata as any)?.manufacturer_country)

    const vat = String((p.metadata as any)?.vat ?? "0")

    items.push({
      offer_id,
      name: `${p.title}${optStr}`,
      price: String(best.value),
      quantity: 1,
      description_category_id: Number((p.metadata as any)?.ozon_description_category_id ?? 0) || 200001517,
      type_id: Number((p.metadata as any)?.ozon_type_id ?? 0) || 93228,
      images: pictures,
      weight,
      weight_unit,
      dimensions: {
        length: Math.max(1, Math.round(length)),
        width:  Math.max(1, Math.round(width)),
        height: Math.max(1, Math.round(height)),
        depth:  Number((p.metadata as any)?.package_depth_cm ?? 2),
      },
      vat,
      attributes: attrs as any,
    })
  }

  return { items }
}

export type RunInput = { items?: OzonProduct[]; medusaItems?: ProductRow[] }

const buildPayloadStep = createStep<RunInput, OzonProductImport, void>(
  "ozon-build-payload",
  async (input, { container }) => {
    const itemsIn = Array.isArray(input?.items) ? input!.items! : undefined
    const medusaIn = Array.isArray(input?.medusaItems) ? input!.medusaItems! : undefined

    if (itemsIn && itemsIn.length) {
      return new StepResponse<OzonProductImport, void>({ items: itemsIn })
    }

    if (medusaIn && medusaIn.length) {
      const mapped = mapProductsToOzon(medusaIn)
      return new StepResponse<OzonProductImport, void>(mapped)
    }

    const query = container.resolve(ContainerRegistrationKeys.QUERY)
    const { data } = await query.graph({
      entity: "product",
      filters: { status: "published" },
      fields: [
        "id","title","subtitle","description","handle",
        "weight","length","height","width",
        "origin_country","hs_code","metadata",
        "images.url","categories.id","categories.name",
        "variants.id","variants.sku","variants.barcode",
        "variants.options.*","variants.prices.amount","variants.prices.currency_code",
      ],
    })
    const rows = Array.isArray(data) ? (data as ProductRow[]) : []
    const mapped = mapProductsToOzon(rows)
    return new StepResponse<OzonProductImport, void>(mapped)
  },
  async () => {}
)

type ExportInput = { items: any[] }
const runExportStep = createStep<ExportInput, Output, void>(
  "admin-ozon-post-import",
  async (input) => {
    const itemsRaw = (input as any)?.items
    const items: OzonProduct[] = Array.isArray(itemsRaw) ? itemsRaw : []

    if (items.length === 0) {
      throw new Error("Нет товаров для экспорта: маппинг вернул пусто. Проверьте обязательные поля (RUB цена, изображения, габариты, обязательные атрибуты категории).")
    }

    const res = await fetch(`${OZON_BASE_URL}/v3/product/import`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({ items }),
    })

    if (!res.ok) {
      const text = await res.text().catch(() => "")
      throw new Error(text || `Ozon error ${res.status}`)
    }

    const data = await res.json().catch(() => ({}))
    const task_id = String(data?.result?.task_id ?? "")
    if (!task_id) throw new Error("task_id not found in response")

    return new StepResponse<Output, void>({ ok: true, status: res.status, data, task_id })
  },
  async () => {}
)

const saveOzonTaskStep = createStep<string, void, void>(
  "save-ozon-task",
  async (task_id, { container }) => {
    try {
      let svc: any
      try {
        svc = container.resolve(OZON_EXPORT_MODULE)
      } catch {
        return
      }
      await svc.createOzonExports({ task_id })
    } catch (e: any) {
      const msg = String(e?.message ?? "")
      if (!/unique|duplicate/i.test(msg)) throw e
    }
  },
  async () => {}
)

export const runOzonProductExport = createWorkflow<RunInput, Output, []>(
  "admin-ozon-product-import",
  (input) => {
    const payload = buildPayloadStep(input)
    const result = runExportStep(payload)
    if (result.task_id) {
      saveOzonTaskStep(result.task_id)
    }
    return new WorkflowResponse<Output>(result)
  }
)
