# V2ReturnsRfbsRejectRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**return_id** | **number** | Идентификатор заявки на возврат. | [default to undefined]
**comment** | **string** | Комментарий.  Передайте комментарий, если в ответе метода [/v2/returns/rfbs/get](#operation/RFBSReturnsAPI_ReturnsRfbsGetV2) параметр &#x60;rejection_reason.is_comment_required&#x60; — &#x60;true&#x60;.  | [optional] [default to undefined]
**rejection_reason_id** | **number** | Идентификатор причины отмены.  Передайте идентификатор из списка причин, полученного в ответе метода [/v2/returns/rfbs/get](#operation/RFBSReturnsAPI_ReturnsRfbsGetV2) в параметре &#x60;rejection_reason&#x60;.  | [default to undefined]

## Example

```typescript
import { V2ReturnsRfbsRejectRequest } from './api';

const instance: V2ReturnsRfbsRejectRequest = {
    return_id,
    comment,
    rejection_reason_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
