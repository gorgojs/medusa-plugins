# BusinessOrderDeliveryDatesDTO

Диапазон дат доставки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fromDate** | **string** | Ближайшая дата доставки.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [default to undefined]
**toDate** | **string** | Самая поздняя дата доставки.  Если &#x60;toDate&#x60; не указан, считается дата в параметре &#x60;fromDate&#x60;.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [optional] [default to undefined]
**fromTime** | **string** | Начало интервала времени доставки.  Передается только вместе с параметром &#x60;type&#x3D;DELIVERY&#x60;.  Формат времени: 24-часовой, &#x60;ЧЧ:ММ&#x60;. Вместо &#x60;ММ&#x60; всегда указывайте &#x60;00&#x60; (исключение — &#x60;23:59&#x60;).  Минимальное значение: &#x60;00:00&#x60;.  | [optional] [default to undefined]
**toTime** | **string** | Конец интервала времени доставки.  Передается только вместе с параметром &#x60;type&#x3D;DELIVERY&#x60;.  Формат времени: 24-часовой, &#x60;ЧЧ:ММ&#x60;. Вместо &#x60;ММ&#x60; всегда указывайте &#x60;00&#x60; (исключение — &#x60;23:59&#x60;).  Максимальное значение: &#x60;23:59&#x60;.  | [optional] [default to undefined]
**realDeliveryDate** | **string** | Дата, когда товар доставлен до пункта выдачи заказа (в случае самовывоза) или до покупателя (если заказ доставляет курьер).  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { BusinessOrderDeliveryDatesDTO } from './api';

const instance: BusinessOrderDeliveryDatesDTO = {
    fromDate,
    toDate,
    fromTime,
    toTime,
    realDeliveryDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
