# OrderCourierResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | ID заказа | [default to undefined]
**fullName** | **string** | ФИО курьера | [optional] [default to undefined]
**providerId** | **string** | ID курьера в системе СД | [optional] [default to undefined]
**phone** | **string** | Номер телефона курьера | [optional] [default to undefined]
**car** | [**CourierCar**](CourierCar.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderCourierResponse } from './api';

const instance: OrderCourierResponse = {
    orderId,
    fullName,
    providerId,
    phone,
    car,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
