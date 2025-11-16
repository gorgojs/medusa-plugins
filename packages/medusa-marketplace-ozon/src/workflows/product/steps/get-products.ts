import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import type { IProductModuleService } from "@medusajs/framework/types"
import { Modules } from "@medusajs/framework/utils"

export type GetProductsStepInput = {
  ids?: string[]
}

export const getProductsStep = createStep(
  "get-products",
  async (data: GetProductsStepInput, { container }) => {
    const service = container.resolve<IProductModuleService>(Modules.PRODUCT)

    if (!data.ids?.length) {
      return new StepResponse([], [])
    }

    const products = await service.listProducts(
      { id: data.ids },
      { relations: ["variants"] }
    )
    console.log(products)
    return new StepResponse(products, products)
  }
)
