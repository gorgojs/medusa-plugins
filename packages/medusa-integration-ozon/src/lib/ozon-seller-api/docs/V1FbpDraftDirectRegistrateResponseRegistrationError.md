# V1FbpDraftDirectRegistrateResponseRegistrationError

Ошибка.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_errors** | [**Array&lt;V1FbpDraftDirectRegistrateResponseRegistrationErrorBundleError&gt;**](V1FbpDraftDirectRegistrateResponseRegistrationErrorBundleError.md) | Ошибки провалидированного списка товара. | [optional] [default to undefined]
**order_error** | [**V1OrderErrorTypeEnum**](V1OrderErrorTypeEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1FbpDraftDirectRegistrateResponseRegistrationError } from './api';

const instance: V1FbpDraftDirectRegistrateResponseRegistrationError = {
    bundle_errors,
    order_error,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
