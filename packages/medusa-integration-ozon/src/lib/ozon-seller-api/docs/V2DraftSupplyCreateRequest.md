# V2DraftSupplyCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**draft_id** | **number** | Идентификатор черновика. | [default to undefined]
**selected_cluster_warehouses** | [**Array&lt;V2DraftSupplyCreateRequestSelectedClusterWarehouse&gt;**](V2DraftSupplyCreateRequestSelectedClusterWarehouse.md) | Идентификаторы выбранных кластеров. | [default to undefined]
**timeslot** | [**V2DraftSupplyCreateRequestTimeslot**](V2DraftSupplyCreateRequestTimeslot.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V2DraftSupplyCreateRequest } from './api';

const instance: V2DraftSupplyCreateRequest = {
    draft_id,
    selected_cluster_warehouses,
    timeslot,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
