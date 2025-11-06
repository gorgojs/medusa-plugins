import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { WildberriesProductCard, WildberriesProductCardsMerge, WildberriesProductCardUpdate, WildberriesProductCreate } from "../../../modules/wildberries/service"

export type PrepareDataForSyncStepInput = Array<string>

export const prepareDataForSyncStepId = "prepare-data-for-sync"

export const prepareDataForSyncStep = createStep(
  prepareDataForSyncStepId,
  async (productIds: PrepareDataForSyncStepInput, { container }) => {
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
        id: productIds.length ? productIds : undefined,
        status: "published"
      },
    })

    logger.debug(`Recived products: ${JSON.stringify(products, null, 2)}`)

    let productsToCreate: WildberriesProductCreate[] = []
    let productCardsToUpdate: WildberriesProductCardUpdate[] = []
    let productCardsToMerge: WildberriesProductCardsMerge[] = []

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
        let mergeProductCards = false
        let variantsToMerge: Array<WildberriesProductCard> = []
  
        product.variants.forEach(variant => {
          const nmID = variant.metadata?.wildberries_nmID ?? "none"
          if (nmID === "none") { // to merge
            mergeProductCards = true
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

    const result = { productsToCreate, productCardsToUpdate, productCardsToMerge }

    return new StepResponse(result)
  }
)
