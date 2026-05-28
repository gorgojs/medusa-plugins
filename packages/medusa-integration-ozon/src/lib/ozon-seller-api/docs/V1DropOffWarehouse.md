# V1DropOffWarehouse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_time_in_timezone** | **string** | Текущее время в часовом поясе склада. | [optional] [default to undefined]
**days** | [**Array&lt;V1Day&gt;**](V1Day.md) | Таймслоты по датам. | [optional] [default to undefined]
**drop_off_warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]
**warehouse_timezone** | **string** | Часовой пояс склада. | [optional] [default to undefined]

## Example

```typescript
import { V1DropOffWarehouse } from './api';

const instance: V1DropOffWarehouse = {
    current_time_in_timezone,
    days,
    drop_off_warehouse_id,
    warehouse_timezone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
