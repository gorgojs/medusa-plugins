# RatingItemChange

Изменение рейтинга: отношение предыдущего значения к текущему. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **string** | Как изменилось значение рейтинга: - &#x60;DIRECTION_UNKNOWN&#x60; — не определено. - &#x60;DIRECTION_NONE&#x60; — не изменилось. - &#x60;DIRECTION_RISE&#x60; — выросло. - &#x60;DIRECTION_FALL&#x60; — упало.  | [optional] [default to undefined]
**meaning** | **string** | Что означает изменение: - &#x60;MEANING_UNKNOWN&#x60; — неизвестно. - &#x60;MEANING_NONE&#x60; — нейтрально. - &#x60;MEANING_GOOD&#x60; — показатель улучшается, всё хорошо. - &#x60;MEANING_BAD&#x60; — показатель падает, нужно что-то сделать.  | [optional] [default to undefined]

## Example

```typescript
import { RatingItemChange } from './api';

const instance: RatingItemChange = {
    direction,
    meaning,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
