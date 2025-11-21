import type {
  IProductModuleService,
  MedusaContainer
} from "@medusajs/framework/types"
import { Modules } from "@medusajs/framework/utils"

export type GetProductsInput = {
  ids?: string[]
}

export const getProducts = async (input: GetProductsInput, container: MedusaContainer) => {
  const service = container.resolve<IProductModuleService>(Modules.PRODUCT)

  if (!input.ids?.length) {
    console.log("empty array")
  }

  const products = await service.listProducts(
    { id: input.ids },
    { relations: ["variants"] }
  )
  return products
}

