# CalculatorIntervalsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**to** | [**CalculatorDirection**](CalculatorDirection.md) |  | [default to undefined]
**from** | [**CalculatorDirection**](CalculatorDirection.md) |  | [default to undefined]
**codCost** | **number** | Сумма наложенного платежа | [optional] [default to 0]
**pickupDate** | **string** | Дата приёма груза | [optional] [default to undefined]
**deliveryDate** | **string** | Дата доставки груза | [optional] [default to undefined]
**pickupTypes** | **Array&lt;number&gt;** | [Типы забора /lists/pickupTypes](#/lists/pickupTypes). Если не переданы, то рассчитываются тарифы по всем типам (Забор груза курьером, Сдача груза на ПВЗ) | [optional] [default to undefined]
**providerKeys** | **Array&lt;string&gt;** | Массив ключей служб доставки. Если не передавать, то рассчитает тарифы всех подключенных к аккаунту служб доставки | [optional] [default to undefined]
**extraParams** | **{ [key: string]: string; }** | Дополнительные параметры. Например. можно рассчитать DPD по какому-то определенному подключению (договору), передав dpd.providerConnectId &#x3D; id из [/connections/getListConnections](#/connections/getListConnections)  Передавать как {\&quot;&lt;ключ\\_службы\\_доставки&gt;.&lt;код_параметра&gt;\&quot;: \&quot;&lt;значение&gt;\&quot;} | [optional] [default to undefined]
**tariffIds** | **Array&lt;number&gt;** | Тарифы, для которых необходимо произвести расчёт | [optional] [default to undefined]

## Example

```typescript
import { CalculatorIntervalsRequest } from './api';

const instance: CalculatorIntervalsRequest = {
    to,
    from,
    codCost,
    pickupDate,
    deliveryDate,
    pickupTypes,
    providerKeys,
    extraParams,
    tariffIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
