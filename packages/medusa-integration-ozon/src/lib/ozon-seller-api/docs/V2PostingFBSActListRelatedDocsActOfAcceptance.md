# V2PostingFBSActListRelatedDocsActOfAcceptance

Информация про акт приёма-передачи.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | Дата создания акта. | [optional] [default to undefined]
**document_status** | **string** | Статус акта:   - &#x60;FORMING&#x60; — ещё не готов,   - &#x60;FORMED&#x60; — сформирован,   - &#x60;CONFIRMED&#x60; — подписан Ozon,   - &#x60;CONFIRMED_WITH_MISMATCH&#x60; — подписан Ozon с расхождениями,   - &#x60;ACCEPTED_BY_CARGO_PLACES&#x60; — принят по грузовым местам,   - &#x60;PRINTED_CARRIAGE&#x60; — электронная подпись не нужна,   - &#x60;ERROR&#x60;, &#x60;UNKNOWN_ERROR&#x60; — ошибка.  | [optional] [default to undefined]

## Example

```typescript
import { V2PostingFBSActListRelatedDocsActOfAcceptance } from './api';

const instance: V2PostingFBSActListRelatedDocsActOfAcceptance = {
    created_at,
    document_status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
