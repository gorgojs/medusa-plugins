# GetOrdersStatsRequest

Запрос информации по заказам.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateFrom** | **string** | Начальная дата, когда заказ был сформирован.  Формат даты: &#x60;ГГГГ‑ММ‑ДД&#x60;.  Нельзя использовать вместе с параметрами &#x60;updateFrom&#x60; и &#x60;updateTo&#x60;.  | [optional] [default to undefined]
**dateTo** | **string** | Конечная дата, когда заказ был сформирован.  Формат даты: &#x60;ГГГГ‑ММ‑ДД&#x60;.  Нельзя использовать вместе с параметрами &#x60;updateFrom&#x60; и &#x60;updateTo&#x60;.  | [optional] [default to undefined]
**updateFrom** | **string** | Начальная дата периода, за который были изменения в заказе (например, статуса или информации о платежах).  Формат даты: &#x60;ГГГГ‑ММ‑ДД&#x60;.  Нельзя использовать вместе с параметрами &#x60;dateFrom&#x60; и &#x60;dateTo&#x60;.  | [optional] [default to undefined]
**updateTo** | **string** | Конечная дата периода, за который были изменения в заказе (например, статуса или информации о платежах).  Формат даты: &#x60;ГГГГ‑ММ‑ДД&#x60;.  Нельзя использовать вместе с параметрами &#x60;dateFrom&#x60; и &#x60;dateTo&#x60;.  | [optional] [default to undefined]
**orders** | **Set&lt;number&gt;** | Список идентификаторов заказов. | [optional] [default to undefined]
**statuses** | [**Set&lt;OrderStatsStatusType&gt;**](OrderStatsStatusType.md) | Список статусов заказов. | [optional] [default to undefined]
**hasCis** | **boolean** | Нужно ли вернуть только те заказы, в составе которых есть хотя бы один товар с кодом идентификации в системе [:no-translate[«Честный ЗНАК»]](https://честныйзнак.рф/) или [:no-translate[«ASL BELGISI»]](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]):  * &#x60;true&#x60; — да. * &#x60;false&#x60; — нет. Такие коды присваиваются товарам, которые подлежат маркировке и относятся к определенным категориям.  | [optional] [default to undefined]

## Example

```typescript
import { GetOrdersStatsRequest } from './api';

const instance: GetOrdersStatsRequest = {
    dateFrom,
    dateTo,
    updateFrom,
    updateTo,
    orders,
    statuses,
    hasCis,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
