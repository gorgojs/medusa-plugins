import {
  createStep,
  StepResponse,
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import {
  ResolveYmLeafCategoryIdStep,
  LoadMedusaProductsByCategoryStep,
  FetchYmCategoryParametersStep,
  UpdateYmOfferMappingsStep
} from "../steps"
import {
  RunYmProductExportWorkflowInput,
  RunYmProductExportWorkflowOutput,
} from "../types"



export const runYmProductExportWorkflow = createWorkflow<RunYmProductExportWorkflowInput, RunYmProductExportWorkflowOutput, []>(
  "run-ym-product-export",
  (input) => {
    const catId = ResolveYmLeafCategoryIdStep(input)
    const products = LoadMedusaProductsByCategoryStep(input)
    const params = FetchYmCategoryParametersStep(catId)
    const result = UpdateYmOfferMappingsStep({
      products,
      params,
      categoryId: catId,
    })
    return new WorkflowResponse(result)
  }
)
