import {
  createStep,
  StepResponse
} from "@medusajs/framework/workflows-sdk"
import {
  batchProductsWorkflow,
  batchProductVariantsWorkflow,
} from "@medusajs/medusa/core-flows"
import {
  GetOfferMappingsRequest,
  GetOfferMappingDTO,
} from "../../../lib/yandex-market-client"

import { getMarketplaceProducts } from "../../../providers/marketplace-yandex-market/core"

export type ImportYandexProductsStepInput = {
  request?: GetOfferMappingsRequest
}

export const importYmProductsStep = createStep(
  "import-ym-products",
  async (input: ImportYandexProductsStepInput, { container }) => {
    const query = container.resolve("query")

    const updatedVariantsIds: {
      yandex_market_imtID?: string
      yandex_market_needToSync?: string
      yandex_market_sizeSkus?: Set<string> | null
    }[] = []

    const updatedProductsIds: {
      yandex_market_imtID?: string
      yandex_market_needToSync?: string
      yandex_market_sizeSkus?: Set<string> | null
    }[] = []

    const offerIds: string[] = []

    const limit = 100

    const productsFromMarketplace = await getMarketplaceProducts()


    for (const page of productsFromMarketplace) {
      const offerMappings = page.offerMappings ?? []

      for (const mapping of offerMappings) {

        const yandex_market_imtID = mapping.offer?.offerId
        const yandex_market_needToSync = mapping.offer?.cardStatus
        const yandex_market_sizeSkus = mapping.offer?.barcodes


        updatedVariantsIds.push({
          yandex_market_imtID,
          yandex_market_needToSync,
        })

        updatedProductsIds.push({
          yandex_market_sizeSkus
        })
      }
    }

    const result = {
      updatedProductsIds,
      updatedVariantsIds,
    }

    return new StepResponse(result)
  }
)
