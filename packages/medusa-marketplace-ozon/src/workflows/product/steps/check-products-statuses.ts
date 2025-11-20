import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { checkProductsStatuses } from "../../../providers/marketplace"

export type CheckProductsStatusesStepInput = any


export const checkProductsStatusesStep = createStep(
  "check-products-statuses",
  async (input: CheckProductsStatusesStepInput, {container}) => {
    const result = checkProductsStatuses(input)
    return new StepResponse(result)
  }
)
