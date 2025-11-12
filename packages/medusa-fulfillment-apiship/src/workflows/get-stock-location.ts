import {
  createStep,
  StepResponse,
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import { Modules } from "@medusajs/framework/utils"

export type GetStockLocationStepInput = {
  id: string
}

export const getStockLocationsStep = createStep(
  "get-stock-locations-step",
  async (input: GetStockLocationStepInput, { container }) => {
    const stockLocationModuleService = container.resolve(Modules.STOCK_LOCATION)
    const stockLocations = await stockLocationModuleService.retrieveStockLocation(
      input.id,
      { relations: ["address"] }
    )
    return new StepResponse(stockLocations)
  }
)

type GetStockLocationWorkflowInput = {
  id: string
}

export const getStockLocationWorkflow = createWorkflow(
  "get-stock-locations",
  (input: GetStockLocationWorkflowInput) => {
    const stockLocations = getStockLocationsStep(input)
    return new WorkflowResponse(stockLocations)
  }
)