# V1AnalyticsProductQueriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_period** | [**AnalyticsProductQueriesResponseAnalyticsPeriod**](AnalyticsProductQueriesResponseAnalyticsPeriod.md) |  | [optional] [default to undefined]
**items** | [**Array&lt;V1AnalyticsProductQueriesResponseItem&gt;**](V1AnalyticsProductQueriesResponseItem.md) | Список товаров. | [optional] [default to undefined]
**page_count** | **number** | Количество страниц. | [optional] [default to undefined]
**total** | **number** | Общее количество запросов. | [optional] [default to undefined]

## Example

```typescript
import { V1AnalyticsProductQueriesResponse } from './api';

const instance: V1AnalyticsProductQueriesResponse = {
    analytics_period,
    items,
    page_count,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
