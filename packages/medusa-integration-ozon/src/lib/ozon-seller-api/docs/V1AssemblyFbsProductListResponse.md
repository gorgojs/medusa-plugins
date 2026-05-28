# V1AssemblyFbsProductListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_next** | **boolean** | Признак, что в ответе вернули не все товары:  - &#x60;true&#x60; — сделайте повторный запрос с другим значением &#x60;offset&#x60;, чтобы получить остальные значения; - &#x60;false&#x60; — ответ содержит все значения.  | [optional] [default to undefined]
**products** | [**Array&lt;AssemblyFbsProductListResponseProducts&gt;**](AssemblyFbsProductListResponseProducts.md) | Список товаров. | [optional] [default to undefined]
**products_count** | **number** | Количество товаров. | [optional] [default to undefined]

## Example

```typescript
import { V1AssemblyFbsProductListResponse } from './api';

const instance: V1AssemblyFbsProductListResponse = {
    has_next,
    products,
    products_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
