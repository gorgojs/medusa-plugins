# V4GetProductInfoStocksResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Указатель для выборки следующих данных. | [optional] [default to undefined]
**items** | [**Array&lt;V4GetProductInfoStocksResponseItem&gt;**](V4GetProductInfoStocksResponseItem.md) | Информация о товарах. | [optional] [default to undefined]
**total** | **number** | Количество уникальных товаров, для которых выводится информация об остатках. | [optional] [default to undefined]

## Example

```typescript
import { V4GetProductInfoStocksResponse } from './api';

const instance: V4GetProductInfoStocksResponse = {
    cursor,
    items,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
