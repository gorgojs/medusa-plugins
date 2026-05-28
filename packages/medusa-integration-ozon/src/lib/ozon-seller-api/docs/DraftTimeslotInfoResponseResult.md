# DraftTimeslotInfoResponseResult

Информация о таймслотах.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drop_off_warehouse_timeslots** | [**ResultDropOffWarehouseTimeslots**](ResultDropOffWarehouseTimeslots.md) |  | [optional] [default to undefined]
**requested_date_from** | **string** | Дата начала периода. | [optional] [default to undefined]
**requested_date_to** | **string** | Дата окончания периода. | [optional] [default to undefined]

## Example

```typescript
import { DraftTimeslotInfoResponseResult } from './api';

const instance: DraftTimeslotInfoResponseResult = {
    drop_off_warehouse_timeslots,
    requested_date_from,
    requested_date_to,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
