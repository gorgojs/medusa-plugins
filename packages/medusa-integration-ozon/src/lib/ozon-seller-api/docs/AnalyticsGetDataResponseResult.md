# AnalyticsGetDataResponseResult

Результаты запроса.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Array&lt;AnalyticsDataRow&gt;**](AnalyticsDataRow.md) | Массив данных. | [optional] [default to undefined]
**totals** | **Array&lt;number&gt;** | Итоговые и средние значения метрик. | [optional] [default to undefined]

## Example

```typescript
import { AnalyticsGetDataResponseResult } from './api';

const instance: AnalyticsGetDataResponseResult = {
    data,
    totals,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
