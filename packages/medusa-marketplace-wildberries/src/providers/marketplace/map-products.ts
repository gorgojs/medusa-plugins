import { MedusaContainer } from "@medusajs/framework"
import {
  ProductDTO,
} from "@medusajs/framework/types"
import { ContentV2CardsUpdatePostRequestInner, ContentV2CardsUploadAddPostRequest, ContentV2CardsUploadAddPostRequestCardsToAddInner, ContentV2CardsUploadPostRequestInner } from "../../lib/wildberries-products-client"

type MapProductsInput = any[]

export const mapProducts = async (input: MapProductsInput, container: MedusaContainer) => {
  const logger = await container.resolve("logger")

  const dummyMap = (vendorCode: string, title: string, sizeSkus?: any) => {
    return {
      vendorCode: vendorCode,
      title: title,
      sizes: [
        {
          techSize: "A",
          wbSize: "1",
          skus: sizeSkus
        }
      ]
    }
  }

  let productsToCreate: ContentV2CardsUploadPostRequestInner[] = []
  let productCardsToUpdate: ContentV2CardsUpdatePostRequestInner[] = []
  let productCardsToMerge: ContentV2CardsUploadAddPostRequest[] = []

  input.forEach(product => {
    const imtID = product.metadata?.wildberries_imtID
    if (imtID == null) { // to create
      const variants = product.variants.map(variant => dummyMap(variant.sku, product.title + variant.title))

      productsToCreate.push({
        subjectID: 105,
        variants: variants
      })
    } else {
      let variantsToMerge: Array<ContentV2CardsUploadAddPostRequestCardsToAddInner> = []

      product.variants.forEach(variant => {
        const nmID = variant.metadata?.wildberries_nmID
        if (nmID == null) { // to merge
          variantsToMerge.push(dummyMap(variant.sku, product.title + variant.title))
        } else { // to update 
          const sizeSkus = variant.metadata?.wildberries_sizeSkus
          if (sizeSkus == null) {
            logger.error(`Failed to update variant with nmID=${nmID} (vendorCode=${variant.sku}): sizeSkus is none`)
          } else {
            productCardsToUpdate.push({
              nmID: nmID,
              ...dummyMap(variant.sku, product.title + variant.title, sizeSkus)
            })
          }
        }
      })

      if (variantsToMerge.length) {
        productCardsToMerge.push({
          imtID: imtID,
          cardsToAdd: variantsToMerge
        })
      }
    }
  })

  const result = { 
    create: productsToCreate,
    update: productCardsToUpdate,
    merge: productCardsToMerge
  }

  return result
}
