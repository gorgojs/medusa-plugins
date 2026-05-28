# PostingCancelFbsPostingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_reason_id** | **number** | Идентификатор причины отмены отправления. | [optional] [default to undefined]
**cancel_reason_message** | **string** | Дополнительная информация по отмене. Если &#x60;cancel_reason_id &#x3D; 402&#x60;, параметр обязательный. | [optional] [default to undefined]
**posting_number** | **string** | Идентификатор отправления. | [optional] [default to undefined]

## Example

```typescript
import { PostingCancelFbsPostingRequest } from './api';

const instance: PostingCancelFbsPostingRequest = {
    cancel_reason_id,
    cancel_reason_message,
    posting_number,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
