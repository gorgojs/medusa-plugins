# V1FbpDraftDirectSellerDlvCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_id** | **string** | Идентификатор провалидированного списка товаров. | [optional] [default to undefined]
**delivery_details** | [**V1FbpDraftDirectSellerDlvCreateRequestDirectDetails**](V1FbpDraftDirectSellerDlvCreateRequestDirectDetails.md) |  | [optional] [default to undefined]
**package_units_count** | **number** | Количество грузомест. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада продавца. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpDraftDirectSellerDlvCreateRequest } from './api';

const instance: V1FbpDraftDirectSellerDlvCreateRequest = {
    bundle_id,
    delivery_details,
    package_units_count,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
