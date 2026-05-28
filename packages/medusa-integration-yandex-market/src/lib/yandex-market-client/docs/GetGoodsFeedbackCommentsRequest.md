# GetGoodsFeedbackCommentsRequest

Фильтр запроса комментариев отзыва. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedbackId** | **number** | Идентификатор отзыва.  | [optional] [default to undefined]
**commentIds** | **Set&lt;number&gt;** | Идентификаторы комментариев.  ⚠️ Не используйте это поле одновременно с другими фильтрами. Если вы хотите воспользоваться ими, оставьте поле пустым.  | [optional] [default to undefined]

## Example

```typescript
import { GetGoodsFeedbackCommentsRequest } from './api';

const instance: GetGoodsFeedbackCommentsRequest = {
    feedbackId,
    commentIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
