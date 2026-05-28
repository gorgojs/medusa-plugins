# V1UploadPostingCodesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exemplars_by_sku** | [**Array&lt;UploadPostingCodesRequestPostingLineExemplarInfo&gt;**](UploadPostingCodesRequestPostingLineExemplarInfo.md) | Данные о кодах цифрового товара по SKU. | [optional] [default to undefined]
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]

## Example

```typescript
import { V1UploadPostingCodesRequest } from './api';

const instance: V1UploadPostingCodesRequest = {
    exemplars_by_sku,
    posting_number,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
