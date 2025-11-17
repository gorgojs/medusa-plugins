import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import {
  UpdateOfferMappingDTO
} from "../../../lib/yandex-market-client/api"
import { withBusinessId, businessOfferMappingsApi, config } from "../../../lib/ym-client"

type exportProductsStepInput = UpdateOfferMappingDTO[]

export const exportProductsStep = createStep(
  "export-products",
  async (input: exportProductsStepInput ) => {


    const response = await businessOfferMappingsApi.updateOfferMappings(
      withBusinessId({
        updateOfferMappingsRequest: { offerMappings: input },
        language: "RU"
      })
    )

    const { status, results } = response.data

    return new StepResponse({
      status,
      ...(results ? { results } : {})
    })
  }
)
