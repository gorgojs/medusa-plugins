# GetReturnsListResponseStorage

Информация о хранении.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sum** | [**SellerReturnsv1MoneyStorage**](SellerReturnsv1MoneyStorage.md) |  | [optional] [default to undefined]
**tariffication_first_date** | **string** | Первый день тарификации за хранение. | [optional] [default to undefined]
**tariffication_start_date** | **string** | Дата старта тарификации за хранение. | [optional] [default to undefined]
**arrived_moment** | **string** | Дата, когда возврат был готов к выдаче. | [optional] [default to undefined]
**days** | **number** | Сколько дней возврат ожидает выдачи продавцу. | [optional] [default to undefined]
**utilization_sum** | [**SellerReturnsv1MoneyUtilization**](SellerReturnsv1MoneyUtilization.md) |  | [optional] [default to undefined]
**utilization_forecast_date** | **string** | Планируемая дата утилизации. | [optional] [default to undefined]

## Example

```typescript
import { GetReturnsListResponseStorage } from './api';

const instance: GetReturnsListResponseStorage = {
    sum,
    tariffication_first_date,
    tariffication_start_date,
    arrived_moment,
    days,
    utilization_sum,
    utilization_forecast_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
