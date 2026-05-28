# V2PostingFBSActListRelatedDocsActOfMismatch

Информация про акт о расхождениях.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | Дата создания перевозки. | [optional] [default to undefined]
**document_status** | **string** | Статус перевозки или акта:   - &#x60;NEED_TO_SIGN&#x60; — требуется подпись,   - &#x60;ON_CONFIRMATION&#x60; — на подписании Ozon,   - &#x60;CONFIRMED&#x60; — подписан Ozon,   - &#x60;DISPUTE_OPENED&#x60; — принят по грузовым местам,   - &#x60;PRINTED_CARRIAGE&#x60; — электронная подпись не нужна,   - &#x60;UNKNOWN_ERROR&#x60; — ошибка.  | [optional] [default to undefined]

## Example

```typescript
import { V2PostingFBSActListRelatedDocsActOfMismatch } from './api';

const instance: V2PostingFBSActListRelatedDocsActOfMismatch = {
    created_at,
    document_status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
