# V1FbpDraftPickUpRegistrateResponseRegistrationError

Ошибка.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_errors** | [**Array&lt;V1FbpDraftPickUpRegistrateResponseRegistrationErrorBundleError&gt;**](V1FbpDraftPickUpRegistrateResponseRegistrationErrorBundleError.md) | Ошибки провалидированного списка товаров. | [optional] [default to undefined]
**order_error** | [**V1OrderErrorTypeEnum**](V1OrderErrorTypeEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1FbpDraftPickUpRegistrateResponseRegistrationError } from './api';

const instance: V1FbpDraftPickUpRegistrateResponseRegistrationError = {
    bundle_errors,
    order_error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
