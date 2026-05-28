# V1AnalyticsProductQueriesDetailsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_period** | [**V1AnalyticsProductQueriesDetailsResponseAnalyticsPeriod**](V1AnalyticsProductQueriesDetailsResponseAnalyticsPeriod.md) |  | [optional] [default to undefined]
**page_count** | **number** | Количество страниц. | [optional] [default to undefined]
**queries** | [**Array&lt;AnalyticsProductQueriesDetailsResponseQuery&gt;**](AnalyticsProductQueriesDetailsResponseQuery.md) | Список запросов. | [optional] [default to undefined]
**total** | **number** | Общее количество запросов. | [optional] [default to undefined]

## Example

```typescript
import { V1AnalyticsProductQueriesDetailsResponse } from './api';

const instance: V1AnalyticsProductQueriesDetailsResponse = {
    analytics_period,
    page_count,
    queries,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
