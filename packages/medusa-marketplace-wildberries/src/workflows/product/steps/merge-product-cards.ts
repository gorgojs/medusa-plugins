import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { creatingProductsApi } from "../../../lib/wildberries-client"
import { ContentV2CardsUploadAddPostRequest } from "../../../lib/wildberries-products-client"

export type MergeProductCardsStepInput = Array<ContentV2CardsUploadAddPostRequest>

export const mergeProductCardsStepId = "merge-product-cards"

export const mergeProductCardsStep = createStep(
  mergeProductCardsStepId,
  async (productCards: MergeProductCardsStepInput, { container }) => {
    const logger = container.resolve("logger")

    if (productCards.length === 0) {
      logger.info("Nothing to merge. Skipping...")
      return new StepResponse(["Nothing to merge"])
    }

    logger.info("Merge product cards...")
    logger.debug(`Product cards to merge: ${JSON.stringify(productCards, null, 2)}`)

    const result: any[] = []

    productCards.forEach(async item => {
      const { status, data: response } = await creatingProductsApi.contentV2CardsUploadAddPost(item)
      result.push(response)
    })

    return new StepResponse(result)
  }
)
