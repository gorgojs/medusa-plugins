# AnalyticsFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | Параметр сортировки. Можно передать любой атрибут из параметров &#x60;dimension&#x60; и &#x60;metric&#x60;, кроме атрибута &#x60;brand&#x60;. | [optional] [default to undefined]
**op** | **string** | &lt;br&gt;  Операция сравнения:   - &#x60;EQ&#x60; — равно,   - &#x60;GT&#x60; — больше,   - &#x60;GTE&#x60; — больше или равно,   - &#x60;LT&#x60; — меньше,   - &#x60;LTE&#x60; — меньше или равно.  | [optional] [default to 'EQ']
**value** | **string** | Значение для сравнения. | [optional] [default to undefined]

## Example

```typescript
import { AnalyticsFilter } from './api';

const instance: AnalyticsFilter = {
    key,
    op,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
