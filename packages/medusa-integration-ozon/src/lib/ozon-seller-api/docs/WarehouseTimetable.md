# WarehouseTimetable

Расписание работы склада.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timetable_from** | **string** | Дата начала работы склада. | [optional] [default to undefined]
**timetable_to** | **string** | Дата окончания работы склада. | [optional] [default to undefined]
**working_hours** | [**Array&lt;TimetableWorkingHours&gt;**](TimetableWorkingHours.md) | Часы работы склада. | [optional] [default to undefined]

## Example

```typescript
import { WarehouseTimetable } from './api';

const instance: WarehouseTimetable = {
    timetable_from,
    timetable_to,
    working_hours,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
