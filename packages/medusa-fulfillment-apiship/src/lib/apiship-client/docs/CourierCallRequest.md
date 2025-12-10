# CourierCallRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerKey** | **string** | Код службы доставки | [default to undefined]
**providerConnectId** | **number** | ID подключения вашей компании к СД | [optional] [default to undefined]
**date** | **string** | Дата отгрузки | [default to undefined]
**timeStart** | **string** | Начальное время отгрузки | [default to undefined]
**timeEnd** | **string** | Конечное время отгрузки | [default to undefined]
**weight** | **number** | Вес всего заказа (в граммах) | [default to undefined]
**width** | **number** | Ширина заказа (в сантиметрах) | [default to undefined]
**height** | **number** | Высота заказа (в сантиметрах) | [default to undefined]
**length** | **number** | Длина заказа (в сантиметрах) | [default to undefined]
**orderIds** | **Array&lt;number&gt;** | Номера заказов которые планируются передать с этим курьером | [default to undefined]
**postIndex** | **string** | Почтовый индекс | [optional] [default to undefined]
**countryCode** | **string** | Код страны в соответствии с ISO 3166-1 alpha-2 | [optional] [default to undefined]
**region** | **string** | Область или республика или край | [default to undefined]
**area** | **string** | Район | [optional] [default to undefined]
**city** | **string** | Город или населенный пункт | [default to undefined]
**cityGuid** | **string** | ID города в базе ФИАС | [optional] [default to undefined]
**street** | **string** | Улица | [default to undefined]
**house** | **string** | Дом | [default to undefined]
**block** | **string** | Строение/Корпус | [optional] [default to undefined]
**office** | **string** | Офис/Квартира | [optional] [default to undefined]
**lat** | **number** | Широта | [optional] [default to undefined]
**lng** | **number** | Долгота | [optional] [default to undefined]
**addressString** | **string** | 123 | [optional] [default to undefined]
**companyName** | **string** | Название компании | [optional] [default to undefined]
**contactName** | **string** | ФИО контактного лица | [default to undefined]
**phone** | **string** | Контактный телефон | [default to undefined]
**email** | **string** | Контактный email адрес | [optional] [default to undefined]
**comment** | **string** | Комментарий | [optional] [default to undefined]
**extraParams** | [**ExtraParamOnCourier**](ExtraParamOnCourier.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CourierCallRequest } from './api';

const instance: CourierCallRequest = {
    providerKey,
    providerConnectId,
    date,
    timeStart,
    timeEnd,
    weight,
    width,
    height,
    length,
    orderIds,
    postIndex,
    countryCode,
    region,
    area,
    city,
    cityGuid,
    street,
    house,
    block,
    office,
    lat,
    lng,
    addressString,
    companyName,
    contactName,
    phone,
    email,
    comment,
    extraParams,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
