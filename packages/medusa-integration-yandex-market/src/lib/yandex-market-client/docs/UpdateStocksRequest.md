# UpdateStocksRequest

Запрос на изменение информации по остаткам товаров.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skus** | [**Array&lt;UpdateStockDTO&gt;**](UpdateStockDTO.md) | Данные об остатках товаров.  В рамках одного запроса все значения &#x60;sku&#x60; должны быть уникальными. Не допускается передача двух объектов с одинаковым &#x60;sku&#x60;.  | [default to undefined]

## Example

```typescript
import { UpdateStocksRequest } from './api';

const instance: UpdateStocksRequest = {
    skus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
