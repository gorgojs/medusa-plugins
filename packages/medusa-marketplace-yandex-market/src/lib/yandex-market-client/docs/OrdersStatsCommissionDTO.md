# OrdersStatsCommissionDTO

Информация о стоимости услуг.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**OrdersStatsCommissionType**](OrdersStatsCommissionType.md) |  | [optional] [default to undefined]
**actual** | **number** | Сумма, которая была выставлена в момент создания заказа и которую нужно оплатить. Точность — два знака после запятой.  | [optional] [default to undefined]

## Example

```typescript
import { OrdersStatsCommissionDTO } from './api';

const instance: OrdersStatsCommissionDTO = {
    type,
    actual,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
