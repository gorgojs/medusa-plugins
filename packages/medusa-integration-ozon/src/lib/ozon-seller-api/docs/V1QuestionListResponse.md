# V1QuestionListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**questions** | [**Array&lt;V1QuestionListResponseQuestions&gt;**](V1QuestionListResponseQuestions.md) | Вопросы. | [optional] [default to undefined]
**last_id** | **string** | Идентификатор последнего значения на странице.  Чтобы получить следующие значения, передайте полученное значение в следующем запросе в параметре &#x60;last_id&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { V1QuestionListResponse } from './api';

const instance: V1QuestionListResponse = {
    questions,
    last_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
