# SellerApiProductV1ResponseResult

Результаты запроса.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_ids** | **Array&lt;number&gt;** | Список идентификаторов товаров, которые добавлены в акцию. | [optional] [default to undefined]
**rejected** | [**Array&lt;SellerApiProductV1ResponseProduct&gt;**](SellerApiProductV1ResponseProduct.md) | Список товаров, которые не удалось добавить в акцию. | [optional] [default to undefined]

## Example

```typescript
import { SellerApiProductV1ResponseResult } from './api';

const instance: SellerApiProductV1ResponseResult = {
    product_ids,
    rejected,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
