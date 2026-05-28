# V1SupplyOrderContentUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;V1SupplyOrderContentUpdateRequestItem&gt;**](V1SupplyOrderContentUpdateRequestItem.md) | Новый товарный состав заявки на поставку.  Максимум 5000 товаров.  | [optional] [default to undefined]
**order_id** | **number** | Идентификатор заказа. | [optional] [default to undefined]
**supply_id** | **number** | Идентификатор поставки. | [optional] [default to undefined]

## Example

```typescript
import { V1SupplyOrderContentUpdateRequest } from './api';

const instance: V1SupplyOrderContentUpdateRequest = {
    items,
    order_id,
    supply_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
