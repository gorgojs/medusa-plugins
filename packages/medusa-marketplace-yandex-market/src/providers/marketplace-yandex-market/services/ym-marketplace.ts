import { AbstractMarketplaceProvider } from "@gorgo/medusa-marketplace/modules/marketplace/utils"
import {
  ExportProductsInput,
  ExportProductsOutput,
  GetProductsInput,
  GetProductsOutput,
  ImportProductsInput,
  ImportProductsOutput,
} from "@gorgo/medusa-marketplace/types"
import {
    importMarketplaceProductsYmWorkflow,
    exportMarketplaceProductsYmWorkflow
} from "../../../workflows/provider"
import type { UpdateOfferMappingDTO } from "../../../lib/yandex-market-client"
import type { MarketplaceYandexMarketCredentialsType } from "../types"


export class YandexMarketMarketplaceProvider extends AbstractMarketplaceProvider {
    static identifier = "yandexmarket"

    async exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput> {
    const { container, marketplaceProducts, marketplace } = data
    const products = Array.isArray(marketplaceProducts)
      ? (marketplaceProducts as UpdateOfferMappingDTO[])
      : []

    const { result } = await exportMarketplaceProductsYmWorkflow(container!).run({
      input: {
        credentials: marketplace.credentials as MarketplaceYandexMarketCredentialsType,
        products,
      },
    })

    return result
  }

  async getProducts(data: GetProductsInput): Promise<GetProductsOutput> {
    const { container, ...input } = data
    const ids = input.ids as string[] | undefined

    const query = await container!.resolve("query")

    const { data: products } = await query.graph({
      entity: "product",
      fields: [
        "*",
        "variants.*"
      ],
      filters: {
        id: Array.isArray(ids) && ids.length > 0 ? ids : undefined,
        status: "published"
      },
    })

    return products
  }

  async importProducts(data: ImportProductsInput): Promise<ImportProductsOutput> {
    const { container, marketplace, ...input } = data as ImportProductsInput & {
      marketplace?: { credentials?: MarketplaceYandexMarketCredentialsType }
    }
    const credentials = marketplace?.credentials

    if (!credentials) {
      throw new Error("Marketplace credentials are required for import")
    }

    const { result } = await importMarketplaceProductsYmWorkflow(container!).run({
      input: { credentials },
    })

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
