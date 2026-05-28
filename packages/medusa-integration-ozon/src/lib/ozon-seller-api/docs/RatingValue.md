# RatingValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_from** | **string** | Дата начала подсчёта рейтинга. | [optional] [default to undefined]
**date_to** | **string** | Дата конца подсчёта рейтинга. | [optional] [default to undefined]
**status** | [**V1RatingStatus**](V1RatingStatus.md) |  | [optional] [default to undefined]
**value** | **number** | Значение рейтинга. | [optional] [default to undefined]

## Example

```typescript
import { RatingValue } from './api';

const instance: RatingValue = {
    date_from,
    date_to,
    status,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
