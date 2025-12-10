# OrdersStatsPaymentDTO

Информация о денежных переводах по заказу.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор денежного перевода. | [optional] [default to undefined]
**date** | **string** | Дата денежного перевода.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [optional] [default to undefined]
**type** | [**OrdersStatsPaymentType**](OrdersStatsPaymentType.md) |  | [optional] [default to undefined]
**source** | [**OrdersStatsPaymentSourceType**](OrdersStatsPaymentSourceType.md) |  | [optional] [default to undefined]
**total** | **number** | Сумма денежного перевода.  Точность — два знака после запятой.  | [optional] [default to undefined]
**paymentOrder** | [**OrdersStatsPaymentOrderDTO**](OrdersStatsPaymentOrderDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrdersStatsPaymentDTO } from './api';

const instance: OrdersStatsPaymentDTO = {
    id,
    date,
    type,
    source,
    total,
    paymentOrder,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
