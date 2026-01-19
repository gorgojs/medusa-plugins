import { AbstractMarketplaceProvider } from "@gorgo/medusa-marketplace/modules/marketplace/utils"
import { V3ImportProductsRequestItem } from "../../../lib/ozon-seller-api"
import {
  ProductDTO,
} from "@medusajs/framework/types"
import { MedusaContainer } from "@medusajs/framework"
import {
  ExportProductsInput,
  ExportProductsOutput,
  GetProductsInput,
  GetProductsOutput,
  ImportProductsInput,
  ImportProductsOutput,
  MapProductsInput,
  MapProductsOutput,
  MAX_VARIANTS_TO_CREATE,
} from "@gorgo/medusa-marketplace/modules/marketplace/types"
import {
  importMarketplaceProductsWorkflow,
  exportMarketplaceProductsWorkflow
} from "../../../workflows/provider"
import { MappingSchema } from "../types"
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
    const { container, credentials, ...input } = data

    const { result } = await importMarketplaceProductsWorkflow(container).run({ input: { credentials } })

    return result
  }

  async exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput> {
    const { container, marketplaceProducts, credentials } = data
    const { result } = await exportMarketplaceProductsWorkflow(container).run({
      input: {
        credentials,
        create: marketplaceProducts
      }
    })

    return result
  }

  // getMarketplaceToMedusaMappingSchema(container?: MedusaContainer): MappingSchema {
  //   const marketplaceToMedusaMappingSchema = {
  //     "fields": [
  //       {
  //         "from": "nmId",
  //         "to": "metadata.ozon_nmID"
  //       },
  //       ...
  //     ]
  //   }
  //   return marketplaceToMedusaMappingSchema
  // }

  async mapToMarketplaceProducts(data, container?: MedusaContainer) {
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


  async mapToMedusaProducts(marketplaceProducts: V3ImportProductsRequestItem[]): Promise<ProductDTO[]> {
    // This is a mock implementation. Replace with actual mapping logic.
    const products = [] as ProductDTO[]
    // Save Ozon ids to product/product.variant metadata
    return products
  }

}
