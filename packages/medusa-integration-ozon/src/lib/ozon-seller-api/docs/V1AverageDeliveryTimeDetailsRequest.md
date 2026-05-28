# V1AverageDeliveryTimeDetailsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **number** | Идентификатор кластера. | [default to undefined]
**filters** | [**AverageDeliveryTimeDetailsRequestFilters**](AverageDeliveryTimeDetailsRequestFilters.md) |  | [optional] [default to undefined]
**limit** | **number** | Количество элементов в ответе.  | [default to 100]
**offset** | **number** | Количество элементов, которое будет пропущено в ответе.  Например, если &#x60;offset&#x3D;10&#x60;, ответ начнётся с 11-го найденного элемента.  | [default to 0]

## Example

```typescript
import { V1AverageDeliveryTimeDetailsRequest } from './api';

const instance: V1AverageDeliveryTimeDetailsRequest = {
    cluster_id,
    filters,
    limit,
    offset,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
