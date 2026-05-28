# V2GetProductInfoStocksByWarehouseFbsResponseV2Product


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**free_stock** | **number** | Количество доступных для продажи товаров. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**present** | **number** | Общее количество товара на складе. | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**reserved** | **number** | Количество зарезервированных товаров на складе. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]
**warehouse_name** | **string** | Название склада. | [optional] [default to undefined]

## Example

```typescript
import { V2GetProductInfoStocksByWarehouseFbsResponseV2Product } from './api';

const instance: V2GetProductInfoStocksByWarehouseFbsResponseV2Product = {
    free_stock,
    offer_id,
    present,
    product_id,
    reserved,
    sku,
    warehouse_id,
    warehouse_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
