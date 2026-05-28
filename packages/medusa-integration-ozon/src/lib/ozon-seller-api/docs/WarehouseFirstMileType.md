# WarehouseFirstMileType

Первая миля FBS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dropoff_point_id** | **string** | Идентификатор DropOff-точки. | [optional] [default to undefined]
**dropoff_timeslot_id** | **number** | Идентификатор временного слота для DropOff. | [optional] [default to undefined]
**first_mile_is_changing** | **boolean** | Признак, что настройки склада обновляются. | [optional] [default to undefined]
**first_mile_type** | **string** | Тип первой мили — &#x60;DropOff&#x60; или &#x60;Pickup&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { WarehouseFirstMileType } from './api';

const instance: WarehouseFirstMileType = {
    dropoff_point_id,
    dropoff_timeslot_id,
    first_mile_is_changing,
    first_mile_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
