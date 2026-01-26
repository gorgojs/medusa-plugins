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
  GetMarkletplaceProductsOutput,
  MapToMedusaProductsInput,
  MapToMedusaProductsOutput,
  ImportProductsInput,
  ImportProductsOutput,
  MapToMarketplaceProductsInput,
  MapToMarketplaceProductsOutput
} from "@gorgo/medusa-marketplace/modules/marketplace/types"
import {
  importMarketplaceProductsWorkflow,
  exportMarketplaceProductsWorkflow
} from "../../../workflows/provider"
import { mapObject } from "../utils"

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

    const { result } = await importMarketplaceProductsWorkflow(container).run({ input: { credentials: marketplace.credentials, ...input } })

    return result
  }

  async exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput> {
    const { container, marketplace, marketplaceProducts } = data
    const { result } = await exportMarketplaceProductsWorkflow(container).run({
      input: {
        credentials: marketplace.credentials,
        create: marketplaceProducts
      }
    })

    return result
  }

  async getMarketplaceProducts(data: GetMarketplaceProductsInput): Promise<GetMarkletplaceProductsOutput> {
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

  async mapToMarketplaceProducts(data: MapToMarketplaceProductsInput, container?: MedusaContainer): Promise<MapToMarketplaceProductsOutput[]> {
    // This is a mock implementation. Replace with actual mapping logic.
    const settings = {
      "medusaToMarketplaceMappingSchema": {
        "ozon_category": {
          "description_category_id": 200001517,
          "type_id": 93228
        },
        "medusa_categories": [
          "pcat_01KCP70X23QSZN9QS0CJCF9R3R"
        ],
        "fields": [
          {
            "from": "id",
            "to": "offer_id"
          },
          {
            "from": "combined_name",
            "to": "name"
          },
          {
            "from": "description",
            "to": "description"
          },
          {
            "from": "prices.0.amount",
            "to": "price"
          },
          {
            "from": "prices.1.amount",
            "to": "old_price"
          },
          {
            "from": "prices.currency_code",
            "to": "currency_code",
            "default": "RUB"
          },
          {
            "from": "sku",
            "to": "barcode"
          },
          {
            "from": "dimension_unit",
            "to": "dimension_unit",
            "default": "mm"
          },
          {
            "from": "weight_unit",
            "to": "weight_unit",
            "default": "g"
          },
          {
            "from": "weight",
            "to": "weight",
            "default": 100
          },
          {
            "from": "length",
            "to": "depth",
            "default": 10
          },
          {
            "from": "height",
            "to": "height",
            "default": 10
          },
          {
            "from": "width",
            "to": "width",
            "default": 10
          },
          {
            "from": "images",
            "to": "images",
            "default": []
          },
          {
            "from": "vat",
            "to": "vat",
            "default": "0"
          },
          {
            "from": "attributes",
            "to": "attributes",
            // "when": { "path": "categories", "contain": "pcat_2332r23" },
            "default": [
              {
                "id": 8229,
                "values": [
                  {
                    "value": "Термофутболка"
                  }
                ]
              },
              {
                "id": 9163,
                "values": [
                  {
                    "value": "Мужской"
                  }
                ]
              },
              {
                "id": 31,
                "values": [
                  {
                    "value": "Нет бренда"
                  }
                ]
              },
              {
                "id": 8292,
                "values": [
                  {
                    "value": "prod_01KBHXW41JG2DVDQXQESNFRT85"
                  }
                ]
              }
            ]
          },
          {
            "from": "attributes",
            "to": "attributes",
            "optionRules": {
              "opt_01KC3R4AH6EYX1SKZ1MK074875": {
                "attributeId": 4295,
                "default": [
                  "48",
                  "54",
                  "58"
                ]
              },
              "opt_01KC3R4AH64XYH46RRWQ49S1VB": {
                "attributeId": 10096,
                "default": [
                  "белый"
                ]
              }
            }
          }
        ]
      }
    }

    let marketplaceProducts: V3ImportProductsRequestItem[] = []
    const products = data.products
    const schema = settings.medusaToMarketplaceMappingSchema

    products.forEach((product) => {
      // TODO: use when close condition for multiple categories
      const intersect = product.categories?.filter(value => schema.medusa_categories.includes(value.id)).map(c => c.id) || []
      if (intersect.length == 0) return

      product.variants.forEach(variant => {
        const { variants: _ignored, ...productWithoutVariants } = product
        const images = (variant.images && variant.images.length ? variant.images : product.images || []).map((img) => img.url)
        const mergedProductVariant = {
          product: productWithoutVariants,
          ...variant,
          images,
        }

        const combinedName = `${mergedProductVariant.product?.title ?? ""} ${variant.title ?? ""} ${mergedProductVariant.product?.description ?? ""}`.trim()

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

        if (schema.ozon_category) {
          ozonItem.type_id = schema.ozon_category.type_id
          ozonItem.description_category_id = schema.ozon_category.description_category_id
        }

        marketplaceProducts.push(ozonItem)
      })
    })

    return marketplaceProducts
  }

  async mapToMedusaProducts(input: MapToMedusaProductsInput): Promise<MapToMedusaProductsOutput[]> {
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
        withAuth(input.marketplace.credentials, {
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
