# V1WarehouseFBSCreateReturnPointListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coordinates** | [**V1WarehouseFBSCreateReturnPointListRequestCoordinates**](V1WarehouseFBSCreateReturnPointListRequestCoordinates.md) |  | [default to undefined]
**country_code** | **string** | Код страны в формате ISO 2. | [default to undefined]
**last_id** | **number** | Идентификатор последнего значения на странице. | [optional] [default to undefined]
**limit** | **number** | Количество значений в ответе. | [default to undefined]
**search** | [**V1WarehouseFBSCreateReturnPointListRequestSearch**](V1WarehouseFBSCreateReturnPointListRequestSearch.md) |  | [optional] [default to undefined]
**selected_dropoff_point_id** | **number** | Идентификатор выбранной точки отгрузки на складе. | [optional] [default to undefined]

## Example

```typescript
import { V1WarehouseFBSCreateReturnPointListRequest } from './api';

const instance: V1WarehouseFBSCreateReturnPointListRequest = {
    coordinates,
    country_code,
    last_id,
    limit,
    search,
    selected_dropoff_point_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
