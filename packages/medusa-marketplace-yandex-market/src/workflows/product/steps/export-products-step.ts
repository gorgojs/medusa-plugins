import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import {
  BusinessOfferMappingsApi,
  Configuration
} from "../../../lib/yandex-market-client"
import {
  UpdateOfferMappingDTO
} from "../../../lib/yandex-market-client/api"
import { YM_API_KEY, YM_BUSINESS_ID } from "../../../lib/constants"


type exportProductsStepInput = UpdateOfferMappingDTO[]

export const exportProductsStep = createStep(
  "export-products-step",
  async (offerMappings: exportProductsStepInput ) => {
    const config = new Configuration({
      apiKey: YM_API_KEY as string,
    })

    const api = new BusinessOfferMappingsApi(config)
    const businessId = Number(YM_BUSINESS_ID)

    const response = await api.updateOfferMappings(
      businessId,
      { offerMappings },
      "RU"
    )

    const { status, results } = response.data

    return new StepResponse({
      status,
      ...(results ? { results } : {})
    })
  }
)
