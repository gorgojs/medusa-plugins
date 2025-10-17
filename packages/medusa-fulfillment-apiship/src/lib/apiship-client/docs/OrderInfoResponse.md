# OrderInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | [**OrderInfoData**](OrderInfoData.md) |  | [optional] [default to undefined]
**cost** | [**OrderInfoCost**](OrderInfoCost.md) |  | [optional] [default to undefined]
**sender** | [**Sender**](Sender.md) |  | [optional] [default to undefined]
**recipient** | [**Recipient**](Recipient.md) |  | [optional] [default to undefined]
**returnAddress** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] [default to undefined]
**items** | [**Array&lt;Item&gt;**](Item.md) |  | [optional] [default to undefined]
**places** | [**Array&lt;Place&gt;**](Place.md) |  | [optional] [default to undefined]
**extraParams** | [**Array&lt;ExtraParam&gt;**](ExtraParam.md) |  | [optional] [default to undefined]
**extendedInfo** | [**ExtendedOrderData**](ExtendedOrderData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderInfoResponse } from './api';

const instance: OrderInfoResponse = {
    order,
    cost,
    sender,
    recipient,
    returnAddress,
    items,
    places,
    extraParams,
    extendedInfo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
