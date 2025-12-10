# OrderReturnRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directOrderId** | **number** | Идентификатор прямого заказа (orderId из методов создания заказа) | [optional] [default to undefined]
**order** | [**OrderReturnData**](OrderReturnData.md) |  | [default to undefined]
**cost** | [**ReturnCost**](ReturnCost.md) |  | [default to undefined]
**sender** | [**Sender**](Sender.md) |  | [default to undefined]
**recipient** | [**Recipient**](Recipient.md) |  | [default to undefined]
**items** | [**Array&lt;ReturnItem&gt;**](ReturnItem.md) |  | [optional] [default to undefined]
**places** | [**Array&lt;Place&gt;**](Place.md) |  | [optional] [default to undefined]
**extraParams** | [**Array&lt;ExtraParam&gt;**](ExtraParam.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderReturnRequest } from './api';

const instance: OrderReturnRequest = {
    directOrderId,
    order,
    cost,
    sender,
    recipient,
    items,
    places,
    extraParams,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
