# V1FbpCreateActResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Array&lt;FbpCreateActResponseCreateActErrorReason&gt;**](FbpCreateActResponseCreateActErrorReason.md) | Причина ошибки: - &#x60;CREATE_ACT_ERROR_REASON_UNSPECIFIED&#x60; — не определена; - &#x60;INVALID_ORDER_TYPE&#x60; — нельзя создать акт для указанного идентификатора поставки.  | [optional] [default to undefined]
**file_uuid** | **string** | Идентификатор акта приёмки. | [optional] [default to undefined]
**is_success** | **boolean** | &#x60;true&#x60;, если в запросе нет ошибок.  | [optional] [default to undefined]

## Example

```typescript
import { V1FbpCreateActResponse } from './api';

const instance: V1FbpCreateActResponse = {
    errors,
    file_uuid,
    is_success,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
