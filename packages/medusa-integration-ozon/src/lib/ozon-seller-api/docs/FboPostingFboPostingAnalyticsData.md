# FboPostingFboPostingAnalyticsData

Данные аналитики.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **string** | Город доставки. Только для продавцов из СНГ. | [optional] [default to undefined]
**delivery_type** | **string** | Способ доставки. | [optional] [default to undefined]
**is_legal** | **boolean** | Получатель юридическое лицо:   - &#x60;true&#x60; — юридическое лицо,   - &#x60;false&#x60; — физическое лицо.  | [optional] [default to undefined]
**is_premium** | **boolean** | Наличие подписки Premium. | [optional] [default to undefined]
**payment_type_group_name** | **string** | Способ оплаты:  - &#x60;картой онлайн&#x60;, - &#x60;Ozon Карта&#x60;, - &#x60;автосписание с Ozon Карты при выдаче&#x60;, - &#x60;сохранённой картой при получении&#x60;, - &#x60;Система Быстрых Платежей&#x60;,  - &#x60;Ozon Рассрочка&#x60;,  - &#x60;оплата на расчётный счёт&#x60;, - &#x60;SberPay&#x60;, - &#x60;предоплата на стороне внешнего продавца&#x60;.  | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]
**warehouse_name** | **string** | Название склада отправки заказа. | [optional] [default to undefined]
**client_delivery_date_begin** | **string** | Дата и время начала доставки. | [optional] [default to undefined]
**client_delivery_date_end** | **string** | Ожидаемая дата, до которой заказ будет доставлен. | [optional] [default to undefined]

## Example

```typescript
import { FboPostingFboPostingAnalyticsData } from './api';

const instance: FboPostingFboPostingAnalyticsData = {
    city,
    delivery_type,
    is_legal,
    is_premium,
    payment_type_group_name,
    warehouse_id,
    warehouse_name,
    client_delivery_date_begin,
    client_delivery_date_end,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
