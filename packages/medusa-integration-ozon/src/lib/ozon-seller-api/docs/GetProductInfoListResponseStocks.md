# GetProductInfoListResponseStocks

Информация об остатках товара.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_stock** | **boolean** | &#x60;true&#x60;, если есть остаток на складах.  | [optional] [default to undefined]
**stocks** | [**Array&lt;GetProductInfoListResponseStocksStock&gt;**](GetProductInfoListResponseStocksStock.md) | Статус остатков товара. | [optional] [default to undefined]

## Example

```typescript
import { GetProductInfoListResponseStocks } from './api';

const instance: GetProductInfoListResponseStocks = {
    has_stock,
    stocks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
