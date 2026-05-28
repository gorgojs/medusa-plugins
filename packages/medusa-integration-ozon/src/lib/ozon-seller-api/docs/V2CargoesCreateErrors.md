# V2CargoesCreateErrors

Ошибки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_reasons** | [**Array&lt;CargoesCreateErrorsReasonEnum&gt;**](CargoesCreateErrorsReasonEnum.md) | Причина ошибки:   - &#x60;INVALID_STATE&#x60; — недопустимое состояние поставки;   - &#x60;VALIDATION_FAILED&#x60; — ошибки валидации;   - &#x60;WAREHOUSE_LIMITS_EXCEED&#x60; — превышены лимиты склада;   - &#x60;SUPPLY_NOT_BELONG_CONTRACTOR&#x60; — поставка не относится к указанному контрагенту;   - &#x60;SUPPLY_NOT_BELONG_COMPANY&#x60; — поставка не относится к указанной компании;   - &#x60;IS_FINALIZED&#x60; — редактирование поставки недоступно;   - &#x60;SKU_DISTRIBUTION_DISABLED&#x60; — распределение состава недоступно;   - &#x60;SUPPLY_IS_NOT_EMPTY&#x60; — поставка содержит распределение состава;   - &#x60;OPERATION_NOT_FOUND&#x60; — операция не найдена;   - &#x60;OPERATION_FAILED&#x60; — ошибка при обработке операции.  | [optional] [default to undefined]
**items_validation** | [**Array&lt;CargoesCreateV2ErrorsItemValidation&gt;**](CargoesCreateV2ErrorsItemValidation.md) | Ошибки валидации. | [optional] [default to undefined]

## Example

```typescript
import { V2CargoesCreateErrors } from './api';

const instance: V2CargoesCreateErrors = {
    error_reasons,
    items_validation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
