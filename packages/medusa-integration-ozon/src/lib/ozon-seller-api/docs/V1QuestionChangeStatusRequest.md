# V1QuestionChangeStatusRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**question_ids** | **Array&lt;string&gt;** | Идентификаторы вопросов. | [default to undefined]
**status** | **string** | Статусы вопросов:   - &#x60;NEW&#x60; — новые,   - &#x60;VIEWED&#x60; — просмотренные,   - &#x60;PROCESSED&#x60; — обработанные.  | [default to undefined]

## Example

```typescript
import { V1QuestionChangeStatusRequest } from './api';

const instance: V1QuestionChangeStatusRequest = {
    question_ids,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
