# WarehouseFirstMile

Первая миля.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dropoff_point_id** | **string** | Идентификатор drop-off пункта. | [optional] [default to undefined]
**first_mile_is_changing** | **boolean** | Признак, что настройки склада обновляются. | [optional] [default to undefined]
**timeslot_from** | **string** | Время начала таймслота. | [optional] [default to undefined]
**timeslot_id** | **number** | Идентификатор таймслота. | [optional] [default to undefined]
**timeslot_to** | **string** | Время окончания таймслота. | [optional] [default to undefined]
**type** | [**FirstMileTypeEnum**](FirstMileTypeEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { WarehouseFirstMile } from './api';

const instance: WarehouseFirstMile = {
    dropoff_point_id,
    first_mile_is_changing,
    timeslot_from,
    timeslot_id,
    timeslot_to,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
