# V2PostingFBSActListRelatedDocsActOfExcess

Информация про акт об излишках.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | Дата создания акта. | [optional] [default to undefined]
**document_status** | **string** | Статус акта:   - &#x60;NEED_TO_SIGN&#x60; — требуется подпись,   - &#x60;CONFIRMED&#x60; — подписан Ozon,   - &#x60;UNKNOWN_ERROR&#x60; — ошибка.  | [optional] [default to undefined]

## Example

```typescript
import { V2PostingFBSActListRelatedDocsActOfExcess } from './api';

const instance: V2PostingFBSActListRelatedDocsActOfExcess = {
    created_at,
    document_status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
