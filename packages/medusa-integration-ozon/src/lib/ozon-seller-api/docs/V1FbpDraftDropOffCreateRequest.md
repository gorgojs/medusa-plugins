# V1FbpDraftDropOffCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_id** | **string** | Идентификатор провалидированного списка товаров. | [optional] [default to undefined]
**delivery_details** | [**V1FbpDraftDropOffCreateRequestDeliveryDetails**](V1FbpDraftDropOffCreateRequestDeliveryDetails.md) |  | [optional] [default to undefined]
**package_units_count** | **number** | Количество грузомест. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада продавца. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpDraftDropOffCreateRequest } from './api';

const instance: V1FbpDraftDropOffCreateRequest = {
    bundle_id,
    delivery_details,
    package_units_count,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
