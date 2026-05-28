# GetSupplyOrderBundleRequestItemTagsCalculation

Список складов для расчёта товарных тегов.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dropoff_warehouse_id** | **string** | Идентификатор склада отгрузки поставки. | [default to undefined]
**storage_warehouse_ids** | **Array&lt;string&gt;** | Список идентификаторов складов поставки, не больше 25 значений. | [default to undefined]

## Example

```typescript
import { GetSupplyOrderBundleRequestItemTagsCalculation } from './api';

const instance: GetSupplyOrderBundleRequestItemTagsCalculation = {
    dropoff_warehouse_id,
    storage_warehouse_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
