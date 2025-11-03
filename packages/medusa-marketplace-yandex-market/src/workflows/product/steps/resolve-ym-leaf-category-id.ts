import {
    createStep,
    StepResponse,
} from "@medusajs/framework/workflows-sdk"
import  { 
  RunYmProductExportWorkflowInput,
  YM_PHONE_CATEGORY_ID
} from "../types"




export const ResolveYmLeafCategoryIdStep = createStep(
  "resolve-ym-leaf-category-id",
  async (input: RunYmProductExportWorkflowInput | undefined) => {
    const category = Number(input?.categoryId || YM_PHONE_CATEGORY_ID || 0)
    if (!category) {
      throw new Error("Set YM_PHONE_CATEGORY_ID or pass input.categoryId (leaf id for Mobile Phones)")
    }
    return new StepResponse(category)
  }
)
