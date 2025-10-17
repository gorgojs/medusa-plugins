# OrderUploadItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientNumber** | **string** | Номер заказа в системе клиента | [default to undefined]
**row** | **number** | Номер строки в таблице | [default to undefined]
**orderId** | **number** | Номер заказа в системе Apiship | [optional] [default to undefined]
**providerNumber** | **string** | Номер заказа в системе СД | [optional] [default to undefined]
**created** | **string** | Дата создания заказа | [optional] [default to undefined]

## Example

```typescript
import { OrderUploadItem } from './api';

const instance: OrderUploadItem = {
    clientNumber,
    row,
    orderId,
    providerNumber,
    created,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
