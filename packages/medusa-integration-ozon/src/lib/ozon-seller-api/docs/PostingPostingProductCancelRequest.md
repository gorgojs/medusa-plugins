# PostingPostingProductCancelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_reason_id** | **number** | Идентификатор причины отмены отправления товара. | [default to undefined]
**cancel_reason_message** | **string** | Обязательное поле. Дополнительная информация по отмене. | [default to undefined]
**items** | [**Array&lt;PostingProductCancelRequestItem&gt;**](PostingProductCancelRequestItem.md) | Информация о товарах. | [default to undefined]
**posting_number** | **string** | Идентификатор отправления. | [default to undefined]

## Example

```typescript
import { PostingPostingProductCancelRequest } from './api';

const instance: PostingPostingProductCancelRequest = {
    cancel_reason_id,
    cancel_reason_message,
    items,
    posting_number,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
