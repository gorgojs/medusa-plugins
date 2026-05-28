# V1ProductInfoWarehouseStocksResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Указатель для выборки следующих данных. Если параметр пустой, данных больше нет. | [optional] [default to undefined]
**has_next** | **boolean** | Признак, что в ответе вернули не все товары: - &#x60;true&#x60; — сделайте повторный запрос с другим значением &#x60;cursor&#x60;, чтобы получить остальные значения; - &#x60;false&#x60; — ответ содержит все значения.  | [optional] [default to undefined]
**stocks** | [**Array&lt;ProductInfoWarehouseStocksResponseStocks&gt;**](ProductInfoWarehouseStocksResponseStocks.md) | Информация об остатках товара. | [optional] [default to undefined]

## Example

```typescript
import { V1ProductInfoWarehouseStocksResponse } from './api';

const instance: V1ProductInfoWarehouseStocksResponse = {
    cursor,
    has_next,
    stocks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
