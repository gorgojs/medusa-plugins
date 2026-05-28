# V1FbpDraftDropOffRegistrateResponseRegistrationError

Ошибка.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_errors** | [**Array&lt;V1FbpDraftDropOffRegistrateResponseRegistrationErrorBundleError&gt;**](V1FbpDraftDropOffRegistrateResponseRegistrationErrorBundleError.md) | Ошибки провалидированного списка товаров. | [optional] [default to undefined]
**order_error** | [**V1OrderErrorTypeEnum**](V1OrderErrorTypeEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1FbpDraftDropOffRegistrateResponseRegistrationError } from './api';

const instance: V1FbpDraftDropOffRegistrateResponseRegistrationError = {
    bundle_errors,
    order_error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
