# OrderDeliveryAddressDTO

Адрес доставки.  Указывается, если параметр `type` принимает значение `DELIVERY`, `POST` или `PICKUP` (только для модели DBS). Если `type=PICKUP`, возвращается адрес пункта выдачи. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **string** | Страна.  | [optional] [default to undefined]
**postcode** | **string** | Почтовый индекс.  Указывается, если выбрана доставка почтой (&#x60;delivery type&#x3D;POST&#x60;).  | [optional] [default to undefined]
**city** | **string** | Город или населенный пункт.  | [optional] [default to undefined]
**district** | **string** | Район. | [optional] [default to undefined]
**subway** | **string** | Станция метро. | [optional] [default to undefined]
**street** | **string** | Улица.  | [optional] [default to undefined]
**house** | **string** | Номер дома.  | [optional] [default to undefined]
**estate** | **string** | Номер владения.  | [optional] [default to undefined]
**block** | **string** | Корпус. | [optional] [default to undefined]
**building** | **string** | Строение. | [optional] [default to undefined]
**entrance** | **string** | Номер подъезда. | [optional] [default to undefined]
**entryphone** | **string** | Код домофона. | [optional] [default to undefined]
**floor** | **string** | Этаж. | [optional] [default to undefined]
**apartment** | **string** | Номер квартиры или офиса. | [optional] [default to undefined]
**phone** | **string** | Телефон получателя заказа.  | [optional] [default to undefined]
**recipient** | **string** | Фамилия, имя и отчество получателя заказа.  | [optional] [default to undefined]
**gps** | [**GpsDTO**](GpsDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderDeliveryAddressDTO } from './api';

const instance: OrderDeliveryAddressDTO = {
    country,
    postcode,
    city,
    district,
    subway,
    street,
    house,
    estate,
    block,
    building,
    entrance,
    entryphone,
    floor,
    apartment,
    phone,
    recipient,
    gps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
