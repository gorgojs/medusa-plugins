import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { updateMarketplaceProductsStatus } from "../../../providers/marketplace/core"

export type UpdateMarketplaceProductsStatusStepInput = any

export const updateMarketplaceProductsStatusStep = createStep(
  "update-marketplace-products-status",
  async (input: UpdateMarketplaceProductsStatusStepInput, { container }) => {
    const result = updateMarketplaceProductsStatus(input, container)

    return new StepResponse(result)
  }
)
