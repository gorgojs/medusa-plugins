# V2GetProductInfoStocksByWarehouseFbsResponseV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Указатель для выборки следующих данных. | [optional] [default to undefined]
**has_next** | **boolean** | &#x60;true&#x60;, если в ответе вернули не все товары.  | [optional] [default to undefined]
**products** | [**Array&lt;V2GetProductInfoStocksByWarehouseFbsResponseV2Product&gt;**](V2GetProductInfoStocksByWarehouseFbsResponseV2Product.md) | Остатки товаров. | [optional] [default to undefined]

## Example

```typescript
import { V2GetProductInfoStocksByWarehouseFbsResponseV2 } from './api';

const instance: V2GetProductInfoStocksByWarehouseFbsResponseV2 = {
    cursor,
    has_next,
    products,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
