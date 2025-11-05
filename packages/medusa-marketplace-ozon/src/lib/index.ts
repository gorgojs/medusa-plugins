import {
    OZON_BASE_URL,
    HEADERS,
    OzonAttributeCompat,
    OzonAttr,
    ProductRow,
    Variant,
    OzonProduct,
    OzonProductImport
} from "../workflows/product/types"

export function assertOzonEnv() {
    const base = OZON_BASE_URL
    const cid = HEADERS["Client-Id"]
    const key = HEADERS["Api-Key"]
  
    if (!cid || !key) {
      throw new Error(
        `Ozon auth is not configured: Client-Id or Api-Key is empty. ` +
        `Got Client-Id="${cid ?? ""}", Api-Key="${key ? "***" : ""}".`
      )
    }
    if (!/^https:\/\/api-seller\.ozon\.ru$/i.test(base)) {
      throw new Error(
        `OZON_BASE_URL looks wrong: "${base}". Expected "https://api-seller.ozon.ru".`
      )
    }
}


export async function fetchTaskStatus(taskId: string) {
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


  export const to2 = (n: number) => Math.round(n * 100) / 100
  export const pushAttr = (
    attrs: OzonAttributeCompat[],
    ozonAttrId: number,
    value?: string | number | null
  ) => {
    if (value === undefined || value === null || value === "") return
    attrs.push({ complex_id: 0, id: ozonAttrId, values: [{ value: String(value) }] })
  }
  
  export const RUB_FROM_MINOR = (amt: number) => Math.max(0, Math.round(amt)) / 100
  export const mapDims = (p: ProductRow): {
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
  
  
  export function bestRubPrice(variants?: Variant[]) {
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
  
export async function resolveDictValueId(categoryId: number, attributeId: number, value: string) {
    const r = await fetch(`${OZON_BASE_URL}/v1/description-category/attribute/values`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        attribute_id: attributeId,
        description_category_id: categoryId,
        language: "RU",
        limit: 20,
        search: value,
      }),
    })
    if (!r.ok) return undefined
    const data = await r.json().catch(() => ({} as any))
    const list: Array<{ id: number; value: string }> = data?.result?.values || []
    const norm = (s: string) => s.trim().toLowerCase()
    const hit = list.find((v) => norm(v.value) === norm(value))
    return hit?.id
  }

