import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { 
  FetchAllYmOfferCardsInput, 
  FetchAllYmOfferCardsOutput,
} from "../types"
import {
  FetchAllYmOfferCardsStep,
} from "../steps"


export const checkYmProductExportStatusWorkflow = createWorkflow<FetchAllYmOfferCardsInput, FetchAllYmOfferCardsOutput, []>(
  "check-ym-product-export-status",
  (input) => {
    const result = FetchAllYmOfferCardsStep(input)
    return new WorkflowResponse(result)
  }
)
