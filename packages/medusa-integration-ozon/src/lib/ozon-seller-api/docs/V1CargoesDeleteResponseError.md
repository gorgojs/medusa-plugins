# V1CargoesDeleteResponseError

Список ошибок, которые возникли при удалении грузомест.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cargo_error_reasons** | [**Array&lt;V1CargoesDeleteResponseErrorCargoErrorReason&gt;**](V1CargoesDeleteResponseErrorCargoErrorReason.md) | Ошибки при удалении грузомест. | [optional] [default to undefined]
**supply_error_reasons** | [**Array&lt;V1CargoesDeleteResponseErrorSupplyErrorReasonEnum&gt;**](V1CargoesDeleteResponseErrorSupplyErrorReasonEnum.md) | Список ошибок поставки: - &#x60;SUPPLY_NOT_FOUND&#x60; — поставка не найдена, - &#x60;CANT_DELETE_ALL_CARGOES&#x60; — нельзя удалять все грузоместа, - &#x60;SUPPLY_DOES_NOT_BELONG_TO_THE_CONTRACTOR&#x60; — не принадлежит вашему юридическому лицу, - &#x60;SUPPLY_DOES_NOT_BELONG_TO_THE_COMPANY&#x60; — не принадлежит вашему кабинету, - &#x60;SUPPLY_CARGOES_IS_FINALIZED&#x60; — грузоместа поставки нельзя редактировать, - &#x60;SUPPLY_CARGOES_LOCKED&#x60; — другой процесс блокирует редактирование грузомест поставки, - &#x60;OPERATION_NOT_FOUND&#x60; — операция не найдена.  | [optional] [default to undefined]

## Example

```typescript
import { V1CargoesDeleteResponseError } from './api';

const instance: V1CargoesDeleteResponseError = {
    cargo_error_reasons,
    supply_error_reasons,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
