import { UpdateOfferMappingDTO } from "./yandex-market-client";
import {
  ProductDTO,
} from "@medusajs/framework/types"

export const mapProductsToMarketplace = (products: ProductDTO[]): UpdateOfferMappingDTO[] => {
  // TODO: This is a mock implementation. Replace with actual mapping logic.
  const marketplaceProducts: UpdateOfferMappingDTO[] = [
    {
      "offer": {
        "offerId": "string",
        "name": "Ударная дрель Makita HP1630, 710 Вт",
        "marketCategoryId": 0,
        "category": "string",
        "pictures": [
          "string"
        ],
        "videos": [
          "string"
        ],
        "manuals": [
          {
            "url": "string",
            "title": "string"
          }
        ],
        "vendor": "LEVENHUK",
        "description": "string",
        "weightDimensions": {
          "length": 65.55,
          "width": 50.7,
          "height": 20,
          "weight": 1.001
        },
        "vendorCode": "VNDR-0005A",
        "shelfLife": {
          "timePeriod": 0,
          "timeUnit": "HOUR",
          "comment": "string"
        },
        "lifeTime": {
          "timePeriod": 0,
          "timeUnit": "HOUR",
          "comment": "string"
        },
        "guaranteePeriod": {
          "timePeriod": 0,
          "timeUnit": "HOUR",
          "comment": "string"
        },
        "customsCommodityCode": "8517610008",
        "commodityCodes": [
          {
            "code": "string",
            "type": "CUSTOMS_COMMODITY_CODE"
          }
        ],
        "boxCount": 0,
        "condition": {
          "type": "PREOWNED",
          "quality": "PERFECT",
          "reason": "string"
        },
        "type": "DEFAULT",
        "downloadable": false,
        "adult": false,
        "age": {
          "value": 0,
          "ageUnit": "YEAR"
        },
        "params": [
          {
            "name": "Wi-Fi",
            "value": "есть"
          }
        ],
        "parameterValues": [
          {
            "parameterId": 0,
            "unitId": 0,
            "valueId": 0,
            "value": "string"
          }
        ],
        "basicPrice": {
          "value": 0,
          "currencyId": "RUR",
          "discountBase": 0
        },
        "purchasePrice": {
          "value": 0,
          "currencyId": "RUR"
        },
        "additionalExpenses": {
          "value": 0,
          "currencyId": "RUR"
        },
        "firstVideoAsCover": false,
      },
      "mapping": {
        "marketSku": 0
      }
    }
  ]

  return marketplaceProducts
}

