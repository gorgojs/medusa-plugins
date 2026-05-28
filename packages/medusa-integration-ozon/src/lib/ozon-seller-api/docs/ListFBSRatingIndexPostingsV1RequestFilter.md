# ListFBSRatingIndexPostingsV1RequestFilter

Фильтр.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_from** | **string** | Дата начала периода. | [default to undefined]
**date_to** | **string** | Дата конца периода. | [default to undefined]
**posting_numbers** | **Array&lt;string&gt;** | Номера отправлений. | [optional] [default to undefined]

## Example

```typescript
import { ListFBSRatingIndexPostingsV1RequestFilter } from './api';

const instance: ListFBSRatingIndexPostingsV1RequestFilter = {
    date_from,
    date_to,
    posting_numbers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
