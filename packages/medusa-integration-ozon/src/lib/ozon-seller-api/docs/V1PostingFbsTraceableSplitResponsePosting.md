# V1PostingFbsTraceableSplitResponsePosting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**potential_blr_traceable** | **boolean** | Признак, что товар потенциально прослеживаемый:   - &#x60;true&#x60; — отправление считается прослеживаемым на данный момент. При сборке статус может измениться.  - &#x60;false&#x60; — отправление не прослеживаемое на данный момент или его статус неизвестный.  | [optional] [default to undefined]
**products** | [**Array&lt;PostingFbsTraceableSplitResponsePostingProduct&gt;**](PostingFbsTraceableSplitResponsePostingProduct.md) | Список товаров в отправлении. | [optional] [default to undefined]

## Example

```typescript
import { V1PostingFbsTraceableSplitResponsePosting } from './api';

const instance: V1PostingFbsTraceableSplitResponsePosting = {
    posting_number,
    potential_blr_traceable,
    products,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
