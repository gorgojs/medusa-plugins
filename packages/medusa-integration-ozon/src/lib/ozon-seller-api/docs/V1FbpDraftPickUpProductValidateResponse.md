# V1FbpDraftPickUpProductValidateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved_items** | [**Array&lt;V1FbpDraftPickUpProductValidateResponseApprovedItem&gt;**](V1FbpDraftPickUpProductValidateResponseApprovedItem.md) | Подтверждённые товары. | [optional] [default to undefined]
**bundle_generated** | **boolean** | &#x60;true&#x60;, если проверенный список товаров создан.  | [optional] [default to undefined]
**bundle_id** | **string** | Идентификатор провалидированного списка товаров. | [optional] [default to undefined]
**rejected_items** | [**Array&lt;V1FbpDraftPickUpProductValidateResponseRejectedItem&gt;**](V1FbpDraftPickUpProductValidateResponseRejectedItem.md) | Отклонённые товары. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpDraftPickUpProductValidateResponse } from './api';

const instance: V1FbpDraftPickUpProductValidateResponse = {
    approved_items,
    bundle_generated,
    bundle_id,
    rejected_items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
