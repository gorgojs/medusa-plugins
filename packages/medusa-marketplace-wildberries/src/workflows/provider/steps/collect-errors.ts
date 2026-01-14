import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { RequestPublicViewerPublicErrorsTableListV2 } from "../../../lib/wildberries-products-client"
import { getProductCardsApi } from "../../../lib/wildberries-client"
import { batchProductVariantsWorkflow } from "@medusajs/medusa/core-flows"
import { MarketplaceWildberriesCredentialsType } from "../../../providers/marketplace-wildberries/types"

export type CollectErrorsStepInput = {
  credentials: MarketplaceWildberriesCredentialsType
}

export const collectErrorsStepId = "collect-errors"

export const collectErrorsStep = createStep(
  collectErrorsStepId,
  async (input: CollectErrorsStepInput, { container }) => {
    const query = await container.resolve("query")

    const productApi = getProductCardsApi(input.credentials)

    const result: any[] = []

    let body: RequestPublicViewerPublicErrorsTableListV2 = {
      "cursor": {
        "limit": 100
      },
      "order": {
        "ascending": true
      }
    }
    let next = false
    do {
      const { status, data: response } = await productApi.contentV2CardsErrorListPost(body)
      result.push(...response.data.items)
      if (body.cursor) {
        body.cursor.updatedAt = response.data.cursor.updatedAt
        body.cursor.batchUUID = response.data.cursor.batchUUID
      }
      next = response.data.cursor.next

      const errors = response.data.items.reduce((acc, item) => {
        Object.assign(acc, item.errors)
        return acc
      }, {})

      const { data: variants } = await query.graph({
        entity: "product_variant",
        fields: ["id", "sku", "metadata"],
        filters: {
          "sku": Object.keys(errors)
        }
      })
      
      const updateVariants: any[] = []
      variants.forEach(variant => {
        let variantMetadata = variant.metadata ?? {}
        variantMetadata.wildberries_error = errors[variant.sku]
        updateVariants.push({
          id: variant.id,
          metadata: variantMetadata
        })
      })

      const { result: { updated: variantsUpdateResult } } = await batchProductVariantsWorkflow(container).run({
        input: {
          update: updateVariants
        }
      })
    } while (next)

    return new StepResponse(result)
  }
)
