# SellerApiActivateProductV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_id** | **number** | Идентификатор акции. Можно получить с помощью метода [/v1/actions](#operation/Promos). | [default to undefined]
**products** | [**Array&lt;SellerApiProductPrice&gt;**](SellerApiProductPrice.md) | Список товаров. | [default to undefined]

## Example

```typescript
import { SellerApiActivateProductV1Request } from './api';

const instance: SellerApiActivateProductV1Request = {
    action_id,
    products,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
