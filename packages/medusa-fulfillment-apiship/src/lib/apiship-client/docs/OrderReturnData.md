# OrderReturnData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientNumber** | **string** | Номер заказа в системе клиента | [default to undefined]
**description** | **string** | Комментарий | [optional] [default to undefined]
**providerKey** | **string** | Код службы доставки | [default to undefined]
**providerConnectId** | **string** | ID подключения вашей компании к СД | [optional] [default to undefined]
**pickupType** | **number** | Тип забора груза. 1 - отгрузка груза курьером; 2 - отгрузка груза на ПВЗ; | [default to undefined]
**deliveryType** | **number** | Тип доставки. 1 - доставка курьером; 2 - доставка на ПВЗ; | [default to undefined]
**tariffId** | **number** | Тариф службы доставки по которому осуществляется доставка | [default to undefined]
**pointInId** | **number** | ID точки приема заказа | [optional] [default to undefined]
**pointOutId** | **number** | ID точки выдачи заказа | [optional] [default to undefined]

## Example

```typescript
import { OrderReturnData } from './api';

const instance: OrderReturnData = {
    clientNumber,
    description,
    providerKey,
    providerConnectId,
    pickupType,
    deliveryType,
    tariffId,
    pointInId,
    pointOutId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
