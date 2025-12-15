import { AbstractMarketplaceProvider } from "@gorgo/medusa-marketplace/modules/marketplace/utils"
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
  exportProductsMarketplaceWorkflow,
  importProductsMarketplaceWorkflow
} from "../../../workflows/provider"
import {
  ContentV2CardsUpdatePostRequestInner,
  ContentV2CardsUploadAddPostRequest,
  ContentV2CardsUploadAddPostRequestCardsToAddInner,
  ContentV2CardsUploadPostRequestInner
} from "../../../lib/wildberries-products-client"
import { MappingSchema } from "../types"

export class OzonMarketplaceProvider extends AbstractMarketplaceProvider {
  static identifier = "wildberries"

  async exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput> {
    const { container, ...input } = data
    const { result } = await exportProductsMarketplaceWorkflow(container).run({ input })

    return result
  }

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
    const { container, ...input } = data

    const { result } = await importProductsMarketplaceWorkflow(container).run({ input })

    return result
  }

  async mapProducts(data: MapProductsInput): Promise<MapProductsOutput> {
    const { container, products } = data

    const logger = await container!.resolve("logger")

    const dummyMap = (vendorCode: string, title: string, sizeSkus?: any) => {
      return {
        vendorCode: vendorCode,
        title: title,
        sizes: [
          {
            techSize: "A",
            wbSize: "1",
            skus: sizeSkus
          }
        ]
      }
    }

    let productsToCreate: ContentV2CardsUploadPostRequestInner[] = []
    let productCardsToUpdate: ContentV2CardsUpdatePostRequestInner[] = []
    let productCardsToMerge: ContentV2CardsUploadAddPostRequest[] = []

    products.forEach(product => {
      const imtID = product.metadata?.wildberries_imtID
      if (imtID == null) { // to create
        let variatnsToCreate
        if (product.variant.length > MAX_VARIANTS_TO_CREATE) {
          variatnsToCreate = product.variants.slice(0, MAX_VARIANTS_TO_CREATE).map(
            variant => dummyMap(variant.sku, product.title + variant.title)
          )
          // TODO: merge variants.slice(MAX_VARIANTS_TO_CREATE)
          // how to get imtID?
        } else {
          variatnsToCreate = product.variants.map(variant => dummyMap(variant.sku, product.title + variant.title))
        }
        productsToCreate.push({
          subjectID: 105,
          variants: variatnsToCreate
        })
      } else {
        let variantsToMerge: Array<ContentV2CardsUploadAddPostRequestCardsToAddInner> = []

        product.variants.forEach(variant => {
          const nmID = variant.metadata?.wildberries_nmID
          if (nmID == null) { // to merge
            variantsToMerge.push(dummyMap(variant.sku, product.title + variant.title))
          } else { // to update 
            const sizeSkus = variant.metadata?.wildberries_sizeSkus
            if (sizeSkus == null) {
              logger.error(`Failed to update variant with nmID=${nmID} (vendorCode=${variant.sku}): sizeSkus is none`)
            } else {
              productCardsToUpdate.push({
                nmID: nmID,
                ...dummyMap(variant.sku, product.title + variant.title, sizeSkus)
              })
            }
          }
        })

        if (variantsToMerge.length) {
          productCardsToMerge.push({
            imtID: imtID,
            cardsToAdd: variantsToMerge
          })
        }
      }
    })

    const result = {
      create: productsToCreate,
      update: productCardsToUpdate,
      merge: productCardsToMerge
    }

    return result
  }

  async getMarketplaceMappingSchema(): Promise<MappingSchema[]> {
    const schema = [
      {
        "ozon_category": {
          "description_category_id": 200001517,
          "type_id": 93228
        },
        "medusa_categories": [
          "pcat_01KBHXW40P2WV8P2GRK1FA96EH"
        ],
        "fields": [
          {
            "from": "id",
            "to": "offer_id"
          },
          {
            from: "combined_name",
            to: "name",
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
            default: "RUB"
          },
          {
            "from": "sku",
            "to": "barcode"
          },
          {
            "from": "dimension_unit",
            "to": "dimension_unit",
            default: "mm"
          },
          {
            "from": "weight_unit",
            "to": "weight_unit",
            default: "g"
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
            "default": [
              { "id": 8229, "values": [{ "value": "Термофутболка" }] },
              { "id": 9163, "values": [{ "value": "Мужской" }] },
              { "id": 31, "values": [{ "value": "Нет бренда" }] },
              { "id": 8292, "values": [{ "value": "prod_01KBHXW41JG2DVDQXQESNFRT85" }] }
            ],
            "children": [
              {
                "from": "options.option_id.opt_01KC3R4AH6EYX1SKZ1MK074875",
                "to": "4295",
                "default": ["48", "54", "58"]
              },
              {
                "from": "options.option_id.opt_01KC3R4AH64XYH46RRWQ49S1VB",
                "to": "10096",
                "default": ["белый"]
              },
            ],
          }
        ]
      }
    ] as MappingSchema[]

    return schema
  }
}
