import {
  UpdateOfferMappingDTO,
  ApiResponseStatusType,
  UpdateOfferMappingResultDTO,
} from "../../../lib/yandex-market-client/api"
import { withBusinessId, businessOfferMappingsApi } from "../../../lib/ym-client"

const BATCH_SIZE = 100

export type exportProductsStepInput = UpdateOfferMappingDTO[]

export type exportProductsBatchInfo = {
  status: ApiResponseStatusType
  results?: UpdateOfferMappingResultDTO[] | null
}


export const exportProducts = async (input: exportProductsStepInput) => {
  const batches: exportProductsBatchInfo[] = []

  for (let offset = 0; offset < input.length; offset += BATCH_SIZE) {
    const batch = input.slice(offset, offset + BATCH_SIZE)
    if (!batch.length) {
      continue
    }

    const response = await businessOfferMappingsApi.updateOfferMappings(
      withBusinessId({
        updateOfferMappingsRequest: { offerMappings: batch },
        language: "RU",
      })
    )

    const { status, results } = response.data
    batches.push({ status, results })
  }

  return batches
}
