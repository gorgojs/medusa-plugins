import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"


export const getMedusaProductsStep = createStep(
  "get-medusa-product-step",
  async ({ }, { container }) => {

    const query = container.resolve(ContainerRegistrationKeys.QUERY)
    const status = "published"

    const { data: products } = await query.graph({
      entity: "product",
      fields: ["*"],
      filters: { status },
    })

    return new StepResponse(products)
  }
)
