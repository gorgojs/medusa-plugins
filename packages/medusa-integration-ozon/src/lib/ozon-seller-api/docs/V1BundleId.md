# V1BundleId


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_id** | **string** | Идентификатор комплекта. Используйте параметр в методе [/v1/supply-order/bundle](#operation/SupplyOrderBundle), чтобы получить подробную информацию.  | [optional] [default to undefined]
**is_docless** | **boolean** | Признак необходимости передачи УПД: - &#x60;true&#x60; — документы не требуются, - &#x60;false&#x60; — требуются.  | [optional] [default to undefined]

## Example

```typescript
import { V1BundleId } from './api';

const instance: V1BundleId = {
    bundle_id,
    is_docless,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
