# PostingGetFbsPostingByBarcodeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**barcode** | **string** | Штрихкод отправления. Можно получить с помощью методов: [/v3/posting/fbs/get](#operation/PostingAPI_GetFbsPostingV3), [/v3/posting/fbs/list](#operation/PostingAPI_GetFbsPostingListV3) и [/v3/posting/fbs/unfulfilled/list](#operation/PostingAPI_GetFbsPostingUnfulfilledList) в массиве &#x60;barcodes&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { PostingGetFbsPostingByBarcodeRequest } from './api';

const instance: PostingGetFbsPostingByBarcodeRequest = {
    barcode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
