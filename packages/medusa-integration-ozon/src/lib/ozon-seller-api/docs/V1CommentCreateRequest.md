# V1CommentCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mark_review_as_processed** | **boolean** | Обновление статуса у отзыва: - &#x60;true&#x60; — статус изменится на &#x60;Processed&#x60;. - &#x60;false&#x60; — статус не изменится.  | [optional] [default to undefined]
**parent_comment_id** | **string** | Идентификатор родительского комментария, на который вы отвечаете. | [optional] [default to undefined]
**review_id** | **string** | Идентификатор отзыва. | [default to undefined]
**text** | **string** | Текст комментария. | [default to undefined]

## Example

```typescript
import { V1CommentCreateRequest } from './api';

const instance: V1CommentCreateRequest = {
    mark_review_as_processed,
    parent_comment_id,
    review_id,
    text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
