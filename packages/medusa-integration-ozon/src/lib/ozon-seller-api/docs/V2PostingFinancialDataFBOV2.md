# V2PostingFinancialDataFBOV2

Финансовые данные.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_from** | **string** | Код региона, откуда отправляется заказ. | [optional] [default to undefined]
**cluster_to** | **string** | Код региона, куда доставляется заказ. | [optional] [default to undefined]
**products** | [**Array&lt;PostingFinancialDataProductV2&gt;**](PostingFinancialDataProductV2.md) | Список товаров в заказе. | [optional] [default to undefined]

## Example

```typescript
import { V2PostingFinancialDataFBOV2 } from './api';

const instance: V2PostingFinancialDataFBOV2 = {
    cluster_from,
    cluster_to,
    products,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
