# V1WarehouseFBSUpdateReturnPointListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_next** | **boolean** | Признак, что в ответе вернули не все пункты возврата. | [optional] [default to undefined]
**is_selected_point_available** | **boolean** | Признак доступности пункта возврата для выбора. | [optional] [default to undefined]
**last_id** | **number** | Идентификатор последнего значения на странице. | [optional] [default to undefined]
**points** | [**Array&lt;V1WarehouseFBSUpdateReturnPointListResponseReturnPoint&gt;**](V1WarehouseFBSUpdateReturnPointListResponseReturnPoint.md) | Список пунктов возврата. | [optional] [default to undefined]

## Example

```typescript
import { V1WarehouseFBSUpdateReturnPointListResponse } from './api';

const instance: V1WarehouseFBSUpdateReturnPointListResponse = {
    has_next,
    is_selected_point_available,
    last_id,
    points,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
