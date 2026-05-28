# V1RatingItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change** | [**RatingItemChange**](RatingItemChange.md) |  | [optional] [default to undefined]
**current_value** | **number** | Текущее значение рейтинга. | [optional] [default to undefined]
**name** | **string** | Название рейтинга. | [optional] [default to undefined]
**past_value** | **number** | Предыдущее значение рейтинга. | [optional] [default to undefined]
**rating** | **string** | Название рейтинга в системе. | [optional] [default to undefined]
**rating_direction** | **string** | Каким должно быть значение рейтинга, чтобы оно считалось хорошим: - &#x60;UNKNOWN_DIRECTION&#x60; — не определено. - &#x60;NEUTRAL&#x60; — неважно. - &#x60;HIGHER_IS_BETTER&#x60; — чем выше, тем лучше. - &#x60;LOWER_IS_BETTER&#x60; — чем ниже, тем лучше.  | [optional] [default to undefined]
**status** | **string** | Статус рейтинга: - &#x60;UNKNOWN_STATUS&#x60; — не определён. - &#x60;OK&#x60; — все хорошо. - &#x60;WARNING&#x60; — показатели требуют внимания. - &#x60;CRITICAL&#x60; — критичный рейтинг.  | [optional] [default to undefined]
**value_type** | **string** | Тип значения: - &#x60;UNKNOWN_VALUE&#x60; — не определён. - &#x60;INDEX&#x60; — индекс. - &#x60;PERCENT&#x60; — процент. - &#x60;TIME&#x60; — время. - &#x60;RATIO&#x60; — коэффициент. - &#x60;REVIEW_SCORE&#x60; — оценка. - &#x60;COUNT&#x60; — счёт.  | [optional] [default to undefined]

## Example

```typescript
import { V1RatingItem } from './api';

const instance: V1RatingItem = {
    change,
    current_value,
    name,
    past_value,
    rating,
    rating_direction,
    status,
    value_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
