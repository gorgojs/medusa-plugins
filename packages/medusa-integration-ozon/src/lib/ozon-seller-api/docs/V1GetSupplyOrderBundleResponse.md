# V1GetSupplyOrderBundleResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;V1ItemResponse&gt;**](V1ItemResponse.md) | Список товаров в заявке на поставку. | [optional] [default to undefined]
**total_count** | **number** | Количество товаров в заявке. | [optional] [default to undefined]
**has_next** | **boolean** | Признак, что в ответе вернули не все товары: - &#x60;true&#x60; — сделайте повторный запрос с другим значением &#x60;last_id&#x60;, чтобы получить остальные значения; - &#x60;false&#x60; — ответ содержит все значения характеристики.  | [optional] [default to undefined]
**last_id** | **string** | Идентификатор последнего значения на странице. | [optional] [default to undefined]

## Example

```typescript
import { V1GetSupplyOrderBundleResponse } from './api';

const instance: V1GetSupplyOrderBundleResponse = {
    items,
    total_count,
    has_next,
    last_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
