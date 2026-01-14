import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { getCreatingProductCardsApi } from "../../../lib/wildberries-client"
import { ContentV2CardsUploadAddPostRequest } from "../../../lib/wildberries-products-client"
import { MarketplaceWildberriesCredentialsType } from "../../../providers/marketplace-wildberries/types"

export type MergeProductCardsStepInput = {
  productCards: Array<ContentV2CardsUploadAddPostRequest>,
  credentials: MarketplaceWildberriesCredentialsType
}

export const mergeProductCardsStepId = "merge-product-cards"

export const mergeProductCardsStep = createStep(
  mergeProductCardsStepId,
  async (input: MergeProductCardsStepInput, { container }) => {
    const logger = container.resolve("logger")
    const productCards = input.productCards

    const creatingProductsApi = getCreatingProductCardsApi(input.credentials)

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
