# V1FbpOrderDirectCancelResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**V1OrderValidationError**](V1OrderValidationError.md) |  | [optional] [default to undefined]
**is_error** | **boolean** | &#x60;true&#x60;, если есть ошибка.  | [optional] [default to undefined]
**row_version** | **number** | Идентификатор актуальной версии черновика. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpOrderDirectCancelResponse } from './api';

const instance: V1FbpOrderDirectCancelResponse = {
    error,
    is_error,
    row_version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
