# V1QuestionAnswerListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answers** | [**Array&lt;V1QuestionAnswerListResponseAnswers&gt;**](V1QuestionAnswerListResponseAnswers.md) | Ответы. | [optional] [default to undefined]
**last_id** | **string** | Идентификатор последнего значения на странице.  Чтобы получить следующие значения, передайте полученное значение в следующем запросе в параметре &#x60;last_id&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { V1QuestionAnswerListResponse } from './api';

const instance: V1QuestionAnswerListResponse = {
    answers,
    last_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
