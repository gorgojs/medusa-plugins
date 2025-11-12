import {
  createWorkflow,
  WorkflowResponse,
  when
} from "@medusajs/workflows-sdk"
import {
  getProductsStep,
  mapProductsStep,
  exportProductsStep,
  createExportStep
} from "../steps"

export type exportProductsWorkflowInput = {
  ids: string[]
}

export const exportProductsMarketplaceWorkflow = createWorkflow(
  "export-products-marketplace",
  (input: exportProductsWorkflowInput) => {
    const products = getProductsStep(input.ids)
    const marketplaceProducts = mapProductsStep(products)
    const exportResult = exportProductsStep(marketplaceProducts)

    const result = when(
      exportResult, 
      (input) => {
        return !!input.task_id
      }
    ).then(() => {
      return createExportStep(exportResult)
    })

    // TODO: define proper output
    return new WorkflowResponse(result && {})
  }
)
