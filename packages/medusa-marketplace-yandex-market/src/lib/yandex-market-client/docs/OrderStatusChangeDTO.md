# OrderStatusChangeDTO

Заказ.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**OrderStatusType**](OrderStatusType.md) |  | [default to undefined]
**substatus** | [**OrderSubstatusType**](OrderSubstatusType.md) |  | [optional] [default to undefined]
**delivery** | [**OrderStatusChangeDeliveryDTO**](OrderStatusChangeDeliveryDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderStatusChangeDTO } from './api';

const instance: OrderStatusChangeDTO = {
    status,
    substatus,
    delivery,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
