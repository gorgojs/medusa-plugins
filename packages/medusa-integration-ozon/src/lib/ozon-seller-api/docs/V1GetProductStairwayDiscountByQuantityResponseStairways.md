# V1GetProductStairwayDiscountByQuantityResponseStairways


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **boolean** | &#x60;true&#x60;, если скидка от количества включена.  | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**stairway** | [**V1GetProductStairwayDiscountByQuantityResponseStairwaysStairway**](V1GetProductStairwayDiscountByQuantityResponseStairwaysStairway.md) |  | [optional] [default to undefined]
**status** | [**StatusEnum**](StatusEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1GetProductStairwayDiscountByQuantityResponseStairways } from './api';

const instance: V1GetProductStairwayDiscountByQuantityResponseStairways = {
    enabled,
    sku,
    stairway,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
