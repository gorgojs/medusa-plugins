# V2DraftTimeslotInfoRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_from** | **string** | Дата начала периода доступных таймслотов. | [default to undefined]
**date_to** | **string** | Дата окончания периода доступных таймслотов.  Максимальный период — 28 дней с текущей даты.  | [default to undefined]
**draft_id** | **number** | Идентификатор черновика. | [default to undefined]
**selected_cluster_warehouses** | [**Array&lt;V2DraftTimeslotInfoRequestSelectedClusterWarehouse&gt;**](V2DraftTimeslotInfoRequestSelectedClusterWarehouse.md) | Информация о кластере и складах в нём. | [default to undefined]

## Example

```typescript
import { V2DraftTimeslotInfoRequest } from './api';

const instance: V2DraftTimeslotInfoRequest = {
    date_from,
    date_to,
    draft_id,
    selected_cluster_warehouses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
