# V1FbpDraftDirectSellerDlvEditResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**V1OrderDraftValidationError**](V1OrderDraftValidationError.md) |  | [optional] [default to undefined]
**is_error** | **boolean** | &#x60;true&#x60;, если есть ошибка.  | [optional] [default to undefined]
**row_version** | **number** | Идентификатор актуальной версии черновика. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpDraftDirectSellerDlvEditResponse } from './api';

const instance: V1FbpDraftDirectSellerDlvEditResponse = {
    error,
    is_error,
    row_version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
