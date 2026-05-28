# V1SetProductStairwayDiscountByQuantityResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted** | **boolean** | &#x60;true&#x60;, если запрос принят. Используйте метод [/v1/product/stairway-discount/by-quantity/get](#operation/ProductAPI_GetProductStairwayDiscountByQuantity), чтобы узнать результат изменения скидки.  | [optional] [default to undefined]
**errors** | [**Array&lt;V1SetProductStairwayDiscountByQuantityResponseError&gt;**](V1SetProductStairwayDiscountByQuantityResponseError.md) | Описание ошибок. | [optional] [default to undefined]
**warnings** | [**Array&lt;V1SetProductStairwayDiscountByQuantityResponseError&gt;**](V1SetProductStairwayDiscountByQuantityResponseError.md) | Описание предупреждения. | [optional] [default to undefined]

## Example

```typescript
import { V1SetProductStairwayDiscountByQuantityResponse } from './api';

const instance: V1SetProductStairwayDiscountByQuantityResponse = {
    accepted,
    errors,
    warnings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
