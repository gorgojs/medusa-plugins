import {
    createStep,
    StepResponse,
} from "@medusajs/framework/workflows-sdk"
import  { 
  YM_BUSINESS_ID,
  YM_BASE,
  YmAuthHeaders,
  YmParamsResponse
} from "../types"


export const FetchYmCategoryParametersStep = createStep(
  "fetch-ym-category-parameters",
  async (marketCategoryId: number) => {
    if (!YM_BUSINESS_ID) throw new Error("Set YM_BUSINESS_ID")
    const url = `${YM_BASE}/v2/category/${marketCategoryId}/parameters?businessId=${YM_BUSINESS_ID}`

    const r = await fetch(url, {
      method: "POST",
      headers: { ...YmAuthHeaders(), Accept: "application/json" },
    })

    const data = await (r.ok ? r.json().catch(() => ({})) : r.text().catch(() => ""))
    if (!r.ok) {
      throw new Error(typeof data === "string" ? data : `Yandex Market parameters error ${r.status}`)
    }

    const parameters = (data as YmParamsResponse).parameters ?? []
    return new StepResponse(parameters)
  }
)
