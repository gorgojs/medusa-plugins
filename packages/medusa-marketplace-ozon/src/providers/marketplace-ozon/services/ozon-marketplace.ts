import { AbstractMarketplaceProvider } from "@gorgo/medusa-marketplace/modules/marketplace/utils"
import { V3ImportProductsRequestItem } from "../../../lib/ozon-seller-api"
import { productApi, withAuth } from "../../../lib/ozon-client"
import { MedusaContainer } from "@medusajs/framework"
import {
  ExportProductsInput,
  ExportProductsOutput,
  GetProductsInput,
  GetProductsOutput,
  GetMarketplaceProductsInput,
  GetMarketplaceProductsOutput,
  MapToMedusaProductsInput,
  MapToMedusaProductsOutput,
  ImportProductsInput,
  ImportProductsOutput,
  MapToMarketplaceProductsInput,
  MapToMarketplaceProductsOutput
} from "@gorgo/medusa-marketplace/types"
import {
  importMarketplaceProductsWorkflow,
  exportMarketplaceProductsWorkflow
} from "../../../workflows/provider"
import { mapObject } from "../utils"
import { MarketplaceOzonCredentialsType } from "../types"

export class OzonMarketplaceProvider extends AbstractMarketplaceProvider {
  static identifier = "ozon"

