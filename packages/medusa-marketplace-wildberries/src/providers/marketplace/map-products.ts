import {
  ProductDTO,
} from "@medusajs/framework/types"

type MapProductsInput = any

export const mapProducts = async (input: MapProductsInput) => {
  // TODO: move mapping to here
  const marketplaceProducts = input as any

  return marketplaceProducts
}
