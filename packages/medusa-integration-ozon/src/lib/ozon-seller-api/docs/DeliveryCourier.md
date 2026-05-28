# DeliveryCourier

Информация о доставке курьером.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apartment** | **string** | Квартира. | [optional] [default to undefined]
**city** | **string** | Город. | [optional] [default to undefined]
**comment** | **string** | Комментарий. | [optional] [default to undefined]
**coordinates** | [**CourierCoordinates**](CourierCoordinates.md) |  | [default to undefined]
**country** | **string** | Страна. | [optional] [default to undefined]
**entrance** | **string** | Подъезд. | [optional] [default to undefined]
**floor** | **string** | Этаж. | [optional] [default to undefined]
**house_number** | **string** | Номер дома. | [optional] [default to undefined]
**intercom** | **string** | Код домофона. | [optional] [default to undefined]
**region** | **string** | Регион. | [optional] [default to undefined]
**street** | **string** | Улица. | [optional] [default to undefined]
**zip_code** | **string** | Индекс. | [optional] [default to undefined]

## Example

```typescript
import { DeliveryCourier } from './api';

const instance: DeliveryCourier = {
    apartment,
    city,
    comment,
    coordinates,
    country,
    entrance,
    floor,
    house_number,
    intercom,
    region,
    street,
    zip_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
