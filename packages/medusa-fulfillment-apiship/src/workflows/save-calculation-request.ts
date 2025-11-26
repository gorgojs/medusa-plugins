import {
  createStep,
  createWorkflow
} from "@medusajs/framework/workflows-sdk"
import { Modules } from "@medusajs/framework/utils"

export type SaveCalculationRequestStepInput = {
  cartId: string
  data: Record<string, unknown>
}

export const saveCalculationRequestStep = createStep(
  "save-calculation-request-step",
  async ({cartId, data}: SaveCalculationRequestStepInput, { container }) => {
    const cachingModuleService = container.resolve(Modules.CACHE)
    await cachingModuleService.set(
      cartId,
      data
    )
  }
)

type SaveCalculationRequestWorkflowInput = {
  cartId: string
  data: Record<string, unknown>
}

export const saveCalculationRequestWorkflow = createWorkflow(
  "save-calculation-request",
  (input: SaveCalculationRequestWorkflowInput) => {
    saveCalculationRequestStep(input)
  }
)