import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import type { IProductModuleService } from "@medusajs/framework/types"
import { Modules } from "@medusajs/framework/utils"

export type GetProductsStepInput = { ids?: string[] }

export const getProductsStep = createStep(
  "get-products",
  async (input: GetProductsStepInput, { container }) => {
    const service = container.resolve<IProductModuleService>(Modules.PRODUCT)

    if (!input.ids?.length) {
      return new StepResponse([], [])
    }

    const products = await service.listProducts(
      { id: input.ids },
      { relations: ["variants"] }
    )
    return new StepResponse(products, products)
  }
)
