# OrderStatusChangeDeliveryDatesDTO

Диапазон дат доставки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**realDeliveryDate** | **string** | **Только для модели DBS**  Фактическая дата доставки. &lt;br&gt;&lt;br&gt; Когда передавать параметр &#x60;realDeliveryDate&#x60;:  * Не передавайте параметр, если:   * переводите заказ в любой статус, кроме &#x60;PICKUP&#x60; или &#x60;DELIVERED&#x60;;   * меняете статус заказа на &#x60;PICKUP&#x60; или &#x60;DELIVERED&#x60; в день доставки — будет указана дата выполнения запроса. * Передавайте дату доставки, если переводите заказ в статус &#x60;PICKUP&#x60; или &#x60;DELIVERED&#x60; не в день доставки. Нельзя указывать дату доставки в будущем.    {% note warning \&quot;Передача статуса после установленного срока снижает индекс качества\&quot; %}    О сроках читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/quality/tech#dbs).    {% endnote %}      Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { OrderStatusChangeDeliveryDatesDTO } from './api';

const instance: OrderStatusChangeDeliveryDatesDTO = {
    realDeliveryDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
