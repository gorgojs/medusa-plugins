# V1ReceiptsSellerListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_next** | **boolean** | Признак, что в ответе вернулись не все записи:  - &#x60;true&#x60; — сделайте повторный запрос с новым параметром &#x60;page&#x60;, чтобы получить остальные значения;  - &#x60;false&#x60; — ответ содержит все записи с чеками.  | [optional] [default to undefined]
**receipts** | [**Array&lt;ReceiptsSellerListResponseReceipt&gt;**](ReceiptsSellerListResponseReceipt.md) | Информация о чеках. | [optional] [default to undefined]

## Example

```typescript
import { V1ReceiptsSellerListResponse } from './api';

const instance: V1ReceiptsSellerListResponse = {
    has_next,
    receipts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
