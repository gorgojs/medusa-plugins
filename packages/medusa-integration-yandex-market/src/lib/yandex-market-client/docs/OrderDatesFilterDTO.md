# OrderDatesFilterDTO

Фильтр по датам заказов.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creationDateFrom** | **string** | Начальная дата для фильтрации заказов по дате оформления.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  Между начальной и конечной датой (параметр &#x60;creationDateTo&#x60;) должно быть не больше 30 дней.  Значение по умолчанию: 30 дней назад от текущей даты.  Начальная дата включается в интервал для фильтрации.  | [optional] [default to undefined]
**creationDateTo** | **string** | Конечная дата для фильтрации заказов по дате оформления.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  Между начальной (параметр &#x60;creationDateFrom&#x60;) и конечной датой должно быть не больше 30 дней.  Значение по умолчанию: текущая дата.  Если промежуток времени между &#x60;creationDateTo&#x60; и &#x60;creationDateFrom&#x60; меньше суток, то &#x60;creationDateTo&#x60; равен &#x60;creationDateFrom&#x60; + сутки.  Конечная дата не включается в интервал для фильтрации.  | [optional] [default to undefined]
**shipmentDateFrom** | **string** | Начальная дата для фильтрации заказов по дате отгрузки в службу доставки (параметр &#x60;shipmentDate&#x60;).  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  Между начальной и конечной датой (параметр &#x60;shipmentDateTo&#x60;) должно быть не больше 30 дней.  Начальная дата включается в интервал для фильтрации.  | [optional] [default to undefined]
**shipmentDateTo** | **string** | Конечная дата для фильтрации заказов по дате отгрузки в службу доставки (параметр &#x60;shipmentDate&#x60;).  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  Между начальной (параметр &#x60;shipmentDateFrom&#x60;) и конечной датой должно быть не больше 30 дней.  Если промежуток времени между &#x60;shipmentDateTo&#x60; и &#x60;shipmentDateFrom&#x60; меньше суток, то &#x60;shipmentDateTo&#x60; равен &#x60;shipmentDateFrom&#x60; + сутки.  Конечная дата не включается в интервал для фильтрации.  | [optional] [default to undefined]
**updateDateFrom** | **string** | Начальная дата обновления заказа (ISO 8601). | [optional] [default to undefined]
**updateDateTo** | **string** | Конечная дата обновления заказа (ISO 8601). | [optional] [default to undefined]

## Example

```typescript
import { OrderDatesFilterDTO } from './api';

const instance: OrderDatesFilterDTO = {
    creationDateFrom,
    creationDateTo,
    shipmentDateFrom,
    shipmentDateTo,
    updateDateFrom,
    updateDateTo,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
