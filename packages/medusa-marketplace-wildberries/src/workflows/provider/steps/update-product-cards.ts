import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { ContentV2CardsUpdatePostRequestInner } from "../../../lib/wildberries-products-client"
import { getProductCardsApi } from "../../../lib/wildberries-client"
import { MarketplaceWildberriesCredentialsType } from "../../../providers/marketplace-wildberries/types"

const BATCH_SIZE = 3000

export type UpdateProductCardsStepInput = {
  productCards: Array<ContentV2CardsUpdatePostRequestInner>,
  credentials: MarketplaceWildberriesCredentialsType
}

export const updateProductCardsStepId = "update-product-cards"

export const updateProductCardsStep = createStep(
  updateProductCardsStepId,
  async (input: UpdateProductCardsStepInput, { container }) => {
    const logger = container.resolve("logger")
    const productCards = input.productCards

    const productApi = getProductCardsApi(input.credentials)

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
