# AnswerDTO

Ответ на вопрос.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор ответа на вопрос.  | [default to undefined]
**text** | **string** | Текстовое содержимое.  | [default to undefined]
**canModify** | **boolean** | Может ли продавец изменять комментарий или удалять его. | [default to undefined]
**author** | [**QuestionsTextContentAuthorDTO**](QuestionsTextContentAuthorDTO.md) |  | [optional] [default to undefined]
**status** | [**QuestionsTextContentModerationStatusType**](QuestionsTextContentModerationStatusType.md) |  | [default to undefined]
**questionId** | **number** | Идентификатор вопроса.  | [default to undefined]
**createdAt** | **string** | Дата и время создания ответа. | [default to undefined]
**votes** | [**VotesDTO**](VotesDTO.md) |  | [default to undefined]
**comments** | [**Array&lt;CommentDTO&gt;**](CommentDTO.md) | Список комментариев. | [optional] [default to undefined]

## Example

```typescript
import { AnswerDTO } from './api';

const instance: AnswerDTO = {
    id,
    text,
    canModify,
    author,
    status,
    questionId,
    createdAt,
    votes,
    comments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
