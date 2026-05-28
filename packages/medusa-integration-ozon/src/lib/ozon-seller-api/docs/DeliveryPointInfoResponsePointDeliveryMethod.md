# DeliveryPointInfoResponsePointDeliveryMethod

Метод доставки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | Адрес. | [optional] [default to undefined]
**address_details** | [**DeliveryMethodAddressDetails**](DeliveryMethodAddressDetails.md) |  | [optional] [default to undefined]
**coordinates** | [**PointDeliveryMethodCoordinates**](PointDeliveryMethodCoordinates.md) |  | [optional] [default to undefined]
**delivery_type** | [**DeliveryPointInfoResponsePointDeliveryMethodDeliveryType**](DeliveryPointInfoResponsePointDeliveryMethodDeliveryType.md) |  | [optional] [default to undefined]
**description** | **string** | Описание. | [optional] [default to undefined]
**fitting_rooms_count** | **number** | Количество гардеробов. | [optional] [default to undefined]
**holidays** | [**Array&lt;DeliveryMethodHolidays&gt;**](DeliveryMethodHolidays.md) | Праздничные дни. | [optional] [default to undefined]
**holidays_filled** | **boolean** | &#x60;true&#x60;, если праздники заполнены.  | [optional] [default to undefined]
**images** | **Array&lt;string&gt;** | Изображения. | [optional] [default to undefined]
**location_id** | **string** | Идентификатор локации. | [optional] [default to undefined]
**map_point_id** | **number** | Идентификатор точки на карте. | [optional] [default to undefined]
**name** | **string** | Название. | [optional] [default to undefined]
**properties** | [**Array&lt;DeliveryMethodProperties&gt;**](DeliveryMethodProperties.md) | Свойства. | [optional] [default to undefined]
**pvz_rating** | **number** | Рейтинг пункта выдачи заказов. | [optional] [default to undefined]
**storage_period** | **number** | Период хранения. | [optional] [default to undefined]
**working_hours** | [**Array&lt;DeliveryMethodWorkingHours&gt;**](DeliveryMethodWorkingHours.md) | Часы работы. | [optional] [default to undefined]

## Example

```typescript
import { DeliveryPointInfoResponsePointDeliveryMethod } from './api';

const instance: DeliveryPointInfoResponsePointDeliveryMethod = {
    address,
    address_details,
    coordinates,
    delivery_type,
    description,
    fitting_rooms_count,
    holidays,
    holidays_filled,
    images,
    location_id,
    map_point_id,
    name,
    properties,
    pvz_rating,
    storage_period,
    working_hours,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
