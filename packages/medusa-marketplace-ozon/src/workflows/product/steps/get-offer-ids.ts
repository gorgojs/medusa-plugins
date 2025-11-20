import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"

import { getOfferIds } from "../../../providers/marketplace"

export type GetOfferIdsStepInput = any

export const getOfferIdsStep = createStep(
  "get-offer-ids",
  async (input: GetOfferIdsStepInput) => {
    const result = getOfferIds(input)

    return new StepResponse(result)
  }
)
