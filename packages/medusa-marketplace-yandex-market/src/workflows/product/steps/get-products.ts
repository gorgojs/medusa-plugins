import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"

export type GetProductsStepInput = string[]

export const getProductsStep = createStep(
  "get-products",
  async (input: GetProductsStepInput, { container }) => {

    const query = container.resolve(ContainerRegistrationKeys.QUERY)

    const { data: products } = await query.graph({
      entity: "product",
      fields: ["*"],
      filters: { status: "published" },
    })

    return new StepResponse(products)
  }
)
