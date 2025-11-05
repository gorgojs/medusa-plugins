import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { 
  OzonProduct, 
  ProductRow
}from "../types"

import { mapProductsToOzon } from "../../../lib"


export const mapToOzonFormatStep = createStep<ProductRow[], { items: OzonProduct[] }, void>(
  "map-products-to-ozon-format",
  async (products) => {
    const payload = mapProductsToOzon(products)
    return new StepResponse<{ items: OzonProduct[] }, void>({ items: payload.items as OzonProduct[] })
  },
  async () => {}
)
