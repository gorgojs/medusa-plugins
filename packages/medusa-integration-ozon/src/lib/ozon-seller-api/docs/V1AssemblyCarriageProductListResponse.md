# V1AssemblyCarriageProductListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Указатель для выборки следующих данных. Если параметр пустой, данных больше нет. | [optional] [default to undefined]
**products** | [**Array&lt;V1AssemblyCarriageProductListResponseProduct&gt;**](V1AssemblyCarriageProductListResponseProduct.md) | Список товаров. | [optional] [default to undefined]

## Example

```typescript
import { V1AssemblyCarriageProductListResponse } from './api';

const instance: V1AssemblyCarriageProductListResponse = {
    cursor,
    products,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
