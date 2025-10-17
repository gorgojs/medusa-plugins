# GetCategoriesMaxSaleQuantumResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**ApiResponseStatusType**](ApiResponseStatusType.md) |  | [default to undefined]
**results** | [**Array&lt;MaxSaleQuantumDTO&gt;**](MaxSaleQuantumDTO.md) | Категории и лимит на установку кванта и минимального количества товаров. | [default to undefined]
**errors** | [**Array&lt;CategoryErrorDTO&gt;**](CategoryErrorDTO.md) | Ошибки, которые появились из-за переданных категорий. | [optional] [default to undefined]

## Example

```typescript
import { GetCategoriesMaxSaleQuantumResponse } from './api';

const instance: GetCategoriesMaxSaleQuantumResponse = {
    status,
    results,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
