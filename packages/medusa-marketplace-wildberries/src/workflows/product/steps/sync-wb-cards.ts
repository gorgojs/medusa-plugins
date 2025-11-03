import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import WildberriesModuleService from "../../../modules/wildberries/service"
import { WB_MODULE } from "../../../modules/wildberries"
import { Modules } from "@medusajs/framework/utils"
import { batchProductsWorkflow, batchProductVariantsWorkflow } from "@medusajs/medusa/core-flows"

export const syncWbCardsStepId = "sync-wb-cards"

export const syncWbCardsStep = createStep(
  syncWbCardsStepId,
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
