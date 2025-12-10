# OrdersStatsDetailsDTO

Информация об удалении товара из заказа.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemStatus** | [**OrdersStatsItemStatusType**](OrdersStatsItemStatusType.md) |  | [optional] [default to undefined]
**itemCount** | **number** | Количество товара со статусом, указанном в параметре &#x60;itemStatus&#x60;. | [optional] [default to undefined]
**updateDate** | **string** | Дата, когда товар получил статус, указанный в параметре &#x60;itemStatus&#x60;.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [optional] [default to undefined]
**stockType** | [**OrdersStatsStockType**](OrdersStatsStockType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrdersStatsDetailsDTO } from './api';

const instance: OrdersStatsDetailsDTO = {
    itemStatus,
    itemCount,
    updateDate,
    stockType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
