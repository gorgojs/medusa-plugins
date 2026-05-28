# PostingPostingAnalyticsData

Данные аналитики.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **string** | Город доставки. Только для отправлений rFBS и продавцов из СНГ. | [optional] [default to undefined]
**delivery_type** | **string** | Способ доставки. | [optional] [default to undefined]
**is_legal** | **boolean** | Признак, что получатель юридическое лицо: - &#x60;true&#x60; — юридическое лицо, - &#x60;false&#x60; — физическое лицо.  | [optional] [default to undefined]
**is_premium** | **boolean** | Наличие подписки Premium. | [optional] [default to undefined]
**payment_type_group_name** | **string** | Способ оплаты: - &#x60;картой онлайн&#x60;, - &#x60;Ozon Карта&#x60;, - &#x60;автосписание с Ozon Карты при выдаче&#x60;, - &#x60;сохранённой картой при получении&#x60;, - &#x60;Система Быстрых Платежей&#x60;, - &#x60;Ozon Рассрочка&#x60;, - &#x60;оплата на расчётный счёт&#x60;, - &#x60;SberPay&#x60;.  | [optional] [default to undefined]
**region** | **string** | Регион доставки. Только для отправлений rFBS. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]
**warehouse_name** | **string** | Название склада. | [optional] [default to undefined]

## Example

```typescript
import { PostingPostingAnalyticsData } from './api';

const instance: PostingPostingAnalyticsData = {
    city,
    delivery_type,
    is_legal,
    is_premium,
    payment_type_group_name,
    region,
    warehouse_id,
    warehouse_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
