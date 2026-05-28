# V1DraftTimeslotInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drop_off_warehouse_timeslots** | [**Array&lt;V1DropOffWarehouse&gt;**](V1DropOffWarehouse.md) | Таймслоты складов. | [optional] [default to undefined]
**requested_date_from** | **string** | Дата начала интересующего периода. | [optional] [default to undefined]
**requested_date_to** | **string** | Дата окончания интересующего периода. | [optional] [default to undefined]

## Example

```typescript
import { V1DraftTimeslotInfoResponse } from './api';

const instance: V1DraftTimeslotInfoResponse = {
    drop_off_warehouse_timeslots,
    requested_date_from,
    requested_date_to,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
