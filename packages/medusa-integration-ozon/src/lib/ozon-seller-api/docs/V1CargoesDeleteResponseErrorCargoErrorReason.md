# V1CargoesDeleteResponseErrorCargoErrorReason


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cargo_id** | **number** | Идентификатор грузоместа. | [optional] [default to undefined]
**error_reasons** | [**Array&lt;V1CargoesDeleteResponseErrorCargoErrorReasonErrorReasonEnum&gt;**](V1CargoesDeleteResponseErrorCargoErrorReasonErrorReasonEnum.md) | Список ошибок грузоместа.  Если значение &#x60;CARGO_NOT_FOUND&#x60;, грузоместо не найдено.  | [optional] [default to undefined]

## Example

```typescript
import { V1CargoesDeleteResponseErrorCargoErrorReason } from './api';

const instance: V1CargoesDeleteResponseErrorCargoErrorReason = {
    cargo_id,
    error_reasons,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
