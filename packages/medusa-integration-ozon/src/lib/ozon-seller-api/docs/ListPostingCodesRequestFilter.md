# ListPostingCodesRequestFilter

Фильтр для поиска отправлений.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**posting_number** | **Array&lt;string&gt;** | Номер отправления. | [optional] [default to undefined]
**since** | **string** | Начало периода в формате &#x60;YYYY-MM-DD&#x60;. | [optional] [default to undefined]
**to** | **string** | Конец периода в формате &#x60;YYYY-MM-DD&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { ListPostingCodesRequestFilter } from './api';

const instance: ListPostingCodesRequestFilter = {
    posting_number,
    since,
    to,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
