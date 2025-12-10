# CalculatorToDoorResultTariffsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tariffProviderId** | **string** | ID тарифа в службе доставки | [optional] [default to undefined]
**tariffId** | **number** | ID тарифа в ApiShip | [optional] [default to undefined]
**tariffName** | **string** | Название тарифа | [optional] [default to undefined]
**pickupTypes** | **Array&lt;number&gt;** | Типы забора (см. /lists/pickupTypes), если не переданы берутся оба типа | [optional] [default to undefined]
**deliveryTypes** | **Array&lt;number&gt;** | Типы доставки (см. /lists/deliveryTypes), если не переданы берутся оба типа | [optional] [default to undefined]
**deliveryCost** | **number** | Стоимость тарифа | [optional] [default to undefined]
**deliveryCostOriginal** | **number** | Стоимость тарифа до применения правил | [optional] [default to undefined]
**feesIncluded** | **boolean** | Были ли включены сборы СД в общую стоимость (deliveryCost). NULL если невозможно определить | [optional] [default to undefined]
**insuranceFee** | **number** | Сумма страховых сборов. NULL если невозможно определить | [optional] [default to undefined]
**cashServiceFee** | **number** | Сумма сборов за наложенный платёж. NULL если невозможно определить | [optional] [default to undefined]
**daysMax** | **number** | Максимальное кол-во дней доставки | [optional] [default to undefined]
**daysMin** | **number** | Минимальное кол-во дней доставки | [optional] [default to undefined]
**calendarDaysMax** | **number** | Максимальное кол-во календарных дней доставки | [optional] [default to undefined]
**calendarDaysMin** | **number** | Минимальное кол-во календарных дней доставки | [optional] [default to undefined]
**workDaysMax** | **number** | Максимальное кол-во рабочих дней доставки | [optional] [default to undefined]
**workDaysMin** | **number** | Минимальное кол-во рабочих дней доставки | [optional] [default to undefined]

## Example

```typescript
import { CalculatorToDoorResultTariffsInner } from './api';

const instance: CalculatorToDoorResultTariffsInner = {
    tariffProviderId,
    tariffId,
    tariffName,
    pickupTypes,
    deliveryTypes,
    deliveryCost,
    deliveryCostOriginal,
    feesIncluded,
    insuranceFee,
    cashServiceFee,
    daysMax,
    daysMin,
    calendarDaysMax,
    calendarDaysMin,
    workDaysMax,
    workDaysMin,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
