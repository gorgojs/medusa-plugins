import { V3ImportProductsRequestItem } from "../../../lib/ozon-seller-api"
import {
  ProductDTO,
} from "@medusajs/framework/types"
import MarketplaceModuleService from "../../../modules/marketplace/service"
import { MARKETPLACE_MODULE } from "../../../modules/marketplace"
import { MedusaContainer } from "@medusajs/framework"
import { mapObject } from "../../marketplace/utils"

export const mapProductsToMarketplace = async (products: ProductDTO[], container: MedusaContainer) => {
  // This is a mock implementation. Replace with actual mapping logic.
  const service = container.resolve<MarketplaceModuleService>(MARKETPLACE_MODULE)
  const mappingSchemas = await service.getMarketplaceMappingSchema()
  let marketplaceProducts: V3ImportProductsRequestItem[] = []

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


export const mapProductsToMedusa = (marketplaceProducts: V3ImportProductsRequestItem[]): ProductDTO[] => {
  // This is a mock implementation. Replace with actual mapping logic.
  const products = [] as ProductDTO[]
  // Save Ozon ids to product/product.variant metadata
  return products
}
