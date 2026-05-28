# AcceptOrderCancellationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted** | **boolean** | Решение об отмене заказа:  * &#x60;true&#x60; — заказ отменяется, служба доставки узнала об отмене до передачи заказа покупателю. * &#x60;false&#x60; — заказ не отменяется, так как он уже доставлен покупателю курьером или передан в пункт выдачи заказов.  | [default to undefined]
**reason** | [**OrderCancellationReasonType**](OrderCancellationReasonType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AcceptOrderCancellationRequest } from './api';

const instance: AcceptOrderCancellationRequest = {
    accepted,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
