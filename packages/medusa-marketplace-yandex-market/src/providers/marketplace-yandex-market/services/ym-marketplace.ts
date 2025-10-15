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
  GetMarketplaceWarehousesInput,
  GetMarketplaceWarehousesOutput,
  GetMarketplaceOrderTypesInput,
  GetMarketplaceOrderTypesOutput,
  GetMarketplaceOrdersInput,
  GetMarketplaceOrdersOutput,
  MapToMedusaOrdersInput,
  MapToMedusaOrdersOutput,
} from "@gorgo/medusa-marketplace/types"
import {
  exportMarketplaceProductsYmWorkflow,
  importProductsToMedusaYmWorkflow,
} from "../../../workflows/provider"
import {
  GetOfferMappingDTO,
  GetOfferMappingsRequest,
  UpdateOfferMappingDTO,
  BusinessOrderDTO
} from "../../../lib/yandex-market-client/api"
import { businessOfferMappingsApi, withBusinessId, warehousesApi, dbsApi } from "../../../lib/ym-client"
import { MarketplaceYandexMarketCredentialsType, ORDER_TYPES } from "../types"
import { chunk, toStringArray, mapObject } from "../utils"
import { number } from "@medusajs/framework/zod"

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
        "categories.id",
        "images.*",
        "options.*",
        "options.values.*",
        "metadata.*",
        "variants.*",
        "variants.metadata.*",
        "variants.images.*",
        "variants.options.*",
        "variants.inventory_items.*",
        "variants.prices.*"
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
          },
          {
            from: "offer.cardStatus",
            to: "variant.metadata.yandex_market_card_status",
          },
          {
            from: "mapping.marketCategoryId",
            to: "product.metadata.yandex_market_category_id",
          },
          {
            from: "mapping.marketCategoryName",
            to: "product.metadata.yandex_market_category_name",
          },
        ],
      }
    }

    const schema = settings.marketplaceToMedusaMappingSchema

    if (!offerMappings.length) return []

    const offerIds = Array.from(
      new Set(
        offerMappings
          .map((item) => item.offer?.offerId)
          .filter((id): id is string => typeof id === "string" && id.length > 0)
          .map((id: string) => id.trim())
      )
    )

    if (!offerIds.length) return []

    const query = await container!.resolve("query")
    const { data: variants } = await query.graph({
      entity: "product_variant",
      fields: ["id", "sku", "metadata", "product.id", "product.metadata"],
      filters: { id: offerIds },
    })

    const productById = new Map<string, any>()
    const variantById = new Map<string, { product: any; variant: any }>()

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
      variantById.set(String(variant.id).trim(), { product: mappedProduct, variant: mappedVariant })
    }

    for (const offerMapping of offerMappings) {
      const offerId = offerMapping.offer?.offerId
      if (!offerId) continue

      const target = variantById.get(offerId)
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
        yandexmarket_category: {
          "marketCategoryId": 69732932
        },
        medusa_categories: [
          "pcat_01KMJ0TG4ZR16AD7DKJPNADYRY"
        ],
        fields: [
          {
            from: "id",
            to: "offerId",
          },
          {
            from: "combinedName",
            to: "name",
          },
          {
            from: "product.description",
            to: "description",
          },
          {
            from: "prices.0.amount",
            to: "basicPrice.value",
          },
          {
            from: "prices.0.currency_code",
            to: "basicPrice.currencyId",
            transform: {
              name: "mapValue" as const,
              args: {
                map: {
                  rub: "RUR",
                  rur: "RUR",
                  usd: "USD",
                  eur: "EUR",
                },
                default: "RUR",
              },
            },
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
          {
            from: "product.metadata.vendor",
            to: "vendor"
          },
          {
            from: "images",
            to: "pictures",
            default: []
          },
          {
            from: "attributes",
            to: "parameterValues",
            default: [
              {
                parameterId: 25911090,
                value: "EU"
              },
              {
                parameterId: 25911110,
                value: "XS"
              },
              {
                parameterId: 14805991,
                value: "мужской"
              }
            ]
          }
        ]
      }
    }

    const schema = settings.medusaToMarketplaceMappingSchema
    const products = data.products ?? []
    const marketplaceProducts: any[] = []

    products.forEach((product) => {

      // TODO: uncomment when category mapping is implemented
      // const intersect = product.categories?.filter(value => schema.medusa_categories.includes(value.id)).map(c => c.id) || []
      // if (intersect.length == 0) return

      product.variants.forEach((variant) => {
        const { variants: _ignored, ...productWithoutVariants } = product

        const images = (variant.images && variant.images.length ? variant.images : product.images || []).map((img) => img.url)
        const combinedName = `${product?.title ?? ""} ${variant.title ?? ""}`.trim()
        const parameterValues = []

        const mergedForMapping = {
          product: productWithoutVariants,
          ...variant,
          images,
          combinedName: combinedName,
          parameterValues,
        }
        const offer = mapObject(mergedForMapping, schema) as any

        if (schema.yandexmarket_category) {
          offer.marketCategoryId = schema.yandexmarket_category.marketCategoryId
        }

        marketplaceProducts.push({ offer: offer })
      })
    })
    return {
      marketplaceProducts
    }
  }


  async getMarketplaceWarehouses(data: GetMarketplaceWarehousesInput): Promise<GetMarketplaceWarehousesOutput> {
    const { marketplace } = data
    const api = warehousesApi(marketplace.credentials)

    const limit = 30
    let pageToken: string | undefined
    const result: GetMarketplaceWarehousesOutput = []

    do {
      const response = await api.getPagedWarehouses(
        withBusinessId(marketplace.credentials, {
          pageToken,
          limit,
          getPagedWarehousesRequest: {
            campaignIds: [Number(marketplace.credentials.campaign_id)],
          } as any
        })
      )

      const warehouses = response.data?.result?.warehouses ?? []

      result.push(
        ...warehouses.map((wh) => ({
          id: String(wh.id ?? ""),
          name: wh.name ?? "",
        }))
      )

      pageToken = response.data?.result?.paging?.nextPageToken ?? undefined
    } while (pageToken)

    return result
  }

  async getMarketplaceOrderTypes(data: GetMarketplaceOrderTypesInput): Promise<GetMarketplaceOrderTypesOutput> {
    return Object.values(ORDER_TYPES) as string[]
  }

  async getMarketplaceOrders(data: GetMarketplaceOrdersInput): Promise<GetMarketplaceOrdersOutput> {
    const { marketplace, orderType } = data
    const credentials = marketplace.credentials as MarketplaceYandexMarketCredentialsType
    const campaignId = Number(credentials.campaign_id)
    const businessId = Number(credentials.business_id)

    const limit = 50
    let pageToken: string | undefined
    const orders: BusinessOrderDTO[] = []

    switch (orderType) {
      case ORDER_TYPES[0]: {    // "DBS" 
        const api = dbsApi(credentials)
        do {
          const response = await api.getBusinessOrders({
            businessId,
            pageToken,
            limit,
            getBusinessOrdersRequest: {
              programTypes: [ORDER_TYPES[0]],
              campaignIds: [campaignId],
              fake: true, // FOR TESTING
            } as any,
          })
          orders.push(...(response.data?.orders ?? []))
          pageToken = response.data?.paging?.nextPageToken ?? undefined
        } while (pageToken)
        break
      }

      default:
        return []
    }

    return orders as unknown as GetMarketplaceOrdersOutput
  }

  async mapToMedusaOrders(data: MapToMedusaOrdersInput): Promise<MapToMedusaOrdersOutput> {
    const { container, marketplace, marketplaceOrders } = data

    const ymOrders = marketplaceOrders as unknown as BusinessOrderDTO[]

    const MedusaOrders = ymOrders.map(order => {

      const address = order.delivery.courier?.address

      const mapOrder: MapToMedusaOrdersOutput[number] = {
        sales_channel_id: marketplace.sales_channel_id!,
        email: "ym_customer_" + order.orderId + "@generated.com",
        shipping_address: {
          address_1: address?.street + ", " + address?.house,
          city: address?.city ?? "",
          postal_code: address?.postcode ?? "",
          first_name: "YM",
          last_name: "Customer"
        },
        items: (order.items ?? [])
          .map((item) => ({
            title: item.offerName,
            quantity: Number(item.count ?? 0),
            unit_price: item.prices?.payment?.value ?? 0,
            variant_sku: item.offerId,
          }))
          .filter((i) => i.quantity > 0 && i.variant_sku),
        marketplace_order: {
          order_id: String(order.orderId),
          marketplace_id: marketplace.id,
          status: String(order.status),
          type: order.programType as string,
          data: order as unknown as Record<string, unknown>,
        },
      }
      console.log(mapOrder.marketplace_order.type);
      return mapOrder
    })

    return MedusaOrders as MapToMedusaOrdersOutput
  }

}
