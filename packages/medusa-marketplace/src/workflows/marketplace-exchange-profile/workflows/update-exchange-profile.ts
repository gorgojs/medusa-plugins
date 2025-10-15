import { createWorkflow, when, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import { createRemoteLinkStep, dismissRemoteLinkStep } from "@medusajs/medusa/core-flows"
import { Modules } from "@medusajs/framework/utils"
import { UpdateExchangeProfileWorkflowInput } from "../../../types/workflow/marketplace-exchange-profile/update-exchange-profile"
import { updateExchangeProfileStep } from "../steps"

export const updateExchangeProfileWorkflowId = "update-exchange-profile"

export const updateExchangeProfileWorkflow = createWorkflow(
  updateExchangeProfileWorkflowId,
  (input: UpdateExchangeProfileWorkflowInput) => {
    const { exchangeProfile, stock_location_id } = updateExchangeProfileStep(input)

    when(
      { input, stock_location_id },
      ( { input, stock_location_id } ) => !!input.stock_location_id  && !!stock_location_id && input.stock_location_id !== stock_location_id
    ).then(() => {
      dismissRemoteLinkStep([{
        marketplace: { 
          marketplace_exchange_profile_id: exchangeProfile.id
        },
        [Modules.STOCK_LOCATION]: {
          stock_location_id: stock_location_id
        },
      }])
    })

    when(
      input,
      (input) => {
        return !!input.stock_location_id && input.stock_location_id !== stock_location_id
      }
    ).then(() => {
      createRemoteLinkStep([{
        marketplace: { 
          marketplace_exchange_profile_id: exchangeProfile.id
        },
        [Modules.STOCK_LOCATION]: {
          stock_location_id: input.stock_location_id
        },
      }])
    })

    return new WorkflowResponse(exchangeProfile)
  }
)
