# CalculatorRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **any** | Автоматически передокладывается в places[0].height | [optional] [default to undefined]
**length** | **any** | Автоматически передокладывается в places[0].length | [optional] [default to undefined]
**width** | **any** | Автоматически передокладывается в places[0].width | [optional] [default to undefined]
**weight** | **any** | Автоматически передокладывается в places[0].weight | [optional] [default to undefined]
**to** | [**CalculatorDirection**](CalculatorDirection.md) |  | [default to undefined]
**from** | [**CalculatorDirection**](CalculatorDirection.md) |  | [default to undefined]
**places** | [**Array&lt;CalculatorPlace&gt;**](CalculatorPlace.md) | Места. Калькуляция многоместных заказов.. В случае когда СД не поддерживает многоместную калькуляцию, вес суммируется, а габариты всех коробок складываются в высоту и берется макс. длина и ширина, то есть коробки ставятся друг на друга пирамидой и передаются в СД для расчета | [default to undefined]
**pickupDate** | **string** | Дата приёма груза (не обязательно, по умолчания берется текущая дата) | [optional] [default to undefined]
**pickupTypes** | **Array&lt;number&gt;** | [Типы забора /lists/pickupTypes](#/lists/pickupTypes). Если не переданы, то рассчитываются тарифы по всем типам (Забор груза курьером, Сдача груза на ПВЗ) | [optional] [default to undefined]
**deliveryTypes** | **Array&lt;number&gt;** | [Типы доставки /lists/deliveryTypes](#/lists/deliveryTypes). Если не переданы, то рассчитываются тарифы по всем типам (Доставка Курьером, Самовывоз из ПВЗ) | [optional] [default to undefined]
**providerKeys** | **Array&lt;string&gt;** | Массив ключей служб доставки. Если не передавать, то рассчитает тарифы всех подключенных к аккаунту служб доставки | [optional] [default to undefined]
**assessedCost** | **number** | Оценочная стоимость (в рублях) | [optional] [default to 0]
**codCost** | **number** | Сумма наложенного платежа | [optional] [default to 0]
**includeFees** | **boolean** | Суммировать ли к итоговой стоимости все сборы СД (страховка и комиссия за НП) | [optional] [default to false]
**timeout** | **number** | Время ожидания ответа (мс.) от провайдера, результаты по провайдерам, которые не успели в указанное время выдаваться не будут | [optional] [default to 10000]
**skipTariffRules** | **boolean** | Пропускает применение правил редактора тарифов. Полезно, если надо проверить корректность применения правил | [optional] [default to false]
**extraParams** | **{ [key: string]: string; }** | Дополнительные параметры. Например. можно рассчитать DPD по какому-то определенному подключению (договору), передав dpd.providerConnectId &#x3D; id из [/connections/getListConnections](#/connections/getListConnections)  Передавать как {\&quot;&lt;ключ\\_службы\\_доставки&gt;.&lt;код_параметра&gt;\&quot;: \&quot;&lt;значение&gt;\&quot;} | [optional] [default to undefined]
**promoCode** | **string** | Промокод. В редакторе тарифов можно указать промокод, по которому можно изменять тарифы, например, скидку на стоимость доставки. | [optional] [default to undefined]
**customCode** | **string** | Пользовательское поле. В это поле можно передать, например, название сайта и по нему строить правила в редакторе сайтов. | [optional] [default to undefined]
**tariffIds** | **Array&lt;number&gt;** | Тарифы, для которых необходимо произвести расчёт | [optional] [default to undefined]
**pointInId** | **number** | Идентификатор ПВЗ от которого вести расчет | [optional] [default to undefined]
**pointOutId** | **number** | Идентификатор ПВЗ до которого вести расчет | [optional] [default to undefined]

## Example

```typescript
import { CalculatorRequest } from './api';

const instance: CalculatorRequest = {
    height,
    length,
    width,
    weight,
    to,
    from,
    places,
    pickupDate,
    pickupTypes,
    deliveryTypes,
    providerKeys,
    assessedCost,
    codCost,
    includeFees,
    timeout,
    skipTariffRules,
    extraParams,
    promoCode,
    customCode,
    tariffIds,
    pointInId,
    pointOutId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
