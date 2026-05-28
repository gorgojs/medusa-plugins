# V1CargoesLabelCreateErrors

Ошибки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_reasons** | [**Array&lt;V1CargoesLabelCreateErrorsErrorReason&gt;**](V1CargoesLabelCreateErrorsErrorReason.md) | Причина ошибки:    - &#x60;INVALID_STATE&#x60; — недопустимое состояние поставки.    - &#x60;OPERATION_NOT_FOUND&#x60; — операция не найдена.    - &#x60;OPERATION_FAILED&#x60; — операция завершилась с ошибкой.    - &#x60;SUPPLY_NOT_BELONG_CONTRACTOR&#x60; — контрагент не соответствует поставке.    - &#x60;SUPPLY_NOT_BELONG_COMPANY&#x60; — компания не соответствует поставке.    - &#x60;SUPPLY_IS_EMPTY&#x60; — поставка без грузомест.    - &#x60;CARGOES_NOT_FOUND&#x60; — грузоместа не найдены.  | [optional] [default to undefined]

## Example

```typescript
import { V1CargoesLabelCreateErrors } from './api';

const instance: V1CargoesLabelCreateErrors = {
    error_reasons,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
