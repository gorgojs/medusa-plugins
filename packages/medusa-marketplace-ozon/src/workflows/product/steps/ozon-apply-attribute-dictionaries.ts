import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import {
  OzonProductImport,
  OzonAttr
} from "../types"

import { resolveDictValueId } from "../../../lib"

export const applyAttributeDictionariesStep = createStep<
  { payload: OzonProductImport; attrsByCat: Map<number, OzonAttr[]> },
  OzonProductImport,
  void
>(
  "ozon-apply-attribute-dictionaries",
  async ({ payload, attrsByCat }) => {
    const items = Array.isArray(payload?.items) ? payload.items : []

    const enriched = await Promise.all(
      items.map(async (it: any) => {
        const catId = Number(it?.description_category_id || 0)
        if (!catId || !Array.isArray(it.attributes)) return it

        const newAttrs = await Promise.all(
          it.attributes.map(async (a: any) => {
            if (!Array.isArray(a?.values)) return a
            const newValues = await Promise.all(
              a.values.map(async (v: any) => {
                if (v?.dictionary_value_id || typeof v?.value !== "string") return v
                const dictId = await resolveDictValueId(catId, Number(a.id), v.value)
                return dictId !== undefined ? { ...v, dictionary_value_id: dictId } : v
              })
            )
            return { ...a, values: newValues }
          })
        )

        return { ...it, attributes: newAttrs }
      })
    )

    return new StepResponse<OzonProductImport, void>({ items: enriched })
  },
  async () => { }
)
