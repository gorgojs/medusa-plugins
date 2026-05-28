# ProductInfoWarehouseStocksResponseStocks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**free_stock** | **number** | Количество товара на складе, которое доступно для заказа. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — &#x60;offer_id&#x60;. | [optional] [default to undefined]
**present** | **number** | Общее количество товара на складе. | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [optional] [default to undefined]
**reserved** | **number** | Количество зарезервированных товаров на складе. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**updated_at** | **string** | Дата последнего обновления товара. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]

## Example

```typescript
import { ProductInfoWarehouseStocksResponseStocks } from './api';

const instance: ProductInfoWarehouseStocksResponseStocks = {
    free_stock,
    offer_id,
    present,
    product_id,
    reserved,
    sku,
    updated_at,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
