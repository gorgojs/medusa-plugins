# V1AnalyticsProductQueriesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_from** | **string** | Дата начала формирования аналитики. | [default to undefined]
**date_to** | **string** | Дата окончания формирования аналитики. | [optional] [default to undefined]
**page** | **number** | Индекс страницы, которую возвращает запрос. | [optional] [default to undefined]
**page_size** | **number** | Количество элементов на странице. | [default to undefined]
**skus** | **Array&lt;string&gt;** | Список SKU, идентификаторов товара в системе Ozon. По ним вернётся аналитика по запросам. Максимум — 1000 SKU. | [default to undefined]
**sort_by** | [**AnalyticsProductQueriesRequestSortBy**](AnalyticsProductQueriesRequestSortBy.md) |  | [optional] [default to undefined]
**sort_dir** | [**AnalyticsProductQueriesRequestSortDir**](AnalyticsProductQueriesRequestSortDir.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1AnalyticsProductQueriesRequest } from './api';

const instance: V1AnalyticsProductQueriesRequest = {
    date_from,
    date_to,
    page,
    page_size,
    skus,
    sort_by,
    sort_dir,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
