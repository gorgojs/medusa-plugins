# DeliveryCheckoutResponseSplitDeliveryMethod

Метод доставки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_time_zone_offset** | **number** | Смещение часового пояса доставки в минутах. | [optional] [default to undefined]
**delivery_type** | [**DeliveryMethodDeliveryTypeEnum**](DeliveryMethodDeliveryTypeEnum.md) |  | [optional] [default to undefined]
**id** | **number** | Идентификатор метода доставки. | [optional] [default to undefined]
**name** | **string** | Название метода доставки. | [optional] [default to undefined]
**timeslots** | [**Array&lt;DeliveryMethodTimeslot&gt;**](DeliveryMethodTimeslot.md) | Таймслоты. | [optional] [default to undefined]
**unavailable_reason** | [**DeliveryCheckoutResponseUnavailableReasonEnum**](DeliveryCheckoutResponseUnavailableReasonEnum.md) |  | [optional] [default to undefined]
**warehouse_time_zone_offset** | **number** | Смещение часового пояса склада в минутах. | [optional] [default to undefined]

## Example

```typescript
import { DeliveryCheckoutResponseSplitDeliveryMethod } from './api';

const instance: DeliveryCheckoutResponseSplitDeliveryMethod = {
    delivery_time_zone_offset,
    delivery_type,
    id,
    name,
    timeslots,
    unavailable_reason,
    warehouse_time_zone_offset,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
