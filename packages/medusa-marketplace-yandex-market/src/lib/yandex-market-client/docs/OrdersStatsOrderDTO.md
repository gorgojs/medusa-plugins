# OrdersStatsOrderDTO

Информация о заказе.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор заказа. | [optional] [default to undefined]
**creationDate** | **string** | Дата создания заказа.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [optional] [default to undefined]
**statusUpdateDate** | **string** | Дата и время, когда статус заказа был изменен в последний раз.  Формат даты и времени: ISO 8601. Например, &#x60;2017-11-21T00:00:00&#x60;. Часовой пояс — UTC+03:00 (Москва).  | [optional] [default to undefined]
**status** | [**OrderStatsStatusType**](OrderStatsStatusType.md) |  | [optional] [default to undefined]
**partnerOrderId** | **string** | Идентификатор заказа в информационной системе магазина. | [optional] [default to undefined]
**paymentType** | [**OrdersStatsOrderPaymentType**](OrdersStatsOrderPaymentType.md) |  | [optional] [default to undefined]
**fake** | **boolean** | Тип заказа:  * &#x60;false&#x60; — настоящий заказ покупателя.  * &#x60;true&#x60; — [тестовый](../../concepts/sandbox.md) заказ Маркета.  | [optional] [default to undefined]
**deliveryRegion** | [**OrdersStatsDeliveryRegionDTO**](OrdersStatsDeliveryRegionDTO.md) |  | [optional] [default to undefined]
**items** | [**Array&lt;OrdersStatsItemDTO&gt;**](OrdersStatsItemDTO.md) | Список товаров в заказе после возможных изменений.  Информация о доставке заказа добавляется отдельным элементом в массиве &#x60;items&#x60;— параметр &#x60;offerName&#x60; со значением &#x60;Доставка&#x60;.  | [default to undefined]
**initialItems** | [**Array&lt;OrdersStatsItemDTO&gt;**](OrdersStatsItemDTO.md) | Список товаров в заказе.  Возвращается, только если было изменение количества товаров.  | [optional] [default to undefined]
**payments** | [**Array&lt;OrdersStatsPaymentDTO&gt;**](OrdersStatsPaymentDTO.md) | Информация о расчетах по заказу.  Возвращается пустым, если заказ:   * только начали обрабатывать (даже если он оплачен);   * отменили до момента передачи в доставку.  Окончательная информация о расчетах по заказу вернется после его финальной обработки (например, после перехода в статус &#x60;DELIVERED&#x60;).  | [default to undefined]
**commissions** | [**Array&lt;OrdersStatsCommissionDTO&gt;**](OrdersStatsCommissionDTO.md) | Информация о стоимости услуг. | [default to undefined]
**subsidies** | [**Array&lt;OrdersStatsSubsidyDTO&gt;**](OrdersStatsSubsidyDTO.md) | Начисление баллов, которые используются для уменьшения стоимости размещения, и их списание в случае невыкупа или возврата. | [optional] [default to undefined]
**currency** | [**CurrencyType**](CurrencyType.md) |  | [default to undefined]

## Example

```typescript
import { OrdersStatsOrderDTO } from './api';

const instance: OrdersStatsOrderDTO = {
    id,
    creationDate,
    statusUpdateDate,
    status,
    partnerOrderId,
    paymentType,
    fake,
    deliveryRegion,
    items,
    initialItems,
    payments,
    commissions,
    subsidies,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
