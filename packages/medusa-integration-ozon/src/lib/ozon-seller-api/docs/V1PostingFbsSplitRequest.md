# V1PostingFbsSplitRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**posting_number** | **string** | Номер отправления. | [default to undefined]
**postings** | [**Array&lt;V1PostingFbsSplitRequestPosting&gt;**](V1PostingFbsSplitRequestPosting.md) | Список отправлений, на которые поделится заказ. За один запрос можно разделить один заказ. | [default to undefined]

## Example

```typescript
import { V1PostingFbsSplitRequest } from './api';

const instance: V1PostingFbsSplitRequest = {
    posting_number,
    postings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
