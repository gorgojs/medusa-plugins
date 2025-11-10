import {
  createStep,
  StepResponse,
} from "@medusajs/workflows-sdk"
import { OzonProductImport, OzonAttr } from "../../../types/ozon"
import { resolveDictValueId } from "../../../lib"

export type ApplyAttributeDictionariesInput = {
  payload: OzonProductImport
  attrsByCat: Map<number, OzonAttr[]>
}

export const applyAttributeDictionariesStep = createStep<
  ApplyAttributeDictionariesInput,
  OzonProductImport,
  void
>(
  "ozon-apply-attribute-dictionaries",
  async ({ payload }) => {
    const productItems = Array.isArray(payload?.items) ? payload.items : []

    const enrichedItems = await Promise.all(
      productItems.map(async (item: any) => {
        const categoryId = Number(item?.description_category_id || 0)
        if (!categoryId || !Array.isArray(item.attributes)) return item

        const enrichedAttributes = await Promise.all(
          item.attributes.map(async (attribute: any) => {
            if (!Array.isArray(attribute?.values)) return attribute

            const enrichedValues = await Promise.all(
              attribute.values.map(async (valueItem: any) => {
                if (valueItem?.dictionary_value_id || typeof valueItem?.value !== "string") {
                  return valueItem
                }

                const dictionaryValueId = await resolveDictValueId(
                  categoryId,
                  Number(attribute.id),
                  valueItem.value
                )

                return dictionaryValueId !== undefined
                  ? { ...valueItem, dictionary_value_id: dictionaryValueId }
                  : valueItem
              })
            )

            return { ...attribute, values: enrichedValues }
          })
        )

        return { ...item, attributes: enrichedAttributes }
      })
    )

    return new StepResponse<OzonProductImport, void>({ items: enrichedItems })
  },
  async () => {}
)
