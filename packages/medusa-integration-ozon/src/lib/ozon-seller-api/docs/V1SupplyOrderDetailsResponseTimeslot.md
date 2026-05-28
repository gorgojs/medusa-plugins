# V1SupplyOrderDetailsResponseTimeslot

Информация о таймслоте.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_not_set_reasons** | [**Array&lt;TimeslotCanNotSetTimeslotReasonEnum&gt;**](TimeslotCanNotSetTimeslotReasonEnum.md) | Причина, почему нельзя выбрать интервал поставки: - &#x60;UNSPECIFIED&#x60; — не определена; - &#x60;INVALID_ORDER_STATE&#x60; — нельзя установить таймслот в заявке с текущим статусом; - &#x60;ORDER_IS_VIRTUAL&#x60; — заявка на поставку виртуальная; - &#x60;SET_TIMESLOT_DEADLINE_EXCEED&#x60; — время установки таймслота истекло; - &#x60;ORDER_DOES_NOT_BELONG_TO_COMPANY&#x60; — заявка на поставку не принадлежит продавцу; - &#x60;UNDEFINED&#x60; — неизвестная.  | [optional] [default to undefined]
**can_set** | **boolean** | &#x60;true&#x60;, если можно изменить интервал поставки.  | [optional] [default to undefined]
**value** | [**SupplyOrderDetailsResponseTimeslotValue**](SupplyOrderDetailsResponseTimeslotValue.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1SupplyOrderDetailsResponseTimeslot } from './api';

const instance: V1SupplyOrderDetailsResponseTimeslot = {
    can_not_set_reasons,
    can_set,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
