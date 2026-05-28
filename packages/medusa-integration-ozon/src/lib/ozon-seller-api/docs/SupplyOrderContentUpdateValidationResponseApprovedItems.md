# SupplyOrderContentUpdateValidationResponseApprovedItems


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**barcode** | **string** | Штрихкод товара. | [optional] [default to undefined]
**item_link** | **string** | Ссылка на товар. | [optional] [default to undefined]
**name** | **string** | Название товара. | [optional] [default to undefined]
**offer_id** | **string** | Артикул товара. | [optional] [default to undefined]
**origin_quantity** | **number** | Исходное количество товара. | [optional] [default to undefined]
**origin_total_volume_in_litres** | **number** | Исходное количество товара в литрах. | [optional] [default to undefined]
**quant** | **number** | Количество товаров в одной упаковке. | [optional] [default to undefined]
**quantity** | **number** | Количество товара. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**sku_quantity_limit** | **number** | Ограничение на количество товаров в одной упаковке. | [optional] [default to undefined]
**total_volume_in_litres** | **number** | Объём всех товаров в литрах. | [optional] [default to undefined]

## Example

```typescript
import { SupplyOrderContentUpdateValidationResponseApprovedItems } from './api';

const instance: SupplyOrderContentUpdateValidationResponseApprovedItems = {
    barcode,
    item_link,
    name,
    offer_id,
    origin_quantity,
    origin_total_volume_in_litres,
    quant,
    quantity,
    sku,
    sku_quantity_limit,
    total_volume_in_litres,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
