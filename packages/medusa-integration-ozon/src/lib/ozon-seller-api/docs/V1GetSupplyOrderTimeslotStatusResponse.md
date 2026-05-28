# V1GetSupplyOrderTimeslotStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Array&lt;V1UpdateTimeslotError&gt;**](V1UpdateTimeslotError.md) | Возможные ошибки:    - &#x60;UNSPECIFIED&#x60; — статус не указан;   - &#x60;INVALID_ORDER_STATE&#x60; — неверный статус заказа;   - &#x60;INCOMPATIBLE_ORDER_FLOW&#x60; — неверный статус интервала поставки;   - &#x60;SET_TIMESLOT_DEADLINE_EXCEED&#x60; — заявка на поставку просрочена;   - &#x60;OUT_OF_ALLOWED_RANGE&#x60; — вы ввели некорректное значение интервала поставки;   - &#x60;ORDER_NOT_BELONG_CONTRACTOR&#x60; — заявка создана другим юридическом лицом, работать с ней не получится;   - &#x60;ORDER_NOT_BELONG_COMPANY&#x60; — заявка не принадлежит вашему кабинету, работать с ней не получится;   - &#x60;UPDATE_TIMESLOT_ERROR_PICKUP_ORDER_LIMIT_EXCEEDED&#x60; — превышен суточный лимит на создание заявок на поставку курьером.  | [optional] [default to undefined]
**status** | [**V1GetSupplyOrderTimeslotStatusResponseStatus**](V1GetSupplyOrderTimeslotStatusResponseStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1GetSupplyOrderTimeslotStatusResponse } from './api';

const instance: V1GetSupplyOrderTimeslotStatusResponse = {
    errors,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
