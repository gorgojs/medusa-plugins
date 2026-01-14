import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { getCreatingProductCardsApi } from "../../../lib/wildberries-client"
import { ContentV2CardsUploadPostRequestInner } from "../../../lib/wildberries-products-client"
import { MarketplaceWildberriesCredentialsType } from "../../../providers/marketplace-wildberries/types"

const BATCH_SIZE = 100

export type CreateProductsStepInput = {
  products: Array<ContentV2CardsUploadPostRequestInner>,
  credentials: MarketplaceWildberriesCredentialsType
}

export const createProductsStepId = "create-products"

export const createProductsStep = createStep(
  createProductsStepId,
  async (input: CreateProductsStepInput, { container }) => {
    const logger = container.resolve("logger")
    const products = input.products

    const creatingProductsApi = getCreatingProductCardsApi(input.credentials)

    if (products.length === 0) {
      logger.info("Nothing to create. Skipping...")
      return new StepResponse(["Nothing to create"])
    }

    logger.info("Create new products...")
    logger.debug(`Products to create: ${JSON.stringify(products, null, 2)}`)

    const result: any[] = []

    for (let batch_number = 0; batch_number * BATCH_SIZE < products.length; ++batch_number) {
      const { status, data: response } = await creatingProductsApi.contentV2CardsUploadPost(
        products.slice(BATCH_SIZE * batch_number, BATCH_SIZE * (batch_number + 1) + 1)
      )
      result.push(response)
    }

    return new StepResponse(result)
  }
)
