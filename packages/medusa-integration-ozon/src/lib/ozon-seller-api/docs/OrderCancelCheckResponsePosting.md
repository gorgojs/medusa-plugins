# OrderCancelCheckResponsePosting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellable** | **boolean** | &#x60;true&#x60;, если отправление можно отменить.  | [optional] [default to undefined]
**posting_number** | **string** | Идентификатор отправления. | [optional] [default to undefined]
**why_not_cancellable** | **string** | Причина, по которой отправление нельзя отменить. | [optional] [default to undefined]

## Example

```typescript
import { OrderCancelCheckResponsePosting } from './api';

const instance: OrderCancelCheckResponsePosting = {
    cancellable,
    posting_number,
    why_not_cancellable,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
