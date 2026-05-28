# ResultDropOffWarehouseTimeslots

Таймслоты складов.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_time_in_timezone** | **string** | Текущее время в часовом поясе склада. | [optional] [default to undefined]
**days** | [**Array&lt;DropOffWarehouseTimeslotsDay&gt;**](DropOffWarehouseTimeslotsDay.md) | Таймслоты по датам. | [optional] [default to undefined]
**warehouse_timezone** | **string** | Часовой пояс склада. | [optional] [default to undefined]

## Example

```typescript
import { ResultDropOffWarehouseTimeslots } from './api';

const instance: ResultDropOffWarehouseTimeslots = {
    current_time_in_timezone,
    days,
    warehouse_timezone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
