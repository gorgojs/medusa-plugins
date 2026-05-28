# RatingValuePast

Предыдущее значение рейтинга.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_from** | **string** | Дата начала подсчёта рейтинга. | [optional] [default to undefined]
**date_to** | **string** | Дата конца подсчёта рейтинга. | [optional] [default to undefined]
**formatted** | **string** | Отформатированное значение рейтинга. | [optional] [default to undefined]
**status** | [**V1RatingStatus**](V1RatingStatus.md) |  | [optional] [default to undefined]
**value** | **number** | Значение рейтинга в системе. | [optional] [default to undefined]

## Example

```typescript
import { RatingValuePast } from './api';

const instance: RatingValuePast = {
    date_from,
    date_to,
    formatted,
    status,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
