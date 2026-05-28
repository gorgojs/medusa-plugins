# AnalyticsStockOnWarehouseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **number** | Количество ответов на странице. По умолчанию — 100. | [default to undefined]
**offset** | **number** | Количество элементов, которое будет пропущено в ответе. Например, если &#x60;offset &#x3D; 10&#x60;, то ответ начнётся с 11-го найденного элемента. | [optional] [default to undefined]
**warehouse_type** | [**AnalyticsGetStockOnWarehousesRequestWarehouseType**](AnalyticsGetStockOnWarehousesRequestWarehouseType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AnalyticsStockOnWarehouseRequest } from './api';

const instance: AnalyticsStockOnWarehouseRequest = {
    limit,
    offset,
    warehouse_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
