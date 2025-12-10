# PointObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**providerKey** | **string** | Идентификатор службы доставки | [optional] [default to undefined]
**providerKeyOriginal** | **string** | Признаки отношения к другим СД, Франшизам и т.д. | [optional] [default to undefined]
**code** | **string** | Код терминала в системе службы доставки | [optional] [default to undefined]
**name** | **string** | Название | [optional] [default to undefined]
**postIndex** | **string** | Индекс | [optional] [default to undefined]
**lat** | **number** | Широта | [optional] [default to undefined]
**lng** | **number** | Долгота | [optional] [default to undefined]
**countryCode** | **string** | Код страны | [optional] [default to undefined]
**region** | **string** | Регион | [optional] [default to undefined]
**regionType** | **string** | Тип региона | [optional] [default to undefined]
**city** | **string** | Город | [optional] [default to undefined]
**cityGuid** | **string** | ФИАС-код города | [optional] [default to undefined]
**cityType** | **string** | Тип города | [optional] [default to undefined]
**community** | **string** | Населенный пункт | [optional] [default to undefined]
**communityGuid** | **string** | ФИАС-код населенного пункта | [optional] [default to undefined]
**communityType** | **string** | Тип населенного пункта | [optional] [default to undefined]
**area** | **string** | Район | [optional] [default to undefined]
**street** | **string** | Улица | [optional] [default to undefined]
**streetType** | **string** | Тип улицы (ул., переулок и т.п.) | [optional] [default to undefined]
**house** | **string** | Дом | [optional] [default to undefined]
**block** | **string** | Корпус | [optional] [default to undefined]
**office** | **string** | Офис | [optional] [default to undefined]
**address** | **string** | Полный адрес, полученный от СД | [optional] [default to undefined]
**url** | **string** | Домашняя страница | [optional] [default to undefined]
**email** | **string** | email | [optional] [default to undefined]
**phone** | **string** | Телефон | [optional] [default to undefined]
**timetable** | **string** | Режим работы | [optional] [default to undefined]
**worktime** | [**PointObjectWorktime**](PointObjectWorktime.md) |  | [optional] [default to undefined]
**fittingRoom** | **number** | Наличие примерочной | [optional] [default to undefined]
**cod** | **number** | Имеется ли возможность оплаты при доставке (null - нет данных, 1 - оплата доступна, 0 - оплата не доступна) | [optional] [default to undefined]
**paymentCash** | **number** | Имеется ли возможность оплаты наличными (null - нет данных, 1 - оплата наличными доступна, 0 - оплата наличными не доступна) | [optional] [default to undefined]
**paymentCard** | **number** | Имеется ли возможность оплаты банковской картой (null - нет данных, 1 - оплата картой доступна, 0 - оплата картой не доступна) | [optional] [default to undefined]
**multiplaceDeliveryAllowed** | **number** | Возможна ли выдача многоместных отправлений (null - нет данных, 1 - выдача возможна, 0 - выдача невозможна) | [optional] [default to undefined]
**availableOperation** | **number** | Тип операции (1 - прием, 2 - выдача, 3 - прием и выдача) | [optional] [default to undefined]
**type** | **number** | Тип точки (1 - Пункт выдачи заказа, 2 - Постамат, 3 - Отделение Почты России, 4 - Терминал) | [optional] [default to undefined]
**description** | **string** | Описание ПВЗ, как пройти | [optional] [default to undefined]
**photos** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**metro** | [**Array&lt;PointObjectMetroInner&gt;**](PointObjectMetroInner.md) | Список ближайших станций метро (до трёх штук) | [optional] [default to undefined]
**extra** | [**Array&lt;PointObjectExtraInner&gt;**](PointObjectExtraInner.md) | Дополнительные параметры для службы | [optional] [default to undefined]
**limits** | [**PointObjectLimits**](PointObjectLimits.md) |  | [optional] [default to undefined]
**enabled** | **boolean** | Доступность пункта | [optional] [default to undefined]

## Example

```typescript
import { PointObject } from './api';

const instance: PointObject = {
    id,
    providerKey,
    providerKeyOriginal,
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
    community,
    communityGuid,
    communityType,
    area,
    street,
    streetType,
    house,
    block,
    office,
    address,
    url,
    email,
    phone,
    timetable,
    worktime,
    fittingRoom,
    cod,
    paymentCash,
    paymentCard,
    multiplaceDeliveryAllowed,
    availableOperation,
    type,
    description,
    photos,
    metro,
    extra,
    limits,
    enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
