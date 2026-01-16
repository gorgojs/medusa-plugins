# BoxberryCityObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**code** | **string** | Код города | [optional] [default to undefined]
**cityGuid** | **string** | ФИАС Города | [optional] [default to undefined]
**region** | **string** | Регион | [optional] [default to undefined]
**district** | **string** | Район | [optional] [default to undefined]
**courierZips** | **Array&lt;string&gt;** | Индексы | [optional] [default to undefined]
**receptionLaP** | **string** | Прием писем и посылок от физ. лиц (0/1) | [optional] [default to undefined]
**deliveryLaP** | **string** | Выдача писем и посылок физ. лиц (0/1) | [optional] [default to undefined]
**reception** | **string** | Прием заказов от ИМ на пунктах выдачи (0/1) | [optional] [default to undefined]
**pickupPoint** | **string** | Наличие пунктов выдачи заказов в городе (0/1) | [optional] [default to undefined]
**courierDelivery** | **string** | Наличие курьерской доставки в городе | [optional] [default to undefined]
**foreignReceptionReturns** | **string** | Прием международных возвратов (0/1) | [optional] [default to undefined]
**terminal** | **string** | Наличие терминала в городе (0/1) | [optional] [default to undefined]
**courierReception** | **string** | Наличие курьерского забора (0/1) | [optional] [default to undefined]

## Example

```typescript
import { BoxberryCityObject } from './api';

const instance: BoxberryCityObject = {
    id,
    code,
    cityGuid,
    region,
    district,
    courierZips,
    receptionLaP,
    deliveryLaP,
    reception,
    pickupPoint,
    courierDelivery,
    foreignReceptionReturns,
    terminal,
    courierReception,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
