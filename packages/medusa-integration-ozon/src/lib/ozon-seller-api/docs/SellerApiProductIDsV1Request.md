# SellerApiProductIDsV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_id** | **number** | Идентификатор акции. Можно получить с помощью метода [/v1/actions](#operation/Promos). | [default to undefined]
**product_ids** | **Array&lt;number&gt;** | Список идентификаторов товаров в системе продавца — &#x60;product_id&#x60;. | [default to undefined]

## Example

```typescript
import { SellerApiProductIDsV1Request } from './api';

const instance: SellerApiProductIDsV1Request = {
    action_id,
    product_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
