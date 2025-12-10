# GoodsFeedbackCommentDTO

Комментарий к отзыву.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор комментария к отзыву.  | [default to undefined]
**text** | **string** | Текст комментария.  Не должен содержать контакты магазина и ссылки на сайты, кроме Маркета.  | [default to undefined]
**canModify** | **boolean** | Может ли продавец изменять комментарий или удалять его. | [optional] [default to undefined]
**parentId** | **number** | Идентификатор родительского комментария. | [optional] [default to undefined]
**author** | [**GoodsFeedbackCommentAuthorDTO**](GoodsFeedbackCommentAuthorDTO.md) |  | [optional] [default to undefined]
**status** | [**GoodsFeedbackCommentStatusType**](GoodsFeedbackCommentStatusType.md) |  | [default to undefined]
**feedbackId** | **number** | Идентификатор отзыва.  | [default to undefined]

## Example

```typescript
import { GoodsFeedbackCommentDTO } from './api';

const instance: GoodsFeedbackCommentDTO = {
    id,
    text,
    canModify,
    parentId,
    author,
    status,
    feedbackId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
