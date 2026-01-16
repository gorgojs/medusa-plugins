# X5Warehouse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Код склада в системе клиента | [default to undefined]
**name** | **string** | Название | [default to undefined]
**postIndex** | **string** | Индекс | [default to undefined]
**lat** | **number** | Широта | [optional] [default to undefined]
**lng** | **number** | Долгота | [optional] [default to undefined]
**countryCode** | **string** | Код страны | [default to undefined]
**region** | **string** | Регион | [default to undefined]
**regionType** | **string** | Тип региона | [optional] [default to undefined]
**city** | **string** | Город | [default to undefined]
**cityGuid** | **string** | ID города в базе ФИАС | [optional] [default to undefined]
**cityType** | **string** | Тип населенного пункта | [optional] [default to undefined]
**area** | **string** | Район | [default to undefined]
**street** | **string** | Улица | [default to undefined]
**streetType** | **string** | Тип улицы (ул., переулок и т.п.) | [optional] [default to undefined]
**house** | **string** | Дом | [default to undefined]
**block** | **string** | Корпус | [optional] [default to undefined]
**office** | **string** | Офис | [optional] [default to undefined]
**address** | **string** | Полный адрес | [optional] [default to undefined]
**phone** | **string** | Телефон | [default to undefined]

## Example

```typescript
import { X5Warehouse } from './api';

const instance: X5Warehouse = {
    code,
    name,
    postIndex,
    lat,
    lng,
    countryCode,
    region,
    regionType,
    city,
    cityGuid,
    cityType,
    area,
    street,
    streetType,
    house,
    block,
    office,
    address,
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
