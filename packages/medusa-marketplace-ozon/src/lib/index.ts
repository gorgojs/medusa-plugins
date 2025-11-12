import { V3ImportProductsRequestItem } from "./ozon-seller-api";
import {
  ProductDTO,
} from "@medusajs/framework/types"

export const mapProductsToMarketplace = (products: ProductDTO[]): V3ImportProductsRequestItem[] => {
  // This is a mock implementation. Replace with actual mapping logic.
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

  return marketplaceProducts
}
