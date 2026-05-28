# Productv2ProductsStocksResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Array&lt;Productv2ProductsStocksResponseError&gt;**](Productv2ProductsStocksResponseError.md) | Массив ошибок, которые возникли при обработке запроса. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [optional] [default to undefined]
**updated** | **boolean** | Если запрос выполнен успешно и остатки обновлены — &#x60;true&#x60;. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]

## Example

```typescript
import { Productv2ProductsStocksResponseResult } from './api';

const instance: Productv2ProductsStocksResponseResult = {
    errors,
    offer_id,
    product_id,
    updated,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
