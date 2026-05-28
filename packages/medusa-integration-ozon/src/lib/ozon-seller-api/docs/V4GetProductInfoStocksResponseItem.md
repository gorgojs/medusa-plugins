# V4GetProductInfoStocksResponseItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [optional] [default to undefined]
**stocks** | [**Array&lt;GetProductInfoStocksResponseStock&gt;**](GetProductInfoStocksResponseStock.md) | Информация об остатках. | [optional] [default to undefined]

## Example

```typescript
import { V4GetProductInfoStocksResponseItem } from './api';

const instance: V4GetProductInfoStocksResponseItem = {
    offer_id,
    product_id,
    stocks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
