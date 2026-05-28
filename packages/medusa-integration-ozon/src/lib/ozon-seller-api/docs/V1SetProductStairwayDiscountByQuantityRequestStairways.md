# V1SetProductStairwayDiscountByQuantityRequestStairways

Информация о скидке от количества по конкретному товару.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | &#x60;true&#x60;, чтобы включить скидку.  | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**stairway** | [**V1SetProductStairwayDiscountByQuantityRequestStairwaysStairway**](V1SetProductStairwayDiscountByQuantityRequestStairwaysStairway.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1SetProductStairwayDiscountByQuantityRequestStairways } from './api';

const instance: V1SetProductStairwayDiscountByQuantityRequestStairways = {
    enabled,
    sku,
    stairway,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
