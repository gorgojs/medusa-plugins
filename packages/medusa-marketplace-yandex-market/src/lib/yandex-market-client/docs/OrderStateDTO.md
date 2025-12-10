# OrderStateDTO

Информация по заказу.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор заказа. | [default to undefined]
**status** | [**OrderStatusType**](OrderStatusType.md) |  | [default to undefined]
**substatus** | [**OrderSubstatusType**](OrderSubstatusType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderStateDTO } from './api';

const instance: OrderStateDTO = {
    id,
    status,
    substatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
