# V1FbpDraftDirectCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_id** | **string** | Идентификатор провалидированного списка товаров. Чтобы получить, используйте метод [/v1/fbp/draft/direct/product/validate](#operation/FbpDraftDirectProductValidate). | [optional] [default to undefined]
**delivery_details** | [**V1FbpDraftDirectCreateRequestDirectDetails**](V1FbpDraftDirectCreateRequestDirectDetails.md) |  | [optional] [default to undefined]
**package_units_count** | **number** | Количество единиц упаковки. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpDraftDirectCreateRequest } from './api';

const instance: V1FbpDraftDirectCreateRequest = {
    bundle_id,
    delivery_details,
    package_units_count,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
