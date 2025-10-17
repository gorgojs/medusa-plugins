import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { batchProductsWorkflow, batchProductVariantsWorkflow } from "@medusajs/medusa/core-flows"
import { productApi, withAuth } from "../../../lib/ozon-client"
import { getMarketplaceProducts } from "../../../providers/marketplace/core"


export type ImportOzonProductsStepInput = any

export const importOzonProductsStep = createStep(
  "import-ozon-products",
  async (input: ImportOzonProductsStepInput, { container }) => {
    const query = container.resolve("query")

    const updatedVariantsIds: string[] = []
    const updatedProductsIds: string[] = []

    const limit = 100

    const productsFromMarketplace = getMarketplaceProducts()

    const products = (await productsFromMarketplace)
    const offerIds: string[] = []

    products.result?.items!.forEach((item: any) => {
      if (item.offer_id) {
        offerIds.push(item.offer_id)
      }
    })

    let last_id: string = ""
    let total: number = 0

    do {
      const productsAttributes = await productApi.productAPIGetProductAttributesV4(withAuth({
        productv4GetProductAttributesV4Request: {
          filter: {
            offer_id: offerIds,
            visibility: "ALL"
          },
          last_id: last_id,
          limit: limit
        }
      }))

      total = productsAttributes.data.result!.length
      last_id = productsAttributes.data.last_id as string
      const cards = productsAttributes.data.result!

      const nmIDs: Record<string, number> = {}
      const imtIDs: Record<string, number> = {}
      const sizeSkus: Record<string, Array<string>> = {}
      const skus: string[] = []
      const updateVariants: any[] = []
      const updateProducts: any[] = []

      cards.forEach(card => {
        skus.push(card.sku!.toString())
        nmIDs[card.sku!.toString()] = card.id as number
        imtIDs[card.sku!.toString()] = card.type_id as number
        sizeSkus[card.sku!.toString()] = card.barcodes || []
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
          variantMetadata.ozon_nmID = nmIDs[variant.sku]
          variantMetadata.ozon_sizeSkus = sizeSkus[variant.sku]

          updateVariants.push({
            id: variant.id,
            metadata: variantMetadata
          })

          let productMetadata = variant.product?.metadata ?? {}
          productMetadata.ozon_imtID = imtIDs[variant.sku]

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