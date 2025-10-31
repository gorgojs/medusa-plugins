import type { IProductModuleService, MedusaContainer } from "@medusajs/framework/types"
import { Modules } from "@medusajs/framework/utils"


export type GetProductsStepInput = { ids?: string[] }

export const getProducts = async (input: GetProductsStepInput, container: MedusaContainer ) => {

const service = container.resolve<IProductModuleService>(Modules.PRODUCT)

    if (!input.ids?.length) {
      console.log("empty array")
      return []
    }

    const products = await service.listProducts(
      { id: input.ids },
      { relations: ["variants"] }
    )

    return products
  }
