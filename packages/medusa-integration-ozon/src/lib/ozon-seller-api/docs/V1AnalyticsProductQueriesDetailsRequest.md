# V1AnalyticsProductQueriesDetailsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_from** | **string** | Дата начала формирования аналитики. | [default to undefined]
**date_to** | **string** | Дата окончания формирования аналитики. | [optional] [default to undefined]
**limit_by_sku** | **number** | Лимит числа запросов по одному SKU. Максимум — 15 запросов. | [default to undefined]
**page** | **number** | Номер страницы, возвращаемой в запросе. Минимум — 0. | [optional] [default to undefined]
**page_size** | **number** | Количество элементов на странице. Максимум — 100. | [default to undefined]
**skus** | **Array&lt;string&gt;** | Список SKU, идентификаторов товара в системе Ozon. По ним вернётся аналитика по запросам. Максимум — 1000 SKU. | [default to undefined]
**sort_by** | [**V1AnalyticsProductQueriesDetailsRequestSortBy**](V1AnalyticsProductQueriesDetailsRequestSortBy.md) |  | [optional] [default to undefined]
**sort_dir** | [**V1AnalyticsProductQueriesDetailsRequestSortDir**](V1AnalyticsProductQueriesDetailsRequestSortDir.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1AnalyticsProductQueriesDetailsRequest } from './api';

const instance: V1AnalyticsProductQueriesDetailsRequest = {
    date_from,
    date_to,
    limit_by_sku,
    page,
    page_size,
    skus,
    sort_by,
    sort_dir,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
