# V1PostingFbsSplitResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_posting** | [**V1PostingFbsSplitResponsePostingParent**](V1PostingFbsSplitResponsePostingParent.md) |  | [optional] [default to undefined]
**postings** | [**Array&lt;V1PostingFbsSplitResponsePosting&gt;**](V1PostingFbsSplitResponsePosting.md) | Список отправлений, на которые разделился заказ. | [optional] [default to undefined]

## Example

```typescript
import { V1PostingFbsSplitResponse } from './api';

const instance: V1PostingFbsSplitResponse = {
    parent_posting,
    postings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
