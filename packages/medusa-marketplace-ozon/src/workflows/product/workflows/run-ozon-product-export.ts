import {
  createWorkflow,
  WorkflowResponse,
  when
} from "@medusajs/workflows-sdk"
import {
  getProductsStep,
  mapToOzonFormatStep,
  importProductsToOzonStep,
  saveOzonTaskStep }
from "../steps"

import { runExportStepInput, Output } from "../types"  

export const runOzonProductExport = createWorkflow<runExportStepInput, Output, []>(
  "admin-ozon-product-import",
  (input) => {
    const products = getProductsStep(input)
    const ozonProducts = mapToOzonFormatStep(products)
    const result = importProductsToOzonStep(ozonProducts)

    when(
      result, 
      (result) => {
        return !!result.task_id
      }
    ).then(() => {
      saveOzonTaskStep(result.task_id!)
    })

    return new WorkflowResponse<Output>(result)
  }
)
