# V1DraftClusterListResponseWarehouse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Название склада. | [optional] [default to undefined]
**type** | **string** | Тип склада: - &#x60;FULL_FILLMENT&#x60; — фулфилмент, - &#x60;EXPRESS_DARK_STORE&#x60; — даркстор, - &#x60;SORTING_CENTER&#x60; — сортировочный центр, - &#x60;ORDERS_RECEIVING_POINT&#x60; — пункт приёма заказов, - &#x60;CROSS_DOCK&#x60; — кросс-докинг, - &#x60;DISTRIBUTION_CENTER&#x60; — распределительный центр.  | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]

## Example

```typescript
import { V1DraftClusterListResponseWarehouse } from './api';

const instance: V1DraftClusterListResponseWarehouse = {
    name,
    type,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
