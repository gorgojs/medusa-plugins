# V1SearchQueriesTextResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offset** | **string** | Количество поисковых запросов на странице. | [optional] [default to undefined]
**search_queries** | [**Array&lt;V1SearchQueriesTextResponseSearchQuery&gt;**](V1SearchQueriesTextResponseSearchQuery.md) | Информация о поисковых запросах. | [optional] [default to undefined]
**total** | **string** | Общее количество поисковых запросов. | [optional] [default to undefined]

## Example

```typescript
import { V1SearchQueriesTextResponse } from './api';

const instance: V1SearchQueriesTextResponse = {
    offset,
    search_queries,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
