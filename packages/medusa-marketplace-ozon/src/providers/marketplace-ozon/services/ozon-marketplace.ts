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
  importMarketplaceProductsWorkflow
} from "../../../workflows/provider"
import { MappingSchema, } from "../types"
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
    const { container, ...input } = data

    const { result } = await importMarketplaceProductsWorkflow(container).run({ input })

    return result
  }

  async exportProducts(data: ImportProductsInput): Promise<ImportProductsOutput> {

    return true
  }

  async mapToMarketplaceProducts(data, container: MedusaContainer) {
    // This is a mock implementation. Replace with actual mapping logic.
    const mappingSchemas = await this.getMarketplaceMappingSchema()
    let marketplaceProducts: V3ImportProductsRequestItem[] = []
    const products = data.products
    console.log()
    mappingSchemas.forEach((schema) => {
      products.forEach((product) => {
        // TODO: what to do with multiple categories?
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
    })
    return marketplaceProducts
  
    /*[
    {
      "id": "prod_01KC3R4AH5YH8KCWPFB4AJYTP9",
      "title": "Medusa T-Shirt",
      "handle": "t-shirt",
      "subtitle": null,
      "description": "Reimagine the feeling of a classic T-shirt. With our cotton T-shirts, everyday essentials no longer have to be ordinary.",
      "is_giftcard": false,
      "status": "published",
      "thumbnail": "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",
      "weight": "400",
      "length": null,
      "height": null,
      "width": null,
      "origin_country": null,
      "hs_code": null,
      "mid_code": null,
      "material": null,
      "discountable": true,
      "external_id": null,
      "metadata": null,
      "type_id": null,
      "type": null,
      "collection_id": null,
      "collection": null,
      "created_at": "2025-12-10T09:05:29.640Z",
      "updated_at": "2025-12-10T09:05:29.640Z",
      "deleted_at": null,
      "variants": [
        {
          "id": "variant_01KC3R4AJDZ42WBS17BF2HJSEM",
          "title": "S / White",
          "sku": "SHIRT-S-WHITE",
          "barcode": null,
          "ean": null,
          "upc": null,
          "allow_backorder": false,
          "manage_inventory": true,
          "hs_code": null,
          "origin_country": null,
          "mid_code": null,
          "material": null,
          "weight": null,
          "length": null,
          "height": null,
          "width": null,
          "metadata": null,
          "variant_rank": 0,
          "thumbnail": null,
          "product_id": "prod_01KC3R4AH5YH8KCWPFB4AJYTP9",
          "created_at": "2025-12-10T09:05:29.678Z",
          "updated_at": "2025-12-10T09:05:29.678Z",
          "deleted_at": null
        }
      ],
      "categories": [
        {
          "id": "pcat_01KC3R4AGX68TKF5Q4JQZ7KWRZ"
        }
      ]
    }
  ]
  */
  
    /*
      const marketplaceProducts: V3ImportProductsRequestItem[] = [
        {
          "offer_id": "THERMO-BLACK-LS-48-50-UNQ01",
          "name": "Термофутболка мужская базовая, длинный рукав, чёрная",
          "price": "2490",
          "old_price": "2990",
          "vat": "0",
          "currency_code": "RUB",
          "barcode": "4601234567898",
          "images": [
            "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-front.png"
          ],
          "primary_image": "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-front.png",
          "dimension_unit": "mm",
          "depth": 330,
          "width": 240,
          "height": 40,
          "weight_unit": "g",
          "weight": 280,
          "type_id": 93228,
          "description_category_id": 200001517,
          "attributes": [
            { "id": 8229, "values": [{ "value": "Термофутболка" }] },
            { "id": 4295, "values": [{ "value": "48" }, { "value": "50" }] },
            { "id": 9163, "values": [{ "value": "Мужской" }] },
            { "id": 10096, "values": [{ "value": "черный" }] },
            { "id": 31, "values": [{ "value": "Нет бренда" }] },
            { "id": 8292, "values": [{ "value": "thermo-tee-men-ls-2025" }] }
          ],
          "complex_attributes": []
        },
        {
          "offer_id": "THERMO-GRAY-LS-48-50-UNQ02",
          "name": "Термофутболка мужская базовая, длинный рукав, серая",
          "price": "2490",
          "old_price": "2990",
          "vat": "0",
          "currency_code": "RUB",
          "barcode": "4601234567899",
          "images": [
            "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-front.png"
          ],
          "primary_image": "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-front.png",
          "dimension_unit": "mm",
          "depth": 330,
          "width": 240,
          "height": 40,
          "weight_unit": "g",
          "weight": 280,
          "type_id": 93228,
          "description_category_id": 200001517,
          "attributes": [
            { "id": 8229, "values": [{ "value": "Термофутболка" }] },
            { "id": 4295, "values": [{ "value": "48" }, { "value": "50" }] },
            { "id": 9163, "values": [{ "value": "Мужской" }] },
            { "id": 10096, "values": [{ "value": "серый" }] },
            { "id": 31, "values": [{ "value": "Нет бренда" }] },
            { "id": 8292, "values": [{ "value": "thermo-tee-men-ls-2025" }] }
          ],
          "complex_attributes": []
        }
      ]
      */
  }
  
  
  async mapToMedusaProducts(marketplaceProducts: V3ImportProductsRequestItem[]): Promise<ProductDTO[]> {
    // This is a mock implementation. Replace with actual mapping logic.
    const products = [] as ProductDTO[]
    // Save Ozon ids to product/product.variant metadata
    return products
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
