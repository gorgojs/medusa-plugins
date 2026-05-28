# Productv2ProductsStocksRequestStock


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [default to undefined]
**stock** | **number** | Количество товара в наличии без учёта зарезервированных товаров. | [default to undefined]
**warehouse_id** | **number** | Идентификатор склада, полученный из метода [/v1/warehouse/list](#operation/WarehouseAPI_WarehouseList). | [default to undefined]

## Example

```typescript
import { Productv2ProductsStocksRequestStock } from './api';

const instance: Productv2ProductsStocksRequestStock = {
    offer_id,
    product_id,
    stock,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
