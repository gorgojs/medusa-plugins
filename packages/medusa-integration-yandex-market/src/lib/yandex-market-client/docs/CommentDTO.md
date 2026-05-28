# CommentDTO

Комментарий к ответу.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор комментария к ответу.  | [default to undefined]
**text** | **string** | Текстовое содержимое.  | [default to undefined]
**canModify** | **boolean** | Может ли продавец изменять комментарий или удалять его. | [optional] [default to undefined]
**parentId** | **number** | Идентификатор комментария к ответу.  | [optional] [default to undefined]
**author** | [**QuestionsTextContentAuthorDTO**](QuestionsTextContentAuthorDTO.md) |  | [optional] [default to undefined]
**status** | [**QuestionsTextContentModerationStatusType**](QuestionsTextContentModerationStatusType.md) |  | [default to undefined]
**answerId** | **number** | Идентификатор ответа на вопрос.  | [default to undefined]
**createdAt** | **string** | Дата создания комментария. | [default to undefined]
**votes** | [**VotesDTO**](VotesDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CommentDTO } from './api';

const instance: CommentDTO = {
    id,
    text,
    canModify,
    parentId,
    author,
    status,
    answerId,
    createdAt,
    votes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
