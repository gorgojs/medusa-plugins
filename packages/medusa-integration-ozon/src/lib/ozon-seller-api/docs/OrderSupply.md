# OrderSupply


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_crossdock** | **boolean** | &#x60;true&#x60;, если поставка кросс-докинг.  | [optional] [default to undefined]
**bundle_id** | **string** | Идентификатор состава поставки. | [optional] [default to undefined]
**state** | [**OrderSupplyStateEnum**](OrderSupplyStateEnum.md) |  | [optional] [default to undefined]
**storage_warehouse** | [**SupplyStorageWarehouse**](SupplyStorageWarehouse.md) |  | [optional] [default to undefined]
**supply_id** | **number** | Идентификатор поставки. | [optional] [default to undefined]
**supply_tags** | [**SupplySupplyTags**](SupplySupplyTags.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderSupply } from './api';

const instance: OrderSupply = {
    is_crossdock,
    bundle_id,
    state,
    storage_warehouse,
    supply_id,
    supply_tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
