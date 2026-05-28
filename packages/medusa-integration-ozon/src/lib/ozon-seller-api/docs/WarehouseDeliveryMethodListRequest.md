# WarehouseDeliveryMethodListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**DeliveryMethodListRequestFilter**](DeliveryMethodListRequestFilter.md) |  | [optional] [default to undefined]
**limit** | **number** | Количество элементов в ответе. Максимум — 50, минимум — 1. | [default to undefined]
**offset** | **number** | Количество элементов, которое будет пропущено в ответе. Например, если &#x60;offset &#x3D; 10&#x60;, то ответ начнётся с 11-го найденного элемента. | [optional] [default to undefined]

## Example

```typescript
import { WarehouseDeliveryMethodListRequest } from './api';

const instance: WarehouseDeliveryMethodListRequest = {
    filter,
    limit,
    offset,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
