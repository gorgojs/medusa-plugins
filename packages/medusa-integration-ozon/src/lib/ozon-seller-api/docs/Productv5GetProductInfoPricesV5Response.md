# Productv5GetProductInfoPricesV5Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Указатель для выборки следующих данных. | [optional] [default to undefined]
**items** | [**Array&lt;ProductGetProductInfoPricesV5ResponseItem&gt;**](ProductGetProductInfoPricesV5ResponseItem.md) | Список товаров. | [optional] [default to undefined]
**total** | **number** | Количество товаров в списке. | [optional] [default to undefined]

## Example

```typescript
import { Productv5GetProductInfoPricesV5Response } from './api';

const instance: Productv5GetProductInfoPricesV5Response = {
    cursor,
    items,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
