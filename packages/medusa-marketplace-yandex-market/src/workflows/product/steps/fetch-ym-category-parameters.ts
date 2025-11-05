import {
  createStep,
  StepResponse,
} from "@medusajs/framework/workflows-sdk"

import {
  Configuration,
  ContentApi,
} from "../../../lib/yandex-market-client"
import axios from "axios"
import {
  YM_BUSINESS_ID,
  YM_BASE,
  YM_API_KEY,
  YmAuthHeaders,
  YmParamsResponse
} from "../types"


export const FetchYmCategoryParametersStep = createStep(
  "fetch-ym-category-parameters",
  async (marketCategoryId: number) => {

    const basePath = process.env.YM_BASE_URL ?? "https://api.partner.market.yandex.ru"
    const businessId = Number(process.env.YM_BUSINESS_ID)
    const apiKey = process.env.YM_API_KEY

    if (!businessId) throw new Error("Set YM_BUSINESS_ID")
    if (!apiKey) throw new Error("Set YM_API_KEY")


    const cfg = new Configuration({
      basePath,
      apiKey: () => apiKey,
    })


    const http = axios.create({ baseURL: basePath, timeout: 30_000 })
    const api = new ContentApi(cfg, basePath, http)

    const { data } = await api.getCategoryContentParameters(marketCategoryId, businessId)
    const parameters = (data as any)?.parameters ?? []
    return new StepResponse(parameters)
  }
)
