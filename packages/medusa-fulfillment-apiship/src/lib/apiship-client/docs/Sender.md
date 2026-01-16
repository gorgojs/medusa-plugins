# Sender


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countryCode** | **string** | Код страны в соответствии с ISO 3166-1 alpha-2 | [default to undefined]
**postIndex** | **string** | Почтовый индекс | [optional] [default to undefined]
**region** | **string** | Область или республика или край | [optional] [default to undefined]
**area** | **string** | Район | [optional] [default to undefined]
**city** | **string** | Город или населенный пункт | [optional] [default to undefined]
**cityGuid** | **string** | ID города в базе ФИАС | [optional] [default to undefined]
**community** | **string** | Населённый пункт | [optional] [default to undefined]
**communityGuid** | **string** | ID населённого пункта в базе ФИАС | [optional] [default to undefined]
**street** | **string** | Улица | [optional] [default to undefined]
**house** | **string** | Дом | [optional] [default to undefined]
**block** | **string** | Строение/Корпус | [optional] [default to undefined]
**office** | **string** | Офис/Квартира | [optional] [default to undefined]
**lat** | **number** | Широта | [optional] [default to undefined]
**lng** | **number** | Долгота | [optional] [default to undefined]
**addressString** | **string** | Полный адрес одной строкой. При заполнении этого поля остальные можно не заполнять, кроме countryCode | [default to undefined]
**companyName** | **string** | Название компании | [optional] [default to undefined]
**contactName** | **string** | ФИО контактного лица | [default to undefined]
**phone** | **string** | Контактный телефон | [default to undefined]
**email** | **string** | Контактный email адрес | [optional] [default to undefined]
**comment** | **string** | Комментарий | [optional] [default to undefined]
**companyInn** | **string** | ИНН компании | [optional] [default to undefined]
**additionalPhone** | **string** | Дополнительный телефон | [optional] [readonly] [default to undefined]
**brandName** | **string** | Бренд продавца | [optional] [default to undefined]

## Example

```typescript
import { Sender } from './api';

const instance: Sender = {
    countryCode,
    postIndex,
    region,
    area,
    city,
    cityGuid,
    community,
    communityGuid,
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
    companyInn,
    additionalPhone,
    brandName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
