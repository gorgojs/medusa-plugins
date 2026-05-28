# SellerApiProductV1ResponseResultDeactivate

Результаты запроса.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_ids** | **Array&lt;number&gt;** | Список идентификаторов товаров, которые удалены из акции. | [optional] [default to undefined]
**rejected** | [**Array&lt;SellerApiProductV1ResponseProductDeactivate&gt;**](SellerApiProductV1ResponseProductDeactivate.md) | Список товаров, которые не удалось удалить из акции. | [optional] [default to undefined]

## Example

```typescript
import { SellerApiProductV1ResponseResultDeactivate } from './api';

const instance: SellerApiProductV1ResponseResultDeactivate = {
    product_ids,
    rejected,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
