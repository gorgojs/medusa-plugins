# PostingGetFboPostingListRequestFilter

Фильтр для поиска отправлений.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**since** | **string** | Начало периода. | [default to undefined]
**status** | **string** | Статус отправления. - &#x60;awaiting_packaging&#x60; — ожидает упаковки, - &#x60;awaiting_deliver&#x60; — ожидает отгрузки, - &#x60;delivering&#x60; — доставляется, - &#x60;delivered&#x60; — доставлено, - &#x60;cancelled&#x60; — отменено.  | [optional] [default to undefined]
**to** | **string** | Конец периода. | [default to undefined]

## Example

```typescript
import { PostingGetFboPostingListRequestFilter } from './api';

const instance: PostingGetFboPostingListRequestFilter = {
    since,
    status,
    to,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
