import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { ProductRow } from "../types"
import { OzonProduct } from "../../../types/ozon"

import { mapProductsToOzon } from "../../../lib"

export const mapToOzonFormatStep = createStep<ProductRow[], { items: OzonProduct[] }, void>(
  "map-products-to-ozon-format",
  async (products) => {
    const payload = mapProductsToOzon()
    return new StepResponse<{ items: OzonProduct[] }, void>({ items: payload.items as unknown as OzonProduct[] })
  },
  async () => { }
)
