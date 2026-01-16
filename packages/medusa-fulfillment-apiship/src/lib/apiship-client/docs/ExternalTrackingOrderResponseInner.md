# ExternalTrackingOrderResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerNumber** | **string** | Номер заказа в системе службы доставки | [optional] [default to undefined]
**providerKey** | **string** | Код службы доставки | [optional] [default to undefined]
**providerConnectId** | **number** | ID подключения вашей компании к СД | [optional] [default to undefined]
**orderId** | **string** | ID отслеживания заказа | [optional] [default to undefined]
**created** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ExternalTrackingOrderResponseInner } from './api';

const instance: ExternalTrackingOrderResponseInner = {
    providerNumber,
    providerKey,
    providerConnectId,
    orderId,
    created,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
