# V1WarehouseFBSCreateReturnPointListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_next** | **boolean** | Признак, что в ответе вернули не все пункты возврата. | [optional] [default to undefined]
**is_selected_point_available** | **boolean** | Признак доступности пункта возврата. | [optional] [default to undefined]
**last_id** | **number** | Идентификатор последнего значения на странице. | [optional] [default to undefined]
**points** | [**Array&lt;V1WarehouseFBSCreateReturnPointListResponseReturnPoint&gt;**](V1WarehouseFBSCreateReturnPointListResponseReturnPoint.md) | Список пунктов возврата. | [optional] [default to undefined]

## Example

```typescript
import { V1WarehouseFBSCreateReturnPointListResponse } from './api';

const instance: V1WarehouseFBSCreateReturnPointListResponse = {
    has_next,
    is_selected_point_available,
    last_id,
    points,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
