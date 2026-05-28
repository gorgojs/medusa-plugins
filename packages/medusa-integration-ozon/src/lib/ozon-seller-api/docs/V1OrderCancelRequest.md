# V1OrderCancelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_number** | **string** | Номер заказа. | [default to undefined]
**reason_id** | **number** | Идентификатор причины отмены заказа. | [default to undefined]
**reason_message** | **string** | Причина отмены заказа. | [optional] [default to undefined]

## Example

```typescript
import { V1OrderCancelRequest } from './api';

const instance: V1OrderCancelRequest = {
    order_number,
    reason_id,
    reason_message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
