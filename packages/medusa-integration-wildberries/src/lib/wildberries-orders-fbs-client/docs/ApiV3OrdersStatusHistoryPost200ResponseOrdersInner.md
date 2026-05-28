# ApiV3OrdersStatusHistoryPost200ResponseOrdersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deliveryDate** | **string** | Planned delivery date, [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339) | [optional] [default to undefined]
**statuses** | [**Array&lt;ApiV3OrdersStatusHistoryPost200ResponseOrdersInnerStatusesInner&gt;**](ApiV3OrdersStatusHistoryPost200ResponseOrdersInnerStatusesInner.md) | Statuses | [optional] [default to undefined]
**orderID** | **number** | Assembly order ID | [optional] [default to undefined]

## Example

```typescript
import { ApiV3OrdersStatusHistoryPost200ResponseOrdersInner } from './api';

const instance: ApiV3OrdersStatusHistoryPost200ResponseOrdersInner = {
    deliveryDate,
    statuses,
    orderID,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
