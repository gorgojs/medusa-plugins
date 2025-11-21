import { MedusaContainer } from "@medusajs/framework"
import {
  ProductDTO,
} from "@medusajs/framework/types"

type MapProductsInput = any

export const mapProducts = (input: MapProductsInput, container?: MedusaContainer) => {
  // TODO: move mapping to here
  const marketplaceProducts = input as any

  return marketplaceProducts
}
