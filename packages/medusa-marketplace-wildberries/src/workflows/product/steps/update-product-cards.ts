import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import WildberriesModuleService, { WildberriesProductCardUpdate } from "../../../modules/wildberries/service"
import { WB_MODULE } from "../../../modules/wildberries"

export type UpdateProductCardsStep = Array<WildberriesProductCardUpdate>

export const updateProductCardsStepId = "update-product-cards"

export const updateProductCardsStep = createStep(
  updateProductCardsStepId,
  async (productCards: UpdateProductCardsStep, { container }) => {
    const logger = container.resolve("logger")
    const wildberriesModuleService: WildberriesModuleService = container.resolve(WB_MODULE)

    if (productCards.length === 0) {
      logger.info("Nothing to update. Skipping...")
      return new StepResponse("Nothing to update")
    }

    logger.info("Update product cards...")
    logger.debug(`Product cards to update: ${JSON.stringify(productCards, null, 2)}`)

    const response = await wildberriesModuleService.updateProductCards(productCards)

    return new StepResponse(response)
  }
)