  async getProducts(data: GetProductsInput): Promise<GetProductsOutput> {
    const { container, ...input } = data

    const query = await container.resolve("query")

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
        "variants.images.*",
        "variants.options.*",
        "variants.inventory_items.*",
        "variants.prices.*",
      ],
      filters: {
        id: input.ids?.length ? input.ids : undefined,
        status: "published"
      },
    })

    return products
  }

  async importProducts(data: ImportProductsInput): Promise<ImportProductsOutput> {
    const { container, marketplace, ...input } = data

    const { result } = await importMarketplaceProductsWorkflow(container).run({ input: { credentials: marketplace.credentials as MarketplaceOzonCredentialsType, ...input } })

    return result
  }

  async exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput> {
    const { container, marketplace, marketplaceProducts } = data
    const { result } = await exportMarketplaceProductsWorkflow(container).run({
      input: {
        credentials: marketplace.credentials as MarketplaceOzonCredentialsType,
        create: marketplaceProducts as V3ImportProductsRequestItem[]
      }
    })

    return result
  }

  async getMarketplaceProducts(data: GetMarketplaceProductsInput): Promise<GetMarketplaceProductsOutput> {
    const { container, ...input } = data

    const query = await container.resolve("query")

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
        "variants.prices.*",
      ],
      filters: {
        id: input.ids?.length ? input.ids : undefined,
        status: "published",
      },
    })

    return products
  }

  async mapToMarketplaceProducts(data: MapToMarketplaceProductsInput): Promise<MapToMarketplaceProductsOutput> {
    const marketplace = data.marketplace
    const rawSettings = marketplace?.settings || {}
    const mapping: Record<string, any> = rawSettings.mapping || {}

    const marketplaceProducts: V3ImportProductsRequestItem[] = []
    const products = data.products

    for (const ruleId of Object.keys(mapping)) {
      const mappingRule = mapping[ruleId]

      if (!mappingRule) continue

      const medusaCategories: string[] = mappingRule.medusa_categories || []
      const dbFields = mappingRule.fields || []
      const ozonCategory = mappingRule.ozon_category

      const descriptionCategoryId = ozonCategory.children?.[0]
      const typeId = descriptionCategoryId.children?.[0]
      if (!descriptionCategoryId || !typeId) continue

      const schema = {
        fields: [
          {
            isRequired: true,
            "from": "id",
            "to": "offer_id"
          },
          {
            isRequired: true,
            from: "combined_name",
            to: "name",
          },
          {
            isRequired: true,
            from: "description",
            to: "description",
          },
          {
            isRequired: true,
            from: "prices.0.amount",
            to: "price",
          },
          {
            isRequired: true,
            from: "prices.1.amount",
            to: "old_price",
          },
          {
            isRequired: true,
            from: "prices.currency_code",
            to: "currency_code",
            default: "RUB",
          },
          {
            isRequired: true,
            from: "barcode",
            to: "barcode",
          },
          {
            isRequired: true,
            from: "dimension_unit",
            to: "dimension_unit",
            default: "mm",
          },
          {
            isRequired: true,
            from: "weight_unit",
            to: "weight_unit",
            default: "g",
          },
          {
            isRequired: true,
            from: "weight",
            to: "weight",
            default: 100,
          },
          {
            isRequired: true,
            from: "length",
            to: "depth",
            default: 10,
          },
          {
            isRequired: true,
            from: "height",
            to: "height",
            default: 10,
          },
          {
            isRequired: true,
            from: "width",
            to: "width",
            default: 10,
          },
          {
            isRequired: true,
            from: "images",
            to: "images",
            default: [],
          },
          {
            isRequired: true,
            from: "vat",
            to: "vat",
            default: "0",
          },
          ...dbFields,
        ],
      }

      products.forEach((product) => {
        // TODO: use when close condition for multiple categories
        const productCategories = product.categories || []
        const intersect = productCategories.filter((c) => medusaCategories.includes(c.id)).map((c) => c.id)

        if (!intersect.length) {
          return
        }

        product.variants.forEach((variant) => {
          const { variants: _ignored, ...productWithoutVariants } = product
          const images = (variant.images && variant.images.length ? variant.images : product.images || []).map((img) => img.url)
          const mergedProductVariant = {
            product: productWithoutVariants,
            ...variant,
            images,
          }

          const combinedName = `${mergedProductVariant.product?.title ?? ""} ${variant.title ?? ""}`.trim()

          const mergedForMapping = {
            ...mergedProductVariant,
            combined_name: combinedName,
          }
          const ozonItem = mapObject(
            mergedForMapping,
            schema
          ) as V3ImportProductsRequestItem

          ozonItem.price = String(ozonItem.price ?? 0)
          ozonItem.old_price = String(ozonItem.old_price ?? ozonItem.price)

          ozonItem.type_id = typeId.type_id
          ozonItem.description_category_id = descriptionCategoryId.description_category_id
          marketplaceProducts.push(ozonItem)
        })
      })
    }

    return { create: marketplaceProducts }
  }

  async mapToMedusaProducts(input: MapToMedusaProductsInput): Promise<MapToMedusaProductsOutput> {
    const settings = {
      "marketplaceToMedusaMappingSchema": {
        "fields": [
          {
            "from": "id",
            "to": "variant.metadata.ozon_product_id",
            "default": [],
          },
          {
            "from": "type_id",
            "to": "product.metadata.ozon_type_id",
            "default": [],
          },
          {
            "from": "barcodes",
            "to": "variant.metadata.ozon_barcodes",
            "default": [],
          },
        ]
      }
    }

    const schema = settings.marketplaceToMedusaMappingSchema
    const products = input.marketplaceProducts
    const limit = 100

    if (!products.length) return []

    const variantByOfferId = new Map<string, { product: any; variant: any }>()
    for (const product of products as any[]) {
      for (const variant of product.variants ?? []) {
        variantByOfferId.set(variant.id, { product, variant })
      }
    }

    const offerIdsToFetch = Array.from(variantByOfferId.keys())
    if (!offerIdsToFetch.length) {
      return products as any
    }

    let last_id = ""
    let fetched = 0

    do {
      const ozonAttributesResponse = await productApi.productAPIGetProductAttributesV4(
        withAuth(input.marketplace.credentials as MarketplaceOzonCredentialsType, {
          productv4GetProductAttributesV4Request: {
            filter: {
              offer_id: offerIdsToFetch,
              visibility: "ALL",
            },
            last_id,
            limit,
          },
        })
      )

      const ozonCards = ozonAttributesResponse.data?.result ?? []
      last_id = (ozonAttributesResponse.data?.last_id as string) ?? ""
      fetched = ozonCards.length

      if (!ozonCards.length) continue

      for (const ozonCard of ozonCards as any[]) {
        const offerId = String(ozonCard?.offer_id ?? "")
        if (!offerId) continue

        const target = variantByOfferId.get(offerId)
        if (!target) continue

        const mapped = mapObject(ozonCard, schema) as any

        const mappedVariantMetadata = mapped?.variant?.metadata ?? null
        const mappedProductMetadata = mapped?.product?.metadata ?? null

        if (mappedVariantMetadata) {
          target.variant.metadata = {
            ...(target.variant.metadata ?? {}),
            ...mappedVariantMetadata,
          }
        }

        if (mappedProductMetadata) {
          target.product.metadata = {
            ...(target.product.metadata ?? {}),
            ...mappedProductMetadata,
          }
        }
      }
    } while (fetched === limit && last_id)

    return products

  }

}
