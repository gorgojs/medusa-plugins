# SupplyOrderDetailsResponseSupply


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellation_allowability** | [**SupplyCancellationAllowability**](SupplyCancellationAllowability.md) |  | [optional] [default to undefined]
**content** | [**SupplyContent**](SupplyContent.md) |  | [optional] [default to undefined]
**ettn_info** | [**SupplyETTN**](SupplyETTN.md) |  | [optional] [default to undefined]
**is_crossdock** | **boolean** | &#x60;true&#x60;, если поставка кросс-докинг.  | [optional] [default to undefined]
**overdue_reason** | [**SupplyOverdueReasonEnum**](SupplyOverdueReasonEnum.md) |  | [optional] [default to undefined]
**storage_warehouse** | [**SupplyStorageWarehouse**](SupplyStorageWarehouse.md) |  | [optional] [default to undefined]
**supply_id** | **number** | Идентификатор поставки. | [optional] [default to undefined]
**supply_state** | [**SupplyStateEnum**](SupplyStateEnum.md) |  | [optional] [default to undefined]
**supply_tags** | [**SupplyTags**](SupplyTags.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SupplyOrderDetailsResponseSupply } from './api';

const instance: SupplyOrderDetailsResponseSupply = {
    cancellation_allowability,
    content,
    ettn_info,
    is_crossdock,
    overdue_reason,
    storage_warehouse,
    supply_id,
    supply_state,
    supply_tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
