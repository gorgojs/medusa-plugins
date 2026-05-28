# V3GetFbsPostingListResponseV3Result

Массив отправлений.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_next** | **boolean** | Признак, что в ответе вернули не весь массив отправлений: - &#x60;true&#x60; — необходимо сделать новый запрос с другим значением &#x60;offset&#x60;, чтобы получить информацию об остальных отправлениях; - &#x60;false&#x60; — в ответе вернули весь массив отправлений для фильтра, который был задан в запросе.  | [optional] [default to undefined]
**postings** | [**Array&lt;V3FbsPosting&gt;**](V3FbsPosting.md) | Информация об отправлении. | [optional] [default to undefined]

## Example

```typescript
import { V3GetFbsPostingListResponseV3Result } from './api';

const instance: V3GetFbsPostingListResponseV3Result = {
    has_next,
    postings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
