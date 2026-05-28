# V1QuestionListRequestFilter

Фильтр.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_from** | **string** | Начало периода. | [optional] [default to undefined]
**date_to** | **string** | Конец периода. | [optional] [default to undefined]
**status** | **string** | Статусы вопроса:   - &#x60;NEW&#x60; — новый,   - &#x60;ALL&#x60; — все вопросы,   - &#x60;VIEWED&#x60; — просмотренный,   - &#x60;PROCESSED&#x60; — обработанный,   - &#x60;UNPROCESSED&#x60; — необработанный.  | [optional] [default to undefined]

## Example

```typescript
import { V1QuestionListRequestFilter } from './api';

const instance: V1QuestionListRequestFilter = {
    date_from,
    date_to,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
