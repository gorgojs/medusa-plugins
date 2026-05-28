# CommentListResponseComment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор комментария. | [optional] [default to undefined]
**is_official** | **boolean** | &#x60;true&#x60;, если комментарий оставило официальное лицо, &#x60;false&#x60; — покупатель.  | [optional] [default to undefined]
**is_owner** | **boolean** | &#x60;true&#x60;, если комментарий оставил продавец, &#x60;false&#x60; — покупатель.  | [optional] [default to undefined]
**parent_comment_id** | **string** | Идентификатор родительского комментария, на который нужно ответить. | [optional] [default to undefined]
**published_at** | **string** | Дата публикации комментария. | [optional] [default to undefined]
**text** | **string** | Текст комментария. | [optional] [default to undefined]

## Example

```typescript
import { CommentListResponseComment } from './api';

const instance: CommentListResponseComment = {
    id,
    is_official,
    is_owner,
    parent_comment_id,
    published_at,
    text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
