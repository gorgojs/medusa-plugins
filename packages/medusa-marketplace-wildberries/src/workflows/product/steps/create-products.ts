import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import WildberriesModuleService, { WildberriesProductCreate } from "../../../modules/wildberries/service"
import { WB_MODULE } from "../../../modules/wildberries"

const BATCH_SIZE = 100

export type CreateProductsStepInput = Array<WildberriesProductCreate>

export const createProductsStepId = "create-products"

export const createProductsStep = createStep(
  createProductsStepId,
  async (products: CreateProductsStepInput, { container }) => {
    const logger = container.resolve("logger")
    const wildberriesModuleService: WildberriesModuleService = container.resolve(WB_MODULE)

    if (products.length === 0) {
      logger.info("Nothing to create. Skipping...")
      return new StepResponse(["Nothing to create"])
    }

    logger.info("Create new products...")
    logger.debug(`Products to create: ${JSON.stringify(products, null, 2)}`)

    const result: any[] = []

    for (let batch_number = 0; batch_number * BATCH_SIZE < products.length; ++batch_number) {
      const response = await wildberriesModuleService.createProductCards(products.slice(BATCH_SIZE * batch_number, BATCH_SIZE * (batch_number + 1) + 1))
      const errorList = []

      result.push({
        response,
        errorList,
      })
    }

    return new StepResponse(result)
  }
)
