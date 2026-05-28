# SplitDeliveryMethod

Метод доставки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_method_id** | **number** | Идентификатор способа доставки. | [optional] [default to undefined]
**delivery_type** | [**DeliveryTypeEnum**](DeliveryTypeEnum.md) |  | [optional] [default to undefined]
**logistic_date_range** | [**DeliveryMethodDateRange**](DeliveryMethodDateRange.md) |  | [optional] [default to undefined]
**price** | [**OrderCreateRequestDeliveryPrice**](OrderCreateRequestDeliveryPrice.md) |  | [optional] [default to undefined]
**timeslot_id** | **number** | Идентификатор таймслота. | [optional] [default to undefined]

## Example

```typescript
import { SplitDeliveryMethod } from './api';

const instance: SplitDeliveryMethod = {
    delivery_method_id,
    delivery_type,
    logistic_date_range,
    price,
    timeslot_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
