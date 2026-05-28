# PostingCancelReason


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор причины отмены.  | [optional] [default to undefined]
**is_available_for_cancellation** | **boolean** | Результат отмены отправления. &#x60;true&#x60;, если запрос доступен для отмены. | [optional] [default to undefined]
**title** | **string** | Название категории. | [optional] [default to undefined]
**type_id** | **string** | Инициатор отмены отправления: - &#x60;buyer&#x60; — покупатель, - &#x60;seller&#x60; — продавец.  | [optional] [default to undefined]

## Example

```typescript
import { PostingCancelReason } from './api';

const instance: PostingCancelReason = {
    id,
    is_available_for_cancellation,
    title,
    type_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
