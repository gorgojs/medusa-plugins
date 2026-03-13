import { AbstractMarketplaceProvider } from "@gorgo/medusa-marketplace/modules/marketplace/utils"
import {
  ExportProductsInput,
  ExportProductsOutput,
  GetMarketplaceProductsInput,
  GetMarketplaceProductsOutput,
  GetProductsInput,
  GetProductsOutput,
  ImportProductsInput,
  ImportProductsOutput,
  MapToMedusaProductsInput,
  MapToMedusaProductsOutput,
  MapToMarketplaceProductsInput,
  MapToMarketplaceProductsOutput,
} from "@gorgo/medusa-marketplace/types"
import {
  exportMarketplaceProductsYmWorkflow,
  importProductsToMedusaYmWorkflow,
} from "../../../workflows/provider"
import {
  GetOfferMappingDTO,
  GetOfferMappingsRequest,
  UpdateOfferMappingDTO,
} from "../../../lib/yandex-market-client/api"
import { businessOfferMappingsApi, withBusinessId } from "../../../lib/ym-client"
import type { MarketplaceYandexMarketCredentialsType } from "../types"
import { chunk } from "../utils"

const PAGE_LIMIT = 100
const OFFER_IDS_CHUNK_SIZE = 200

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
        "variants.*",
      ],
      filters: {
        id: Array.isArray(ids) && ids.length > 0 ? ids : undefined,
        status: "published",
      },
    })

    return products
  }

  async importProducts(data: ImportProductsInput): Promise<ImportProductsOutput> {
    const { container, products } = data
    const { result } = await importProductsToMedusaYmWorkflow(container!).run({
      input: { products: products ?? [] },
    })
    return result
  }

  async getMarketplaceProducts(data: GetMarketplaceProductsInput): Promise<GetMarketplaceProductsOutput> {
    const { container, marketplace, ids } = data
    const credentials = marketplace.credentials as MarketplaceYandexMarketCredentialsType
    const api = businessOfferMappingsApi(credentials)
    const query = await container!.resolve("query")

    if (ids?.length) {
      const { data: products } = await query.graph({
        entity: "product",
        fields: ["variants.sku"],
        filters: {
          id: ids,
        },
      })

      const offerIds = Array.from(
        new Set(
          products.flatMap((product: any) =>
            (product?.variants ?? [])
              .map((variant: any) => variant?.sku)
              .filter((sku: unknown): sku is string => typeof sku === "string" && sku.length > 0)
          )
        )
      )

      if (!offerIds.length) {
        return []
      }

      const result: GetOfferMappingDTO[] = []

      for (const offerIdsChunk of chunk(offerIds, OFFER_IDS_CHUNK_SIZE)) {
        const request = {
          offerIds: offerIdsChunk,
        } as unknown as GetOfferMappingsRequest

        const response = await api.getOfferMappings(
          withBusinessId(credentials, {
            getOfferMappingsRequest: request,
          })
        )

        result.push(...(response.data?.result?.offerMappings ?? []))
      }

      return result as GetMarketplaceProductsOutput
    }

    const result: GetOfferMappingDTO[] = []
    let pageToken: string | undefined

    do {
      const response = await api.getOfferMappings(
        withBusinessId(credentials, {
          pageToken,
          limit: PAGE_LIMIT,
        })
      )

      result.push(...(response.data?.result?.offerMappings ?? []))
      pageToken = response.data?.result?.paging?.nextPageToken ?? undefined
    } while (pageToken)

    return result as GetMarketplaceProductsOutput
  }

  async mapToMedusaProducts(_data: MapToMedusaProductsInput): Promise<MapToMedusaProductsOutput> {
    return []
  }

  async mapToMarketplaceProducts(_data: MapToMarketplaceProductsInput): Promise<MapToMarketplaceProductsOutput> {
    return { import: [] }
  }
}
