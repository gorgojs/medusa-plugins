# DeleteProductsResponseDeleteStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **string** | Причина ошибки, которая возникла при обработке запроса. | [optional] [default to undefined]
**is_deleted** | **boolean** | Если запрос выполнен без ошибок и товары удалены — &#x60;true&#x60;. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]

## Example

```typescript
import { DeleteProductsResponseDeleteStatus } from './api';

const instance: DeleteProductsResponseDeleteStatus = {
    error,
    is_deleted,
    offer_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
