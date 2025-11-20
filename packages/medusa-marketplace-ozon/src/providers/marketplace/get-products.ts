import type {
  IProductModuleService,
  MedusaContainer
} from "@medusajs/framework/types"
import { Modules } from "@medusajs/framework/utils"

export type GetProductsStepInput = {
  ids?: string[]
}

export const getProducts = async (data: GetProductsStepInput, container: MedusaContainer) => {
  const service = container.resolve<IProductModuleService>(Modules.PRODUCT)

  if (!data.ids?.length) {
    console.log("empty array")
  }

  const products = await service.listProducts(
    { id: data.ids },
    { relations: ["variants"] }
  )
  return products
}

