# Productsv1GetProductInfoStocksByWarehouseFbsResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**present** | **number** | Общее количество товара на складе. | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**reserved** | **number** | Количество зарезервированных товаров на складе. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]
**warehouse_name** | **string** | Название склада. | [optional] [default to undefined]

## Example

```typescript
import { Productsv1GetProductInfoStocksByWarehouseFbsResponseResult } from './api';

const instance: Productsv1GetProductInfoStocksByWarehouseFbsResponseResult = {
    sku,
    offer_id,
    present,
    product_id,
    reserved,
    warehouse_id,
    warehouse_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
