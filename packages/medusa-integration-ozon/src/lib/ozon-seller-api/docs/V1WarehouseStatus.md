# V1WarehouseStatus

Доступность склада.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invalid_reason** | [**V1WarehouseScoringInvalidReason**](V1WarehouseScoringInvalidReason.md) |  | [optional] [default to undefined]
**is_available** | **boolean** | Доступность склада: - &#x60;true&#x60; — доступен, - &#x60;false&#x60; — недоступен.  | [optional] [default to undefined]
**state** | [**V1WarehouseScoringStatus**](V1WarehouseScoringStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1WarehouseStatus } from './api';

const instance: V1WarehouseStatus = {
    invalid_reason,
    is_available,
    state,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
