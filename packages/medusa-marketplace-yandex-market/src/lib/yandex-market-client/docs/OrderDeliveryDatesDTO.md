# OrderDeliveryDatesDTO

Диапазон дат доставки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fromDate** | **string** | Формат даты: &#x60;ДД-ММ-ГГГГ&#x60;.  | [default to undefined]
**toDate** | **string** | Формат даты: &#x60;ДД-ММ-ГГГГ&#x60;.  | [optional] [default to undefined]
**fromTime** | **string** | Начало интервала времени доставки.  Передается только совместно с параметром &#x60;type&#x3D;DELIVERY&#x60;.  Формат времени: 24-часовой, &#x60;ЧЧ:ММ&#x60;. В качестве минут всегда должно быть указано &#x60;00&#x60; (исключение — &#x60;23:59&#x60;).  Минимальное значение: &#x60;00:00&#x60;.  | [optional] [default to undefined]
**toTime** | **string** | Конец интервала времени доставки.  Передается только совместно с параметром &#x60;type&#x3D;DELIVERY&#x60;.  Формат времени: 24-часовой, &#x60;ЧЧ:ММ&#x60;. В качестве минут всегда должно быть указано &#x60;00&#x60; (исключение — &#x60;23:59&#x60;).  Максимальное значение: &#x60;23:59&#x60;.  | [optional] [default to undefined]
**realDeliveryDate** | **string** | Формат даты: &#x60;ДД-ММ-ГГГГ&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { OrderDeliveryDatesDTO } from './api';

const instance: OrderDeliveryDatesDTO = {
    fromDate,
    toDate,
    fromTime,
    toTime,
    realDeliveryDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
