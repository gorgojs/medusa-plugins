# V1OrderCancelCheckResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellable** | **boolean** | &#x60;true&#x60;, если заказ можно отменить.  | [optional] [default to undefined]
**order_number** | **string** | Номер заказа. | [optional] [default to undefined]
**posting_groups** | [**Array&lt;OrderCancelCheckResponsePostingGroup&gt;**](OrderCancelCheckResponsePostingGroup.md) | Группы отправлений. | [optional] [default to undefined]
**postings** | [**Array&lt;OrderCancelCheckResponsePosting&gt;**](OrderCancelCheckResponsePosting.md) | Информация о возможности отмены отправлений. | [optional] [default to undefined]

## Example

```typescript
import { V1OrderCancelCheckResponse } from './api';

const instance: V1OrderCancelCheckResponse = {
    cancellable,
    order_number,
    posting_groups,
    postings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
