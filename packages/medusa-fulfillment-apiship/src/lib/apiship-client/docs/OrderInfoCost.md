# OrderInfoCost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assessedCost** | **number** | Оценочная стоимость / сумма страховки (в рублях). Совпадает с суммой оценочной стоимости по всем товарам(places[].items[].assessedCost) | [default to undefined]
**deliveryCost** | **number** | Стоимость доставки с учетом НДС (в рублях) | [optional] [default to undefined]
**deliveryCostVat** | **number** | Процентная ставка НДС: - \&#39;-1\&#39; - Без НДС; - \&#39;0\&#39; - НДС 0%; - \&#39;10\&#39; - НДС 10%; - \&#39;20\&#39; - НДС 20%; - \&#39;22\&#39; - НДС 22%; - \&#39;5\&#39; - НДС 5%; - \&#39;7\&#39; - НДС 7%;  | [optional] [default to DeliveryCostVatEnum_NUMBER_MINUS_1]
**codCost** | **number** | Сумма наложенного платежа с учетом НДС (в рублях). Совпадает с суммой наложенного платежа по всем товарам(places[].items[].cost) + стоимостью доставки(cost.deliveryCost) | [default to undefined]
**isDeliveryPayedByRecipient** | **boolean** | Флаг для указания стороны, которая платит за услуги доставки (0-отправитель, 1-получатель) | [optional] [default to undefined]
**paymentMethod** | **number** | Способ оплаты заказа: - 1 - Наличные; - 2 - Карта; - 3 - Смешанная оплата(наличные и карта) - 4 - Безналичная оплата (по счету) | [optional] [default to undefined]
**deliveryCostThresholds** | [**Array&lt;DeliveryCostThreshold&gt;**](DeliveryCostThreshold.md) | Пороги стоимости доставки, используются для динамической стоимости доставки в случае частичного выкупа (Поддержка есть только у СДЭК, Logsis, Lpost) | [optional] [default to undefined]
**usedPaymentType** | **number** | Каким способом получатель оплатил заказ (1-наличными, 2-кредитной картой) | [optional] [default to undefined]

## Example

```typescript
import { OrderInfoCost } from './api';

const instance: OrderInfoCost = {
    assessedCost,
    deliveryCost,
    deliveryCostVat,
    codCost,
    isDeliveryPayedByRecipient,
    paymentMethod,
    deliveryCostThresholds,
    usedPaymentType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
