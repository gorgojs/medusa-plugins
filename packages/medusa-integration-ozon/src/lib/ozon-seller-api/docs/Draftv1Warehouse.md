# Draftv1Warehouse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_ids** | [**Array&lt;V1BundleId&gt;**](V1BundleId.md) | Товарный состав в виде комплекта. | [optional] [default to undefined]
**restricted_bundle_id** | **string** | Комплект товаров, которые не попадают в поставку. Используйте параметр в методе [/v1/supply-order/bundle](#operation/SupplyOrderBundle), чтобы получить подробную информацию.  | [optional] [default to undefined]
**status** | [**V1WarehouseStatus**](V1WarehouseStatus.md) |  | [optional] [default to undefined]
**supply_warehouse** | [**V1SupplyWarehouse**](V1SupplyWarehouse.md) |  | [optional] [default to undefined]
**total_rank** | **number** | Ранг склада в кластере. | [optional] [default to undefined]
**total_score** | **number** | Рейтинг склада. | [optional] [default to undefined]
**travel_time_days** | **number** | Предполагаемый срок доставки. | [optional] [default to undefined]

## Example

```typescript
import { Draftv1Warehouse } from './api';

const instance: Draftv1Warehouse = {
    bundle_ids,
    restricted_bundle_id,
    status,
    supply_warehouse,
    total_rank,
    total_score,
    travel_time_days,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
