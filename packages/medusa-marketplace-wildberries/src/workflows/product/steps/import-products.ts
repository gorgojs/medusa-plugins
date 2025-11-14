import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { batchProductsWorkflow, batchProductVariantsWorkflow } from "@medusajs/medusa/core-flows"
import { ContentV2GetCardsListPost200ResponseCardsInner } from "../../../lib/wildberries-products-client"
import { productApi } from "../../../lib/wildberries-client"

export const importProductsStepId = "import-products"

export const importProductsStep = createStep(
  importProductsStepId,
  async (_, { container }) => {
    const logger = container.resolve("logger")
    const query = container.resolve("query")

    const nmIDs: Record<string, number> = {}
    const imtIDs: Record<string, number> = {}
    const sizeSkus: Record<string, Array<string>> = {}
    let updateVariants: any[] = []
    let updateProducts: any[] = [] 


    logger.info("Getting data from wildberries...")

    const cards: ContentV2GetCardsListPost200ResponseCardsInner[] = []
    const limit = 100
    let body = {
      "settings": {
        "cursor": {
          "limit": limit
        },
        "filter": {
          "withPhoto": -1
        } 
      }
    }
    let total: number
    do {
      const { status, data: {cards: resCards, cursor} } = await productApi.contentV2GetCardsListPost(body)
      cards.push(...resCards!)
      total = cursor!.total!
      body.settings.cursor["updatedAt"] = cursor!.updatedAt
      body.settings.cursor["nmID"] = cursor!.nmID
    } while (total === limit)

    cards.forEach(card => {
      nmIDs[card.vendorCode!] = card.nmID!
      imtIDs[card.vendorCode!] = card.imtID!
      sizeSkus[card.vendorCode!] = card.sizes![0].skus!
    })

    const { data: variants } = await query.graph({
      entity: "product_variant",
      fields: ["id", "sku", "metadata", "product.id", "product.metadata"]
    })

    variants.forEach(variant => {
      if (variant.sku !== null && nmIDs[variant.sku]) {
        let variantMetadata = variant.metadata ?? {}
        variantMetadata.wildberries_nmID = nmIDs[variant.sku]
        variantMetadata.wildberries_sizeSkus = sizeSkus[variant.sku]
  
        updateVariants.push({
          id: variant.id,
          metadata: variantMetadata
        })

        let productMetadata = variant.product?.metadata ?? {}
        productMetadata.wildberries_imtID = imtIDs[variant.sku]

        updateProducts.push({
          id: variant.product?.id,
          metadata: productMetadata
        })
      }      
    })

    logger.info("Updating variants metadata...")
    const { result: variantsUpdateResult } = await batchProductVariantsWorkflow(container).run({
      input: {
        update: updateVariants
      }
    })

    logger.info("Updating products metadata...")
    const { result: productUpdateResult } = await batchProductsWorkflow(container).run({
      input: {
        update: Array.from(
          new Map(updateProducts.map(item => [item.id, item])).values()
        )
      }
    })

    const result = {
      variantsUpdateResult: variantsUpdateResult,
      productUpdateResult: productUpdateResult
    }

    return new StepResponse(result)
  }
)
