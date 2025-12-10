# SearchShipmentsRequest

Запрос информации об отгрузках.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateFrom** | **string** | Начальная дата для фильтрации по дате отгрузки (включительно).  Формат даты: &#x60;ДД-ММ-ГГГГ&#x60;.  | [default to undefined]
**dateTo** | **string** | Конечная дата для фильтрации по дате отгрузки (включительно).  Формат даты: &#x60;ДД-ММ-ГГГГ&#x60;.  | [default to undefined]
**statuses** | [**Set&lt;ShipmentStatusType&gt;**](ShipmentStatusType.md) | Список статусов отгрузок. | [optional] [default to undefined]
**orderIds** | **Set&lt;number&gt;** | Список идентификаторов заказов из отгрузок. | [optional] [default to undefined]
**cancelledOrders** | **boolean** | Возвращать ли отмененные заказы.  Значение по умолчанию: &#x60;true&#x60;. Если возвращать отмененные заказы не нужно, передайте значение &#x60;false&#x60;.  | [optional] [default to true]

## Example

```typescript
import { SearchShipmentsRequest } from './api';

const instance: SearchShipmentsRequest = {
    dateFrom,
    dateTo,
    statuses,
    orderIds,
    cancelledOrders,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
