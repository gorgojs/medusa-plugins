import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { productApi } from "../../../lib/wildberries-client"
import { ContentV2CardsUpdatePostRequestInner } from "../../../lib/wildberries-products-client"

const BATCH_SIZE = 3000

export type UpdateProductCardsStep = Array<ContentV2CardsUpdatePostRequestInner>

export const updateProductCardsStepId = "update-product-cards"

export const updateProductCardsStep = createStep(
  updateProductCardsStepId,
  async (productCards: UpdateProductCardsStep, { container }) => {
    const logger = container.resolve("logger")

    if (productCards.length === 0) {
      logger.info("Nothing to update. Skipping...")
      return new StepResponse(["Nothing to update"])
    }

    logger.info("Update product cards...")
    logger.debug(`Product cards to update: ${JSON.stringify(productCards, null, 2)}`)

    const result: any[] = []

    for (let batch_number = 0; batch_number * BATCH_SIZE < productCards.length; ++batch_number) {
      const { status, data: response } = await productApi.contentV2CardsUpdatePost(
        productCards.slice(BATCH_SIZE * batch_number, BATCH_SIZE * (batch_number + 1) + 1)
      )
      result.push(response)
    }

    return new StepResponse(result)
  }
)
