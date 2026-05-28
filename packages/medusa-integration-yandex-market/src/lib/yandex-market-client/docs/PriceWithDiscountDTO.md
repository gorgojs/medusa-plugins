# PriceWithDiscountDTO

Цена с указанием скидки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **number** | Цена товара. | [default to undefined]
**currencyId** | [**CurrencyType**](CurrencyType.md) |  | [default to undefined]
**discountBase** | **number** | Зачеркнутая цена.  Число должно быть целым. Вы можете указать цену со скидкой от 5 до 99%.  Передавайте этот параметр при каждом обновлении цены, если предоставляете скидку на товар.  | [optional] [default to undefined]

## Example

```typescript
import { PriceWithDiscountDTO } from './api';

const instance: PriceWithDiscountDTO = {
    value,
    currencyId,
    discountBase,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
