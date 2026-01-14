import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { batchProductsWorkflow, batchProductVariantsWorkflow } from "@medusajs/medusa/core-flows"
import { getProductCardsApi } from "../../../lib/wildberries-client"
import { MarketplaceWildberriesCredentialsType } from "../../../providers/marketplace-wildberries/types"

export type ImportProductsStepInput = {
  credentials: MarketplaceWildberriesCredentialsType
}

export const importProductsStepId = "import-products"

export const importProductsStep = createStep(
  importProductsStepId,
  async (input: ImportProductsStepInput, { container }) => {
    const query = container.resolve("query")

    const updatedVariantsIds: string[] = []
    const updatedProductsIds: string[] = []

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
      const productApi = getProductCardsApi(input.credentials)

      const { status, data: {cards, cursor} } = await productApi.contentV2GetCardsListPost(body)
      total = cursor!.total!
      body.settings.cursor["updatedAt"] = cursor!.updatedAt
      body.settings.cursor["nmID"] = cursor!.nmID

      const nmIDs: Record<string, number> = {}
      const imtIDs: Record<string, number> = {}
      const sizeSkus: Record<string, Array<string>> = {}
      const skus: string[] = []
      const updateVariants: any[] = []
      const updateProducts: any[] = []

      cards!.forEach(card => {
        skus.push(card.vendorCode!)
        nmIDs[card.vendorCode!] = card.nmID!
        imtIDs[card.vendorCode!] = card.imtID!
        sizeSkus[card.vendorCode!] = card.sizes![0].skus!
      })

      const { data: variants } = await query.graph({
        entity: "product_variant",
        fields: ["id", "sku", "metadata", "product.id", "product.metadata"],
        filters: {
          "sku": skus
        }
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

      const { result: { updated: variantsUpdateResult } } = await batchProductVariantsWorkflow(container).run({
        input: {
          update: updateVariants
        }
      })

      const { result: { updated: productUpdateResult } } = await batchProductsWorkflow(container).run({
        input: {
          update: Array.from(
            new Map(updateProducts.map(item => [item.id, item])).values()
          )
        }
      })

      updatedVariantsIds.push(...variantsUpdateResult.map(variant => variant.id))
      updatedProductsIds.push(...productUpdateResult.map(product => product.id))
    } while (total === limit)

    const result = {
      updatedProductsIds,
      updatedVariantsIds,
    }
    
    return new StepResponse(result)
  }
)
