import { createStep, createWorkflow, StepResponse, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import WildberriesModuleService, { WildberriesProductCreate, WildberriesProductCardUpdate, WildberriesProductCardsMerge, WildberriesProductCard } from "../modules/wildberries/service"
import { WB_MODULE } from "../modules/wildberries"
import { Modules } from "@medusajs/framework/utils"
import { batchProductsWorkflow, batchProductVariantsWorkflow } from "@medusajs/medusa/core-flows"

const syncCardsFromWildberriesStep = createStep(
  "sync-cards-from-wildberries",
  async (_, { container }) => {
    const logger = container.resolve("logger")
    const wildberriesModuleService: WildberriesModuleService = container.resolve(WB_MODULE)
    const productModuleService = container.resolve(Modules.PRODUCT)

    const nmIDs: Record<string, number> = {}
    const imtIDs: Record<string, number> = {}
    const sizeSkus: Record<string, Array<string>> = {}
    let updateVariants: any[] = []
    let updateProducts: any[] = [] 


    logger.info("Getting data from wildberries...")

    const response = await wildberriesModuleService.getProductCards()

    response["cards"].forEach(variant => {
      nmIDs[variant.vendorCode] = variant.nmID
      imtIDs[variant.vendorCode] = variant.imtID
      sizeSkus[variant.vendorCode] = variant.sizes[0].skus
    })

    const variants = await productModuleService.listProductVariants(
      {
        sku: Object.keys(nmIDs),
      },
      {
        select: ["id", "sku", "metadata"],
        relations: ["product"],
        take: 100,
        skip: 0,
      }
    )


    variants.forEach(variant => {
      if (variant.sku !== null) {
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
    logger.debug(`Variants metadata update result: ${JSON.stringify(variantsUpdateResult)}`)

    logger.info("Updating products metadata...")
    const { result: productUpdateResult } = await batchProductsWorkflow(container).run({
      input: {
        update: Array.from(
          new Map(updateProducts.map(item => [item.id, item])).values()
        )
      }
    })
    logger.debug(`Products metadata update result: ${JSON.stringify(productUpdateResult)}`)


    const result = {
      variantsUpdateResult: variantsUpdateResult,
      productUpdateResult: productUpdateResult
    }

    return new StepResponse(result)
  }
)

const prepareDataForSyncStep = createStep(
  "prepare-data-for-sync",
  async (_, { container }) => {
    const logger = container.resolve("logger")
    const query = container.resolve("query")

    logger.info("Prepare the data...")

    const { data: products } = await query.graph({
      entity: "product",
      fields: [
        "*",
        "variants.*"
      ],
      filters: { status: "published" },
    })

    logger.debug(`Recived products: ${JSON.stringify(products)}`)

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

type CreateProductsStep = Array<WildberriesProductCreate>

const createProductsStep = createStep(
  "create-products",
  async (products: CreateProductsStep, { container }) => {
    const logger = container.resolve("logger")
    const wildberriesModuleService: WildberriesModuleService = container.resolve(WB_MODULE)

    if (products.length === 0) {
      logger.info("Nothing to create. Skipping...")
      return new StepResponse("Nothing to create")
    }

    logger.info("Create new products...")
    logger.debug(`Products to create: ${JSON.stringify(products)}`)

    const response = await wildberriesModuleService.createProductCards(products)

    return new StepResponse(response)
  }
)

type UpdateProductCardsStep = Array<WildberriesProductCardUpdate>

const updateProductCardsStep = createStep(
  "update-product-cards",
  async (productCards: UpdateProductCardsStep, { container }) => {
    const logger = container.resolve("logger")
    const wildberriesModuleService: WildberriesModuleService = container.resolve(WB_MODULE)

    if (productCards.length === 0) {
      logger.info("Nothing to update. Skipping...")
      return new StepResponse("Nothing to update")
    }

    logger.info("Update product cards...")
    logger.debug(`Product cards to update: ${JSON.stringify(productCards)}`)

    const response = await wildberriesModuleService.updateProductCards(productCards)

    return new StepResponse(response)
  }
)

type MergeProductCardsStep = Array<WildberriesProductCardsMerge>

const mergeProductCardsStep = createStep(
  "merge-product-cards",
  async (productCards: MergeProductCardsStep, { container }) => {
    const logger = container.resolve("logger")
    const wildberriesModuleService: WildberriesModuleService = container.resolve(WB_MODULE)

    if (productCards.length === 0) {
      logger.info("Nothing to merge. Skipping...")
      return new StepResponse("Nothing to merge")
    }

    logger.info("Merge product cards...")
    logger.debug(`Product cards to merge: ${JSON.stringify(productCards)}`)

    productCards.forEach(async item => {
      await wildberriesModuleService.createProductCardsWithMerge(item)
    })

    return new StepResponse()
  }
)

const syncProductsWildberriesWorkflow = createWorkflow(
  "sync-products-from-wildberries",
  () => {
    const syncResult = syncCardsFromWildberriesStep()

    const { productsToCreate, productCardsToUpdate, productCardsToMerge } = prepareDataForSyncStep()

    const createResponse = createProductsStep(productsToCreate)

    const updateResponse = updateProductCardsStep(productCardsToUpdate)

    const mergeResponse = mergeProductCardsStep(productCardsToMerge)

    const result = {
      syncResult,
      createResponse,
      updateResponse,
      mergeResponse,
    }
    
    return new WorkflowResponse(result)
  }
)

export default syncProductsWildberriesWorkflow
