# PostingPostingFinancialData

Финансовые данные.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_from** | **string** | Код региона, откуда отправляется заказ. | [optional] [default to undefined]
**cluster_to** | **string** | Код региона, куда доставляется заказ. | [optional] [default to undefined]
**products** | [**Array&lt;PostingFinancialDataProduct&gt;**](PostingFinancialDataProduct.md) | Список товаров в заказе. | [optional] [default to undefined]

## Example

```typescript
import { PostingPostingFinancialData } from './api';

const instance: PostingPostingFinancialData = {
    cluster_from,
    cluster_to,
    products,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
