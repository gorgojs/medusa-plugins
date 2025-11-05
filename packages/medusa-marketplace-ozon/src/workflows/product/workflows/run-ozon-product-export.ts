import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/workflows-sdk"
import {
  getProductsStep,
  mapToOzonFormatStep,
  loadCategoryAttributesStep,
  applyAttributeDictionariesStep,
  runExportStep,
  saveOzonTaskStep }
from "../steps"

import { runExportStepInput, Output } from "../types"  

export const runOzonProductExport = createWorkflow<runExportStepInput, Output, []>(
  "admin-ozon-product-import",
  (input) => {
    const products = getProductsStep(input)
    const payload = mapToOzonFormatStep(products)
    const attrsByCat = loadCategoryAttributesStep(payload)
    const enrichedPayload = applyAttributeDictionariesStep({ payload, attrsByCat })
    const result = runExportStep(enrichedPayload)
    if (result.task_id) {
      saveOzonTaskStep(result.task_id)
    }
    return new WorkflowResponse<Output>(result)
  }
)
