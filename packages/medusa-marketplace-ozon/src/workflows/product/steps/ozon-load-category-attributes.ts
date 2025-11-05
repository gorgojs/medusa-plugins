import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import {
  OZON_BASE_URL,
  HEADERS,
  OzonProductImport,
  OzonAttr,
  OzonAttrsResponse
} from "../types"


export const loadCategoryAttributesStep = createStep<OzonProductImport, Map<number, OzonAttr[]>, void>(
  "ozon-load-category-attributes",
  async (payload) => {
    const items = Array.isArray(payload?.items) ? payload.items : []
    const catIds = Array.from(new Set(items
      .map((it: any) => it?.description_category_id)
      .filter((v: any) => Number.isFinite(v))))
    const byCat = new Map<number, OzonAttr[]>()

    for (const categoryId of catIds as number[]) {
      try {
        const r = await fetch(`${OZON_BASE_URL}/v1/description-category/attribute`, {
          method: "POST",
          headers: HEADERS,
          body: JSON.stringify({
            description_category_id: categoryId,
            attribute_type: "ALL",
            language: "RU",
          }),
        })
        const data = await (r.ok ? r.json().catch(() => ({})) : r.text().catch(() => ""))
        if (!r.ok) throw new Error(typeof data === "string" ? data : `Ozon attributes error ${r.status}`)
        const attrs = ((data as OzonAttrsResponse).result?.attributes ?? []) as OzonAttr[]
        byCat.set(categoryId, attrs)
      } catch (_e) {
        byCat.set(categoryId, [])
      }
    }
    return new StepResponse(byCat)
  },
  async () => { }
)