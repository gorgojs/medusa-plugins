import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { exportProducts } from "../../../providers/marketplace/core"
import { V3ImportProductsRequestItem } from "../../../lib/ozon-seller-api";

export type exportProductsStepInput = V3ImportProductsRequestItem[]

export const exportProductsStep = createStep(
  "export-products",
  async (input: exportProductsStepInput ) => {
    const products = exportProducts(input)
    
    return new StepResponse(products)
  }
)
