import {
    createStep,
    StepResponse,
} from "@medusajs/framework/workflows-sdk"

// TODO: Refactor imports from types

import  { 
  RunYmProductExportWorkflowInput,
  YM_PHONE_CATEGORY_ID
} from "../types"


export const ResolveYmLeafCategoryIdStep = createStep(
  "resolve-ym-leaf-category-id",
  async (input: RunYmProductExportWorkflowInput | undefined) => {
    const marketCategoryId = Number(input?.categoryId || YM_PHONE_CATEGORY_ID || 0)
    if (!marketCategoryId) throw new Error("Set YM_PHONE_CATEGORY_ID or pass input.categoryId (leaf id for Mobile Phones)")
    
    //
    //  TODO: Add check existing category in Yandex Market
    // 

    return new StepResponse(marketCategoryId)
  }

)

