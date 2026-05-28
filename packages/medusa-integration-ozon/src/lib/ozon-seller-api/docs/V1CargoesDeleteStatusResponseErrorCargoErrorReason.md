# V1CargoesDeleteStatusResponseErrorCargoErrorReason


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cargo_id** | **number** | Идентификатор грузоместа. | [optional] [default to undefined]
**error_reasons** | [**Array&lt;V1CargoesDeleteStatusResponseErrorCargoErrorReasonErrorReasonEnum&gt;**](V1CargoesDeleteStatusResponseErrorCargoErrorReasonErrorReasonEnum.md) | Список ошибок грузоместа.  Если значение &#x60;CARGO_NOT_FOUND&#x60;, грузоместо не найдено.  | [optional] [default to undefined]

## Example

```typescript
import { V1CargoesDeleteStatusResponseErrorCargoErrorReason } from './api';

const instance: V1CargoesDeleteStatusResponseErrorCargoErrorReason = {
    cargo_id,
    error_reasons,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
