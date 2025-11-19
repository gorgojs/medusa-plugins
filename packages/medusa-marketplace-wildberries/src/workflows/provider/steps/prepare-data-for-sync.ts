import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import {
  ContentV2CardsUpdatePostRequestInner,
  ContentV2CardsUploadAddPostRequest,
  ContentV2CardsUploadAddPostRequestCardsToAddInner,
  ContentV2CardsUploadPostRequestInner,
} from "../../../lib/wildberries-products-client"


export type PrepareDataForSyncStepInput = {
  ids?: string[]
}

export const prepareDataForSyncStepId = "prepare-data-for-sync"

export const prepareDataForSyncStep = createStep(
  prepareDataForSyncStepId,
  async (input: PrepareDataForSyncStepInput, { container }) => {
    const logger = container.resolve("logger")
    const query = container.resolve("query")

    logger.info("Prepare the data...")

    const { data: products } = await query.graph({
      entity: "product",
      fields: [
        "*",
        "variants.*"
      ],
      filters: {
        id: input.ids?.length ? input.ids : undefined,
        status: "published"
      },
    })

    logger.debug(`Recived products: ${JSON.stringify(products, null, 2)}`)

    let productsToCreate: ContentV2CardsUploadPostRequestInner[] = []
    let productCardsToUpdate: ContentV2CardsUpdatePostRequestInner[] = []
    let productCardsToMerge: ContentV2CardsUploadAddPostRequest[] = []

    products.forEach(product => {
      const imtID = product.metadata?.wildberries_imtID ?? "none"
      if (imtID === "none") { // to create
        const variants = product.variants.map(variant => {
          return {
            vendorCode: variant.sku ?? "null_sku",
            title: product.title + variant.title,
            sizes: [
              {
                techSize: "A",
                wbSize: "1",
              }
            ]
          }
        })

        productsToCreate.push({
          subjectID: 105,
          variants: variants
        })
      } else {
        let variantsToMerge: Array<ContentV2CardsUploadAddPostRequestCardsToAddInner> = []

        product.variants.forEach(variant => {
          const nmID = variant.metadata?.wildberries_nmID ?? "none"
          if (nmID === "none") { // to merge
            variantsToMerge.push({
              vendorCode: variant.sku ?? "null_sku",
              title: product.title + variant.title,
              sizes: [
                {
                  techSize: "A",
                  wbSize: "1"
                }
              ]
            })
          } else { // to update 
            const sizeSkus = variant.metadata?.wildberries_sizeSkus ?? "none"
            if (sizeSkus === "none") {
              logger.error(`Failed to update variant with nmID=${nmID} (vendorCode=${variant.sku}): sizeSkus is none`)
            } else {
              productCardsToUpdate.push({
                nmID: nmID as number,
                vendorCode: variant.sku ?? "null_sku",
                title: product.title + variant.title,
                sizes: [
                  {
                    techSize: "A",
                    wbSize: "1",
                    skus: sizeSkus
                  }
                ]
              })
            }
          }
        })

        if (variantsToMerge.length) {
          productCardsToMerge.push({
            imtID: imtID as number,
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

    return new StepResponse(result)
  }
)
