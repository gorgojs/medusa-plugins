# V1FbpDraftDropOffProductValidateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved_items** | [**Array&lt;V1FbpDraftDropOffProductValidateResponseApprovedItem&gt;**](V1FbpDraftDropOffProductValidateResponseApprovedItem.md) | Принятые товары. | [optional] [default to undefined]
**bundle_generated** | **boolean** | &#x60;true&#x60;, если создан товарный состав.  | [optional] [default to undefined]
**bundle_id** | **string** | Идентификатор провалидированного списка товаров. | [optional] [default to undefined]
**rejected_items** | [**Array&lt;V1FbpDraftDropOffProductValidateResponseRejectedItem&gt;**](V1FbpDraftDropOffProductValidateResponseRejectedItem.md) | Отклонённые товары. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpDraftDropOffProductValidateResponse } from './api';

const instance: V1FbpDraftDropOffProductValidateResponse = {
    approved_items,
    bundle_generated,
    bundle_id,
    rejected_items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
