import { AbstractMarketplaceProvider } from "@gorgo/medusa-marketplace/modules/marketplace/utils"
import {
  ExportProductsInput,
  ExportProductsOutput,
  GetProductsInput,
  GetProductsOutput,
  ImportProductsInput,
  ImportProductsOutput,
  MapToMarketplaceProductsInput,
  MapToMarketplaceProductsOutput,
  MapToMedusaProductsInput,
  MapToMedusaProductsOutput,
  MAX_VARIANTS_TO_CREATE,
} from "@gorgo/medusa-marketplace/types"
import {
    ProductDTO,
} from "@medusajs/framework/types"
import {
    ApiResponseStatusType,
    GetOfferMappingsRequest,
    GetOfferMappingDTO
} from "../../../lib/yandex-market-client/api"
import {
    importMarketplaceProductsYmWorkflow,
    exportMarketplaceProductsYmWorkflow
} from "../../../workflows/provider"


export class YandexMarketMarketplaceProvider extends AbstractMarketplaceProvider {
    static identifier = "yandexmarket"

    async exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput> {
    const { container, marketplaceProducts, credentials } = data
    const { result } = await exportMarketplaceProductsYmWorkflow(container).run({
      input: {
        credentials,
        ...marketplaceProducts
      }
    })

    return result
  }

  async getProducts(data: GetProductsInput): Promise<GetProductsOutput> {
    const { container, ...input } = data

    const query = await container!.resolve("query")

    const { data: products } = await query.graph({
      entity: "product",
      fields: [
        "*",
        "variants.*"
      ],
      filters: {
        id: input.ids?.length ? input.ids : undefined,
        status: "published"
      },
    })

    return products
  }

  async importProducts(data: ImportProductsInput): Promise<ImportProductsOutput> {
    const { container, ...input } = data

    const { result } = await importMarketplaceProductsYmWorkflow(container).run({ input })

    return result
  }

  // const getMarketplaceProductsStatus = async ( input: GetOfferCardsContentStatusStepInput ) => {
    
  //   const { request } = input
  //   const pages: OfferCardsContentStatusPage[] = []
  //   let pageToken: string | undefined
  
  //   do {
  //     const response = await contentApi.getOfferCardsContentStatus(
  //       withBusinessId({
  //         pageToken,
  //         limit: PAGE_LIMIT,
  //         getOfferCardsContentStatusRequest: request,
  //       })
  //     )
  
  //     const { status, result,} = response.data
  
  //     const offerCards = result?.offerCards ?? []
  //     const nextPageToken = result?.paging?.nextPageToken ?? null
  
  //     pages.push({
  //       status,
  //       offerCards,
  //       nextPageToken,
  //     })
  
  //     pageToken = nextPageToken || undefined
  //   } while (pageToken)
  
  //   return pages
  // }

}
