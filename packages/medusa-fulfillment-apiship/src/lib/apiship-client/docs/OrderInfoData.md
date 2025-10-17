# OrderInfoData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerNumber** | **string** | Номер заказа в системе службы доставки. Если СД выдает диапазон номеров заказа | [optional] [default to undefined]
**additionalProviderNumber** | **string** | Дополнительный номер заказа в системе службы доставки | [optional] [default to undefined]
**clientNumber** | **string** | Номер заказа в системе клиента | [default to undefined]
**barcode** | **string** | Штрих-код | [optional] [default to undefined]
**description** | **string** | Комментарий | [optional] [default to undefined]
**providerKey** | **string** | Код службы доставки | [default to undefined]
**providerConnectId** | **string** | ID подключения вашей компании к СД | [optional] [default to undefined]
**pickupType** | **number** | Тип забора груза. 1 - отгрузка груза курьером; 2 - отгрузка груза на ПВЗ; | [default to undefined]
**deliveryType** | **number** | Тип доставки. 1 - доставка курьером; 2 - доставка на ПВЗ; | [default to undefined]
**tariffId** | **number** | Тариф службы доставки по которому осуществляется доставка | [default to undefined]
**pointInId** | **number** | ID точки приема заказа | [optional] [default to undefined]
**pointOutId** | **number** | ID точки выдачи заказа | [optional] [default to undefined]
**pickupDate** | **string** | Предполагаемая дата передачи груза в службу доставки | [optional] [default to undefined]
**pickupTimeStart** | **string** | Начальное время забора груза | [optional] [default to undefined]
**pickupTimeEnd** | **string** | Конечное время забора груза | [optional] [default to undefined]
**deliveryDate** | **string** | Дата доставки | [optional] [default to undefined]
**deliveryTimeStart** | **string** | Начальное время доставки | [optional] [default to undefined]
**deliveryTimeEnd** | **string** | Конечное время доставки | [optional] [default to undefined]
**trackingUrl** | **string** | Ссылка отслеживания из системы СД | [optional] [default to undefined]
**height** | **number** | Высота единицы товара в сантиметрах | [optional] [default to undefined]
**length** | **number** | Длина единицы товара в сантиметрах | [optional] [default to undefined]
**width** | **number** | Ширина единицы товара в сантиметрах | [optional] [default to undefined]
**weight** | **number** | Вес единицы товара в граммах | [default to undefined]
**orderId** | **number** | ID заказа | [optional] [default to undefined]

## Example

```typescript
import { OrderInfoData } from './api';

const instance: OrderInfoData = {
    providerNumber,
    additionalProviderNumber,
    clientNumber,
    barcode,
    description,
    providerKey,
    providerConnectId,
    pickupType,
    deliveryType,
    tariffId,
    pointInId,
    pointOutId,
    pickupDate,
    pickupTimeStart,
    pickupTimeEnd,
    deliveryDate,
    deliveryTimeStart,
    deliveryTimeEnd,
    trackingUrl,
    height,
    length,
    width,
    weight,
    orderId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
