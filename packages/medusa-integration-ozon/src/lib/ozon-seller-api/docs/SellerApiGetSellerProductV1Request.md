# SellerApiGetSellerProductV1Request

Список товаров.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_id** | **number** | Идентификатор акции. Можно получить с помощью метода [/v1/actions](#operation/Promos). | [default to undefined]
**limit** | **number** | Количество ответов на странице. По умолчанию — 100. | [optional] [default to undefined]
**offset** | **number** | Количество элементов, которое будет пропущено в ответе. Например, если &#x60;offset&#x3D;10&#x60;, ответ начнётся с 11-го найденного элемента. | [default to undefined]
**last_id** | **number** | Идентификатор последнего значения на странице. При первом запросе оставьте это поле пустым. | [optional] [default to undefined]

## Example

```typescript
import { SellerApiGetSellerProductV1Request } from './api';

const instance: SellerApiGetSellerProductV1Request = {
    action_id,
    limit,
    offset,
    last_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
