import { createStep, StepResponse } from "@medusajs/workflows-sdk"
import { OZON_BASE_URL, HEADERS } from "../types"
import { OzonProductImport, OzonAttr, OzonAttrsResponse } from "../../../types/ozon"

export type LoadCategoryAttributesInput = OzonProductImport

export const loadCategoryAttributesStep = createStep<
  LoadCategoryAttributesInput,
  Map<number, OzonAttr[]>,
  void
>(
  "ozon-load-category-attributes",
  async (payload) => {
    const productItems = Array.isArray(payload?.items) ? payload.items : []

    const categoryIds = Array.from(
      new Set(
        productItems
          .map((item) => item?.description_category_id)
          .filter((id): id is number => Number.isFinite(id))
      )
    )

    const attributesByCategory = new Map<number, OzonAttr[]>()

    for (const categoryId of categoryIds) {
      try {
        const ozonResponse = await fetch(`${OZON_BASE_URL}/v1/description-category/attribute`, {
          method: "POST",
          headers: HEADERS,
          body: JSON.stringify({
            description_category_id: categoryId,
            attribute_type: "ALL",
            language: "RU",
          }),
        })

        let data: OzonAttrsResponse | string = {}

        if (ozonResponse.ok) {
          data = await ozonResponse.json().catch(() => ({} as OzonAttrsResponse))
        } else {
          data = await ozonResponse.text().catch(() => "")
          throw new Error(
            typeof data === "string" ? data : `Ozon attributes error ${ozonResponse.status}`
          )
        }

        const attributes = (data as OzonAttrsResponse)?.result?.attributes ?? []
        attributesByCategory.set(categoryId, attributes)
      } catch (error) {
        attributesByCategory.set(categoryId, [])
      }
    }

    return new StepResponse(attributesByCategory)
  },
  async () => {}
)
