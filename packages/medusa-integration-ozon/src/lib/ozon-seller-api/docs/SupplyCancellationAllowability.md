# SupplyCancellationAllowability

Возможность отмены.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_not_set_reasons** | [**Array&lt;CancellationAllowabilityCanNotCancelSupplyReasonEnum&gt;**](CancellationAllowabilityCanNotCancelSupplyReasonEnum.md) | Причина, почему нельзя отменить поставку: - &#x60;UNSPECIFIED&#x60; — не определена; - &#x60;INVALID_SUPPLY_STATE&#x60; — некорректный статус поставки; - &#x60;SUPPLY_IS_VIRTUAL&#x60; — поставка виртуальная; - &#x60;SUPPLY_HAS_ACTIVE_UTD&#x60; — у поставки есть активный УПД; - &#x60;SUPPLY_DOES_NOT_BELONG_TO_COMPANY&#x60; — поставка не принадлежит продавцу; - &#x60;PICKUP_SUPPLY_IS_LOCKED_DOWN&#x60; — заблокировано редактирование поставки; - &#x60;UNDEFINED&#x60; — неизвестная.  | [optional] [default to undefined]
**can_set** | **boolean** | &#x60;true&#x60;, если поставку можно отменить.  | [optional] [default to undefined]

## Example

```typescript
import { SupplyCancellationAllowability } from './api';

const instance: SupplyCancellationAllowability = {
    can_not_set_reasons,
    can_set,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
