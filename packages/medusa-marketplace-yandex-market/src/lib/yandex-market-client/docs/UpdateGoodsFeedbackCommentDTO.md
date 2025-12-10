# UpdateGoodsFeedbackCommentDTO

Комментарий к отзыву или другому комментарию.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор комментария к отзыву.  | [optional] [default to undefined]
**parentId** | **number** | Идентификатор родительского комментария, на который нужно ответить. | [optional] [default to undefined]
**text** | **string** | Текст комментария.  Не должен содержать контакты магазина и ссылки на сайты, кроме Маркета.  | [default to undefined]

## Example

```typescript
import { UpdateGoodsFeedbackCommentDTO } from './api';

const instance: UpdateGoodsFeedbackCommentDTO = {
    id,
    parentId,
    text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
