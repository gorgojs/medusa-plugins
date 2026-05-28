# V1PostingCancelRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**posting_number** | **string** | Номер отправления. | [default to undefined]
**reason_id** | **number** | Идентификатор причины отмены. | [default to undefined]
**reason_message** | **string** | Дополнительная информация по отмене. | [optional] [default to undefined]

## Example

```typescript
import { V1PostingCancelRequest } from './api';

const instance: V1PostingCancelRequest = {
    posting_number,
    reason_id,
    reason_message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
