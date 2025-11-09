import {
  OZON_BASE_URL,
  HEADERS,
  ProductRow,
  Variant,
} from "../workflows/product/types"
import { OzonProduct, OzonProductImport, OzonAttributeCompat } from "../types/ozon"

export function assertOzonEnv() {
  const cid = HEADERS["Client-Id"]
  const key = HEADERS["Api-Key"]

  if (!cid || !key) {
    throw new Error(
      `Ozon auth is not configured: Client-Id or Api-Key is empty. ` +
      `Got Client-Id="${cid ?? ""}", Api-Key="${key ? "***" : ""}".`
    )
  }
}

export async function fetchTaskStatus(taskId: string) {
  const ozonResponse = await fetch(`${OZON_BASE_URL}/v1/product/import/info`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({ task_id: Number(taskId) }),
  })

  if (!ozonResponse.ok) {
    const text = await ozonResponse.text().catch(() => "")
    throw new Error(`Ozon ${ozonResponse.status}: ${text}`)
  }

  return (await ozonResponse.json()) as {
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
  const gWgt = Number(p.weight ?? p.metadata?.package_weight_g ?? NaN)

  const cmLen = Number.isFinite(mmLen) ? mmLen / 10 : Number(p.metadata?.package_length_cm ?? NaN)
  const cmWid = Number.isFinite(mmWid) ? mmWid / 10 : Number(p.metadata?.package_width_cm ?? NaN)
  const cmHei = Number.isFinite(mmHei) ? mmHei / 10 : Number(p.metadata?.package_height_cm ?? NaN)
  const kgWgt = Number.isFinite(gWgt) ? gWgt / 1000 : Number(p.metadata?.package_weight_kg ?? NaN)

  const length = Number.isFinite(cmLen) ? cmLen : 18.0
  const width = Number.isFinite(cmWid) ? cmWid : 9.0
  const height = Number.isFinite(cmHei) ? cmHei : 5.0
  const weightG = Math.round((Number.isFinite(kgWgt) ? kgWgt : 0.35) * 1000)

  return { length: to2(length), width: to2(width), height: to2(height), weight: weightG, weight_unit: "g" }
}

export function mapProductsToOzon(products: unknown): OzonProductImport {
  const productList: ProductRow[] = Array.isArray(products) ? (products as ProductRow[]) : []
  const ozonItems: OzonProduct[] = []

  for (const product of productList) {
    const pictures = (product.images || []).map((img) => img.url).filter(Boolean)
    if (!pictures.length) continue

    const metadata = product.metadata as any

    const price = 1000
    const oldPrice = 1200

    const { length, width, height, weight, weight_unit } = mapDims(product)

    const offerId =
      product.handle
        ? `offer-${product.handle}`
        : `prod-${product.id}`

    const attrs: OzonAttributeCompat[] = []

    pushAttr(attrs, 4295, metadata?.size)
    pushAttr(attrs, 10096, metadata?.color)
    pushAttr(attrs, 8292, offerId)
    pushAttr(attrs, 9163, metadata?.gender)
    pushAttr(attrs, 4495, metadata?.season)
    pushAttr(attrs, 4496, metadata?.material || metadata?.materials)
    pushAttr(attrs, 4596, metadata?.sleeve_length)
    pushAttr(attrs, 4389, product.origin_country || metadata?.manufacturer_country)

    const vat = String(metadata?.vat ?? "0")

    ozonItems.push({
      offer_id: offerId,
      name: product.title,
      price: String(price),
      old_price: String(oldPrice),
      quantity: 1,
      description_category_id: Number(metadata?.ozon_description_category_id ?? 0) || 200001517,
      type_id: Number(metadata?.ozon_type_id ?? 0) || 93228,
      images: pictures,
      weight,
      weight_unit,
      dimensions: {
        length: Math.max(1, Math.round(length)),
        width: Math.max(1, Math.round(width)),
        height: Math.max(1, Math.round(height)),
        depth: Number(metadata?.package_depth_cm ?? 2),
      },
      vat,
      attributes: attrs as any,
    })
  }

  return { items: ozonItems }
}

export async function resolveDictValueId(categoryId: number, attributeId: number, searchValue: string) {
  const ozonResponse = await fetch(`${OZON_BASE_URL}/v1/description-category/attribute/values`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({
      attribute_id: attributeId,
      description_category_id: categoryId,
      language: "RU",
      limit: 20,
      search: searchValue,
    }),
  })
  if (!ozonResponse.ok) return undefined
  const data = await ozonResponse.json().catch(() => ({} as any))
  const valuesList: Array<{ id: number; value: string }> = data?.result?.values || []
  const normalize = (input: string) => input.trim().toLowerCase()
  const matchedValue = valuesList.find((item) => normalize(item.value) === normalize(searchValue))
  return matchedValue?.id
}
