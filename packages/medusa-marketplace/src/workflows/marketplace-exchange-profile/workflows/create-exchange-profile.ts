import { createWorkflow, when, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { createRemoteLinkStep} from "@medusajs/medusa/core-flows"
import { CreateExchangeProfileWorkflowInput } from "../../../types/workflow/marketplace-exchange-profile"
import { createExchangeProfileStep } from "../steps"
import { Modules } from "@medusajs/framework/utils"

export const createExchangeProfileWorkflowId = "create-exchange-profile"

export const createExchangeProfileWorkflow = createWorkflow(
  createExchangeProfileWorkflowId,
  (input: CreateExchangeProfileWorkflowInput) => {
    const result = createExchangeProfileStep(input)

    when(
      input,
      (input) => !!input.stock_location_id
    ).then(() => {
      createRemoteLinkStep([{
        marketplace: { 
          marketplace_exchange_profile_id: result.id
        },
        [Modules.STOCK_LOCATION]: {
          stock_location_id: input.stock_location_id
        },
      }])
    })

    return new WorkflowResponse(result)
  }
)
