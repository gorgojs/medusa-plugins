# ProductV1QuantListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Указатель для выборки следующих данных. | [optional] [default to undefined]
**products** | [**Array&lt;ProductV1QuantListResponseProducts&gt;**](ProductV1QuantListResponseProducts.md) | Эконом-товары. | [optional] [default to undefined]
**total_items** | **number** | Остаток на всех складах, шт. | [optional] [default to undefined]

## Example

```typescript
import { ProductV1QuantListResponse } from './api';

const instance: ProductV1QuantListResponse = {
    cursor,
    products,
    total_items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
