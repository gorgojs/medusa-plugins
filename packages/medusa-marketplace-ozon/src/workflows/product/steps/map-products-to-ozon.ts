import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { ProductRow } from "../types"
import { OzonProduct } from "../../../types/ozon"

import { mapProductsToOzon } from "../../../lib"

export const mapProductsToOzonStep = createStep<ProductRow[], { items: OzonProduct[] }, void>(
  "map-products-to-ozon",
  async () => {
    const ozonProducts = mapProductsToOzon()
    return new StepResponse<{ items: OzonProduct[] }, void>({ items: ozonProducts.items as unknown as OzonProduct[] })
  },
  async () => { }
)
