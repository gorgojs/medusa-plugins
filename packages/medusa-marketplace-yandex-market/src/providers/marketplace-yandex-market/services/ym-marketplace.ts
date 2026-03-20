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
  OfferMappingDTO,
  UpdateOfferMappingDTO,
} from "../../../lib/yandex-market-client/api"
import { businessOfferMappingsApi, withBusinessId } from "../../../lib/ym-client"
import type { MarketplaceYandexMarketCredentialsType } from "../types"
import { chunk, getMappingSchema, toStringArray, mapObject } from "../utils"

const PAGE_LIMIT = 100
const OFFER_IDS_CHUNK_SIZE = 200

export class YandexMarketMarketplaceProvider extends AbstractMarketplaceProvider {
  static identifier = "yandexmarket"

  async exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput> {
    const { container, marketplaceProducts, marketplace } = data
    const products = (marketplaceProducts as { marketplaceProducts?: UpdateOfferMappingDTO[] }).marketplaceProducts ?? []

    const { result } = await exportMarketplaceProductsYmWorkflow(container!).run({
      input: {
        credentials: marketplace.credentials as MarketplaceYandexMarketCredentialsType,
        products
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

  async mapToMedusaProducts(input: MapToMedusaProductsInput): Promise<MapToMedusaProductsOutput> {
    const { container, marketplace, marketplaceProducts } = input
    const offerMappings = Array.isArray(marketplaceProducts) ? (marketplaceProducts as GetOfferMappingDTO[]) : []

    const settings = {
      "marketplaceToMedusaMappingSchema": {
        fields: [
          {
            from: "offer.offerId",
            to: "variant.metadata.yandex_market_offer_id",
            default: []
          },
          {
            from: "offer.cardStatus",
            to: "variant.metadata.yandex_market_card_status",
            default: []
          },
          {
            from: "mapping.marketSku",
            to: "variant.metadata.yandex_market_marketSku",
            default: []
          },
          {
            from: "mapping.marketSkuName",
            to: "variant.metadata.yandex_market_marketSkuName",
            default: []
          },
          {
            from: "mapping.marketCategoryId",
            to: "product.metadata.yandex_market_category_id",
            default: []
          },
          {
            from: "mapping.marketCategoryName",
            to: "product.metadata.yandex_market_category_name",
            default: []
          },
        ],
      }
    }

    const schema = settings.marketplaceToMedusaMappingSchema

    if (!offerMappings.length) return []

    const offerIds = Array.from(
      offerMappings
        .map((item) => item.offer?.offerId)
        .filter((id): id is string => typeof id === "string" && id.length > 0)
    )

    if (!offerIds.length) return []

    const query = await container!.resolve("query")
    const { data: variants } = await query.graph({
      entity: "product_variant",
      fields: ["id", "sku", "metadata", "product.id", "product.metadata"],
      filters: { sku: offerIds },
    })

    const productById = new Map<string, any>()
    const variantBySku = new Map<string, { product: any; variant: any }>()

    for (const variant of variants as any[]) {
      if (!variant?.sku || !variant?.id || !variant?.product?.id) continue

      const mappedVariant = { id: variant.id, metadata: { ...(variant.metadata ?? {}) } }
      let mappedProduct = productById.get(variant.product.id)
      if (!mappedProduct) {
        mappedProduct = {
          id: variant.product.id,
          metadata: { ...(variant.product.metadata ?? {}) },
          variants: [],
        }
        productById.set(variant.product.id, mappedProduct)
      }
      mappedProduct.variants.push(mappedVariant)
      variantBySku.set(variant.sku, { product: mappedProduct, variant: mappedVariant })
    }

    for (const offerMapping of offerMappings) {
      const offerId = offerMapping.offer?.offerId
      if (!offerId) continue

      const target = variantBySku.get(offerId)
      if (!target) continue

      const { product, variant } = target
      const mappingSource = {
        ...offerMapping,
        offer: {
          ...offerMapping.offer,
          barcodes: toStringArray(offerMapping.offer?.barcodes),
        },
      } as any

      const mapped = mapObject<any, any>(mappingSource, schema)

      if (mapped?.variant?.metadata) {
        variant.metadata = { ...(variant.metadata ?? {}), ...mapped.variant.metadata }
      }
      if (mapped?.product?.metadata) {
        product.metadata = { ...(product.metadata ?? {}), ...mapped.product.metadata }
      }
    }

    return Array.from(productById.values()) as any
  }

  async mapToMarketplaceProducts(data: MapToMarketplaceProductsInput): Promise<MapToMarketplaceProductsOutput> {
    const settings = {
      "medusaToMarketplaceMappingSchema": {
        fields: [
          {
            from: "id",
            to: "offerId",
          },
          {
            from: "combined_name",
            to: "name",
          },
          {
            from: "description",
            to: "description",
          },
          {
            from: "prices.0.amount",
            to: "basicPrice",
          },
          {
            from: "prices.currency_code",
            to: "currencyId",
            default: "RUB",
          },
          {
            from: "product.weight",
            to: "weightDimensions.weight",
          },
          {
            from: "product.length",
            to: "weightDimensions.length",
          },
          {
            from: "product.height",
            to: "weightDimensions.height",
          },
          {
            from: "product.width",
            to: "weightDimensions.width",
          },
          // {
          //   from: "images",
          //   to: "offer.pictures",
          //   default: []
          // }
        ]
      }
    }

    const schema = settings.medusaToMarketplaceMappingSchema
    const products = data.products ?? []
    const marketplaceProducts: any[] = []

    products.forEach((product) => {
      // const intersect =
      //   product.categories
      //     ?.filter((value) => schema.medusa_categories.includes(value.id))
      //     .map((c) => c.id) || []

      console.log(product.categories?.[0]?.id)

      console.log(product.id)
      console.log(product.categories?.map(c => c.id))
      // console.log(schema.medusa_categories)
      // console.log(intersect)
      // if (intersect.length === 0) return

      product.variants.forEach((variant) => {
        const { variants: _ignored, ...productWithoutVariants } = product

        // const images = ( variant.images && variant.images.length ? variant.images : product.images || [] ).map((img) => img.url)

        const combinedName = `${product?.title ?? ""} ${variant.title ?? ""}`.trim()


        // const weightDimensions = {
        //   "weight": Number(variant.weight ?? product.weight ?? 0),
        //   "width": Number(variant.width ?? product.width ?? 0),
        //   "height": Number(variant.height ?? product.height ?? 0),
        //   "length": Number(variant.length ?? product.length ?? 0)
        // }
        // console.log(weightDimensions)


        const parameterValues = []

        const mergedForMapping = {
          product: productWithoutVariants,
          ...variant,
          // images,
          combinedName: combinedName,
          // weightDimensions,
          parameterValues,
        }
        const offer = mapObject(mergedForMapping, schema) as any

        // yandexItem.offer.marketCategoryId =
        //   product.metadata?.yandex_market_category_id ??
        //   schema.yandexmarket_category?.categoryId

        marketplaceProducts.push({ offer: offer })
      })
    })
    console.log("count", products.length)
    console.log("mProducts", JSON.stringify(marketplaceProducts, null, 2))
    return {
      marketplaceProducts
    }
  }
}
