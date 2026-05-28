# V1WarehouseFBSUpdateReturnPointListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_dropoff_point_id** | **number** | Идентификатор выбранной точки отгрузки на складе. | [optional] [default to undefined]
**current_return_point_id** | **number** | Установленный пункт возврата. Получите значение параметра методом [/v1/warehouse/fbs/return-mile/info](#operation/WarehouseFBSReturnMileInfo). | [optional] [default to undefined]
**last_id** | **number** | Идентификатор последнего значения на странице. | [optional] [default to undefined]
**limit** | **number** | Количество значений в ответе. | [default to undefined]
**search** | [**V1WarehouseFBSUpdateReturnPointListRequestSearch**](V1WarehouseFBSUpdateReturnPointListRequestSearch.md) |  | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [default to undefined]

## Example

```typescript
import { V1WarehouseFBSUpdateReturnPointListRequest } from './api';

const instance: V1WarehouseFBSUpdateReturnPointListRequest = {
    current_dropoff_point_id,
    current_return_point_id,
    last_id,
    limit,
    search,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
