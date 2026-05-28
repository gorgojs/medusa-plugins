# V1ReceiptsSellerListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **number** | Количество страниц, которое нужно пропустить. | [optional] [default to 0]
**page_size** | **number** | Количество элементов на странице. | [optional] [default to 100]
**posting_numbers** | **Array&lt;string&gt;** | Фильтр по номерам отправлений. | [optional] [default to undefined]

## Example

```typescript
import { V1ReceiptsSellerListRequest } from './api';

const instance: V1ReceiptsSellerListRequest = {
    page,
    page_size,
    posting_numbers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
