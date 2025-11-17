import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/workflows-sdk"
import {
  getProductsStep,
  mapProductsStep,
  exportProductsStep,
  // createExportStep
} from "../steps"

export type ExportProductsWorkflowInput = {
  ids: string[]
}

export const exportProductsMarketplaceWorkflow = createWorkflow(
  "export-products-marketplace",
  (input: ExportProductsWorkflowInput) => {
    const products = getProductsStep({ ids: input.ids })
    const marketplaceProducts = mapProductsStep(products)
    const exportResult = exportProductsStep(marketplaceProducts)

    // const result = createExportStep(exportResult)

    // TODO: define proper output
    return new WorkflowResponse(exportResult)
  }
)
