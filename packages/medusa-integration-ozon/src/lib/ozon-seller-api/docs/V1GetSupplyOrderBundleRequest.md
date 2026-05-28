# V1GetSupplyOrderBundleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_ids** | **Array&lt;string&gt;** | Идентификаторы товарного состава поставки. Можно получить в методе [/v3/supply-order/get](#operation/SupplyOrderGet). | [default to undefined]
**is_asc** | **boolean** | &#x60;true&#x60;, чтобы сортировать по возрастанию.  | [optional] [default to undefined]
**item_tags_calculation** | [**GetSupplyOrderBundleRequestItemTagsCalculation**](GetSupplyOrderBundleRequestItemTagsCalculation.md) |  | [optional] [default to undefined]
**last_id** | **string** | Идентификатор последнего значения SKU на странице. | [optional] [default to undefined]
**limit** | **number** | Количество товаров на странице. | [default to undefined]
**query** | **string** | Поисковый запрос, например: по названию, артикулу или SKU.  | [optional] [default to undefined]
**sort_field** | [**V1ItemSortField**](V1ItemSortField.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1GetSupplyOrderBundleRequest } from './api';

const instance: V1GetSupplyOrderBundleRequest = {
    bundle_ids,
    is_asc,
    item_tags_calculation,
    last_id,
    limit,
    query,
    sort_field,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
