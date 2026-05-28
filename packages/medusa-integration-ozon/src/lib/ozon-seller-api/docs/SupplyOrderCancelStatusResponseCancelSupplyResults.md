# SupplyOrderCancelStatusResponseCancelSupplyResults


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_reasons** | [**Array&lt;CancelSupplyResultsCancelSupplyError&gt;**](CancelSupplyResultsCancelSupplyError.md) | Причина, по которой не удалось отменить поставки:   - &#x60;INVALID_SUPPLY_STATE&#x60; — неверный статус поставки.   - &#x60;SUPPLY_DOES_NOT_BELONG_TO_CONTRACTOR&#x60; — поставка не принадлежит юридическому лицу.   - &#x60;SUPPLY_DOES_NOT_BELONG_TO_COMPANY&#x60; — поставка не принадлежит продавцу.   - &#x60;SUPPLY_DOES_NOT_BELONG_TO_ORDER&#x60; — поставка не принадлежит заявке на поставку.   - &#x60;SUPPLY_BELONGS_TO_VIRTUAL_ORDER&#x60; — поставка принадлежит виртуальной заявке на поставку.   - &#x60;OTHER_ASYNCHRONOUS_OPERATION_IN_PROGRESS&#x60; — поставка в процессе отмены.  | [optional] [default to undefined]
**is_supply_cancelled** | **boolean** | &#x60;true&#x60;, если поставка отменена.  | [optional] [default to undefined]
**supply_id** | **number** | Идентификатор поставки. | [optional] [default to undefined]

## Example

```typescript
import { SupplyOrderCancelStatusResponseCancelSupplyResults } from './api';

const instance: SupplyOrderCancelStatusResponseCancelSupplyResults = {
    error_reasons,
    is_supply_cancelled,
    supply_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
