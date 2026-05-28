# V1DraftSupplyCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**draft_id** | **number** | Идентификатор черновика заявки на поставку. | [default to undefined]
**timeslot** | [**V1DayTimeSlot**](V1DayTimeSlot.md) |  | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада размещения. Можно получить с помощью метода [/v1/draft/create/info](#operation/SupplyDraftAPI_DraftCreateInfo). | [default to undefined]

## Example

```typescript
import { V1DraftSupplyCreateRequest } from './api';

const instance: V1DraftSupplyCreateRequest = {
    draft_id,
    timeslot,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
