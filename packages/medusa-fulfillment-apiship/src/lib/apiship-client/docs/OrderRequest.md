# OrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | [**OrderData**](OrderData.md) |  | [default to undefined]
**cost** | [**Cost**](Cost.md) |  | [default to undefined]
**sender** | [**Sender**](Sender.md) |  | [default to undefined]
**recipient** | [**Recipient**](Recipient.md) |  | [default to undefined]
**returnAddress** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] [default to undefined]
**items** | [**Array&lt;Item&gt;**](Item.md) |  | [optional] [default to undefined]
**places** | [**Array&lt;Place&gt;**](Place.md) |  | [optional] [default to undefined]
**extraParams** | [**Array&lt;ExtraParam&gt;**](ExtraParam.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderRequest } from './api';

const instance: OrderRequest = {
    order,
    cost,
    sender,
    recipient,
    returnAddress,
    items,
    places,
    extraParams,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
