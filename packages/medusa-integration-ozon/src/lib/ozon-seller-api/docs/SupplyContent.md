# SupplyContent

Товарный состав поставки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_id** | **string** | Идентификатор товарного состава. | [optional] [default to undefined]
**can_not_set_reasons** | [**Array&lt;ContentCanNotEditSupplyContentReasonEnum&gt;**](ContentCanNotEditSupplyContentReasonEnum.md) | Причина, почему нельзя изменить товарный состав поставки: - &#x60;UNSPECIFIED&#x60; — не определена; - &#x60;INCORRECT_SUPPLY_STATE&#x60; — некорректный статус поставки; - &#x60;DEADLINE&#x60; — поставка просрочена; - &#x60;UTD_IS_UPLOADED&#x60; — УПД загружен; - &#x60;STORAGE_WAREHOUSE_IS_NOT_WMS&#x60; — некорректный склад хранения; - &#x60;CONTRACT_IS_NOT_VALID_FOR_HANDLING_ORDERS&#x60; — недействительный договор для обработки заявок на поставку; - &#x60;SUPPLY_IS_VIRTUAL&#x60; — поставка виртуальная; - &#x60;SUPPLY_DOES_NOT_BELONG_TO_COMPANY&#x60; — поставка не принадлежит продавцу; - &#x60;UNDEFINED&#x60; — неизвестная.  | [optional] [default to undefined]
**can_set** | **boolean** | &#x60;true&#x60;, если можно изменить товарный состав поставки.  | [optional] [default to undefined]

## Example

```typescript
import { SupplyContent } from './api';

const instance: SupplyContent = {
    bundle_id,
    can_not_set_reasons,
    can_set,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
