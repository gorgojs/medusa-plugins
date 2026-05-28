# V1FbpDraftListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_next** | **boolean** | &#x60;true&#x60;, если в ответе вернулись не все значения.  | [optional] [default to undefined]
**items** | [**Array&lt;V1FbpDraftListResponseItem&gt;**](V1FbpDraftListResponseItem.md) | Черновики. | [optional] [default to undefined]
**last_id** | **number** | Идентификатор последнего значения на странице. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpDraftListResponse } from './api';

const instance: V1FbpDraftListResponse = {
    has_next,
    items,
    last_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
