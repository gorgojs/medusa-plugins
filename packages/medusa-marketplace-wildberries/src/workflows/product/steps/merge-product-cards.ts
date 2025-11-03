import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import WildberriesModuleService, { WildberriesProductCardsMerge } from "../../../modules/wildberries/service"
import { WB_MODULE } from "../../../modules/wildberries"

export type MergeProductCardsStepInput = Array<WildberriesProductCardsMerge>

export const mergeProductCardsStepId = "merge-product-cards"

export const mergeProductCardsStep = createStep(
  mergeProductCardsStepId,
  async (productCards: MergeProductCardsStepInput, { container }) => {
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
