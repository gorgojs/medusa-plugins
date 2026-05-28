# OrdersStatsPriceDTO

Цена или скидки на товар.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**OrdersStatsPriceType**](OrdersStatsPriceType.md) |  | [optional] [default to undefined]
**costPerItem** | **number** | Цена или скидка на единицу товара в заказе.  Точность — два знака после запятой.  Включает НДС.  | [optional] [default to undefined]
**total** | **number** | Суммарная цена или скидка на все единицы товара в заказе.  Точность — два знака после запятой.  Включает НДС.  | [optional] [default to undefined]

## Example

```typescript
import { OrdersStatsPriceDTO } from './api';

const instance: OrdersStatsPriceDTO = {
    type,
    costPerItem,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
