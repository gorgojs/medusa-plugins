# GetCategoriesMaxSaleQuantumDTO

Категории и лимит на установку кванта и минимального количества товаров.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**Array&lt;MaxSaleQuantumDTO&gt;**](MaxSaleQuantumDTO.md) | Категории и лимит на установку кванта и минимального количества товаров. | [default to undefined]
**errors** | [**Array&lt;CategoryErrorDTO&gt;**](CategoryErrorDTO.md) | Ошибки, которые появились из-за переданных категорий. | [optional] [default to undefined]

## Example

```typescript
import { GetCategoriesMaxSaleQuantumDTO } from './api';

const instance: GetCategoriesMaxSaleQuantumDTO = {
    results,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
