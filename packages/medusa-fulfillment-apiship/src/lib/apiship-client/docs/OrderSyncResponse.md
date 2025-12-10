# OrderSyncResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | Номер заказа | [optional] [default to undefined]
**providerNumber** | **string** | Номер заказа в системе службы доставки | [optional] [default to undefined]
**additionalProviderNumber** | **string** | Дополнительный номер заказа в системе службы доставки | [optional] [default to undefined]
**created** | **string** | Дата создания заказа | [optional] [default to undefined]

## Example

```typescript
import { OrderSyncResponse } from './api';

const instance: OrderSyncResponse = {
    orderId,
    providerNumber,
    additionalProviderNumber,
    created,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
